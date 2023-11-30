import { useContext, useEffect, useState } from "react"
import { getAllProducts } from "../../utils/fetchProductsList"
import { CartContext } from "../../context/CartContext";
import "./productList.css"
import { Toaster } from "react-hot-toast";
import PaginationProduts from "./PaginationProduts/PaginationProduts";
import { PaginationContext } from "../../context/PaginationContext";

const ProductList = () => {

    const { addToCart } = useContext(CartContext);
    const { page } = useContext(PaginationContext);

    const [ products, setproducts] = useState([{}]);

    const moveToCart = (product) => {
        addToCart(product);
    }

    const getData = async () => {

        const data = await getAllProducts(page);
        setproducts(data);
    }

    useEffect(() => {

        getData();

    }, [page])


    return (
        <>
            {products.map((i) => (
                <div className="card mb-3 mt-3" style={{ maxWidth: '540px' }} key={i.id*i.id}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={i.imgUrl}   className="h-100 img-fluid rounded-start" alt={i.name}></img>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{i.name}</h5>
                                <p>{i.brand}</p>
                                <p className="card-text fw-bold">Precio $ {i.price}</p>
                                <Toaster
                                    position="bottom-right"
                                    reverseOrder={false}
                                />
                                <a href="#" className="btn text-light btn-orange-custom mt-2" onClick={() => moveToCart(i)}>agregar al carrito</a>
                            </div>
                        </div>
                    </div>
                </div>)
            )
            }
            <PaginationProduts/>
            
        </>

    )
}

export default ProductList