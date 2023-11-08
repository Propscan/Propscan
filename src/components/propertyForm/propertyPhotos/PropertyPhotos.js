import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import "./PropertyPhotos.css";

function PropertyPhoto(props) {
  const fileTypes = ["JPG", "PNG", "GIF"];
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };
  return (
    <div>
      <button
        onClick={() => props.updateFormPage("decrease")}
        type="button"
        className=" butto2"
      >
        Back
      </button>
      <div>
        <p className="para_text">Add photos of your property (optional)</p>
      </div>
      <div>
        <p className="para_text1">
          A picture is worth a thousand words.87% of buyers look at photos
          before buying
        </p>
      </div>
      <div>
        <p className="para_text2">Upload from desktop </p>
      </div>
      <div>
        <FileUploader
          handleChange={handleChange}
          name="file"
          types={fileTypes}
        />
      </div>
      <div style={{ display: "flex" }}>
        <div>
          <button
            type="submit"
            className="button"
            onClick={() => props.updateFormPage("increase")}
            style={{ marginTop: "25vh", marginLeft: "2vh" }}
          >
            Continue
          </button>
        </div>
        <div>
          <button
            type="submit"
            className="button"
            onClick={() => props.updateFormPage("increase")}
            style={{ marginTop: "25vh", marginLeft: "2vh" }}
          >
            Skip
          </button>
        </div>
      </div>
    </div>
  );
}

export default PropertyPhoto;
