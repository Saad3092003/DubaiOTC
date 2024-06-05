export const Card = ({ image, text1, text2, link1, link2 }) => {
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
      data-aos="fade-up"
    >
      <div className="d-flex gap-21 flex-column">
        <img alt="DubaiOTC" src={image} />
      </div>
      <div className="d-flex gap-14 flex-column px-4">
        <div className="card-text">{text1}</div>
        <div className="card-text">{text2}</div>
      </div>
      <div className="d-flex gap-15">
        <a href={link1} target="_blank">
          <div className="btn btn-dark-blue">Register</div>
        </a>
        <a href={link2} target="_blank">
          <div className="btn btn-dark-blue">Trade</div>
        </a>
      </div>
    </div>
  );
};
