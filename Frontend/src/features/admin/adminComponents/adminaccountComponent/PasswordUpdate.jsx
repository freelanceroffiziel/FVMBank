import React, { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import useAuth from "../../../../context/useAuth";
import { RiEyeOffFill } from "react-icons/ri";
import { FiEye } from "react-icons/fi";

const PasswordUpdate = () => {
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showRetype, setShowRetype] = useState(false);

  const { updatePassword } = useAuth();

  const initialValues = {
    currentPassword: "",
    newPassword: "",
    reTypePassword: "",
  };

  const validationSchema = Yup.object({
    currentPassword: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Current password is required"),
    newPassword: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .matches(/[A-Z]/, "Must include at least one uppercase letter")
      .matches(/[a-z]/, "Must include at least one lowercase letter")
      .matches(/\d/, "Must include at least one number")
      .matches(/[@$!%*?&#]/, "Must include a special character")
      .required("New password is required"),
    reTypePassword: Yup.string()
      .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
      .required("Please confirm your new password"),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    const { currentPassword, newPassword } = values;

    const { success, message } = await updatePassword(
      currentPassword,
      newPassword
    );

    if (success) {
      toast.success(message);
      resetForm();
    } else {
      toast.error(message);
    }

    setSubmitting(false);
  };

  return (
    <main>
      <div
        id="passwordUpdateCon"
        className="text-gray-100 bg-teal-800 rounded "
      >
        <div id="passwordUpdateSon" className="flex flex-col gap-8 px-5 py-10">
          <span className="flex flex-row items-center justify-center ">
            <p className="flex flex-row items-center gap-2  text-[28px] md:text-[22px] lg:text-[30px] font-semibold text-teal-600 ">
              Change your
              <p className="text-gray-300"> Password</p>
            </p>
          </span>

          <div id="formsGenCon">
            <ToastContainer />
            <Formik
              onSubmit={handleSubmit}
              validationSchema={validationSchema}
              initialValues={initialValues}
            >
              {({ isSubmitting }) => (
                <Form className="flex flex-col gap-4 ">
                  <div
                    id="currentPasswordDiv"
                    className="flex flex-col gap-2 relative "
                  >
                    <label htmlFor="currentPassword">Current Password</label>
                    <Field
                      type={showCurrent ? "text" : "password"}
                      name="currentPassword"
                      className="outline-none border-[1px] rounded-md border-gray-100 pl-1 py-1.5"
                      placeholder="Enter Current Password"
                      autoComplete="current-password"
                    />
                    <ErrorMessage
                      name="currentPassword"
                      component="div"
                      className="text-red-500 lg:text-[14px] md:text-[27px] text-[20px]"
                    />
                    <div
                      id="menuIcon"
                      className="p-  absolute top-10 right-2 text-white "
                    >
                      {showCurrent ? (
                        <FiEye
                          className="text-[33px] md:text-[35px] lg:text-[25px] font-extrabold"
                          onClick={() => setShowCurrent(false)}
                        />
                      ) : (
                        <RiEyeOffFill
                          className="text-[33px] md:text-[35px] lg:text-[25px] font-extrabold"
                          onClick={() => setShowCurrent(true)}
                        />
                      )}
                    </div>
                  </div>

                  <div
                    id="newPasswordDiv"
                    className="flex flex-col gap-2 relative "
                  >
                    <label htmlFor="newPassword">New Password</label>
                    <Field
                      type={showNew ? "text" : "password"}
                      name="newPassword"
                      className="outline-none border-[1px] rounded-md border-gray-100 pl-1 py-1.5"
                      placeholder="Enter New Password"
                      autoComplete="new-password"
                    />
                    <ErrorMessage
                      name="newPassword"
                      component="div"
                      className="text-red-500 lg:text-[14px] md:text-[27px] text-[20px]"
                    />

                    <div
                      id="menuIcon"
                      className="p-  absolute top-10 right-2 text-white "
                    >
                      {showNew ? (
                        <FiEye
                          className="text-[33px] md:text-[35px] lg:text-[25px] font-extrabold"
                          onClick={() => setShowNew(false)}
                        />
                      ) : (
                        <RiEyeOffFill
                          className="text-[33px] md:text-[35px] lg:text-[25px] font-extrabold"
                          onClick={() => setShowNew(true)}
                        />
                      )}
                    </div>
                  </div>

                  <div
                    id="reTypePasswordDiv"
                    className="flex flex-col gap-2 relative "
                  >
                    <label htmlFor="reTypePassword">ReType Password</label>
                    <Field
                      type={showRetype ? "text" : "password"}
                      name="reTypePassword"
                      className="outline-none border-[1px] rounded-md border-gray-100 pl-1 py-1.5"
                      autoComplete="retype-password"
                      placeholder="ReType Password"
                    />
                    <ErrorMessage
                      name="reTypePassword"
                      component="div"
                      className="text-red-500 lg:text-[14px] md:text-[27px] text-[20px]"
                    />

                    <div
                      id="menuIcon"
                      className="p-  absolute top-10 right-2 text-white "
                    >
                      {showRetype ? (
                        <FiEye
                          className="text-[33px] md:text-[35px] lg:text-[25px] font-extrabold"
                          onClick={() => setShowRetype(false)}
                        />
                      ) : (
                        <RiEyeOffFill
                          className="text-[33px] md:text-[35px] lg:text-[25px] font-extrabold"
                          onClick={() => setShowRetype(true)}
                        />
                      )}
                    </div>
                  </div>

                  <div className="w-full mt-6">
                    <button
                      type="submit"
                      className="w-full px-4 py-2 font-semibold text-orange-900 bg-gray-100 rounded hover:bg-gray-300 "
                    >
                      {isSubmitting
                        ? " Updating Password..."
                        : " Update Password "}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PasswordUpdate;
