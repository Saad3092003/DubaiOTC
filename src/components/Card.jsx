export const Card = ({ image, text1, text2 }) => {
  return (
    <div
      className="w-100 d-flex flex-column justify-content-center align-items-center"
      style={{
        maxWidth: "485px",
        borderRadius: "12px",
        background: "white",
        minHeight: "340px",
        paddingTop: "25px",
        paddingBottom: "43px",
      }}
    >
      <div className="d-flex gap-21 flex-column">
        <img src={image} />
      </div>
      <div className="d-flex gap-14 flex-column">
        <div className="card-text">{text1}</div>
        <div className="card-text">{text2}</div>
      </div>
      <div className="d-flex gap-15">
        <div className="btn btn-dark-blue">Register</div>
        <div className="btn btn-dark-blue">Trade</div>
      </div>
    </div>
  );
};
