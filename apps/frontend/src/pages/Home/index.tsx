import { useQuery } from '@apollo/client';
import AsyncDataRenderer from '../../components/AsyncDataRenderer';
import Example from '../../components/Example';
import { GET_BOOKS } from '../../data/queries/get-book-list';

interface Book {
  title: string;
  author: string;
}
function Home() {
  const { loading, data } = useQuery(GET_BOOKS);

  return (
    <AsyncDataRenderer loading={loading} data={data}>
      <Example />
      {data?.books.map((book: Book) => (
        <p>
          Title:
          {book.title}
        </p>
      ))}
    </AsyncDataRenderer>
  );
}

export default Home;
