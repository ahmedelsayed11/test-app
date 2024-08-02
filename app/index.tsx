import { useGenerateRandomColors } from "@/hooks/useGenerateRandomColors";
import * as React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const TestScreen = () => {
  const { textColor, color, generateRandomColor } = useGenerateRandomColors();
  const styles = useStyles(color, textColor);

  return (
    <TouchableOpacity onPress={generateRandomColor} style={styles.container}>
      <Text style={styles.hello}>Hello there</Text>
    </TouchableOpacity>
  );
};

export default TestScreen;

const useStyles = (color: string, textColor: string) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: `#${color}`,
    },
    hello: {
      color: `#${textColor}`,
    },
  });
};
