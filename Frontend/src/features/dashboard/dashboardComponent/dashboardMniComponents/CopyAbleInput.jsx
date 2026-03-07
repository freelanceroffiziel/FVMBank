import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { RiFileCopyFill } from "react-icons/ri";

const CopyAbleInput = () => {
  const [text] = useState(
    "https://cryptstocks.com/register?ref=Smitcheal12"
  );
  const [copied, setCopied] = useState(false);

  const COPY_TIMEOUT = 2000; // 2 seconds

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), COPY_TIMEOUT);
  };

  return (
    <section className="flex flex-col gap-6 p-6 bg-teal-900 rounded-xl shadow-xl text-gray-50">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-lg md:text-xl lg:text-lg font-semibold">
          Share Your Referral Link
        </h2>
        <p className="mt-1 text-sm md:text-base text-gray-200">
          Copy the link below and share it with friends & loved ones
        </p>
      </div>

      {/* Input + Copy Button */}
      <div className="flex flex-col md:flex-row gap-3 items-center justify-center">
        <input
          type="text"
          value={text}
          readOnly
          onFocus={(e) => e.target.select()}
          className="w-full md:w-[60%] lg:w-[50%] px-3 py-2 rounded border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-600 placeholder-gray-400"
        />

        <CopyToClipboard text={text} onCopy={handleCopy}>
          <button
            aria-label="Copy referral link to clipboard"
            className={`flex items-center gap-2 px-4 py-2 rounded font-semibold transition ${
              copied
                ? "bg-green-600 hover:bg-green-700"
                : "bg-teal-600 hover:bg-teal-700"
            } text-white`}
          >
            <RiFileCopyFill className="text-lg" />
            {copied ? "Copied!" : "Copy"}
          </button>
        </CopyToClipboard>
      </div>

      {/* Screen reader notification */}
      <div aria-live="polite" className="sr-only">
        {copied && "Copied to clipboard"}
      </div>
    </section>
  );
};

export default CopyAbleInput;