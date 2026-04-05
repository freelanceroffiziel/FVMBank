import React, { useState, useRef, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate, useLocation } from "react-router-dom";
import { verifyOtp, resendOtp } from "../api/authApi";
import "react-toastify/dist/ReactToastify.css";

const VerifyOtp = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [otpValues, setOtpValues] = useState(Array(6).fill(""));
  const [verifying, setVerifying] = useState(false);
  const [timer, setTimer] = useState(60);
  const [resending, setResending] = useState(false);

  const inputsRef = useRef([]);

  const email = location.state?.email;

  useEffect(() => {
    if (timer === 0) return;

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  useEffect(() => {
    if (otpValues.join("").length === 6) {
      handleSubmit();
    }
  }, [otpValues]);

  const handleInputChange = (index, value) => {
    if (/^\d*$/.test(value)) {
      const newOtp = [...otpValues];
      newOtp[index] = value.slice(-1);
      setOtpValues(newOtp);

      if (value && index < 5) {
        inputsRef.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otpValues[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const handleSubmit = async () => {
    const otp = otpValues.join("");

    if (!email) {
      toast.error("Email missing. Please register again.");
      return;
    }

    if (otp.length < 6) {
      toast.error("Enter complete OTP");
      return;
    }

    setVerifying(true);

    try {
      await verifyOtp({ email, otp });

      toast.success("OTP verified successfully!");

      setTimeout(() => {
        navigate("/login", { state: { email } });
      }, 1500);
    } catch (error) {
      toast.error(error.message || "Invalid OTP");
      setVerifying(false);
    }
  };

  const handleResend = async () => {
    if (!email) {
      toast.error("Email missing.");
      return;
    }

    if (timer > 0) return;

    setResending(true);

    try {
      await resendOtp(email);

      toast.success("OTP resent successfully!");
      setTimer(60);
      setOtpValues(Array(6).fill(""));
    } catch (error) {
      toast.error(error.message || "Failed to resend OTP");
    } finally {
      setResending(false);
    }
  };

  return (
    <main className="lg:mt-[22vh] mt-[15vh] md:mt-[20vh] w-full">
      <section className="lg:max-w-md md:max-w-2xl max-w-[25rem] mx-auto flex flex-col gap-6 bg-white px-6 py-12 rounded-lg shadow-lg text-navyBlue">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-[35px] font-serif font-semibold text-teal-800">
            Verify OTP
          </h1>
          <p className="text-center text-gray-500">
            Enter the 6-digit code sent to your email
          </p>
        </div>

        <ToastContainer />
        <div className="flex justify-center gap-3 mt-4">
          {otpValues.map((digit, idx) => (
            <input
              key={idx}
              ref={(el) => (inputsRef.current[idx] = el)}
              type="text"
              value={digit}
              onChange={(e) => handleInputChange(idx, e.target.value)}
              onKeyDown={(e) => handleKeyDown(idx, e)}
              maxLength="1"
              className="w-12 text-xl font-bold text-center border-2 border-teal-600 rounded-lg h-14 focus:outline-none focus:ring-2 focus:ring-teal-600"
            />
          ))}
        </div>

        <button
          onClick={handleSubmit}
          disabled={verifying}
          className="w-full p-3 mt-4 text-xl text-white bg-teal-600 rounded-lg hover:bg-teal-700 disabled:opacity-50"
        >
          {verifying ? "Verifying..." : "Verify OTP"}
        </button>
        <p className="mt-2 text-center text-gray-500">
          {timer > 0 ? (
            <>
              Resend OTP in <span className="text-teal-600">{timer}s</span>
            </>
          ) : (
            <span
              onClick={handleResend}
              className="text-teal-600 cursor-pointer hover:underline"
            >
              {resending ? "Resending..." : "Resend OTP"}
            </span>
          )}
        </p>
      </section>
    </main>
  );
};

export default VerifyOtp;
