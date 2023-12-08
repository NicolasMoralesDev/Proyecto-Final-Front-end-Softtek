
const Foter = () => {
  return (
    <footer className="footer text-light bg-dark position-relative bottom-0 p-4">
      <div className="container-fluid">
        <div className="row text-center">
          <div className="col-lg-6 link-light">
            <h3>Links</h3>
            <ul>
              <li><a  className="link-light"  href="/">Home</a></li>
              <li><a  className="link-light" href="/armatupc">Arma tu Pc</a></li>
              <li><a  className="link-light" href="#">Ayuda</a></li>
            </ul>
          </div>
          <div className="col-lg-6">
            <h3>Contacto</h3>
            <p>Email: infotecno@mail.com</p>
            <p>WhatsApp: +54 011 - 1234565</p>
          </div>
        </div>
        <div className="text-center m-2">
            <h6>(c) Copyright 2023 TecnoTienda. All rights reserved.</h6>
        </div>
     
      </div>
    </footer>
  )
}

export default Foter