import React, {
  ChangeEvent,
  KeyboardEvent,
  useCallback,
  useState,
} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';

import { Search, StyledInputBase, StyledSearchIconWrapper } from './styles';

function SearchBar() {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  }, []);

  const handleSearch = useCallback(
    (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
        if (Number.isInteger(Number(query))) {
          navigate(`/search?maSV=${query}`);
          return;
        }

        navigate(`/search?tenSV=${query}`);
      }
    },
    [navigate, query]
  );

  return (
    <Search>
      <StyledSearchIconWrapper>
        <SearchIcon />
      </StyledSearchIconWrapper>
      <StyledInputBase
        placeholder="Nhập MSSV hoặc họ tên để tìm kiếm..."
        inputProps={{ 'aria-label': 'search' }}
        onChange={handleChange}
        onKeyDown={handleSearch}
      />
    </Search>
  );
}

export default SearchBar;
