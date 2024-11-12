import "./Button.css";

const Buttom = ({ text, type, onClick }) => {
  return (
    <button onClick={onClick} className={`Button Button_${type}`}>
      {text}
    </button>
  );
};

export default Buttom;
