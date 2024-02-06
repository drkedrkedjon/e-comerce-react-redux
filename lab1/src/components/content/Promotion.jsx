import "./Promotion.css";
import { UserContext } from "../../contextos/UserContext";
import { useContext } from "react";

export default function Promotion() {
  const { user } = useContext(UserContext);
  return (
    <div className="promotion">
      {user.isLogged ? (
        <p>{user.name}, use your 20% of discount</p>
      ) : (
        <p>20% de descuento para nuevos clientes</p>
      )}
    </div>
  );
}
