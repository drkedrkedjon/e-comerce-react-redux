/* eslint-disable react/prop-types */
import { ShoppingCart, Heart, User, Moon, Sun } from "react-feather";
import "./HeaderAccountMenu.css";
import { useContext } from "react";
import { UserContext } from "../../contextos/UserContext";

export default function HeaderAccountMenu() {
  const { user, setUser } = useContext(UserContext);

  function handleTheme() {
    setUser({ ...user, isDarkMode: !user.isDarkMode });
  }

  return (
    <ul className="account-ul">
      <li>
        <User size={20} />
      </li>
      <li>
        <Heart size={20} />
      </li>
      <li onClick={handleTheme}>
        {user.isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
      </li>
      <li className="notificacion-bubble-container">
        <ShoppingCart size={20} />

        {user.shoppingCartItems.length !== 0 && (
          <span className="notification-bubble">
            {user.shoppingCartItems.length}
          </span>
        )}
      </li>
    </ul>
  );
}
