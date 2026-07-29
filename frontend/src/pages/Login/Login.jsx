import { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login() {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        try {

            const response = await fetch("http://localhost:5000/api/users/login", {

                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                },

                body: JSON.stringify({
                    email,
                    password,
                }),

            });

            const data = await response.json();

            if (response.ok) {

                alert(data.message);

                localStorage.setItem("token", data.token);

                setEmail("");
                setPassword("");

                window.location.href = "/";
                
            } else {

                alert(data.message);

            }

        } catch (error) {

            console.log(error);

            alert("Something went wrong");

        }
    };

    return (

        <div className="login-container">

            <div className="login-box">

                <h2>Login</h2>

                <form onSubmit={handleLogin}>

                    <input
                        type="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input
                        type="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button type="submit">
                        Login
                    </button>

                </form>

            </div>

        </div>

    );
}

export default Login;