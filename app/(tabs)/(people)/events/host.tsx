import { CreateEventModal, GroupListItem } from "@/components";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useState } from "react";
import { FlatList, TouchableOpacity } from "react-native";

const initialEvents = [
  { name: "Figma workshop", id: "1" },
  { name: "NextJS DevTalk", id: "2" },
];

export default function Host() {
  const [modalVisible, setModalVisible] = useState(false);
  const [events, setEvents] = useState(initialEvents);

  const createEvent = (name: string) => {
    setEvents((prev) => [
      ...prev,
      { name, id: (events.length + 1).toString() },
    ]);
  };
  return (
    <>
      <FlatList
        data={events}
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
        <MaterialCommunityIcons name="calendar-plus" size={24} color="white" />
      </TouchableOpacity>

      <CreateEventModal
        isOpen={modalVisible}
        closeModal={() => setModalVisible(false)}
        createEvent={createEvent}
      />
    </>
  );
}
