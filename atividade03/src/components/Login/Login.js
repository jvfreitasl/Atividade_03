import "./Login.css";

const Login = ({ textName, ...props }) => {
  return (
    <div className="caixaLogin">
      <label className={props.name} type={props.type}>{textName}:</label>
      <input className={props.name} type={props.type}></input>
    </div>
  );
};

export default Login;
