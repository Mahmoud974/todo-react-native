import { SlidersHorizontal } from "lucide-react-native";
import { ScrollView, Text, View } from "react-native";
import React from "react";

export default function Filter() {
  return (
    <View className="mt-5 ">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className=""
      >
        <View className="flex-row space-x-3">
          <View className="bg-gray-300 w-8 h-8 justify-center items-center rounded-full">
            <SlidersHorizontal color={"black"} size={16} />
          </View>

          <View className="pl-2 bg-gray-300 h-8 items-center text-center rounded-full flex-row justify-between px-3">
            <Text className="text-md"> En cours</Text>
            <View className="w-6 h-6 bg-white rounded-full items-center justify-center ml-2 mr-1">
              <Text className="text-center font-bold text-xs">12</Text>
            </View>
          </View>
          <View className="pl-2 bg-green-200 h-8 items-center text-center rounded-full flex-row justify-between px-3">
            <Text className="text-md"> En progress</Text>
            <View className="w-6 h-6 bg-green-400 rounded-full items-center justify-center ml-2 mr-1">
              <Text className="text-center font-bold text-xs text-white">
                12
              </Text>
            </View>
          </View>
          <View className="pl-2 bg-blue-300 h-8 items-center text-center rounded-full flex-row justify-between px-3">
            <Text className="text-md"> No start</Text>
            <View className="w-6 h-6 bg-blue-400 rounded-full items-center justify-center ml-2 mr-1">
              <Text className="text-center font-bold text-xs text-white">
                12
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Superposer ça */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="mt-2"
      >
        <View className="flex-row space-x-2">
          <View className="flex-row items-center">
            <View className="bg-yellow-500 w-3 h-3 rounded-full" />
            <Text className="text-md ml-1">Travail |</Text>
          </View>
          <View className="flex-row items-center">
            <View className="bg-blue-400 w-3 h-3 rounded-full" />
            <Text className="text-md ml-1">Éducation |</Text>
          </View>
          <View className="flex-row items-center">
            <View className="bg-purple-500 w-3 h-3 rounded-full" />
            <Text className="text-md ml-1">Loisirs |</Text>
          </View>
          <View className="flex-row items-center">
            <View className="bg-green-400 w-3 h-3 rounded-full" />
            <Text className="text-md ml-1">Santé |</Text>
          </View>
          <View className="flex-row items-center">
            <View className="bg-orange-400 w-3 h-3 rounded-full" />
            <Text className="text-md ml-1">Bénévolat |</Text>
          </View>
          <View className="flex-row items-center">
            <View className="bg-gray-700 w-3 h-3 rounded-full" />
            <Text className="text-md ml-1">Autres </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
