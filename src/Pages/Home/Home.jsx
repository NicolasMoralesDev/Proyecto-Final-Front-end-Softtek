import ProductList from '../../components/ProductList/ProductList';
import { Helmet } from 'react-helmet';
import ProductsCarousel from '../../components/ProductsCarousel';

export default function Home() {
  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Tienda Online</title>
        <link rel='canonical' href='http://mysite.com/example' />
      </Helmet>

        <main>
          <ProductsCarousel/>
          <ProductList />
        </main>

    </>
  );
}
