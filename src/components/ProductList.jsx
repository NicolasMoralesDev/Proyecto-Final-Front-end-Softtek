import { useEffect, useState } from "react"
import { getAllProducts } from "../utils/fetchProductsList"

const ProductList = () => {

    const [products, setproducts] = useState([{}]);

    const getData = async () => {

    const data =  await getAllProducts();
     setproducts(data);
    }

    useEffect(() => {
      
    getData();

    }, [])
    

    return (
        <>
        { products.map( i => 
         <div className="card mb-3 mt-3" style={{ maxWidth: '540px' }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={i.imgUrl} className="img-fluid rounded-start" alt={i.name}></img>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{i.name}</h5>
                        <p className="card-text">Precio $ {i.price}</p>
                        <a href="#" className="btn text-light btn-orange-custom mt-2 ">agregar al carrito</a>
                    </div>
                </div>
            </div>
        </div>
        )
        }
        </>
       
    )
}

export default ProductList