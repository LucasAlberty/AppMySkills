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

interface SkillData {
  id: string;
  name: string;
  date?: Date;
}


export function Home() {
  const [newSkill, setNewSkill] = useState("");
  const [mySkills, setMySkills] = useState<SkillData[]>([]);
  const [grenttig, setGrenttig] = useState('')

  function handleAddNewSkill() {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill
    }
    setMySkills(oldState => [...oldState, data]);
    
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

      <Button title='Add' onPress={handleAddNewSkill} />

      <Text style={[styles.title, { marginVertical: 50 }]}>My skills</Text>

      {/* Para listas pequenas pode se usar ScrollView. */}
      <FlatList
        data={mySkills}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <SkillCard skill={item.name} />}
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
