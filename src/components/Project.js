const Project = ({ imgSrc, imgAlt, projDesc, invert }) => {
  return (
    <div className={invert ? `row project invert` : "row project"}>
      <div className="col-lg-3 d-flex justify-content-center">
        <img src={imgSrc} className={`${imgAlt}-img proj-img`} alt={imgAlt} />
      </div>
      <div className="col-lg-9">
        <p>{projDesc}</p>
      </div>
    </div>
  );
};
export default Project;
