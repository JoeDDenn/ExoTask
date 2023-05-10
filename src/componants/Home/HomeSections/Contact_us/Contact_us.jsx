import React from "react";
import "./contact_us.css";
const contact_us = () => {
  return (
    <>
      <section className="custom_contact pt-3" id="contactus">
        <div className="container-fluid ContactUsContainer">
          <div className="row form-contact">
            <div className="col-md-6 ">
              <div className="contact-form">
                <form>
                  <div className="row ">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>First Name</label>
                        <input
                          type="text"
                          className="form-control homeForm"
                          required="required"
                          placeholder="First Name"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Last Name</label>
                        <input
                          type="text"
                          className="form-control homeForm"
                          required="required"
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input
                      type="email"
                      className="form-control homeForm"
                      required="required"
                      placeholder="Email Address"
                    />
                  </div>
                  <div className="form-group">
                    <label>Subject</label>
                    <input
                      type="text"
                      className="form-control homeForm"
                      required="required"
                      placeholder="Subject"
                    />
                  </div>
                  <div className="form-group">
                    <label>Message</label>
                    <textarea
                      className="form-control homeForm"
                      rows="4"
                      required="required"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn  btn-contact_uss">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default contact_us;
