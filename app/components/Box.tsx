import { Clock, Pen, Trash } from "lucide-react-native";
import React from "react";
import { useState } from "react";
import { Image, Text, Touchable, TouchableOpacity, View } from "react-native";
export default function Box({ item }: any) {
  const [deleteList, setDeleteTodo] = useState<boolean>(false);
  return (
    <View className="mt-4 space-y-2">
      <View
        className={
          !deleteList
            ? `bg-gray-700 rounded-2xl w-full h-28 flex-row items-center justify-between`
            : "bg-red-600 rounded-2xl w-full h-28 flex-row items-center justify-between"
        }
      >
        <View className="pl-2">
          <Text className="text-white text-lg w-52">{item.title}</Text>
          <View className="flex-row justify-">
            <View className="flex-row mt-2 items-center space-x-1">
              <Clock color="white" size={13} />
              <Text className="text-white">10h ago</Text>
            </View>
          </View>
        </View>
        {/* Button delete et modifier */}
        <View className="flex-row gap-2 mr-4">
          <TouchableOpacity className="bg-orange-400 w-8 h-8 items-center justify-center rounded-full">
            <Pen color={"white"} size={16} />
          </TouchableOpacity>
          <TouchableOpacity
            className="bg-rose-600 w-8 h-8 items-center justify-center rounded-full"
            onPress={() => setDeleteTodo(true)}
          >
            <Trash color={"white"} size={16} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
