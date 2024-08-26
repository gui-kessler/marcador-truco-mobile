import React from "react";
import { Alert, Pressable, StyleSheet } from "react-native";
import { useThemeColor } from "../hooks/useThemeColor";
import { ThemedView } from "../components/ThemedView";
import { ThemedText } from "../components/ThemedText";

export default function Truco() {
  const [marcadorNos, setMarcadorNos] = React.useState(0);
  const [marcadorEles, setMarcadorEles] = React.useState(0);
  const [multiplier, setMultiplier] = React.useState(1);
  const color = useThemeColor({ light: "", dark: "" }, "text");

  React.useEffect(() => {
    if (marcadorNos >= 12) {
      showAlert("Nós vencemos!");
      reset();
    }

    if (marcadorEles >= 12) {
      showAlert("Eles venceram!");
      reset();
    }
  }, [marcadorNos, marcadorEles]);

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
  };

  const changeMarcadorEles = (diminuir: boolean = false) => {
    if (diminuir && marcadorEles > 0) {
      setMarcadorEles(marcadorEles - 1);
      return;
    }

    setMarcadorEles(marcadorEles + multiplier);
    setMultiplier(1);
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
    <ThemedView
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        justifyContent: "space-around",
      }}
    >
      <ThemedView style={{ ...styles.horizontalContainer }}>
        <ThemedText type="title">Nós</ThemedText>
        <ThemedText type="title">Eles</ThemedText>
      </ThemedView>

      <ThemedView style={{ ...styles.horizontalContainer }}>
        <Pressable
          onPress={() => changeMarcadorNos()}
          onLongPress={() => changeMarcadorNos(true)}
          delayLongPress={300}
          hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
        >
          <ThemedText style={styles.marcador}>{marcadorNos}</ThemedText>
        </Pressable>
        <Pressable
          onPress={() => changeMarcadorEles()}
          onLongPress={() => changeMarcadorEles(true)}
          delayLongPress={300}
          hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
        >
          <ThemedText style={styles.marcador}>{marcadorEles}</ThemedText>
        </Pressable>
      </ThemedView>

      <ThemedView style={{ flexDirection: "row", justifyContent: "center" }}>
        <Pressable
          style={{
            padding: 20,
            borderColor: color,
            borderWidth: 1,
            borderRadius: 10,
            width: 200,
          }}
          onPress={() => onPressMultiplier()}
        >
          <ThemedText
            style={{
              fontSize: 40,
              lineHeight: 50,
              textAlign: "center",
            }}
          >
            {multiplierLabel}
          </ThemedText>
        </Pressable>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  marcador: {
    fontSize: 120,
    lineHeight: 100,
    paddingTop: 20,
    paddingBottom: 20,
    textAlign: "center",
  },
  horizontalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 40,
    textAlign: "center",
  },
});
