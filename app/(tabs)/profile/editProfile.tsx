import Feather from "@expo/vector-icons/Feather";
import { useRef, useState } from "react";
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
  const [repeatNewPassword, setRepeatNewPassword] = useState("");

  const uploadPhoto = () => {
    console.log("Upload a new photo");
  };

  return (
    <ScrollView>
      <View className="flex h-full gap-20 p-4">
        {/* Upload profile picture */}
        <View className="flex items-center gap-3 mt-16">
          <Pressable onPress={uploadPhoto}>
            <UploadProfilePhoto />
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
            <PasswordInputField
              value={currentPassword}
              setValue={setCurrentPassword}
              label="Current password"
              placeholder="Enter your current password"
            />
            <PasswordInputField
              value={newPassword}
              setValue={setNewPassword}
              label="New password"
              placeholder="Enter new password"
            />
            <PasswordInputField
              value={repeatNewPassword}
              setValue={setRepeatNewPassword}
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
    <View className="flex gap-2">
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

const PasswordInputField = ({
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
  const [safeEntryOn, setSafeEntryOn] = useState(true);
  const inputRef = useRef<TextInput>(null);

  const toggleEye = () => {
    setSafeEntryOn((prev) => !prev);
  };

  return (
    <View className="flex gap-2">
      <Text className="text-lg">{label}</Text>
      <View className="flex flex-row items-center gap-2 border border-black rounded-lg py-1 px-2">
        <TextInput
          ref={inputRef}
          placeholder={placeholder}
          value={value}
          onChangeText={setValue}
          className="flex-1"
          secureTextEntry={safeEntryOn}
        />
        <Pressable onPress={toggleEye}>
          {safeEntryOn ? (
            <Feather name="eye-off" size={24} color="black" />
          ) : (
            <Feather name="eye" size={24} color="black" />
          )}
        </Pressable>
      </View>
    </View>
  );
};

const UploadProfilePhoto = () => (
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
);
