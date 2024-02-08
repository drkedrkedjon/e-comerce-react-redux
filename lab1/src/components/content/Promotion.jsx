import "./Promotion.css";
import { UserContext } from "../../contextos/UserContext";
import { RutasContext } from "../../contextos/RutasContext";
import { useContext } from "react";

export default function Promotion() {
  const { user } = useContext(UserContext);
  // rutas seran: content y shopping-cart
  const { rutas } = useContext(RutasContext);

  const banner = () => {
    if (user.isLogged && rutas === "content") {
      return <p>{user.name}, use your 20% of discount</p>;
    } else if (!user.isLogged && rutas === "shopping-cart") {
      return <p>Create an account and get extra discounts!</p>;
    } else if (user.isLogged && rutas === "shopping-cart") {
      return (
        <p>{user.name}, your 20% of discount will be aplied at checkout!</p>
      );
    } else {
      return <p>20% de descuento para nuevos clientes</p>;
    }
  };

  return <div className="promotion">{banner()}</div>;
}
