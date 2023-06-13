import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function OnboardingForm() {
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState(null);
  const [designation, setDesignation] = useState("");
  const [logo, setLogo] = useState(null);
  const [oneLiner, setOneLiner] = useState("");
  const Navigate = useNavigate();

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setPhoto(URL.createObjectURL(file));
  };

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    setLogo(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a unique ID for the profile page
    const id = Math.random().toString(36).substr(2, 9);

    // Store the form data in localStorage
    const formData = {
      id,
      name,
      photo,
      designation,
      logo,
      oneLiner,
    };
    localStorage.setItem("formData", JSON.stringify(formData));

    // Redirect to the profile page with the generated ID
    Navigate(`/profile/${id}`);
  };

  return (
    <div
      className="flex justify-center items-center  cover-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('/back.png')` }}
    >
      <form
        onSubmit={handleSubmit}
        className="max-w-md bg-blue-200 p-6 rounded-lg shadow-2xl"
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">Welcome Onboard</h2>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className="mt-1 block w-full px-3 py-2 bg-blue-50 border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="photo"
            className="block text-sm font-medium text-gray-700"
          >
            Photo
          </label>
          <input
            type="file"
            id="photo"
            accept="image/*"
            className="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100"
            onChange={handlePhotoChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="designation"
            className="block text-sm font-medium text-gray-700"
          >
            Designation
          </label>
          <input
            type="text"
            id="designation"
            className="mt-1 block w-full px-3 py-2 bg-blue-50 border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="logo"
            className="block text-sm font-medium text-gray-700"
          >
            Organization Logo
          </label>
          <input
            type="file"
            id="logo"
            accept="image/*"
            className="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100"
            onChange={handleLogoChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="oneLiner"
            className="block text-sm font-medium text-gray-700"
          >
            One Liner
          </label>
          <input
            type="text"
            id="oneLiner"
            className="mt-1 block w-full px-3 py-2 bg-blue-50 border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            value={oneLiner}
            onChange={(e) => setOneLiner(e.target.value)}
            required
          />
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="py-2 px-4 bg-indigo-500 hover:bg-indigo-600 text-white rounded-md"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default OnboardingForm;
