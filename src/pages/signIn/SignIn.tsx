import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./signin.scss";

export default function SignIn() {
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Login Successfully!", {
      position: "top-right", // Optional: Toast position
      autoClose: 2000, // Optional: Close delay in milliseconds
    });
    navigate("/dashboard");
  };
  return (
    <div className="signin">
      <div className="col-50 signin-left">
        <img src="/logo.png" alt="" />
        <p className="signin_text">
          Lorem ipsum dolor sit amet consectetur. Pretium aliquet ac molestie
          lacus. Faucibus arcu aliquam nullam nunc dictumst.
        </p>
      </div>
      <div className="col-50">
        <form className="form" onSubmit={handleSubmit}>
          <h3 className="title">Tizimga kirish</h3>

          <div className="login">
            <label htmlFor="login">Login</label>
            <input
              type="text"
              id="login"
              name="login"
              placeholder={"rahbar_admin"}
            />
          </div>
          <div className="parol">
            <label htmlFor="parol">Parol</label>
            <input type="password" id="parol" name="parol" />
          </div>
          <button className="btn">Kirish</button>

          <div className="signup">
            <Link to="signup">Ro'yhatdan o'tish</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
