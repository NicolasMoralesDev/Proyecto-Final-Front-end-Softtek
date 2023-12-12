import ProductList from '../../components/ProductList/ProductList';
import { Helmet } from 'react-helmet';
import ProductsCarousel from '../../components/ProductsCarousel';
import favicon from "./../../assets/icon.png";

export default function Home() {
  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>TECNO TIENDA | HOME</title>
        <link rel='canonical' href='http://mysite.com/example' />
        <meta name="description" content="Bienvenido a TecnoTienda! Una web con los mejores precios en Hardware del mercado." />
      </Helmet>

        <main>
          <ProductsCarousel/>
          <ProductList />
        </main>

    </>
  );
}
