import { Plus, Bell } from "lucide-react-native";
import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

export default function Profil() {
  return (
    <View className="justify-between flex-row items-center ">
      {/* Image du profil */}

      <Image
        source={require("../../assets/images/m.webp")}
        className="w-12 h-12 rounded-full"
      />

      <View className="flex-row gap-3">
        <TouchableOpacity
          className="bg-black w-12 h-12 rounded-full justify-center items-center"
          onPress={() => alert("BOUTTPON PRESSER")}
        >
          <Plus color="white" size={26} />
        </TouchableOpacity>

        {/* Icône Bell */}
        <View className="bg-purple-300 w-12 h-12 rounded-full justify-center items-center">
          <Bell color="black" size={26} />
        </View>
      </View>
    </View>
  );
}
