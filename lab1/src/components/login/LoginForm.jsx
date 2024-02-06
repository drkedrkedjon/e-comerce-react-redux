import { useContext, useState, useReducer } from "react";
import "./LoginForm.css";
import { UserContext } from "../../contextos/UserContext";

export default function LoginForm() {
  const { user, setUser } = useContext(UserContext);
  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  function handleLogin(e) {
    e.preventDefault();
    setUser({
      ...user,
      ...form,
      isLogged: true,
    });
    setForm({
      name: "",
      email: "",
    });
  }
  function handleLogoff(e) {
    e.preventDefault();
    setUser({
      ...user,
      isLogged: false,
    });
  }

  // function handleUser(state, action) {
  //   switch (action.type) {
  //     default:
  //       return state;
  //   }
  // }

  // const [state, dispach] = useReducer(handleUser, user);

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
      {user.isLogged ? (
        <button onClick={handleLogoff}>Logoff</button>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
      {user.isLogged && <p>{`${user.name}, do you want to end session?`}</p>}
    </form>
  );
}
