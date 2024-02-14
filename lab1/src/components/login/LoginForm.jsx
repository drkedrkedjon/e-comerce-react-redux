import { useContext } from "react";
import "./LoginForm.css";
import { UserContext } from "../../contextos/UserContext";
import useForm from "../../custom-hooks/useForm";
import { useLocation, useNavigate } from "react-router-dom";

export default function LoginForm() {
  const { user, setUser } = useContext(UserContext);
  const { form, setName, setEmail, reset } = useForm();
  const navegate = useNavigate();
  const location = useLocation();

  function handleSubmit(e) {
    e.preventDefault();

    if (user.isLogged) {
      setUser({
        ...user,
        isLogged: false,
      });
      navegate("/");
    } else if (!user.isLogged) {
      if (!form.name || !form.email) {
        alert("Please, fill all fields");
        return;
      }
      setUser({
        ...user,
        ...form,
        isLogged: true,
      });
      reset();
      navegate(location.state.pathname);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="login-form"
    >
      {!user.isLogged && (
        <>
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
            required={true}
            id="email"
            name="email"
            value={form.email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </>
      )}

      {user.isLogged ? <button>Logoff</button> : <button>Login</button>}
      {user.isLogged && <p>{`${user.name}, do you want to end session?`}</p>}
    </form>
  );
}
