import Header from "../components/Header"
import Navbar from "../components/Navbar"
import Footer from "../components/footer"
import ProductCategory from "../components/ProductCategory"
import ProductList from "../components/ProductList"

export function Products() {
  return (
    <div>
      <Header />
      <Navbar />
      <div className="container">
        <div className="row mx-auto">

          <div className="col-12 col-md-4 ">
            <div><ProductCategory/></div>
          </div>

          <div className="col-12 col-md-8">
            <div><ProductList/></div>
          </div>

        </div>

      </div>


      <Footer />

    </div>

  )
}