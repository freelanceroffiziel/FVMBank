import React, { useState } from "react";
import defaultAvater from "../../../../assets/icons/icons-careers.webp";
import useAuth from "../../../../context/useAuth";
import { toast } from "react-toastify";

const ImageUploaderCom = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [uploading, setUploading] = useState(false);

  const { uploadProfileImage, user } = useAuth(); 

  const handleImageChange = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile && selectedFile.type.startsWith("image/")) {
      setFile(selectedFile);
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return toast.error("Please select an image.");
    setUploading(true);

    const res = await uploadProfileImage(file); 

    if (res.success) {
      toast.success("Image uploaded successfully!");
      setFile(null);
      setPreview(null);
    } else {
      toast.error(res.message);
    }

    setUploading(false);
  };

  return (
    <main>
      <section className="profileDiv">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-6 px-5 py-10 text-gray-100 bg-teal-800 rounded h-fit"
        >
          <p className="text-[28px] font-semibold text-teal-600">
            Profile Info
          </p>

          <span>
            <img
              src={preview || user?.profileImageUrl || defaultAvater}
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
              className="inline-block px-4 py-2 text-white transition-colors bg-teal-700 rounded cursor-pointer hover:bg-teal-900"
            >
              Choose Profile Image
            </label>
          </span>

          <span className="w-full mt-10">
            <button
              type="submit"
              disabled={uploading}
              className="w-full px-4 py-2 font-semibold text-orange-900 bg-gray-100 rounded hover:bg-gray-300"
            >
              {uploading ? "Uploading..." : "Upload Image"}
            </button>
          </span>
        </form>
      </section>
    </main>
  );
};

export default ImageUploaderCom;
