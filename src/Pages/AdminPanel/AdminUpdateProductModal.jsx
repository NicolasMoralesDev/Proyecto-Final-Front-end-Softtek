import React, { useState, useEffect } from 'react';

const AdminUpdateProductModal = ({ product, onClose, onSave }) => {
    const [editedProduct, setEditedProduct] = useState({ ...product });
  
    useEffect(() => {
      setEditedProduct({ ...product });
    }, [product]);
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setEditedProduct((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    const handleSave = () => {
      onSave(editedProduct);
      onClose();
    };
  
    return (
      <div className="row">
        <form>
          <div className="mb-3">
            <label htmlFor="recipient-name" className="col-form-label">Nombre:</label>
            <input type="text" className="form-control" id="recipient-name" name="name" value={editedProduct.name} onChange={handleInputChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="recipient-brand" className="col-form-label">Marca:</label>
            <input type="text" className="form-control" id="recipient-brand" name="brand" value={editedProduct.brand} onChange={handleInputChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="recipient-description" className="col-form-label">Descripcion:</label>
            <input type="text" className="form-control" id="recipient-description" name="description" value={editedProduct.description} onChange={handleInputChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="recipient-category" className="col-form-label">Categoria:</label>
            <input type="text" className="form-control" id="recipient-category" name="category" value={editedProduct.category} onChange={handleInputChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="recipient-price" className="col-form-label">Precio:</label>
            <input type="text" className="form-control" id="recipient-price" name="price" value={editedProduct.price} onChange={handleInputChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="recipient-imagenUrl" className="col-form-label">Url Imagen:</label>
            <input type="text" className="form-control" id="recipient-imagenUrl" name="imagenUrl" value={editedProduct.imageUrl} onChange={handleInputChange} />
          </div>
          <div className="mb-3">
            <label htmlFor="recipient-status" className="col-form-label">Estado:</label>
            <input type="text" className="form-control" id="recipient-status" name="status" value={editedProduct.status} onChange={handleInputChange} />
          </div>
  
          <button type="button" className="btn btn-primary" onClick={handleSave}>Guardar Cambios</button>
        </form>
      </div>
  
    );
  };

export default AdminUpdateProductModal;