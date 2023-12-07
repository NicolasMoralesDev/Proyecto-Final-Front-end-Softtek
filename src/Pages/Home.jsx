import ProductsCarousel from '../components/ProductsCarousel';
import { Helmet } from 'react-helmet'


export default function Home(){
    return(
      <> 
      <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
        <ProductsCarousel/>
      </>
    
    )
}
