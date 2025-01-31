import { PlantCard } from "@/component/PlantCard";
import { PlantlyButton } from "@/component/PlantlyButton";
import { usePlantStore } from "@/store/plantsStore";
import { theme } from "@/theme";
import { useRouter } from "expo-router";
import { FlatList, StyleSheet } from "react-native";

export default function App() {
  const router = useRouter();
  const plants = usePlantStore((state) => state.plants);

  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      data={plants}
      renderItem={({ item }) => <PlantCard plant={item} />}
      ListEmptyComponent={
        <PlantlyButton
          title="Add your first plant"
          onPress={() => {
            router.navigate("/new");
          }}
        />
      }
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
  },
  contentContainer: {
    padding: 12,
  },
});
