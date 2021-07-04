const Project = ({ imgSrc, imgAlt, projName, projDesc, invert }) => {
  return (
    <div className={invert ? `row project invert` : "row project"}>
      <div className="col-lg-3 d-flex justify-content-center">
        <img src={imgSrc} className={`${imgAlt}-img proj-img`} alt={imgAlt} />
      </div>
      <div className="col-lg-9">
        <h4>{projName}</h4>
        <p>{projDesc}</p>
      </div>
    </div>
  );
};
export default Project;
