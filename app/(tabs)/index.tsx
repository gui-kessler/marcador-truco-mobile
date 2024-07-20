import { Alert, Button, Image, Platform, StyleSheet } from "react-native";

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

  const onSetMarcadorNos = () => {
    setMultiplier(1);
    if (marcadorNos >= 12) {
      showAlert("Nós ganhamos!");
      reset();
    }

    if (marcadorNos < 0) {
      setMarcadorNos(0);
    }
  };

  const onSetMarcadorEles = () => {
    setMultiplier(1);
    if (marcadorEles >= 12) {
      showAlert("Eles ganharam!");
      reset();
    }

    if (marcadorEles < 0) {
      setMarcadorEles(0);
    }
  };

  const onChangeMultiplier = () => {
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
  }

  const multiplierLabel = React.useMemo(() => {
    if (multiplier === 1) {
      return "Truco";
    } else if (multiplier === 3) {
      return "Seis";
    } else if (multiplier === 6) {
      return "Nove";
    } else if (multiplier === 9) {
      return "Doze";
    } else if (multiplier === 12) {
      return "Doze";
    }

    return "Truco";
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
          justifyContent: "space-between",
        }}
      >
        <ThemedView style={styles.horizontalContainer}>
          <ThemedText type="title">Nós</ThemedText>
          <ThemedText type="title">Eles</ThemedText>
        </ThemedView>

        <ThemedView style={styles.horizontalContainer}>
          <ThemedText
            onPress={() => setMarcadorNos(marcadorNos + multiplier)}
            onLongPress={() => setMarcadorNos(marcadorNos - 1)}
            onTextLayout={() => onSetMarcadorNos()}
            style={styles.marcador}
          >
            {marcadorNos}
          </ThemedText>
          <ThemedText
            onPress={() => setMarcadorEles(marcadorEles + multiplier)}
            onLongPress={() => setMarcadorEles(marcadorEles - 1)}
            onTextLayout={() => onSetMarcadorEles()}
            style={styles.marcador}
          >
            {marcadorEles}
          </ThemedText>
        </ThemedView>
        <ThemedView style={{flexGrow: 1}}></ThemedView>
        <ThemedView style={{...styles.horizontalContainer, ...{
          justifyContent: "center",
          marginTop: "40%",
        }}}>
          <Button 
            onPress={() => onChangeMultiplier()} 
            title={multiplierLabel}></Button>
        </ThemedView>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  marcador: {
    flexDirection: "column",
    textAlign: "center",
    fontSize: 120,
    lineHeight: 360,
  },
  horizontalContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    textAlign: "center",
  },
});
