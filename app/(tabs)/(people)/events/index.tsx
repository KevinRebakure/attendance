import { CreateEventModal, GroupListItem } from "@/components";
import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  FlatList,
  Pressable,
  TouchableOpacity,
  View,
  Text,
} from "react-native";

const initialEvents = [
  {
    name: "Figma Basics",
    host: "Kevin Rebakure",
    date: "Mon, May 5th",
    startTime: "09:00",
    endTime: "10:00",
    qrCodeId: "a1b2c3d4",
    id: "a1b2c3d4",
  },
  {
    name: "Figma Auto Layout Deep Dive",
    host: "Kevin Rebakure",
    date: "Mon, May 5th",
    startTime: "10:30",
    endTime: "11:30",
    qrCodeId: "e5f6g7h8",
    id: "e5f6g7h8",
  },
  {
    name: "Prototyping in Figma",
    host: "Kevin Rebakure",
    date: "Mon, May 5th",
    startTime: "12:00",
    endTime: "13:00",
    qrCodeId: "i9j0k1l2",
    id: "i9j0k1l2",
  },
  {
    name: "Collaborative Design in Figma",
    host: "Kevin Rebakure",
    date: "Mon, May 5th",
    startTime: "13:30",
    endTime: "14:30",
    qrCodeId: "m3n4o5p6",
    id: "m3n4o5p6",
  },
  {
    name: "Design Systems with Figma",
    host: "Kevin Rebakure",
    date: "Mon, May 5th",
    startTime: "15:00",
    endTime: "16:00",
    qrCodeId: "q7r8s9t0",
    id: "q7r8s9t0",
  },
];

export default function Host() {
  const [modalVisible, setModalVisible] = useState(false);
  const [events, setEvents] = useState(initialEvents);

  const createEvent = (name: string) => {
    setEvents((prev) => [
      ...prev,
      {
        name,
        host: "Unknown Host",
        date: "Unknown Date",
        startTime: "00:00",
        endTime: "00:00",
        id: (events.length + 1).toString(),
        qrCodeId: (events.length + 1).toString(),
      },
    ]);
  };

  return (
    <>
      <FlatList
        data={events}
        renderItem={({ item }) => (
          <EventItem name={item.name} key={item.id} id={item.id} />
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

const EventItem = ({ name, id }: { name: string; id: string }) => {
  const router = useRouter();
  return (
    <Pressable onPress={() => router.push(`/events/${id}`)}>
      <View className="py-4 border-b border-dividor mx-3 flex flex-row justify-between items-center">
        <Text>{name}</Text>
        <Feather name="chevron-right" size={24} color="black" />
      </View>
    </Pressable>
  );
};
