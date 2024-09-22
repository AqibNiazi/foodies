"use client";
import React, { useRef, useState } from "react";
import styles from "./image-picker.module.css";
import Image from "next/image";
const ImagePicker = ({ label, id, name }) => {
  const imageInputRef = useRef();
  const [pickedImage, setPickedImage] = useState(null);
  const handlePickClick = () => {
    imageInputRef.current.click();
  };
  const handlePickedImage = (event) => {
    const file = event.target.files[0];
    if (!file) {
      setPickedImage(null);
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  };
  return (
    <div className={styles.picker}>
      <label htmlFor={id}>{label}</label>
      <div className={styles.controls}>
        <div className={styles.preview}>
          {!pickedImage && <p>No Image Picked yet.</p>}
          {pickedImage && (
            <Image src={pickedImage} alt="Image selected by the user" fill />
          )}
        </div>
        <input
          className={styles.input}
          type="file"
          id={id}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInputRef}
          onChange={handlePickedImage}
        />
        <button
          className={styles.button}
          type="button"
          onClick={handlePickClick}
        >
          {" "}
          Pick an Image
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;
