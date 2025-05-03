import React from "react";
import { View, Text, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function QRActionInfoModal({
  closeModal,
}: {
  closeModal: () => void;
}) {
  return (
    <View className="border border-dividor overflow-hidden rounded-2xl shadow-xl bg-white m-2">
      <View className="flex flex-row gap-1 p-4 border-b border-dividor bg-yellow-100">
        <Text>Tap</Text>
        <Ionicons name="qr-code-outline" size={24} color="black" />
        <Text>to scan</Text>
      </View>
      <View className="flex flex-row gap-1 p-4 bg-green-100">
        <Text>Hold</Text>
        <Ionicons name="qr-code-outline" size={24} color="black" />
        <Text>to generate a new QR code</Text>
      </View>
      <Pressable onPress={closeModal} className="absolute top-2 right-2">
        <Ionicons name="close" size={24} color="black" />
      </Pressable>
    </View>
  );
}
