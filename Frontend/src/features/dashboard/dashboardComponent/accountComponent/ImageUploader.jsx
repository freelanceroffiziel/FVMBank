import { useState } from "react";
import defaultAvater from "../../../../assets/icons/image.png";
import AccountInfoUpdate from "./AccountInfoUpdate";
import PasswordUpdate from "./PasswordUpdate";

const ImageUploader = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <main id="vater" className="">
      <section id="sohn" className="">
        <div id="firstDivCon" className="grid gap-6 lg:grid-cols-2 ">
          <div
            id="firstDivSohnCon"
            className="px-5 py-10 text-gray-100 bg-teal-900 rounded h-fit "
          >
            <form
              action=""
              className="flex flex-col items-center gap-6 "
              onSubmit={handleSubmit}
            >
              <p className="flex flex-row items-center gap-2  text-[28px] md:text-[22px] lg:text-[30px] font-semibold text-green-600 ">
                Change <p className="font-bold text-orange-600 "> your</p>{" "}
                <p className="text-gray-300"> Profile Picture</p>
              </p>
              <span>
                <img
                  src={image || defaultAvater}
                  alt="Profile Preview"
                  className="h-[150px] w-[150px] rounded-full object-cover"
                />
              </span>

              <span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                  id="fileUpload"
                />
                <label
                  htmlFor="fileUpload"
                  className="inline-block px-4 py-2 text-white transition-colors bg-green-700 rounded cursor-pointer hover:bg-green-800"
                >
                  Choose Profile Image
                </label>
              </span>

              <span className="w-full mt-10">
                <button
                  type="submit"
                  className="w-full px-4 py-2 font-semibold text-orange-900 bg-gray-100 rounded hover:bg-gray-300"
                >
                  Update Info
                </button>
              </span>
            </form>
          </div>

          <div id="accountInFoUpdate">
            <AccountInfoUpdate />
          </div>

          <div id="passwordUpdateCon">
            <PasswordUpdate />
          </div>
        </div>
      </section>
    </main>
  );
};

export default ImageUploader;
