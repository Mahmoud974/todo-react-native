import { FlatList } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Profil from "./components/Profil";
import Filter from "./components/Filter";
import Box from "./components/Box";

import { todos } from "./db/db";
import MiniToolbar from "./components/Minioolbar";

export default function Index() {
  let item = todos.map((ok) => ok);

  return (
    <SafeAreaProvider className="">
      <SafeAreaView className="px-3 pt-8 flex-1 bg-gray-100 ">
        {/* Conteneur principal pour les icônes et l'image */}
        <Profil />

        <Filter />

        <FlatList
          className="mb-3"
          data={item}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <Box item={item} />}
        />

        {/* Intégration de la MiniToolbar */}
        <MiniToolbar />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
