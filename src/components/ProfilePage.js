import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProfilePage() {
  const { id } = useParams();
  const [formDetails, setFormDetails] = useState(null);

  useEffect(() => {
    // Retrieve the form data from localStorage
    const storedData = localStorage.getItem("formData");
    if (storedData) {
      const formData = JSON.parse(storedData);
      if (formData.id === id) {
        setFormDetails(formData);
      }
    }
  }, [id]);

  if (!formDetails) {
    // Display a loading state or handle the case when form details are not found
    return <p>No form details found for the given ID.</p>;
  }

  const backgroundImageStyle = {
    backgroundImage: `url(${formDetails.photo})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div
      className="flex justify-center items-center h-screen cover-full  bg-cover bg-center border-l-purple-400"
      style={{ backgroundImage: `url('/back.png')` }}
    >
      <div class="max-w-lg py-1 px-1 bg-blue-200 drop-shadow-xl rounded-lg my-20 ">
        <div class="flex justify-center md:justify-end -mt-11">
          <img
            class="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
            alt="imag"
            src={formDetails.logo}
          />
        </div>
        <div className="p-6 max-w-5xl mx-auto bg-blue-200 rounded-sm flex items-center space-x-8">
          <div className="">
            <img
              class=" border-2 border-indigo-500  rounded-md"
              alt="imag"
              src={formDetails.photo}
            />
          </div>
          <div className="w-90">
            <h2 class="text-gray-800 text-xl font-extrabold">
              {formDetails.name}
            </h2>
            <div className="bg-green-500 rounded-3xl w-40">
              <p class="mt-2 text-white ml-3">{formDetails.designation}</p>
            </div>

            <p class="mt-2 text-grey-500 p-">{formDetails.oneLiner}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
