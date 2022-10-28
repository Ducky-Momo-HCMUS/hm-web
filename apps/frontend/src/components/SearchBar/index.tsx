import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Search, StyledInputBase, StyledSearchIconWrapper } from './styles';

function SearchBar() {
  return (
    <Search>
      <StyledSearchIconWrapper>
        <SearchIcon />
      </StyledSearchIconWrapper>
      <StyledInputBase
        placeholder="Nhập MSSV hoặc họ tên để tìm kiếm..."
        inputProps={{ 'aria-label': 'search' }}
      />
    </Search>
  );
}

export default SearchBar;
