import { Helmet } from 'react-helmet'
import TableCheckout from '../../components/CartPage/TableCheckout'

const Cart = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>carrito</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <TableCheckout />
        </>

    )
}

export default Cart

