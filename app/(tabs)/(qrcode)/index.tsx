import QRActionInfoModal from "@/components/modals/QRActionInfoModal";
import { useProfileStore } from "@/stores/profileStore";
import Feather from "@expo/vector-icons/Feather";
import { useState } from "react";
import { FlatList, Pressable, Text, View } from "react-native";

const qrCodes = [
  { id: "1", title: "Figma masterclass" },
  { id: "2", title: "Dev talk" },
  { id: "3", title: "Attendance" },
];

export default function QRCode() {
  const [guideModalOpen, setGuideModalOpen] = useState(true);
  const { profile } = useProfileStore();
  const firstName = profile.username.split(" ")[0];

  const scan = () => console.log("Scan QR code");
  const generate = () => console.log("Generate QR code");
  const closeModal = () => setGuideModalOpen(false);

  return (
    <View className="p-4 flex justify-between h-ful gap-4">
      <Text className="text-2xl font-bold ">Good day, {firstName}!</Text>
      {guideModalOpen && <QRActionInfoModal closeModal={closeModal} />}

      <FlatList
        data={qrCodes}
        renderItem={({ item }) => <QRItem title={item.title} />}
        keyExtractor={(item) => item.id}
      />

      <View className="flex flex-row items-center justify-between gap-2">
        <Pressable className="bg-dividor p-4 flex-1 rounded-lg " onPress={scan}>
          <Text className="text-white text-center">Scan</Text>
        </Pressable>
        <Pressable
          className="bg-primary p-4 flex-1 rounded-lg "
          onPress={generate}
        >
          <Text className="text-white text-center">Generate</Text>
        </Pressable>
      </View>
    </View>
  );
}

const QRItem = ({ title }: { title: string }) => (
  <View className="py-4 border-b border-dividor mx-3 flex flex-row justify-between items-center">
    <Text>{title}</Text>
    <Feather name="chevron-right" size={24} color="black" />
  </View>
);
