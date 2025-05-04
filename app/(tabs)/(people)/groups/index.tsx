import { CreateGroupModal, GroupListItem } from "@/components";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import { FlatList, TouchableOpacity } from "react-native";

const initialGroups = [
  { name: "ALU C4", id: "1" },
  { name: "AUCA C5", id: "2" },
];

export default function OwnedByMe() {
  const [modalVisible, setModalVisible] = useState(false);
  const [groups, setGroups] = useState(initialGroups);

  const createGroup = (name: string) => {
    setGroups((prev) => [
      ...prev,
      { name, id: (groups.length + 1).toString() },
    ]);
  };
  return (
    <>
      <FlatList
        data={groups}
        renderItem={({ item }) => (
          <GroupListItem name={item.name} key={item.id} />
        )}
        keyExtractor={(item) => item.id}
        className="w-full"
      />

      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        className="absolute bottom-6 right-6 bg-primary rounded-full p-4 shadow-lg"
      >
        <Ionicons name="person-add-outline" size={24} color="white" />
      </TouchableOpacity>

      <CreateGroupModal
        isOpen={modalVisible}
        closeModal={() => setModalVisible(false)}
        createGroup={createGroup}
      />
    </>
  );
}
