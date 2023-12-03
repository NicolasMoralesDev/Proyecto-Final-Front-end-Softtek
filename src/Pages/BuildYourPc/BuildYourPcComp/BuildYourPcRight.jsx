import React from "react";
import { useEffect, useState } from "react"

const BuildYourPcRight = ({ componentspc, selectedCategory, handleProductClick }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
  
    const filteredItems = componentspc.filter(
      (component) => !selectedCategory || component.category === selectedCategory
    );
  
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
  
    const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  
    const handlePageClick = (page) => {
      setCurrentPage(page);
    };
  
    return (
      <div className="row">
        {currentItems.map((i) => (
          <div key={i.id} className="col-md-6 mb-3">
            <div className="card" style={{ maxWidth: '540px' }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={i.imageUrl} className="img-thumbnail rounded-start fixed-size-image" alt={i.name}></img>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{i.name}</h5>
                    <p className="card-text">{i.description}</p>
                    <p className="card-text"><small className="text-body-secondary">Precio $ {i.price}</small></p>
                    <a href="#" className="btn text-light btn-orange-custom mt-2 " onClick={() => handleProductClick(i)}>agregar</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        {totalPages > 1 && (
          <nav aria-label="...">
            <ul className="pagination pagination-lg">
              {[...Array(totalPages).keys()].map((page) => (
                <li key={page} className={`page-item ${page + 1 === currentPage ? "active" : ""}`} aria-current="page">
                  <span className="page-link" onClick={() => handlePageClick(page + 1)}>{page + 1}</span>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    );
  };
  
  export default BuildYourPcRight;