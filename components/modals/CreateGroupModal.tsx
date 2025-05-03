import { useRef, useState } from "react";
import { Modal, Pressable, Text, TextInput, View } from "react-native";

export default function CreateGroupModal({
  isOpen,
  closeModal,
  createGroup,
}: {
  isOpen: boolean;
  closeModal: () => void;
  createGroup: (name: string) => void;
}) {
  const [input, setInput] = useState("");
  const inputRef = useRef<TextInput>(null);

  // Open the keyboard automatically. AI fix.
  if (isOpen) {
    // Using setTimeout to delay a bit to make sure that the text input renders first
    setTimeout(() => {
      inputRef.current?.focus();
    }, 200);
  }

  return (
    <Modal animationType="slide" transparent={true} visible={isOpen}>
      <View className="flex-1 justify-center items-center bg-black/50">
        <View className="w-5/6 bg-white rounded-2xl p-5 shadow-md flex gap-4">
          <Text className="text-2xl font-bold">Create a new group</Text>
          <Text>Group name</Text>
          <TextInput
            placeholder="Type a name here..."
            value={input}
            onChangeText={setInput}
            ref={inputRef}
            // disable autofocus to controll it with useRef
            autoFocus={false}
            className="h-10 border border-black rounded-lg p-2"
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
                createGroup(input);
                setInput("");
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
