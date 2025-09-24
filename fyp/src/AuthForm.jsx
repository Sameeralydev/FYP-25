import { useForm } from "react-hook-form";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

export default function AuthForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSignup = async (data) => {
    try {
      await createUserWithEmailAndPassword(auth, data.email, data.password);
      alert("User signed up!");
    } catch (err) {
      alert(err.message);
    }
  };

  const onLogin = async (data) => {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      alert("User logged in!");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div>
      <h2>Auth Form</h2>
      <form onSubmit={handleSubmit(onSignup)}>
        <input 
          placeholder="Email" 
          {...register("email", { required: "Email is required" })} 
        />
        {errors.email && <p>{errors.email.message}</p>}

        <input 
          type="password" 
          placeholder="Password" 
          {...register("password", { 
            required: "Password is required", 
            minLength: { value: 6, message: "Min 6 characters" } 
          })} 
        />
        {errors.password && <p>{errors.password.message}</p>}

        <button type="submit">Sign Up</button>
      </form>

      <form onSubmit={handleSubmit(onLogin)}>
        <input placeholder="Email" {...register("email", { required: true })} />
        <input type="password" placeholder="Password" {...register("password", { required: true })} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
