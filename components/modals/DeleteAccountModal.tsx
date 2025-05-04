import { Image, Modal, Pressable, Text, View } from "react-native";

export default function DeleteAccountModal({
  isOpen,
  closeModal,
}: {
  isOpen: boolean;
  closeModal: () => void;
}) {
  return (
    <Modal animationType="slide" transparent={true} visible={isOpen}>
      <View className="flex-1 justify-center items-center bg-red-950/70">
        <View className="w-5/6 bg-white rounded-2xl p-5 shadow-md flex gap-4 border-2 border-red-600">
          <Text className="text-2xl font-bold text-center text-red-600">
            Delete your account
          </Text>
          <Image
            source={require("@/assets/images/dog.png")}
            className="w-40 h-40 mx-auto"
          />
          <Text className="text-center text-xl text-red-600">
            We are so so sad to see you leave!
          </Text>

          <View className="flex flex-row items-center justify-between gap-2">
            <Pressable
              className="bg-dividor p-4 flex-1 rounded-lg "
              onPress={() => closeModal()}
            >
              <Text className="text-red text-center font-bold">Cancel</Text>
            </Pressable>
            <Pressable
              className="bg-red-600 p-4 flex-1 rounded-lg "
              onPress={() => {
                console.log("Delete the account");
              }}
            >
              <Text className="text-white text-center font-bold ">Delete</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}
