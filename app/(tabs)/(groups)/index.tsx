import { GroupListItem } from "@/components";
import CreateGroupModal from "@/components/CreateGroupModal";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";

const initialGroups = [
  { name: "ALU", id: "1" },
  { name: "TheGym", id: "2" },
  { name: "End of year party", id: "3" },
  { name: "Book Club", id: "4" },
  { name: "Team Alpha", id: "5" },
  { name: "Coding Buddies", id: "6" },
  { name: "Movie Night", id: "7" },
  { name: "Family Chat", id: "8" },
  { name: "Road Trip Crew", id: "9" },
  { name: "Music Makers", id: "10" },
  { name: "Game Night", id: "11" },
  { name: "Hiking Friends", id: "12" },
  { name: "Project Phoenix", id: "13" },
  { name: "Startup Squad", id: "14" },
  { name: "Writers Circle", id: "15" },
  { name: "Coffee Lovers", id: "16" },
  { name: "Basketball Team", id: "17" },
  { name: "Photography Club", id: "18" },
  { name: "Debate Society", id: "19" },
  { name: "Language Exchange", id: "20" },
];

export default function Host() {
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
      <View className="flex items-center justify-center h-full">
        {groups.length === 0 && <Text>No groups created yet!</Text>}

        <FlatList
          data={groups}
          renderItem={({ item }) => (
            <GroupListItem name={item.name} key={item.id} />
          )}
          keyExtractor={(item) => item.id}
          className="w-full "
        />

        <CreateGroupModal
          isOpen={modalVisible}
          closeModal={() => setModalVisible(false)}
          createGroup={createGroup}
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
