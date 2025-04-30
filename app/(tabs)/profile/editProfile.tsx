import { useProfileStore } from "@/stores/profileStore";
import Feather from "@expo/vector-icons/Feather";
import { useRouter } from "expo-router";
import { useRef, useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";

// AI fix
interface PasswordInputFieldProps extends Omit<TextInputProps, 'secureTextEntry'> {
  label: string;
  setValue?: (text: string) => void; // Make this optional since we'll use onChangeText from TextInputProps
}


export default function EditProfile() {
  const router = useRouter()
  const {profile, updateProfile} = useProfileStore()
  const [editPasswordMode, setEditPasswordMode] = useState(false)

  const [name, setName] = useState(profile.username);
  const [email, setEmail] = useState(profile.email);
  const [currentPassword, setCurrentPassword] = useState("");

  const [newPassword, setNewPassword] = useState("");
  const [repeatNewPassword, setRepeatNewPassword] = useState("");


  const uploadPhoto = () => {
    console.log("Upload a new photo");
  };

  const saveChanges = () => {
    console.log('Saving changes...')
    updateProfile({
      username: name,
      email,
      password: repeatNewPassword === newPassword ? newPassword : profile.password,
    })

    router.dismiss()
  }

  const discardChanges = () => {
    router.dismiss()
  }

  const turnOnPasswordEditingMode = ()=>{
    if (currentPassword.trim()=== profile.password) {
      setEditPasswordMode(true)  
    } else {
      console.log("Passwords don't match")
    }
  }

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
              label="Enter your current password"
              placeholder="Enter your current password"
              onEndEditing={turnOnPasswordEditingMode}
            />
           {editPasswordMode &&  <>
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
            /></>}
          </View>
        </View>

        {/* Action buttons */}
        <View className="flex flex-row items-center justify-between gap-2">
          <Pressable
            className="bg-dividor p-4 flex-1 rounded-lg "
            onPress={discardChanges}
          >
            <Text className="text-white text-center">Cancel</Text>
          </Pressable>
          <Pressable
            className="bg-primary p-4 flex-1 rounded-lg "
            onPress={saveChanges}
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


// AI fix
const PasswordInputField = ({
  label,
  setValue,
  value,
  onChangeText,
  className,
  style,
  ...restProps // This collects all other TextInput props
}: PasswordInputFieldProps) => {
  const [safeEntryOn, setSafeEntryOn] = useState(true);
  const inputRef = useRef<TextInput>(null);

  const toggleEye = () => {
    setSafeEntryOn((prev) => !prev);
    // // Optional: refocus the input
    // setTimeout(() => {
    //   inputRef.current?.focus();
    // }, 100);
  };

  // Handle the text change - support both setValue and onChangeText
  const handleTextChange = (text: string) => {
    if (setValue) setValue(text);
    if (onChangeText) onChangeText(text);
  };

  return (
    <View className="flex gap-2">
      <Text className="text-lg">{label}</Text>
      <View className="flex flex-row items-center gap-2 border border-black rounded-lg py-1 px-2">
        <TextInput
          ref={inputRef}
          value={value}
          onChangeText={handleTextChange}
          className={`flex-1 ${className || ''}`}
          style={style}
          secureTextEntry={safeEntryOn}
          {...restProps} // Spread the rest of the props to TextInput
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
