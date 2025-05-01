import ChangePasswordModal from "@/components/ChangePasswordModal";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Fontisto from "@expo/vector-icons/Fontisto";
import { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import ChangeEmailModal from "@/components/ChangeEmailModal";

export default function Settings() {
  const [passwordModal, setPasswordModal] = useState(false);
  const [emailModal, setEmailModal] = useState(false);
  const openPasswordModal = () => setPasswordModal(true);
  const closePasswordModal = () => setPasswordModal(false);

  const openEmailModal = () => setEmailModal(true);
  const closeEmailModal = () => setEmailModal(false);

  return (
    <>
      <ScrollView>
        <View className="flex h-full gap-4 p-4">
          <Pressable
            className="flex flex-row gap-2"
            onPress={openPasswordModal}
          >
            <View className="flex flex-row gap-2 items-center">
              <MaterialIcons name="password" size={24} color="black" />
              <Text className="text-lg">Change your password</Text>
            </View>
          </Pressable>
          <View className="flex flex-row gap-2 items-center">
            <MaterialCommunityIcons
              name="theme-light-dark"
              size={24}
              color="black"
            />
            <Text className="text-lg">Dark mode</Text>
          </View>
          <Pressable className="flex flex-row gap-2" onPress={openEmailModal}>
            <View className="flex flex-row gap-2 items-center">
              <Fontisto name="email" size={24} color="black" />
              <Text className="text-lg">Set a different email</Text>
            </View>
          </Pressable>
        </View>
      </ScrollView>
      {/* Password modal */}
      <ChangePasswordModal
        closeModal={closePasswordModal}
        isOpen={passwordModal}
      />
      <ChangeEmailModal closeModal={closeEmailModal} isOpen={emailModal} />
    </>
  );
}
