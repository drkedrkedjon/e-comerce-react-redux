import { UserContext } from "../../contextos/UserContext";
import { useContext } from "react";
import "./Footer.css";

export default function Footer() {
  const { user } = useContext(UserContext);

  return (
    <footer
      className={`footer-container ${user.isDarkMode ? "dark-mode" : "light-mode"}`}
    >
      <div className="footer-details">
        <ul>
          <li>Contacto</li>
          <li>Email: email@email.com</li>
          <li>Telefono: +34 222 333 222</li>
        </ul>
        <ul>
          <li>Redes Sociales</li>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Instagram</li>
        </ul>
        <ul>
          <li>Direccion</li>
          <li>Calle Lejana 54</li>
          <li>35212 - LPA</li>
        </ul>
      </div>
      <p>© 2024 Drkedrkedjon</p>
    </footer>
  );
}
