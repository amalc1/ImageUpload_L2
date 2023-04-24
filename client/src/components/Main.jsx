import React, { useEffect, useState } from "react";
import { API } from "../api/fileUploadRequests";

const Main = () => {
  const [image, setImage] = useState(null);
  const [uploadedImages, setUploadedImages] = useState([]);

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("image", image);

    try {
      const response = await API.post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      const imageURL = response.data.imageURL;
      setImage(null);
      fetchImages();
    } catch (error) {
      console.log("Failed to upload image", error);
    }
  };

  const fetchImages = async () => {
    try {
      const response = await API.get("/images");
      setUploadedImages(response.data);
    } catch (error) {
      console.error("Failed to fetch images:", error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <>
      <div className="container mx-auto mt-16 ml-5">
        <form className="flex mb-5" onSubmit={handleFormSubmit}>
          <input
            type="file"
            name="image"
            className="mr-3"
            onChange={handleImageChange}
          />
          <button
            type="submit"
            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded"
          >
            Upload
          </button>
        </form>
        <div className="flex flex-wrap">
          {uploadedImages.map((image) => (
            <img
              key={image._id}
              src={image.imageURL}
              alt="Uploaded"
              className="w-32 h-32 object-cover mr-5 mb-5"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Main;
