import { useState } from "react";

const FeedbackForm = (props) => {
  const API_URL = "";
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");

  const onSubmitAction = async (event) => {
    event.preventDefault();
    const form = event.target;

    const formData = {
      firstName: form.firstName.value,
      lastName: form.lastName.value,
      email: form.email.value,
      message: form.message.value,
    };

    // Send JSON of submitted form data to API endpoint
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData), // body data type must match "Content-Type" header
    };

    await fetch(API_URL, requestOptions)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    // flip switch for displaying success screen
    props.unmount();
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="col-md-8 col-lg-6">
        <form
          className="d-flex flex-column p-3 feedback-form"
          onSubmit={onSubmitAction}
        >
          <h2 className="form-title">Contact Form</h2>
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            value={firstName}
            onChange={(event) => {
              setFirstName(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            name="lastName"
            onChange={(event) => {
              setLastName(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Email"
            value={email}
            name="email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <textarea
            type="text"
            placeholder="Message goes here"
            value={feedback}
            name="message"
            onChange={(event) => {
              setFeedback(event.target.value);
            }}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
