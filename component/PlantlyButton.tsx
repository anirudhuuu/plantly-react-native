import { theme } from "@/theme";
import * as Haptics from "expo-haptics";
import { Platform, Pressable, StyleSheet, Text } from "react-native";

type Props = {
  title: string;
  onPress: () => void;
};

export function PlantlyButton({ title, onPress }: Props) {
  const handlePress = () => {
    if (Platform.OS !== "web") {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }
    onPress();
  };

  return (
    <Pressable
      onPress={handlePress}
      style={(state) => {
        if (state.pressed) {
          return [styles.button, styles.buttonPressed];
        }
        return styles.button;
      }}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  button: {
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 6,
    backgroundColor: theme.colorGreen,
  },
  buttonPressed: {
    backgroundColor: theme.colorLeafyGreen,
  },
});
