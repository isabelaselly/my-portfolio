function Contact() {
    return (
      <div className="contact">
        <h2>Contact Me</h2>
        <form>
          <label>Name: <input type="text" required /></label>
          <label>Email: <input type="email" required /></label>
          <label>Message: <textarea required></textarea></label>
          <button type="submit">Send</button>
        </form>
      </div>
    );
  }
  
  export default Contact;
  