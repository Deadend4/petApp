import React from "react";
import styles from "./DogBreed.module.scss";

interface DogBreedProps {
  breed: string;
  imgSrc: string;
}

export default function DogBreed({
  breed,
  imgSrc,
}: DogBreedProps): JSX.Element {
  return (
    <div className={styles.dogBreedBlock}>
      <p>{breed}</p>
      <img src={imgSrc} className={styles.dogPic} />
    </div>
  );
}
