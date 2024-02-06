import { ShoppingCart, Heart, User, Moon, Sun } from "react-feather";
import "./HeaderAccountMenu.css";
import { useContext } from "react";
import { userContext } from "../../contextos/userContext";

export default function HeaderAccountMenu() {
  const { user, setUser } = useContext(userContext);

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
      <li>
        <ShoppingCart size={20} />
      </li>
    </ul>
  );
}
