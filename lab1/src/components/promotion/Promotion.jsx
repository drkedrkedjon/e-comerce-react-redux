import "./Promotion.css";
import { UserContext } from "../../contextos/UserContext";
import { useContext } from "react";

export default function Promotion() {
  const { user } = useContext(UserContext);
  const rutas = window.location.pathname.split("/")[1];

  const banner = () => {
    if (user.isLogged && rutas === "/") {
      return <p>{user.name}, use your 20% of discount</p>;
    } else if (!user.isLogged && rutas === "cart") {
      return <p>Create an account and get extra discounts!</p>;
    } else if (user.isLogged && rutas === "cart") {
      return (
        <p>{user.name}, your 20% of discount will be aplied at checkout!</p>
      );
    } else {
      return <p>20% de descuento para nuevos clientes</p>;
    }
  };

  return <div className="promotion">{banner()}</div>;
}
