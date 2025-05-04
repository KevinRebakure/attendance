import { create } from "zustand";

interface UserProfile {
  userName: string;
  email: string;
  password: string;
}

interface UserProfileStore {
  userProfile: UserProfile;
  // changeUserName: (newUserName: string) => void;
  // changeEmail: (newEmail: string) => void;
  // changePassword: (newPassword: string) => void;
  updateProfile: (data: Partial<UserProfile>) => void;
}

export const useUserProfileStore = create<UserProfileStore>((set) => ({
  userProfile: {
    userName: "Kevin Rebakure",
    email: "kevinrebakure@gmail.com",
    password: "abcd@1234E",
  },
  // changeUserName: (newUserName: string) =>
  //   set((state) => ({
  //     userProfile: {
  //       ...state.userProfile,
  //       userName: newUserName,
  //     },
  //   })),
  // changeEmail: (newEmail: string) =>
  //   set((state) => ({
  //     userProfile: {
  //       ...state.userProfile,
  //       email: newEmail,
  //     },
  //   })),
  // changePassword: (newPassword: string) =>
  //   set((state) => ({
  //     userProfile: {
  //       ...state.userProfile,
  //       password: newPassword,
  //     },
  //   })),
  updateProfile: (data: Partial<UserProfile>) =>
    set((state) => ({
      userProfile: {
        ...state.userProfile,
        ...data,
      },
    })),
}));
