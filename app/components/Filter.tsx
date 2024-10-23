import { SlidersHorizontal } from "lucide-react-native";
import { Image, Text, Touchable, TouchableOpacity, View } from "react-native";
import React from "react";

export default function Filter() {
  return (
    <View className="mt-5 ">
      <View className=" flex-row">
        <View className="bg-gray-300 w-8 h-8 justify-center items-center text-center rounded-full">
          <SlidersHorizontal
            color={"black"}
            size={16}
            className="items-center justify-center "
          />
        </View>

        <View className="pl-2 bg-gray-300 w-auto   h-8 items-center text-center rounded-full flex-row justify-between">
          <Text> En cours</Text>
          <View className="w-6 h-6 bg-white rounded-full items-center justify-center ml-2">
            <Text className=" text-center font-bold text-xs  ">12</Text>
          </View>
        </View>

        <View className="pl-2 bg-gray-300 w-auto   h-8 items-center text-center rounded-full flex-row justify-between">
          <Text> En cours</Text>
          <View className="w-6 h-6 bg-white rounded-full items-center justify-center ml-2">
            <Text className=" text-center font-bold text-xs  ">12</Text>
          </View>
        </View>

        <View className="pl-2 bg-gray-300 w-auto   h-8 items-center text-center rounded-full flex-row justify-between">
          <Text> En cours</Text>
          <View className="w-6 h-6 bg-white rounded-full items-center justify-center ml-2">
            <Text className=" text-center font-bold text-xs  ">12</Text>
          </View>
        </View>

        <View className="pl-2 bg-gray-300 w-auto   h-8 items-center text-center rounded-full flex-row justify-between">
          <Text> En cours</Text>
          <View className="w-6 h-6 bg-white rounded-full items-center justify-center ml-2">
            <Text className=" text-center font-bold text-xs  ">12</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
