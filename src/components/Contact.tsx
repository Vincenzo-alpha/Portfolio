function Contact() {
  return (
    <>
      <div id="contact" className="container pb-5">
        <h1>CONTACT</h1>
        <div className="contact-container">
          <form action="">
            <div className="row justify-content-center align-item-center">
              <div className="col-6">
                <input
                  className="form-control"
                  placeholder="ENTER YOUR NAME"
                  type="text"
                />
              </div>
              <div className="col-6">
                <input
                  className="form-control"
                  placeholder="ENTER YOUR EMAIL"
                  type="email"
                />
              </div>
              <div className="col-6">
                <input
                  className="form-control"
                  placeholder="ENTER YOUR PHONE"
                  type="telephone"
                />
              </div>
              <div className="col-6">
                <textarea className="form-control" placeholder="YOUR MESSAGE" />
              </div>
              <div className="col-6">
                <center>
<button
                  type="submit"
                  className="btn btn-dark mx-auto"
                >
                  <strong>| Submit |</strong>
                </button>
                </center>
                
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

Contact.propTypes = {};

export default Contact;
