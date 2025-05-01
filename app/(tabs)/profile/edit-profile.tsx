import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";

export default function EditProfile() {
  const router = useRouter();
  const [name, setName] = useState("");

  const uploadPhoto = () => {
    console.log("Upload a new photo");
  };

  const saveChanges = () => {
    router.dismiss();
  };

  const discardChanges = () => {
    router.dismiss();
  };

  return (
    <ScrollView>
      <View className="flex h-full gap-20 p-4">
        {/* Upload profile picture */}
        <View className="flex items-center gap-3 mt-16">
          <Pressable onPress={uploadPhoto}>
            <UploadProfilePhoto />
          </Pressable>
        </View>

        <Text className="text-lg">User name</Text>
        <TextInput
          placeholder={"Edit your name"}
          value={name}
          onChangeText={setName}
          className="h-10 border border-black rounded-lg p-2"
        />

        {/* Action buttons */}
        <View className="flex flex-row items-center justify-between gap-2">
          <Pressable
            className="bg-dividor p-4 flex-1 rounded-lg "
            onPress={discardChanges}
          >
            <Text className="text-white text-center">Cancel</Text>
          </Pressable>
          <Pressable
            className="bg-primary p-4 flex-1 rounded-lg "
            onPress={saveChanges}
          >
            <Text className="text-white text-center">Save</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}

const UploadProfilePhoto = () => (
  <View className="relative w-32 h-32 rounded-full border-2 border-primary p-1">
    <Image
      source={require("@/assets/images/avatar.png")}
      className="w-full h-full object-cover rounded-full opacity-70"
    />
    <Image
      source={require("@/assets/images/edit.png")}
      className="w-12 h-12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    />
  </View>
);
