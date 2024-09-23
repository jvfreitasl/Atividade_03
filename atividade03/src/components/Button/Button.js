import "./Button.css";

const Button = ({ textButton, ...props }) => {
  return (
    <button className={props.name} type={props.type}>
      {textButton}
    </button>
  );
};

export default Button;
