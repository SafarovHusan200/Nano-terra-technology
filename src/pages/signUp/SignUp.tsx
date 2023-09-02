import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./signup.scss";

export default function SignUp() {
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("SignUp Successfully!", {
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

          <div className="iiv">
            <label htmlFor="iiv">IIV</label>
            <input
              type="text"
              id="iiv"
              name="iiv"
              placeholder={"Enter your login"}
            />
          </div>
          <div className="vii">
            <label htmlFor="vii">VIIB Boshqarmasi</label>
            <input
              type="text"
              id="vii"
              name="vii"
              placeholder={"Enter your login"}
            />
          </div>
          <div className="tiib">
            <label htmlFor="tiib">Tuman IIBo'lim</label>
            <input
              type="text"
              id="tiib"
              name="tiib"
              placeholder={"Enter your login"}
            />
          </div>
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
          <button className="btn">Ro'yhatdan o'tish</button>

          <div className="signup">
            <Link to="/">Kirish</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
