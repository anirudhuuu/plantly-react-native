import { PlantlyButton } from "@/component/PlantlyButton";
import { useUserStore } from "@/store/userStore";
import { theme } from "@/theme";
import { StyleSheet, Text, View } from "react-native";

export default function ProfileScreen() {
  const toggleHasOnboarded = useUserStore((state) => state.toggleHasOnboarded);

  const handlePress = () => {
    toggleHasOnboarded();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile</Text>
      <PlantlyButton title="Back to onboarding" onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colorWhite,
  },
  text: {
    fontSize: 24,
  },
});
