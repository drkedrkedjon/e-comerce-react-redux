import { useContext } from "react";
import "./LoginForm.css";
import { UserContext } from "../../contextos/UserContext";

export default function LoginForm() {
  const { user } = useContext(UserContext);
  console.log(user.isLogged);

  return (
    <form className="login-form">
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
      />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
      />
      {user.isLogged ? <button>Logout</button> : <button>Login</button>}
      {user.isLogged && <p>{`${user.name}, do you want to end session?`}</p>}
    </form>
  );
}
