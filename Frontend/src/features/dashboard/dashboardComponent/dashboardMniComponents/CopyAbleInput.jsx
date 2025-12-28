import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { RiFileCopyFill } from "react-icons/ri";

const CopyAbleInput = () => {
  const [text] = useState("https://cryptstocks.com/register?ref=Smitcheal12");
  const [copied, setCopied] = useState(false);

  const COPY_TIMEOUT = 2000; // milliseconds

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), COPY_TIMEOUT);
  };

  return (
    <main>
      <section id="copyDiv">
        <div
          id="copyDivSohn"
          className="flex flex-col gap-5 px-3 py-10 bg-teal-900 rounded text-gray-50"
        >
          <div className="text-[24px] md:text-[25px] lg:text-[18px] font-semibold">
            <div className="flex flex-row items-center justify-center gap-2 text-center">
              <span>Copy your</span>
              <span className="text-green-600">
                referral link below and share to your friends & loved ones
              </span>
            </div>
          </div>

          <div className="flex flex-row gap-3.5 items-center">
            <input
              type="text"
              value={text}
              readOnly
              onFocus={(e) => e.target.select()}
              className="lg:w-[30vw] w-[40vw] md:w-[45vw] placeholder:pl-2 py-1 outline-none border-[1px] border-gray-50 rounded focus:placeholder:text-gray-50"
            />
            <CopyToClipboard text={text} onCopy={handleCopy}>
              <button
                aria-label="Copy referral link to clipboard"
                className="bg-green-600 hover:bg-green-600 focus:bg-green-800 text-gray-50 py-1.5 px-2 rounded text-[24px] md:text-[25px] lg:text-[18px] flex flex-row items-center gap-1"
              >
                <RiFileCopyFill />
                {copied ? "Copied" : "Copy"}
              </button>
            </CopyToClipboard>

            {/* ARIA live region for accessibility */}
            <div aria-live="polite" className="sr-only">
              {copied && "Copied to clipboard"}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CopyAbleInput;
