/* eslint-disable react/prop-types */
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const BuildYourPcLeft = ({cimages, selectedCategory, handleImageClick}) => {
    return (
        <div className="container mb-4">
            <div className="row">
                {cimages.map((image, index) => (
                    <OverlayTrigger key={index} placement='left' overlay={ <Tooltip id='tooltip-sin-terminar'>{image.name}</Tooltip> }>
                        <div
                            
                            className={`col-6 ${selectedCategory === image.category ? 'selected' : ''}`}
                            onClick={() => handleImageClick(image.category)}
                        >
                            <img src={image.url} alt={`Componente ${index}`} className='img-fluid' />
                        </div>
                    </OverlayTrigger>
                ))}
            </div>
        </div>
    

    )
};
    
export default BuildYourPcLeft;     
