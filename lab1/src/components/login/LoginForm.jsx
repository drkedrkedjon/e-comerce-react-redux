import { useContext } from "react";
import "./LoginForm.css";
import { UserContext } from "../../contextos/UserContext";
import useForm from "../../custom-hooks/useForm";

export default function LoginForm() {
  const { user, setUser } = useContext(UserContext);
  const { form, setName, setEmail, reset } = useForm();

  function handleLogin(e) {
    e.preventDefault();
    setUser({
      ...user,
      ...form,
      isLogged: true,
    });
    reset();
  }
  function handleLogoff(e) {
    e.preventDefault();
    setUser({
      ...user,
      isLogged: false,
    });
  }

  return (
    <form className="login-form">
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={form.name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={form.email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {user.isLogged ? (
        <button onClick={handleLogoff}>Logoff</button>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
      {user.isLogged && <p>{`${user.name}, do you want to end session?`}</p>}
    </form>
  );
}
