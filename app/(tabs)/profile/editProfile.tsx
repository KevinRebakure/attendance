import { useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";

export default function Profile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [reEnterNewPassword, setReEnterNewPassword] = useState("");

  const uploadPhoto = () => {
    console.log("Upload a new photo");
  };

  return (
    <ScrollView>
      <View className="flex h-full gap-20 p-4">
        {/* Upload profile picture */}
        <View className="flex items-center gap-3 mt-16">
          <Pressable onPress={uploadPhoto}>
            <View className="relative w-32 h-32 rounded-full border-2 border-primary p-1">
              <Image
                source={require("@/assets/images/avatar.png")}
                className="w-full h-full object-cover rounded-full opacity-70"
              />
              <Image
                source={require("@/assets/images/edit.png")}
                className="w-12 h-12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              />
            </View>
          </Pressable>
        </View>

        <View className="flex gap-20">
          {/* Display user */}
          <View className="flex gap-3">
            {/* User name */}
            <Text className="text-lg">User name</Text>
            <TextInput
              placeholder="Edit your name"
              value={name}
              onChangeText={setName}
              className="h-10 border border-black rounded-lg p-2"
            />

            {/* Email */}
            <Text className="text-lg">Email</Text>
            <TextInput
              placeholder="Set a different email"
              value={email}
              onChangeText={setEmail}
              className="h-10 border border-black rounded-lg p-2"
            />
          </View>

          {/* Password */}
          <View className="flex gap-4">
            {/* Change password */}
            {/* Current password */}
            <Text className="text-xl font-bold">Change your password</Text>
            <Text className="text-lg">Current password</Text>
            <TextInput
              placeholder="Enter your current password"
              value={currentPassword}
              onChangeText={setCurrentPassword}
              className="h-10 border border-black rounded-lg p-2"
            />

            {/* New password */}
            <Text className="text-lg">New password</Text>
            <TextInput
              placeholder="Enter your new password"
              value={newPassword}
              onChangeText={setNewPassword}
              className="h-10 border border-black rounded-lg p-2"
            />

            {/* Re-enter new password */}
            <Text className="text-lg">Re-enter new password</Text>
            <TextInput
              placeholder="Re-type your new password"
              value={reEnterNewPassword}
              onChangeText={setReEnterNewPassword}
              className="h-10 border border-black rounded-lg p-2"
            />
          </View>
        </View>

        {/* Action buttons */}
        <View className="flex flex-row items-center justify-between gap-2">
          <Pressable
            className="bg-dividor p-4 flex-1 rounded-lg "
            onPress={() => console.log("Discard changes")}
          >
            <Text className="text-white text-center">Cancel</Text>
          </Pressable>
          <Pressable
            className="bg-primary p-4 flex-1 rounded-lg "
            onPress={() => {
              console.log("Save");
            }}
          >
            <Text className="text-white text-center">Save</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}
