
const Footer = () => {
  return (
    <footer className="footer text-light bg-dark position-relative bottom-0 p-4" style={styles.footer}>
      <div className="container-fluid">
        <div className="row cntainer-fluid d-flex flex-row justify-content-center">
          <div className="col-lg-6 link-light">
            <div className="d-flex justify-content-center flex-column align-items-center">
                 <h3>Links</h3>
            <ul>
              <li><a className="link-light" href="/">Home</a></li>
              <li><a className="link-light" href="/armatupc">Arma tu Pc</a></li>
              <li><a className="link-light" href="#">Ayuda</a></li>
            </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="d-flex justify-content-center flex-column align-items-center">
                  <h3>Contacto</h3>
            <ul>
              <li>Email: infotecno@tecnocompro.com</li>
              <li>WhatsApp: +54 - 011 - 1234565</li>
            </ul>
            </div>
          </div>
        </div>
        <div className="text-center m-2">
          <p className="fs-6">(c) Copyright 2023 TecnoTienda. All rights reserved</p>
        </div>

      </div>
    </footer>
  )
}

export default Footer

const styles = {
  footer: {
    marginTop: 'auto',
    width : '100%',
  }
}