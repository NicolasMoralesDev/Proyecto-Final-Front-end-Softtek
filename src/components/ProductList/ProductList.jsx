import { useContext, useEffect, useState } from "react"
import { getAllProducts } from "../../utils/fetchProductsList"
import "./productList.css"
import { Toaster } from "react-hot-toast";
import PaginationProduts from "./PaginationProduts/PaginationProduts";
import { PaginationContext } from "../../context/PaginationContext";
import { useCart } from "../../context/Hooks";
import { Col, Row } from "react-bootstrap";
import Loading from "../Loading/Loading";

const ProductList = () => {

    const { addToCart } = useCart();
    const { page, setTotal } = useContext(PaginationContext);
    const [loading, setLoading] = useState(true);

    const [products, setProducts] = useState([{}]);
    const moveToCart = (product) => {
        product = { ...product}; //a
        addToCart(product, 1);
    }

    const getData = async () => {

        const data = await getAllProducts(page);
        setProducts(data.productos);
        setTotal(data.total)
        setLoading(false);
    }

    useEffect(() => {

        getData();

    }, [page])

    if (loading) return <Loading />

    return (
        <div className="container">
          <Row className="d-flex align-items-center justify-content-center">
            {products.length > 0 &&
                products.map((i) => (
                    <Col xs={8} lg={6} xl={5} key={i.id * i.id}>
                        <div className="card mb-3 mt-3" style={{ maxWidth: '540px' }} >
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={i.imageUrl} style={{ maxWidth: "200px", maxHeight: "200px", aspectRatio: "auto" }} className="h-100 img-fluid rounded-start" alt={i.name}></img>
                                </div>
                                <div className="col-md-8 p-3">
                                    <div className="card-body">
                                        <h5 className="card-title">{i.name}</h5>
                                        <p>{i.brand}</p>
                                        <p className="card-text fw-bold">Precio $ {i.price}</p>
                                        <Toaster
                                            position="bottom-right"
                                            reverseOrder={false}
                                        />
                                        <button className="btn text-light btn-orange-custom mt-2 fw-bold" onClick={() => moveToCart(i)}>agregar al carrito</button>
                                        <button className="btn text-light mt-2 bg-success fw-bold">ver</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    )
                )
            }
            </Row>
            <div className="container-fluid d-flex justify-content-center align-items-center mt-5 mb-5">
                <PaginationProduts />
            </div>


        </div>

    )
}

export default ProductList