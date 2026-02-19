import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const ContactForm = () => {
  const phoneNumber = +14148854567;

  const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const ContactSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    subject: Yup.string().required("Subject is required"),
    message: Yup.string().required("Message is required"),
  });
  return (
    <main>
      <section className="flex flex-col items-center justify-between py-20 lg:flex-row bg-teal-950/0 lg:gap-10 ">
        <section className="w-full textSection ">
          <div className="flex flex-col gap-2 text-gray-700 ">
            <div className="mb-4">
              <h3 className="lg:text-[35px] text-[23px] lg:leading-9.5 font-sans text-teal-900 tracking-wide  font-semibold">
                Get Your Instant Free Response Now!!!
              </h3>
              <p className="mt-1 text-teal-600 lg:text-[16px] text-[18px] ">
                Ready to get answers fast? Submit your details below and receive
                a prompt, personalized response from our team — completely free.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold tracking-wide text-teal-900 ">
                Our Office
              </h3>
              <p className="mt-1 text-teal-600">
                123 Main Street City, Country 12345
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold tracking-wide text-teal-900 ">
                Email
              </h3>
              <p className="mt-1 text-teal-600">IconicBank@gmail.com</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold tracking-wide text-teal-900 ">
                Phone
              </h3>
              <p className="mt-1"> +1 (414) 885 - 4567</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold tracking-wide text-teal-900 ">
                WhatsApp Chat
              </h3>
              <a
                href={`https://wa.me/${phoneNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 hover:text-teal-700 "
              >
                +1 (414) 885 - 4567
              </a>
            </div>
          </div>
        </section>

        {/* mdddle */}

        <section className="relative w-full py-4 px-4 bg-white border-gray-200 shadow border-[1px] backdrop-blur-md  rounded-3xl lg:mt-0 mt-20 ">
          <div className="w-full ">
            <Formik
              initialValues={initialValues}
              validationSchema={ContactSchema}
              onSubmit={(values, { resetForm }) => {
                console.log("Form data:", values);
                resetForm();
              }}
            >
              {({ isSubmitting }) => (
                <Form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <Field
                      type="text"
                      name="name"
                      placeholder="Your name"
                      className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="mt-1 text-sm text-red-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <Field
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="mt-1 text-sm text-red-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Subject
                    </label>
                    <Field
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <ErrorMessage
                      name="subject"
                      component="div"
                      className="mt-1 text-sm text-red-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <Field
                      as="textarea"
                      name="message"
                      rows="5"
                      placeholder="Write your message..."
                      className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <ErrorMessage
                      name="message"
                      component="div"
                      className="mt-1 text-sm text-red-500"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-2 text-white transition duration-200 rounded-md bg-gradient-to-r from-teal-800 to-teal-600 hover:opacity-90"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </section>
      </section>
    </main>
  );
};

export default ContactForm;
