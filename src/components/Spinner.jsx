import loader from "../assets/spinner.gif";

const Spinner = () => {
  return (
    <img
      src={loader}
      alt="Učitava se"
      style={{ display: "block", margin: "auto", width: "80px" }}
    />
  );
};

export default Spinner;
