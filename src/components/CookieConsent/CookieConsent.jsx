import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Cookies from 'universal-cookie';

/**
 * This component shows a cookie consent message at the bottom of the screen.
 * If the user accepts the cookies, the component will not be rendered again.
 * 
 * @returns {JSX.Element} The Cookie Consent component to be rendered.
 */

const CookieConsent = () => {
  const [isConsented, setIsConsented] = useState(false);
  const cookies = new Cookies();

  /**
   * This function sets a cookie that indicates that the user has accepted the cookies.
   * It also sets the state to true so the component is not rendered again.
   */
  const giveCookieConsent = () => {
    const date = new Date();
    date.setTime(date.getTime() + 1000 * 60 * 60 * 24 * 365 * 10); // 10 years
    cookies.set('cookieConsent', true, { path: '/', expires: date });
    setIsConsented(true);
  };

  if (isConsented) {
    return null; // Don't render the component if cookies are accepted
  }

  return (
    <div className="cookie-consent" style={styles}>
      <h3>Cookies</h3>
      <div>
        <p>Usamos cookies para mejorar tu experiencia en nuestra página web.</p>
        <p>Al continuar navegando en este sitio, asumimos que estás de acuerdo con esto.</p>
      </div>
      <Button onClick={giveCookieConsent}>Aceptar</Button>
    </div>
  );
};

const styles = {
  position: "fixed",
  bottom: "0",
  left: "0",
  width: "100%",
  minHeight: "250px",
  backgroundColor: "black",
  color: "white",
  padding: "1rem",
  textAlign: "center",
  zIndex: "100",
  fontSize: "1.2rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  rowGap: "2rem",
  button: {
    backgroundColor: "white",
    color: "black",
    padding: "0.5rem 1rem",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginLeft: "1rem",
  },
}

export default CookieConsent