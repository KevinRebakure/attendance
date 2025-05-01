import { create } from "zustand";

interface Profile {
  username: string;
  email: string;
  password: string;
}

interface ProfileStore {
  profile: Profile;
  // changeUserName: (newUserName: string) => void;
  // changeEmail: (newEmail: string) => void;
  // changePassword: (newPassword: string) => void;
  updateProfile: (data: Partial<Profile>) => void;
}

export const useProfileStore = create<ProfileStore>((set) => ({
  profile: {
    username: "Kevin Rebakure",
    email: "kevinrebakure@gmail.com",
    password: "abcd@1234E",
  },
  // changeUserName: (newUserName: string) =>
  //   set((state) => ({
  //     profile: {
  //       ...state.profile,
  //       username: newUserName,
  //     },
  //   })),
  // changeEmail: (newEmail: string) =>
  //   set((state) => ({
  //     profile: {
  //       ...state.profile,
  //       email: newEmail,
  //     },
  //   })),
  // changePassword: (newPassword: string) =>
  //   set((state) => ({
  //     profile: {
  //       ...state.profile,
  //       password: newPassword,
  //     },
  //   })),
  updateProfile: (data: Partial<Profile>) =>
    set((state) => ({
      profile: {
        ...state.profile,
        ...data,
      },
    })),
}));
