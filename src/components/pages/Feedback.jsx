import { useState } from "react";
import FeedbackForm from "../FeedbackForm";
import FeedbackSubmitted from "../FeedbackSubmitted";

const Feedback = () => {
  const [renderForm, setRenderForm] = useState(true);

  return (
    <div className="page-view">
      {renderForm ? (
        <FeedbackForm unmount={setRenderForm} />
      ) : (
        <FeedbackSubmitted />
      )}
    </div>
  );
};

export default Feedback;
