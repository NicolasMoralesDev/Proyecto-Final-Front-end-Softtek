import React from 'react'
import { Helmet } from 'react-helmet'
import { useRouteError } from 'react-router-dom'

const Error = () => {

    const error = useRouteError();

    return (
        <>
        <div id="error-page" className='mb-3'>
             <Helmet>
                <meta charSet="utf-8" />
                <title>Error</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className='d-flex justify-content-center align-items-center container flex-column ' >
                <div className='mt-5 gap-3 d-flex justify-content-center flex-column align-items-center gap-5'>
                    <h1> Parece que a ocurrido un error!!</h1>
                    <h3 className='text-center'>
                   404 - page not found
                    </h3>
                    <a title='volver' href={"/"} className='btn text-light fw-bold  btn-orange-custom w-25'>volver</a>
                </div>

            </div>
        </div>
           
        </>

    )
}

export default Error