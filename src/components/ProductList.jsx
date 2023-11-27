const ProductList = () => {

    return (
        <div className="card mb-3" style={{ maxWidth: '540px' }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src="..." className="img-fluid rounded-start" alt="..."></img>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Produt Name</h5>
                        <p className="card-text">Price $</p>
                        <a href="#" className="btn btn-primary">ADD TO CART</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductList