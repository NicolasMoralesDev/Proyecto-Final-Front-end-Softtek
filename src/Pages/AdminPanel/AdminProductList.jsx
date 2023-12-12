import { useContext, useEffect, useState } from "react"
import { getAllProducts, deleteProduct, updateProduct } from "../../utils/fetchProductsList"
import { PaginationContext } from "../../context/PaginationContext";
import { v4 as uuidv4 } from 'uuid';
import PaginationProducts from "../../components/ProductList/PaginationProduts/PaginationProduts";
import styles from './admin.module.css';
import AdminUpdateProductModal from "./AdminUpdateProductModal";

import Modal from "../../components/Modal/Modal"
import { Table } from "react-bootstrap";

const AdminProductList = () => {

  const { page, setTotal } = useContext(PaginationContext);
  const [products, setProducts] = useState([]);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getData = async () => {

    const data = await getAllProducts(page);
    setProducts(data.productos);
    setTotal(data.total)
  }


  useEffect(() => {

    getData();

  }, [page])

  const handleModifyProduct = (product) => {
    console.log("Modificando producto:", product);
    console.log("stock!!!!:", product.stock);
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    console.log("Cerrando el modal");
    setIsModalOpen(false);
  };

  const handleSaveProduct = async (editedProduct) => {
    // Lógica para guardar el producto editado
    console.log("Guardando cambios para el producto con ID:", editedProduct.id);
    console.log("Datos editados:", editedProduct);

    try {
      // Llama a la función updateProduct con el ID del producto y los datos editados
      await updateProduct(editedProduct.id, editedProduct);
      getData();
      console.log("Cambios guardados con éxito");
    } catch (error) {
      console.error("Error al guardar los cambios", error);
    }

  };
  const handleDeleteProduct = async (product) => {
    try {
      await deleteProduct(product.id);
      // Vuelve a cargar los datos después de eliminar el producto
      getData();
    } catch (error) {
      console.error("Error al eliminar el producto", error);
    }
  };

  return (
    <div className="table-dashboard">
      <h1>Productos</h1>
      <Table responsive className="table table-striped table-bordered text-center">
        <thead className="thead-dark mx-2">
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Imagen</th>
            <th>Marca</th>
            <th>Descripción</th>
            <th>Categoría</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (

            <tr key={uuidv4()} >
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>
              <img src={product.imageUrl} alt={product.name} className="w-25"/>
              </td>
              <td>{product.brand}</td>
              <td className={styles.rowList}>{product.description}</td>
              <td>{product.category}</td>
              <td className="fw-bold text-center">${product.price}</td>
              <td>{product.stock}</td>
              <td  className="p-3 d-flex gap-2 flex-wrap">

                <button
                  className="btn btn-warning btn-sm mx-2 fw-bold text-light w-100"

                  onClick={() => handleModifyProduct(product)}

                >
                  Modificar
                </button>
                <button
                  className="btn btn-danger btn-sm mx-2  fw-bold w-100"

                  onClick={() => handleDeleteProduct(product)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {selectedProduct &&
        <Modal show={isModalOpen} handleClose={handleCloseModal} title={selectedProduct.name}>
          <AdminUpdateProductModal product={selectedProduct} onClose={handleCloseModal} onSave={handleSaveProduct} />
        </Modal>}
      <div className="m-5 d-flex justify-content-center"><PaginationProducts /></div>

    </div>
  );
}



export default AdminProductList;

