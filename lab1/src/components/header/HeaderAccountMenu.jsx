import { ShoppingCart, Heart, User } from "react-feather";
import "./HeaderAccountMenu.css";

export default function HeaderAccountMenu() {
  return (
    <ul className="account-ul">
      <li>
        <ShoppingCart size={20} />
      </li>
      <li>
        <Heart size={20} />
      </li>
      <li>
        <User size={20} />
      </li>
    </ul>
  );
}
