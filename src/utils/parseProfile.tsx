import profile from "../../database/profileDB.json";

export function getProfileName() {
  return profile.profile.user.name;
}
export function getProfileAge() {
  return profile.profile.user.age;
}
export function getProfileBio() {
  return profile.profile.user.bio;
}
export function getProfileAvatar() {
  return profile.profile.user.avatar;
}
export function getProfileRating() {
  return profile.profile.user.rating;
}

export function getProfileId() {
  return profile.profile.user.id;
}

export function setProfileAvatar(avatar: string) {
  fetch("../../database/profileDB.json")
    .then((responseString) => responseString.json())
    .then((data) => {
      avatar = data.name;
    });
  profile.profile.user.avatar = avatar;
}
