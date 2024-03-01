import { useContext } from "react";
import "./LoginForm.css";
import { UserContext } from "../../contextos/UserContext";
// import useForm from "../../custom-hooks/useForm";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function LoginForm() {
  const { user, setUser } = useContext(UserContext);
  // const { form, setName, setEmail, reset } = useForm();
  const navegate = useNavigate();
  const location = useLocation();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    trigger,
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  // function handleSubmitForm(e) {
  //   e.preventDefault();

  //   // if (user.isLogged) {
  //   //   setUser({
  //   //     ...user,
  //   //     isLogged: false,
  //   //   });
  //   //   navegate("/");
  //   // } else if (!user.isLogged) {
  //   //   if (!form.name || !form.email) {
  //   //     alert("Please, fill all fields");
  //   //     return;
  //   //   }
  //   //   const role = form.email.includes("@admin") ? "admin" : "user";
  //   //   setUser({
  //   //     ...user,
  //   //     ...form,
  //   //     isLogged: true,
  //   //     role,
  //   //   });
  //   //   reset();
  //   //   navegate(location.state?.pathname);
  //   // }
  // }

  return (
    <form
      onSubmit={onSubmit}
      className="login-form"
    >
      {!user.isLogged && (
        <>
          <label htmlFor="name">Name:</label>
          {errors.name && (
            <p className="login-form-error-msg">{errors.name.message}</p>
          )}
          <input
            type="text"
            id="name"
            {...register("name", {
              required: "Please enter your name:",
              onBlur: () => trigger("name"),
            })}
          />

          <label htmlFor="email">Email:</label>
          {errors.email && (
            <p className="login-form-error-msg">{errors.email.message}</p>
          )}
          <input
            type="email"
            id="email"
            {...register("email", {
              required: "Please enter your email:",
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                message: "Invalid email format",
              },
              onBlur: () => trigger("email"),
            })}
          />
          <label htmlFor="password">Password:</label>
          {errors.password && (
            <p className="login-form-error-msg">{errors.password.message}</p>
          )}
          <input
            type="password"
            id="password"
            {...register("password", {
              required: "Please enter your password:",
              minLength: { value: 8, message: "Minimum 8 characteres" },
              onBlur: () => trigger("password"),
            })}
          />
          <label htmlFor="confirmPassword">Confirm Password:</label>
          {errors.confirmPassword && (
            <p className="login-form-error-msg">
              {errors.confirmPassword.message}
            </p>
          )}
          <input
            type="password"
            id="confirmPassword"
            {...register("confirmPassword", {
              required: "Please repeat your password:",
              onBlur: () => trigger("confirmPassword"),
              validate: (value) =>
                value === watch("password") || "Passwords don't match",
            })}
          />
        </>
      )}

      {user.isLogged ? <button>Logoff</button> : <button>Login</button>}
      {user.isLogged && <p>{`${user.name}, do you want to end session?`}</p>}
    </form>
  );
}
