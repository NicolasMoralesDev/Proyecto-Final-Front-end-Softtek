import { useState } from 'react';
import { addProduct } from '../../utils/fetchProductsList';
import Swal from 'sweetalert2';
import UploadWidget from '../../components/cloundinary/UploadWidget';

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
        <div className='container mt-3 mb-5'>
            <h2 className='mt-3 mb-3'>Agregar Producto</h2>
            <p className='text-center'>{error}</p>
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
                    <select
                        className="form-select"
                        id="floatingCategory"
                        value={productData.category}
                        name="category"
                        onChange={handleInputChange}
                    >
                        <option value="" disabled>Selecciona una categoría</option>
                        <option value="Cooler">Cooler</option>
                        <option value="Cpu">Cpu</option>
                        <option value="Discos">Discos</option>
                        <option value="Monitor">Monitor</option>
                        <option value="Gabinete">Gabinete</option>
                        <option value="Gpu">Gpu</option>
                        <option value="Memoria">Memoria</option>
                        <option value="Mother">Mother</option>
                        <option value="Periferico">Periférico</option>
                        <option value="Psu">Psu</option>
                    </select>
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