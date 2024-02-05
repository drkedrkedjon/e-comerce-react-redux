import { useContext, useState } from "react";
import "./LoginForm.css";
import { UserContext } from "../../contextos/UserContext";

export default function LoginForm() {
  const { user } = useContext(UserContext);
  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  return (
    <form className="login-form">
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      {user.isLogged ? <button>Logout</button> : <button>Login</button>}
      {user.isLogged && <p>{`${user.name}, do you want to end session?`}</p>}
    </form>
  );
}
