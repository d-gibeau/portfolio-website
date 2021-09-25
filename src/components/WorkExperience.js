const WorkExperience = ({
  company,
  title,
  location,
  startDate,
  endDate,
  descriptors,
}) => {
  let listItems = [];
  for (let idx = 0; idx < descriptors.length; idx++) {
    listItems.push(<li key={idx}>{descriptors[idx]}</li>);
  }

  return (
    <div className="cv-work-exp-item">
      <h5>
        {company} - {title}
      </h5>
      <p>
        <span className="soft-text">{location}</span>
      </p>
      <p>
        <span className="soft-text">
          {startDate} - {endDate}
        </span>
      </p>
      <ul>{listItems}</ul>
    </div>
  );
};

export default WorkExperience;
