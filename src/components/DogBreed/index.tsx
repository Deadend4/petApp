import React from "react";
import styles from "./DogBreed.module.scss";
import backgroundImage from "../../../assets/DogBreedBackground.png";
interface DogBreedProps {
  breed: string;
  imgSrc: string;
  alt: string;
}

export default function DogBreed({
  breed = "Порода",
  imgSrc,
  alt,
}: DogBreedProps): JSX.Element {
  return (
    <div className={styles.dogBreedBlock}>
      <p>{breed}</p>
      <img
        src={backgroundImage}
        className={styles.backgroundImage}
        alt="Задний фон"
      />
      <img src={imgSrc} className={styles.dogPic} alt={alt} />
    </div>
  );
}
