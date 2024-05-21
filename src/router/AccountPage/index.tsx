import styles from "./AccountPage.module.scss";
import SetRouterTitle from "../../utils/setRouterTitle";
import React from "react";
import Avatar from "../../components/Avatar";
import {
  getProfileAvatar,
  getProfileBio,
  getProfileName,
  setProfileAvatar,
} from "../../utils/parseProfile";
import { useForm, SubmitHandler } from "react-hook-form";
import Input from "../../components/Input";
import Button from "../../components/Button";

type FormValues = {
  avatar: string;
  name: string;
  bio: string;
};
export default function AccountPage() {
  SetRouterTitle("Аккаунт");
  const name = getProfileName();
  const avatar = getProfileAvatar();
  const bio = getProfileBio();
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) =>
    setProfileAvatar(data.avatar);
  return (
    <div className={styles.accountPage}>
      <div className={styles.description}>
        <h1>Аккаунт</h1>
        <p>На этой странице Вы можете настроить свой профиль.</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.accountSetting}>
          <div className={styles.innerDescriptionBlock}>
            <h2>Аватар</h2>
            <Avatar src={avatar} alt="Profile avatar" width={100} />
          </div>
          <div className={styles.innerSettingBlock}>
            <p>
              Добавьте ссылку на аватарку в формате <code>*.gif</code>,{" "}
              <code>*.jpg</code> или <code>*.png</code>.
            </p>
            <div className={styles.uploadImage}>
              <Input type="text" {...register("avatar")} />
            </div>
          </div>
        </div>
        <div className={styles.accountSetting}>
          <div className={styles.innerDescriptionBlock}>
            <h2>Имя</h2>
            <p>{name}</p>
          </div>
          <div className={styles.innerSettingBlock}>
            <p>Вы можете изменить Ваше имя</p>
            <div className={styles.uploadImage}>
              <Input type="text" {...register("name")} />
            </div>
          </div>
        </div>
        <div className={styles.accountSetting}>
          <div className={styles.innerDescriptionBlock}>
            <h2>О Вас</h2>
            <p>{bio}</p>
          </div>
          <div className={styles.innerSettingBlock}>
            <p>Вы можете изменить Ваше имя</p>
            <div className={styles.uploadImage}>
              <Input type="text" {...register("bio")} />
            </div>
          </div>
        </div>
        <Button type="submit" isPrimary={true} label={"Загрузить"} />
      </form>
    </div>
  );
}
