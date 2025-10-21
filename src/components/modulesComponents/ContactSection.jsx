import React, { useState } from "react";
import { postData } from "../../assets/utils/getData";
import { toast } from "react-toastify";

const ContactSection = ({ content }) => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });
  const [laoding, setLoading] = useState(false);
  const [submitResponse, setSubmitResponse] = useState({
    success: false,
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log("Form Data:", formData);
    const response = await postData("contact", formData);
    console.log("response : ", response);

    if (response.status === "success") {
      setLoading(false);
      setSubmitResponse({
        success: true,
        message: response.message
      })
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        message: "",
      });
    } else if (response.status === "error") {
      setLoading(false);
      setSubmitResponse((prev) => ({
        ...prev,
        message: response.message
      }))
    }
  };

  return (
    <section className="section-box mb-200">
      <div className="container mb-20 mt-140">
        <div className="bdrd-58 box-gray-100 bg-7">
          <div className="row">
            <div className="col-lg-12 mb-60">
              <span className="text-body-capitalized text-uppercase">
                Contact us
              </span>
              <h2 className="text-heading-3 color-gray-900 mt-10">
                Let’s talk about your next move
              </h2>
              <p className="text-body-text col-lg-4 color-gray-600 mt-20">
                Every great strategy begins with a conversation. Contact us and
                let’s make your ideas happen.
              </p>
            </div>
            <div className="col-lg-4 mb-40">
              <h4 className="text-heading-6 col-lg-6 color-gray-900 mb-10 mt-10">
                {content?.company_name}
              </h4>
              <p className="text-body-text col-lg-5 color-gray-600 mb-30">
                {content?.company_address}
              </p>
              <p className="text-body-text color-gray-600">
                <a className="underline color-gray-600" href={`tel:${content?.phone}`}>
                  {content?.phone}
                </a>
              </p>
              <p className="text-body-text color-gray-600">
                <a
                  className="underline color-gray-600"
                  href={`mailto:${content?.email}`}
                >
                  {content?.email}
                </a>
              </p>
            </div>

            <div className="col-lg-8">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Company (optional)"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your email"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone number"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about yourself"
                        required
                      ></textarea>
                    </div>
                  </div>
                  <div className="d-flex flex-column flex-md-row align-items-center gap-4 mt-15">
                    <button
                      className={`send_message_btn btn ${submitResponse.success ? "icon-success-white btn-success" : "icon-arrow-right-white btn-black"} mb-20`}
                      type="submit"
                      disabled={laoding || submitResponse.success}
                    >
                      {laoding ? "Sending..." : "Send Message"}
                    </button>
                    {submitResponse.message !== "" && <p className="send_message_success">{submitResponse.message}</p>}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
