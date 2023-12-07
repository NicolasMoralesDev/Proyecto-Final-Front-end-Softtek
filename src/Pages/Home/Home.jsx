import ProductList from '../../components/ProductList/ProductList';
import { Helmet } from 'react-helmet';

export default function Home() {
  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Productos</title>
        <link rel='canonical' href='http://mysite.com/example' />
      </Helmet>

        <div>
          <ProductList />
        </div>

    </>
  );
}
