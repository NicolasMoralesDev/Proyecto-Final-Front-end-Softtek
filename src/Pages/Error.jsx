import React from 'react'
import { Helmet } from 'react-helmet'
import { useRouteError } from 'react-router-dom'

const Error = () => {

    const error = useRouteError();

    let errorMessage = '';

    if (error) {
        errorMessage = error.message || error.statusText;
        console.error(error);
    } else {
        errorMessage = "404 - Not Found"
    }

    return (
        <>
            <div id="error-page" className='mb-3'>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Error</title>
                    <link rel="canonical" href="http://mysite.com/example" />
                    <meta name="description" content="Ha ocurrido un error." />
                </Helmet>
                <div className='d-flex justify-content-center align-items-center container flex-column ' >
                    <div className='mt-5 gap-3 d-flex justify-content-center flex-column align-items-center gap-5'>
                        <h1 className='text-4xl font-bold'>Oops!</h1>
                        <h3> Parece que a ocurrido un error!!</h3>
                        <h3 className='text-center'>
                            {errorMessage}
                        </h3>
                        <a title='volver' href={"/"} className='btn text-light fw-bold  btn-orange-custom w-25'>volver</a>
                    </div>

                </div>
            </div>

        </>

    )
}

export default Error