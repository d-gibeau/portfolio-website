const WorkExperience = ({
  company,
  title,
  place,
  startDate,
  endDate,
  descriptors,
}) => {
  let listItems = [];
  for (let idx = 0; idx < descriptors.length; idx++) {
    listItems.push(<li key={idx}>{descriptors[idx]}</li>);
  }

  return (
    <div className="cv-work-exp-item card m-2">
      <div className="card-header work-exp-header">
        <h5 className="mt-1">
          <span className="font-weight-bold">{company}</span>
          <br /> {title}
        </h5>
      </div>
      <div className="card-body">
        <p className="card-subtitle font-italic">{place}</p>
        <p className="text-muted">
          {startDate} - {endDate}
        </p>
        <ul>{listItems}</ul>
      </div>
    </div>
  );
};

export default WorkExperience;
