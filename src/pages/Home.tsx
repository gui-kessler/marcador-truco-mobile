import { Button } from "react-native";
import { ThemedView } from "../components/ThemedView";
import { ScreenProps } from "../types/ScreenProps";

export default function Home({ navigation }: ScreenProps) {
  return (
    <ThemedView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <Button
        onPress={() => navigation.navigate("Truco")}
        title="Go to Truco"
      />
    </ThemedView>
  );
}
