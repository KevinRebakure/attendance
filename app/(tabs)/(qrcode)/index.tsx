import { useUserProfileStore } from "@/stores/userProfileStore";
import Feather from "@expo/vector-icons/Feather";
import { useRouter } from "expo-router";
import { FlatList, Pressable, Text, View } from "react-native";

export default function QRCode() {
  const { userProfile } = useUserProfileStore();
  const firstName = userProfile.userName.split(" ")[0];
  const router = useRouter();

  const scan = () => router.push("/camera");
  const generate = () => console.log("Generate QR code");

  return (
    <View className="p-4 flex justify-between h-ful gap-4">
      <Text className="text-2xl font-bold ">Good day, {firstName}!</Text>

      <FlatList
        data={qrCodes}
        renderItem={({ item }) => <QRItem title={item.title} id={item.id} />}
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

const QRItem = ({ title, id }: { title: string; id: string }) => {
  const router = useRouter();
  return (
    <Pressable onPress={() => router.push(`/qrcode/${id}`)}>
      <View className="py-4 border-b border-dividor mx-3 flex flex-row justify-between items-center">
        <Text>{title}</Text>
        <Feather name="chevron-right" size={24} color="black" />
      </View>
    </Pressable>
  );
};

export const qrCodes = [
  {
    title: "Figma workshop",
    id: "qr_001",
    eventDate: "Tue, April 29th, 2025",
    startTime: "09:00AM",
    endTime: "11:00AM",
    expiryTime: 20,
  },
  {
    title: "JavaScript Deep Dive",
    id: "qr_002",
    eventDate: "Wed, May 7th, 2025",
    startTime: "02:00PM",
    endTime: "04:00PM",
    expiryTime: 30,
  },
  {
    title: "Design Sprint",
    id: "qr_003",
    eventDate: "Thu, May 15th, 2025",
    startTime: "10:00AM",
    endTime: "12:00PM",
    expiryTime: 25,
  },
  {
    title: "Team Sync Meeting",
    id: "qr_004",
    eventDate: "Fri, May 23rd, 2025",
    startTime: "03:00PM",
    endTime: "03:45PM",
    expiryTime: 15,
  },
  {
    title: "React Native Bootcamp",
    id: "qr_005",
    eventDate: "Mon, June 2nd, 2025",
    startTime: "08:00AM",
    endTime: "12:00PM",
    expiryTime: 40,
  },
];
