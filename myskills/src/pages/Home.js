import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  FlatList,
} from "react-native";

import { Button } from "../components/Button";
import { SkillCard } from "../components/SkillCard";

export function Home() {
  const [newSkill, setNewSkill] = useState("");
  const [mySkills, setMySkills] = useState([]);
  const [grenttig, setGrenttig] = useState('')

  function handleAddNewSkill() {
    setMySkills((oldState) => [...oldState, newSkill]);
  }

  //Primeiro parametro 
  useEffect(() => {
    const currentHours = new Date().getHours();
    console.log(currentHours)
    if(currentHours < 12){
      setGrenttig('Good Morning!')
    }else if(currentHours >= 12 && currentHours < 18){
      setGrenttig('Good Afternoon!')
    }else{
      setGrenttig('Good Evening!')
    }

  }, []); 

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Lucas!</Text>

      <Text style={styles.grenttigs}>{grenttig}</Text>

      <TextInput
        style={styles.input}
        placeholder="New skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />

      <Button onPress={handleAddNewSkill} />

      <Text style={[styles.title, { marginVertical: 50 }]}>My skills</Text>

      {/* Para listas pequenas pode se usar ScrollView. */}
      <FlatList
        data={mySkills}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => <SkillCard skill={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121015",
    paddingTop: 50,
    paddingHorizontal: 30,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#1F1e25",
    color: "#fff",
    fontSize: 18,
    padding: Platform.OS === "ios" ? 15 : 10,
    marginTop: 20,
    borderRadius: 7,
  },
  grenttigs: {
    color: '#fff',
  }
});
