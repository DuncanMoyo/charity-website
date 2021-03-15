import { useState } from "react";
import "./ContactUs.css";
import { firestore } from "../../../firebase";
import { toast } from "react-toastify";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    firestore.collection("messages")
      .add({
        name,
        email,
        message,
      })
      .then(() => {
        toast.success("Message has been submitted");
        setLoader(false);
      })
      .catch((error) => {
        toast.error(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="contact-form">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Get in touch with us</h1>

        <label>Name</label>
        <input
          placeholder="Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Email</label>
        <input
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Message</label>
        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <button
          type="submit"
          style={{ background: loader ? "#ccc" : "rgb(2, 2, 110" }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
