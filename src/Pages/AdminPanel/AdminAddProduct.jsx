import React, { useState } from 'react';
import { addProduct } from '../../utils/fetchProductsList';
import UploadWidget from '../../components/cloundinary/UploadWidget';

const AdminAddProduct = ({ onAddProduct }) => {

    const [productData, setProductData] = useState({
        price: '',
        brand: '',
        category: '',
        description: '',
        imageUrl: '',
        name: '',
        stock: '',
    });

    const [url, updateUrl] = useState();
    const [error, updateError] = useState();

    productData.imageUrl = url;

    const handleInputChange = (e) => {

        productData.imageUrl = url;

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
                stock: '',
            });
        }
    };



    /**
     * handleOnUpload
     */

    function handleOnUpload(error, result, widget) {
        if (error) {
            updateError(error);
            widget.close({
                quiet: true
            });
            return;
        }
        updateUrl(result?.info?.secure_url);

    }

    return (
        <div className='container'>
            <h2>Agregar Producto</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" placeholder="Nombre" id="floatingName" value={productData.name} name="name" onChange={handleInputChange} />
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
                    <input type="text" className="form-control" placeholder="Categoria" id='floatingCategory' value={productData.category} name='category' onChange={handleInputChange} />
                    <label htmlFor="floatingCategory">Categoria</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" placeholder="Precio" id='floatingPrice' value={productData.price} name='price' onChange={handleInputChange} />
                    <label htmlFor="floatingPrice">Precio</label>
                </div>
                <div className="form-floating mb-3">

                    <UploadWidget onUpload={handleOnUpload}>
                        {({ open }) => {
                            function handleOnClick(e) {
                                e.preventDefault();
                                open();
                            }
                            return (
                                <button onClick={handleOnClick}>
                                    Subir imagen
                                </button>
                            )
                        }}
                    </UploadWidget>

                </div>

                <div className="form-floating mb-3">
                    <input type="number" className="form-control" placeholder="Stock" id='floatingStock' value={productData.stock} name='stock' onChange={handleInputChange} />
                    <label htmlFor="floatingStock">Stock</label>
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