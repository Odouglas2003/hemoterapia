"use client";
import "./logins.css";
const LoginForm = () => {
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevenir el comportamiento predeterminado del formulario

    // Capturamos los datos del formulario
    const email = e.currentTarget.email.value;
    const password = e.currentTarget.password.value;

    try {
      const response = await fetch("http://localhost:5900/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();

        // Redirigir a /pages/dashboard
        window.location.href = "/pages/dashboard";
      } else {
        alert("Invalid email or password");
      }
    } catch (err) {
      alert("An error occurred. Please try again.");
    }
  };
  return (
    <>
      <div className="container">
        <form onSubmit={handleLogin}>
          <div className="card">
            <a className="login">Hospital Militar</a>
            <div className="inputBoxx">
              <input
                type="text"
                name="email" // Este atributo es importante para capturar el valor del input
                required
              />
              <span className="user">email</span>
            </div>

            <div className="inputBoxf">
              <input
                type="password"
                name="password" // Este atributo es importante para capturar el valor del input
                required
              />
              <span>Password</span>
            </div>

            <button type="submit" className="enter">
              Enter
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
