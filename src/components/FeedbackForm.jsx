import { useState } from "react";

const FeedbackForm = (props) => {
  const API_URL = "https://localhost:7282/api/feedback";
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");

  const onSubmitAction = async (event) => {
    event.preventDefault();
    const form = event.target;

    // const formData = {
    //   firstName: form.firstName.value,
    //   lastName: form.lastName.value,
    //   email: form.email.value,
    //   message: form.message.value,
    // };

    // // Send JSON of submitted form data to API endpoint
    // const requestOptions = {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(formData), // body data type must match "Content-Type" header
    // };

    // await fetch(API_URL, requestOptions)
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     console.log("Success:", data);
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //   });

    // flip switch for displaying success screen
    props.unmount();
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="col-md-8 col-lg-6 rounded form-backdrop px-lg-5 py-lg-3 mx-3 my-3">
        <form
          className="d-flex flex-column pt-3 feedback-form"
          onSubmit={onSubmitAction}
        >
          <h2 className="form-title mb-4">Contact Form</h2>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="firstName">First Name</label>
              <input
                type="text"
                placeholder="First Name"
                name="firstName"
                id="firstName"
                className="form-control"
                value={firstName}
                onChange={(event) => {
                  setFirstName(event.target.value);
                }}
              />
            </div>
            <div className="form-group col-md-6">
              <label for="lastName">Last Name</label>
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                id="lastName"
                className="form-control"
                value={lastName}
                onChange={(event) => {
                  setLastName(event.target.value);
                }}
              />
            </div>
          </div>
          <div className="form-group">
            <label for="email">Email</label>
            <input
              type="text"
              placeholder="Email"
              name="email"
              id="email"
              className="form-control"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label for="message">Message</label>
            <textarea
              type="text"
              placeholder="Message goes here"
              name="message"
              id="message"
              className="form-control"
              value={feedback}
              onChange={(event) => {
                setFeedback(event.target.value);
              }}
            />
          </div>
          <div className="form-group submit-button mt-3">
            <button
              type="submit"
              className="btn btn-primary col-lg-6 col-md-12"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
