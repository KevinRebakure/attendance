import { useProfileStore } from "@/stores/profileStore";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import { Link, useRouter } from "expo-router";
import { Image, Pressable, ScrollView, Text, View } from "react-native";

export default function Profile() {
  const { profile } = useProfileStore();
  const router = useRouter();
  const deleteAccount = () => {
    console.log("Delete account");
  };
  const logOut = () => {
    console.log("Logout");
  };
  const editProfile = () => {
    router.push("/profile/edit-profile");
  };

  const settings = () => {
    router.push("/profile/settings");
  };

  console.log(profile);
  return (
    <ScrollView>
      <View className="flex h-full gap-12 p-4">
        {/* Avatar */}
        <View className="flex items-center gap-3 mt-16">
          <View className="w-32 h-32 rounded-full border-2 border-primary p-1">
            <Image
              source={require("@/assets/images/profile.jpg")}
              className="w-full h-full object-cover rounded-full"
            />
          </View>
          <View>
            <Text className="text-xl font-bold text-center">
              {profile.username}
            </Text>
            <Text className="text-center">{profile.email}</Text>
          </View>
        </View>

        {/* Action buttons */}
        <View className="flex flex-row gap-2 justify-center">
          <Pressable className="border p-2 rounded-lg" onPress={logOut}>
            <View className="flex flex-row gap-1">
              <SimpleLineIcons name="logout" size={24} color="black" />
              <Text className="text-lg">Logout</Text>
            </View>
          </Pressable>

          <Pressable className="border p-2 rounded-lg" onPress={editProfile}>
            <View className="flex flex-row gap-1">
              <Feather name="edit-3" size={24} color="black" />
              <Text className="text-lg">Edit profile</Text>
            </View>
          </Pressable>

          <Pressable className="border p-2 rounded-lg" onPress={settings}>
            <View className="flex flex-row gap-1">
              <Ionicons name="settings-outline" size={24} color="black" />
              <Text className="text-lg">Settings</Text>
            </View>
          </Pressable>
        </View>

        {/* Support section */}
        <View className="w-full flex gap-5">
          <Text className="font-bold">Support us</Text>
          <Link href="https://github.com/KevinRebakure/attendance-mobile">
            <View className="flex flex-row gap-2">
              <AntDesign name="github" size={24} color="black" />
              <Text className="text-lg">Star our repo</Text>
            </View>
          </Link>
          <View className="flex flex-row gap-2">
            <FontAwesome name="heart-o" size={24} color="black" />
            <Text className="text-lg">Sponsor</Text>
          </View>
          <View className="flex flex-row gap-2">
            <Ionicons name="bug-outline" size={24} color="black" />
            <Text className="text-lg">Report an issue</Text>
          </View>
        </View>

        {/* About section */}
        <View className="w-full flex gap-5">
          <Text className="font-bold">About</Text>
          <View className="flex flex-row gap-2">
            <Feather name="help-circle" size={24} color="black" />

            <Text className="text-lg">How to</Text>
          </View>
          <View className="flex flex-row gap-2">
            <Feather name="book-open" size={24} color="black" />
            <Text className="text-lg">Terms of service and credits</Text>
          </View>
          <View className="flex flex-row gap-2">
            <AntDesign name="rocket1" size={24} color="black" />
            <Text className="text-lg">rebakure.com</Text>
          </View>

          {/* Portals */}
          <View className="flex flex-row gap-3 mt-12 items-center">
            <Link href="https://github.com/KevinRebakure/">
              <AntDesign name="github" size={24} color="black" />
            </Link>
            <Link href="https://www.linkedin.com/in/kevin-rebakure-91063a301/">
              <AntDesign name="linkedin-square" size={24} color="black" />
            </Link>
            <Link href="https://x.com/kevinrebakuree/">
              <FontAwesome6 name="x-twitter" size={24} color="black" />
            </Link>
            <Link href="https://www.instagram.com/kevinrebakure/">
              <AntDesign name="instagram" size={24} color="black" />
            </Link>
            <Link href="mailto:kevinrebakure@gmail.com">
              <MaterialCommunityIcons name="gmail" size={28} color="black" />
            </Link>
          </View>
        </View>

        <Pressable onPress={deleteAccount}>
          <View className="flex flex-row gap-2 border border-red-600 p-3 rounded-xl w-52">
            <MaterialCommunityIcons
              name="delete-outline"
              size={24}
              color="red"
            />
            <Text className="text-red-600 text-lg font-bold">
              Delete account
            </Text>
          </View>
        </Pressable>
      </View>
    </ScrollView>
  );
}
