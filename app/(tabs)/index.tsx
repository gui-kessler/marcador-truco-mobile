import {
  Alert,
  Button,
  Image,
  Platform,
  Pressable,
  StyleSheet,
} from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import React from "react";

export default function HomeScreen() {
  const [marcadorNos, setMarcadorNos] = React.useState(0);
  const [marcadorEles, setMarcadorEles] = React.useState(0);
  const [multiplier, setMultiplier] = React.useState(1);

  const reset = () => {
    setMarcadorNos(0);
    setMarcadorEles(0);
    setMultiplier(1);
  };

  const changeMarcadorNos = (diminuir: boolean = false) => {
    if (diminuir) {
      setMarcadorNos(marcadorNos - (marcadorNos > 0 ? 1 : 0));
      return;
    }

    setMarcadorNos(marcadorNos + multiplier);
    setMultiplier(1);
    if (marcadorNos >= 11) {
      showAlert("Nós ganhamos!");
      reset();
    }
  };

  const changeMarcadorEles = (diminuir: boolean = false) => {
    if (diminuir && marcadorEles > 0) {
      setMarcadorEles(marcadorEles - 1);
      return;
    }

    setMarcadorEles(marcadorEles + multiplier);
    setMultiplier(1);
    if (marcadorEles >= 11) {
      showAlert("Eles ganharam!");
      reset();
    }
  };

  const onPressMultiplier = () => {
    if (multiplier === 1) {
      setMultiplier(3);
    } else if (multiplier === 3) {
      setMultiplier(6);
    } else if (multiplier === 6) {
      setMultiplier(9);
    } else if (multiplier === 9) {
      setMultiplier(12);
    } else {
      setMultiplier(1);
    }
  };

  const multiplierLabel = React.useMemo(() => {
    if (multiplier === 1) {
      return "TRUCO";
    } else if (multiplier === 3) {
      return "SEIS";
    } else if (multiplier === 6) {
      return "NOVE";
    } else if (multiplier === 9) {
      return "DOZE";
    } else if (multiplier === 12) {
      return "ZERAR";
    }

    return "TRUCO";
  }, [multiplier]);

  const showAlert = (title: string) => Alert.alert(title);

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
    >
      <ThemedView
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between"
        }}
      >
        <ThemedView style={styles.horizontalContainer}>
          <ThemedText type="title">Nós</ThemedText>
          <ThemedText type="title">Eles</ThemedText>
        </ThemedView>

        <ThemedView style={styles.horizontalContainer}>
          <Pressable
            onPress={() => changeMarcadorNos()}
            onLongPress={() => changeMarcadorNos(true)}
            delayLongPress={300}
          >
            <ThemedText style={styles.marcador}>{marcadorNos}</ThemedText>
          </Pressable>
          <Pressable
            onPress={() => changeMarcadorEles()}
            onLongPress={() => changeMarcadorEles(true)}
            delayLongPress={300}
          >
            <ThemedText style={styles.marcador}>{marcadorEles}</ThemedText>
          </Pressable>
        </ThemedView>
        
        <ThemedView style={{
          flexDirection: "row",
          justifyContent: "center",
        }}>
          <Pressable
          style={{
            padding: 20,
            borderColor: "darkblue",
            borderWidth: 1,
            borderRadius: 10,
            width: 200,
          }}
            onPress={() => onPressMultiplier()}
          >
            <ThemedText style={{
              fontSize: 40, 
              lineHeight: 50,
              textAlign: "center",
            }}>{multiplierLabel}</ThemedText>
          </Pressable>
        </ThemedView>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  marcador: {
    fontSize: 100,
    lineHeight: 80,
    paddingTop: 20,
    paddingBottom: 20,
  },
  horizontalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    textAlign: "center",
  },
});
