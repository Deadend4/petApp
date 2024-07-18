import styles from "./AccountPage.module.scss";
import Avatar from "components/Avatar";
import Input from "components/Input";
import Button from "components/Button";

import SetRouterTitle from "utils/setRouterTitle";
import { useForm, SubmitHandler } from "react-hook-form";
import useAuth from "src/hooks/useAuth";
import MobileHeader from "src/components/MobileHeader";
import { useMenuContext } from "src/context/MenuContext";
import EditIcon from "src/svg/EditIcon";
import firebase from "src/clients/firebase";
import { useRef, useState } from "react";

type FormValues = {
  avatar: string;
  name: string;
  bio: string;
};
export default function AccountPage() {
  SetRouterTitle("Аккаунт");
  const tempAvatar = useRef<File>();
  const { setIsMenuShown } = useMenuContext();
  const { user, updateUser } = useAuth();
  const [avatar, setAvatar] = useState(user?.photo);
  const { register, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      avatar: user?.photo,
      name: user?.name || user?.email,
      bio: user?.bio,
    },
  });
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    if (tempAvatar.current) {
      const uploadTask = await firebase.storage.uploadFile(tempAvatar.current, user!.uid);
      const file = await firebase.storage.getURL(uploadTask);
      updateUser({
        uid: user!.uid,
        photo: file,
        name: data.name,
        bio: data.bio,
      });
    } else {
      updateUser({
        ...user,
        uid: user!.uid,
        name: data.name,
        bio: data.bio,
      });
    }
    
    
  };

  return (
    <>
      <MobileHeader
        to=""
        onClick={() => {
          setIsMenuShown(true);
        }}
        title="Аккаунт"
      />
      <div className={styles.accountPage}>
        <div className={styles.description}>
          <h1>Аккаунт</h1>
          <p>На этой странице Вы можете настроить свой профиль.</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <div className={styles.accountSettings}>
            <div className={styles.settingContainer}>
              <div className={styles.title}>
                <p>Аватар</p>
              </div>
              <div className={styles.setting}>
                <div className={styles.avatarBlock}>
                  <div className={styles.avatar}>
                    <Avatar
                      src={avatar}
                      alt="Profile avatar"
                      width={100}
                    />
                  </div>
                  <label
                    className={styles.updateAvatar}
                    htmlFor="avatar-uploader"
                    title="Форматы *.gif, *.jpg или *.png"
                  >
                    {EditIcon()}
                  </label>
                  <input
                    type="file"
                    className={styles.uploadAvatarButton}
                    id="avatar-uploader"
                    accept="image/png, image/jpeg"
                    onChange={(e) => {
                      if (e.target.files) {
                        tempAvatar.current = e.target.files[0];
                        if (tempAvatar.current) {
                          setAvatar(URL.createObjectURL(e.target.files[0]));  
                        }              
                      }
                    }}
                  />
                </div>
              </div>
            </div>
            <div className={styles.settingContainer}>
              <div className={styles.title}>
                <p>Имя</p>
              </div>
              <div className={styles.setting}>
                <Input type="text" {...register("name")} />
              </div>
            </div>
            <div className={styles.settingContainer}>
              <div className={styles.title}>
                <p>О себе</p>
              </div>
              <div className={styles.setting}>
                <textarea rows={5} {...register("bio")} />
              </div>
            </div>
            <Button type="submit" isPrimary={true} label="Загрузить" />
          </div>
        </form>
      </div>
    </>
  );
}
