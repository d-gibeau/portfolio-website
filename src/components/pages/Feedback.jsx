import { useState } from "react";

const Feedback = () => {
    const [firstName, setFirstName] = useState("");
    
    return (
        <form>
            <label>First Name:
                <input
                    type='text'
                    value={firstName}
                    onChange={(event) => {setFirstName(event.target.value)}}
                />
            </label>
        </form>
    );
}

export default Feedback;
