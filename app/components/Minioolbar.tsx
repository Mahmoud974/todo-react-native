import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import {
  Home,
  Settings,
  User,
  NotebookPen,
  Calendar,
} from "lucide-react-native";

export default function MiniToolbar() {
  return (
    <View className="flex-row justify-around bg-gray-800 p-2 rounded-tl-2xl rounded-tr-2xl">
      <TouchableOpacity className="items-center">
        <NotebookPen color="white" size={24} />
        <Text className="text-white">Note</Text>
      </TouchableOpacity>
      <TouchableOpacity className="items-center">
        <User color="white" size={24} />
        <Text className="text-white">Profil</Text>
      </TouchableOpacity>
      <TouchableOpacity className="items-center">
        <Calendar color="white" size={24} />
        <Text className="text-white">Calendar</Text>
      </TouchableOpacity>
    </View>
  );
}
