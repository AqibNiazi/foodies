"use client";
import React, { useRef } from "react";
import styles from "./image-picker.module.css";
const ImagePicker = ({ label, id, name }) => {
  const imageInputRef = useRef();
  const handlePickClick = () => {};
  return (
    <div className={styles.picker}>
      <label htmlFor={id}>{label}</label>
      <div className={styles.controls}>
        <input
          className={styles.input}
          type="file"
          id={id}
          accept="image/png, image/jpeg"
          name={name}
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
