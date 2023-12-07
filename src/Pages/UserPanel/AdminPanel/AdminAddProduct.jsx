import React, { useState } from 'react';
import { addProduct } from '../../../utils/fetchProductsList';

const AdminAddProduct = ({ onAddProduct }) => {
    const [productData, setProductData] = useState({
        price: '',
        brand: '',
        category: '',
        description: '',
        img_url: '',
        name: '',
        status: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProductData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Realiza la llamada a addProduct para enviar los datos del producto al servidor
            const addedProduct = await addProduct(productData);

            
            onAddProduct(addedProduct);


        } catch (e) {
            console.error("Error al agregar el producto:", e);
        } finally {
            setProductData({
                price: '',
                brand: '',
                category: '',
                description: '',
                img_url: '',
                name: '',
                status: '',
            });
        }
    };

    return (
        <div className='container'>
            <h2>Agregar Producto</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" placeholder="Nombre" id="floatingName" value={productData.name}  name="name" onChange={handleInputChange} />
                    <label htmlFor="floatingName">Nombre</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" placeholder="Marca" id="floatingBrand" value={productData.brand} name='brand' onChange={handleInputChange} />
                    <label htmlFor="floatingBrand">Marca</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" placeholder="Descripcion" id="floatingDescription" value={productData.description} name='description' onChange={handleInputChange} />
                    <label htmlFor="floatingDescription">Descripcion</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" placeholder="Categoria" id='floatingCategory' value={productData.category}  name='category' onChange={handleInputChange} />
                    <label htmlFor="floatingCategory">Categoria</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" placeholder="Precio" id='floatingPrice' value={productData.price} name='price' onChange={handleInputChange} />
                    <label htmlFor="floatingPrice">Precio</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" placeholder="Url Imagen" id='floatingImage' value={productData.img_url} name='img_url' onChange={handleInputChange} />
                    <label htmlFor="floatingImage">Url Imagen</label>
                </div>

                <div className="form-floating mb-3">
                    <input type="text" className="form-control" placeholder="Estado" id='floatingStatus' value={productData.status} name='status' onChange={handleInputChange} />
                    <label htmlFor="floatingStatus">Estado</label>
                </div>

                <div className="mb-3">
                    <button type="submit" className="btn btn-primary">
                        Agregar Producto
                    </button>
                </div>
            </form>

        </div>
    );
};

export default AdminAddProduct;