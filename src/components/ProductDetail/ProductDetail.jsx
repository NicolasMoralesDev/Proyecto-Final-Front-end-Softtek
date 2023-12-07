import { useCart } from "../../context/Hooks";
import ItemCount from "./ItemCount";

// eslint-disable-next-line react/prop-types
const ProductDetail = ({ product = null, handleCloseModal }) => { 

  const { addToCart, getProductQuantity } = useCart();

  const initial = getProductQuantity(product.id);

  const onAdd = (amount) => {
    addToCart(product, amount);
    handleCloseModal();
  }

  return (
    <div className="row">
      <div className="col-md-6">
        <img src={product.imageUrl} className="img-thumbnail rounded-start fixed-size-image" alt={product.name}></img>
      </div>
      <div className="col-md-6">
        <p>{product.description}</p>
        <p><small className="text-body-secondary">Precio $ {product.price}</small></p>
        <ItemCount stock={product.stock} initial={initial} onAdd={onAdd}/>
      </div>
    </div>
  );
} 

export default ProductDetail;