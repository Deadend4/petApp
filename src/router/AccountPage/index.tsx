import styles from "./AccountPage.module.scss";
import Avatar from "components/Avatar";
import Input from "components/Input";
import Button from "components/Button";

import SetRouterTitle from "utils/setRouterTitle";
import { useForm, SubmitHandler } from "react-hook-form";
import useAuth from "src/hooks/useAuth";
import BackButton from "src/components/BackButton";
import { useContext } from "react";
import { MenuContext } from "src/context/MenuContext";

type FormValues = {
  avatar: string;
  name: string;
  bio: string;
};
export default function AccountPage() {
  SetRouterTitle("Аккаунт");
  const {setIsMenu} = useContext(MenuContext);
  const { user, updateUser } = useAuth();
  const { register, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      avatar: user?.photo,
      name: user?.name || user?.email,
      bio: user?.bio,
    },
  });
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    updateUser({
      uid: user!.uid,
      photo: data.avatar,
      name: data.name,
      bio: data.bio,
    });
  };

  return (<>
  <BackButton to="/home" onClick={() => {setIsMenu?.(true)}} title="Аккаунт"/>
  <div className={styles.accountPage}>
      <div className={styles.description}>
        <h1>Аккаунт</h1>
        <p>На этой странице Вы можете настроить свой профиль.</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.accountSetting}>
          <div className={styles.innerDescriptionBlock}>
            <h2>Аватар</h2>
            <Avatar src={user?.photo} alt="Profile avatar" width={100} />
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
            <p>{user?.name || user?.email}</p>
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
            <p>{user?.bio}</p>
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
  </>
    
  );
}
