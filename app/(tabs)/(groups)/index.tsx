import { GroupListItem } from "@/components";
import CreateGroupModal from "@/components/CreateGroupModal";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";

const initialGroups = [
  {
    name: "ALU",
    id: "1",
  },
  {
    name: "TheGym",
    id: "2",
  },
  {
    name: "End of year party",
    id: "3",
  },
];

export default function Host() {
  const [modalVisible, setModalVisible] = useState(false);
  const [groups, setGroups] = useState(initialGroups);

  return (
    <>
      <View className="flex items-center justify-center h-full">
        {groups.length === 0 && <Text>No groups created yet!</Text>}

        <FlatList
          data={groups}
          renderItem={({ item }) => (
            <GroupListItem name={item.name} key={item.id} />
          )}
          keyExtractor={(item) => item.id}
        />

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
