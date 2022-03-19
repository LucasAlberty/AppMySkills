import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

export function SkillCard() {
  return (
    <TouchableOpacity key='' style={styles.buttonSkill}>
      <Text style={styles.textSkill}>skill</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonSkill: {
    backgroundColor: "#1F1e25",
    borderRadius: 50,
    padding: 15,
    alignItems: "center",
    marginVertical: 10,
  },
  textSkill: {
    color: "#FFF",
    fontSize: 22,
    fontWeight: "bold",
  },
});