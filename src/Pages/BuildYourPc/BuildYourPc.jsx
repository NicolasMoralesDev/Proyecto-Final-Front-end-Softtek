import React from 'react';
import { useEffect, useState } from "react"
import { getAllComponentsPc } from "../../utils/fetchComponentPc"
import "../../styles/buildYourPC.css";
import { Helmet } from 'react-helmet'
import BuildYourPcLeft from './BuildYourPcComp/BuildYourPcLeft'
import  BuildYourPcRight  from './BuildYourPcComp/BuildYourPcRight'
import  BuildYourPcTotal  from './BuildYourPcComp/BuildYourPcTotal'

import cooler2 from "../../assets/pcComponents/cooler2.png";
import cpu2 from '../../assets/pcComponents/cpu2.png'
import gabo2 from '../../assets/pcComponents/gabo2.png'
import gpu2 from '../../assets/pcComponents/gpu2.png'
import memo2 from '../../assets/pcComponents/memo2.png'
import hhd2 from '../../assets/pcComponents/hhd2.png'
import mother2 from '../../assets/pcComponents/mother2.png'
import moni4 from '../../assets/pcComponents/moni4.png'
import periferico2 from '../../assets/pcComponents/periferico2.png'
import poder2 from '../../assets/pcComponents/poder2.png'

export default function BuildYourPc() {

 
    const cimages = [
        { category: 'Cooler', url: cooler2 },
        { category: 'Cpu', url: cpu2 },
        { category: 'Discos', url: hhd2 },
        { category: 'Monitor', url: moni4 },
        { category: 'Gabinete', url: gabo2 },
        { category: 'Gpu', url: gpu2 },
        { category: 'Memoria', url: memo2 },
        { category: 'Mother', url: mother2 },
        { category: 'Periferico', url: periferico2 },
        { category: 'Fuente', url: poder2 },
    ];


    const [componentspc, setComponentspc] = useState([{}]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedProducts, setSelectedProducts] = useState([]);


    const getData = async () => {

        const data = await getAllComponentsPc();
        setComponentspc(data);
    }

    useEffect(() => {

        getData();

    }, []);

    const handleImageClick = (category) => {
        setSelectedCategory(category);
    };

    const handleProductClick = (product) => {
        setSelectedProducts((prevSelectedProducts) => [...prevSelectedProducts, product]);
      };


    return (

        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Build your pc</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>

            <div className="container mb-3 mt-3">
                <div className="row mx-auto">
                    <div className="col-12 col-md-4 ">
                        <BuildYourPcLeft cimages={cimages}
                            selectedCategory={selectedCategory}
                            handleImageClick={handleImageClick} />
                        
                        <BuildYourPcTotal selectedProducts={selectedProducts}
                                         />    

                    </div>
                    <div className="col-12 col-md-8">
                        <BuildYourPcRight componentspc={componentspc}
                            selectedCategory={selectedCategory}
                            handleProductClick={handleProductClick}/>
                         
                         </div>     
                </div>
            </div>
        </>

    )
}