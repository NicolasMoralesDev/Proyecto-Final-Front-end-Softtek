/* eslint-disable react/prop-types */
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import styles from './BuildYourPc.module.css';
const BuildYourPcLeft = ({cimages, selectedCategory, handleImageClick}) => {
   
    return (
        <div className="container mb-4">
            <div className="row">
                {cimages.map((image, index) => (
                    <OverlayTrigger key={index} placement='left' overlay={ <Tooltip id='tooltip'>{image.name}</Tooltip> }>
                        <div
                            
                            className={`col-6 d-flex align-items-center justify-content-center ${selectedCategory === image.category ? styles.selected : ''}`}
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
