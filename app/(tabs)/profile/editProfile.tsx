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
            <InputField
              value={name}
              setValue={setName}
              label="User name"
              placeholder="Edit your name"
            />
            <InputField
              value={email}
              setValue={setEmail}
              label="Email"
              placeholder="Set a different email"
            />
          </View>

          {/* Password */}
          <View className="flex gap-4">
            <Text className="text-xl font-bold">Change your password</Text>
            <InputField
              value={currentPassword}
              setValue={setCurrentPassword}
              label="Current password"
              placeholder="Enter your current password"
            />
            <InputField
              value={newPassword}
              setValue={setNewPassword}
              label="New password"
              placeholder="Enter new password"
            />
            <InputField
              value={reEnterNewPassword}
              setValue={setReEnterNewPassword}
              label="Repeat new password"
              placeholder="Repeat new password"
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

const InputField = ({
  value,
  placeholder,
  label,
  setValue,
}: {
  value: string;
  placeholder: string;
  label: string;
  setValue: (text: string) => void;
}) => {
  return (
    <View>
      <Text className="text-lg">{label}</Text>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={setValue}
        className="h-10 border border-black rounded-lg p-2"
      />
    </View>
  );
};
