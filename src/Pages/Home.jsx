import React from 'react'
import { Helmet } from 'react-helmet'

const Home = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div>Home</div>
        </>

    )
}

export default Home