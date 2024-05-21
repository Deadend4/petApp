interface ProfileJson {
  id: string;
  name: string;
  age: number;
  bio: string;
  avatar: string;
  rating: number;
}
export function getProfileName(profile: ProfileJson) {
  return profile.name;
}
export function getProfileAge(profile: ProfileJson) {
  return profile.age;
}
export function getProfileBio(profile: ProfileJson) {
  return profile.bio;
}
export function getProfileAvatar(profile: ProfileJson) {
  return profile.avatar;
}
export function getProfileRating(profile: ProfileJson) {
  return profile.rating;
}

export function getProfileId(profile: ProfileJson) {
  return profile.id;
}
