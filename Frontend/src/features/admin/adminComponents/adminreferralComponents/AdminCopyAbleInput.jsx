import React, { useState } from "react";
import { RiFileCopyFill } from "react-icons/ri";
import useAuth from "../../../../context/useAuth";

const AdminCopyAbleInput = () => {
  const { referralName } = useAuth();
  const [copied, setCopied] = useState(false);
  const COPY_TIMEOUT = 2000;

  const referralLink = referralName
    ? `${window.location.origin}/signUp?ref=${referralName}`
    : "";

  const handleCopy = async () => {
    if (!referralName) return;

    try {
      await navigator.clipboard.writeText(referralLink);
      setCopied(true);
      setTimeout(() => setCopied(false), COPY_TIMEOUT);
    } catch (err) {
      console.error("❌ Failed to copy text: ", err);
    }
  };

  return (
    <main className="text-teal-900">
      <section className="flex flex-col gap-5 px-4 py-8 border border-teal-700 bg-white rounded text-gray-800 max-w-3xl mx-auto">
        <div className="text-lg md:text-xl font-semibold text-center">
          Share your{" "}
          <span className="text-teal-800 font-bold">referral link</span> with
          friends and loved ones!
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <input
            type="text"
            value={referralLink || "Loading referral link..."}
            readOnly
            onFocus={(e) => e.target.select()}
            className="w-full sm:w-[70%] py-2 px-3 border border-teal-700 rounded outline-none text-sm sm:text-base"
          />

          <button
            onClick={handleCopy}
            disabled={!referralName}
            aria-label="Copy referral link to clipboard"
            className={`flex items-center gap-2 px-4 py-2 text-white rounded transition-colors text-sm sm:text-base ${
              referralName
                ? "bg-teal-600 hover:bg-teal-700 focus:bg-teal-800"
                : "bg-teal-400 cursor-not-allowed"
            }`}
          >
            <RiFileCopyFill className="text-lg" />
            {copied ? "Copied!" : "Copy"}
          </button>

          {/* Screen Reader Feedback */}
          <span role="status" className="sr-only">
            {copied && "Referral link copied to clipboard"}
          </span>
        </div>
      </section>
    </main>
  );
};

export default AdminCopyAbleInput;
