import CreateGroupModal from "@/components/CreateGroupModal";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function Host() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <View className="flex items-center justify-center h-full">
        <Text>No groups created yet!</Text>
        <CreateGroupModal
          isOpen={modalVisible}
          closeModal={() => setModalVisible(false)}
        />
      </View>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        className="absolute bottom-7 right-4 bg-primary rounded-full self-start p-3 mt-4 active:text-primary"
      >
        <Ionicons name="person-add-outline" size={24} color="white" />
      </TouchableOpacity>
    </>
  );
}
