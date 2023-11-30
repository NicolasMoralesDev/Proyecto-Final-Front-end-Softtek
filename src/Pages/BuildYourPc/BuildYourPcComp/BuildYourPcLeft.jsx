import React from "react";

const BuildYourPcLeft = ({cimages, selectedCategory, handleImageClick}) => {
    return (
        
        <div className="container mb-4">
            <div className="row">
                {cimages.map((image, index) => (
                    <div
                        key={index}
                        className={`col-6 ${selectedCategory === image.category ? 'selected' : ''}`}
                        onClick={() => handleImageClick(image.category)}
                    >
                        <img src={image.url} alt={`Componente ${index}`} className='img-fluid' />
                    </div>
                ))}
            </div>
        </div>
    

    )
};
    
export default BuildYourPcLeft;     