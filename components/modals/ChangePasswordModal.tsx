import Feather from "@expo/vector-icons/Feather";
import { useRef, useState } from "react";
import { Modal, Pressable, Text, TextInput, View } from "react-native";

export default function ChangePasswordModal({
  isOpen,
  closeModal,
}: {
  isOpen: boolean;
  closeModal: () => void;
}) {
  const [input, setInput] = useState("");
  const inputRef = useRef<TextInput>(null);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [repeatNewPassword, setRepeatNewPassword] = useState("");

  // Open the keyboard automatically. AI fix.
  if (isOpen) {
    // Using setTimeout to delay a bit to make sure that the text input renders first
    setTimeout(() => {
      inputRef.current?.focus();
    }, 200);
  }

  const changePassword = () => console.log("Change password");
  return (
    <Modal animationType="slide" transparent={true} visible={isOpen}>
      <View className="flex-1 justify-center items-center bg-black/50">
        <View className="w-[90%] bg-white rounded-2xl p-5 shadow-md flex gap-4">
          <Text className="text-2xl font-bold">Change your password</Text>
          <PasswordInputField
            value={currentPassword}
            setValue={setCurrentPassword}
            label="Enter your current password"
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
          <View className="flex flex-row items-center justify-between gap-2">
            <Pressable
              className="bg-dividor p-4 flex-1 rounded-lg "
              onPress={() => closeModal()}
            >
              <Text className="text-white text-center">Cancel</Text>
            </Pressable>
            <Pressable
              className="bg-primary p-4 flex-1 rounded-lg "
              onPress={() => {
                closeModal();
                console.log(input);
                setInput("");
                changePassword();
              }}
            >
              <Text className="text-white text-center">Save</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const PasswordInputField = ({
  label,
  setValue,
  value,
  placeholder,
}: {
  label: string;
  placeholder: string;
  setValue: (text: string) => void;
  value: string;
}) => {
  const [safeEntryOn, setSafeEntryOn] = useState(true);

  const toggleEye = () => {
    setSafeEntryOn((prev) => !prev);
  };

  const handleTextChange = (text: string) => {
    setValue(text);
  };

  return (
    <View className="flex gap-2">
      <Text className="text-lg">{label}</Text>
      <View className="flex flex-row items-center gap-2 border border-black rounded-lg py-1 px-2">
        <TextInput
          value={value}
          onChangeText={handleTextChange}
          secureTextEntry={safeEntryOn}
          placeholder={placeholder}
          className="flex-1 flex-row flex justify-center items-center"
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
