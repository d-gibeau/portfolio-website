import { useState } from "react";

const FeedbackForm = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");

  const onSubmitAction = (event) => {
    event.preventDefault();


    // Send JSON of submitted form data to API endpoint
    props.unmount();
  }

  return (
    <form className="d-flex flex-column p-3 feedback-form" onSubmit={onSubmitAction}>
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(event) => {
          setFirstName(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(event) => {
          setLastName(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      <textarea
        type="text"
        placeholder="Feedback goes here!"
        value={feedback}
        onChange={(event) => {
          setFeedback(event.target.value);
        }}
      />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default FeedbackForm;
