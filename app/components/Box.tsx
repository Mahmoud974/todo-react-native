import { Clock, Pen, Trash } from "lucide-react-native";
import React, { useState } from "react";
import { Text, TouchableOpacity, View, Alert } from "react-native";

export default function Box({ item }: any) {
  const [deleteList, setDeleteTodo] = useState(false);

  const deleteElement = () => {
    Alert.alert(
      "Voulez-vous supprimer ?",
      "Voici un message d'alerte",
      [
        {
          text: "Annuler",
          onPress: () => console.log("Annulé"),
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => {
            setDeleteTodo(true);
            console.log("OK Pressé");
          },
        },
      ],
      { cancelable: false }
    );
  };

  // Fonction pour obtenir le style du statut
  const getStatusStyle = (status: string) => {
    const baseStyle = "mt-2 w-auto rounded-full text-center px-3 mr-4";

    switch (status) {
      case "pending":
        return `${baseStyle} bg-red-500`;
      case "In-progress":
        return `${baseStyle} bg-green-600`;
      case "completed":
        return `${baseStyle} bg-blue-600`;
      default:
        return baseStyle;
    }
  };

  // Fonction pour obtenir le style de la boîte selon la catégorie
  const getBoxStyle = (category: string) => {
    switch (category) {
      case "travail":
        return "bg-yellow-500 text-black";
      case "loisir":
        return "bg-purple-500";
      case "éducation":
        return "bg-blue-400";
      case "santé":
        return "bg-green-400";
      case "voyages":
        return "bg-teal-400";
      case "bénévolat":
        return "bg-orange-400";
      default:
        return "bg-gray-700";
    }
  };

  const statusStyle = getStatusStyle(item.status);
  const boxStyle = getBoxStyle(item.category); // Obtenir le style de la boîte

  return (
    <View className="mt-4 space-y-2">
      <View
        className={`rounded-2xl w-full h-28 flex-row items-center justify-between  ${boxStyle} ${
          deleteList ? "bg-red-600" : ""
        }`}
      >
        <View className="pl-2">
          <Text className=" font-bold text-gray-700 text-lg w-52">
            {item.title}
          </Text>
          <View className="flex-row mt-2 items-center space-x-1">
            <Clock className="text-gray-700" size={13} />
            <Text className="text-gray-700">{item.createdAt}</Text>
          </View>
        </View>
        {/* Boutons de suppression et de modification */}
        <View className="items-center">
          <View className="flex-row gap-2 mr-4">
            <TouchableOpacity className="bg-orange-400 w-8 h-8 items-center justify-center rounded-full">
              <Pen color="white" size={16} />
            </TouchableOpacity>
            <TouchableOpacity
              className="bg-rose-600 w-8 h-8 items-center justify-center rounded-full"
              onPress={deleteElement}
            >
              <Trash color="white" size={16} />
            </TouchableOpacity>
          </View>
          <View className={statusStyle}>
            <Text className="text-center text-white">{item.status}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
