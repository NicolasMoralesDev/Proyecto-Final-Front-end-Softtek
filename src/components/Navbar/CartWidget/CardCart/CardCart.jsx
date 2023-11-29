import React from 'react'

const CardCart = () => {
  return (
    <div className="card mb-3 mt-3" style={{ maxWidth: '540px' }} key="">
    <div className="row g-0">
        <div className="col-md-4">
            <img src="" className="img-fluid rounded-start" alt=""></img>
        </div>
        <div className="col-md-8">
            <div className="card-body">
                <h5 className="card-title">dc</h5>
                <p className="card-text">Precio $ {}</p>
            </div>
        </div>
    </div>
</div>
  )
}

export default CardCart