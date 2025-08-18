import React from "react";
import { Text, StyleSheet, TextStyle } from "react-native";
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";
import { StyleProp } from "react-native";
import Colors from "../../Utils/colors";

export default function GradientText({ text, style }:{text: string, style?: StyleProp<TextStyle>}) {
  return (
    <MaskedView
      maskElement={
        <Text style={[styles.text, style]}>
          {text}
        </Text>
      }
    >
      <LinearGradient
        colors={Colors.gradientText} // gradient colors
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        
      >
        <Text style={[styles.text, { opacity: 0 }]}>{text}</Text>
      </LinearGradient>
    </MaskedView>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    fontWeight: "bold",
  },
});
