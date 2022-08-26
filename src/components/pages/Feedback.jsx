import { useState } from "react";
import FeedbackForm from "../FeedbackForm";
import FeedbackSubmitted from "../FeedbackSubmitted";

const Feedback = () => {
  const [renderForm, setRenderForm] = useState(true);

  return (
    <div className="page-view">
      <div className="container">
        {renderForm ? (
          <FeedbackForm unmount={setRenderForm} />
        ) : (
          <FeedbackSubmitted />
        )}
      </div>
    </div>
  );
};

export default Feedback;
