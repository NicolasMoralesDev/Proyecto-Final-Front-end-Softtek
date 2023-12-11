import { useState } from 'react';
import { addProduct } from '../../utils/fetchProductsList';
import Swal from 'sweetalert2';

const AdminAddProduct = () => {
    const [productData, setProductData] = useState({
        price: '',
        brand: '',
        category: '',
        description: '',
        imageUrl: '',
        name: '',
        stock: '',
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
            Swal.fire({
                title: 'Producto agregado',
                text: `El producto ${addedProduct.name} ha sido agregado exitosamente`,
                icon: 'success',
                confirmButtonText: 'Aceptar',
            });


        } catch (e) {
            Swal.fire({
                title: 'Error',
                text: 'No se pudo agregar el producto',
                icon: 'error',
                confirmButtonText: 'Aceptar',
            });
        } finally {
            setProductData({
                price: '',
                brand: '',
                category: '',
                description: '',
                imageUrl: '',
                name: '',
                stock: '',
            });
        }
    };

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
                    <input type="text" className="form-control" placeholder="Url Imagen" id='floatingImage' value={productData.imageUrl} name='imageUrl' onChange={handleInputChange} />
                    <label htmlFor="floatingImage">Url Imagen</label>
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