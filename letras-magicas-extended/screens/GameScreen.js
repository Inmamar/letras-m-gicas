
import React, {useState} from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import * as Speech from 'expo-speech';

const LEVEL_WORDS = {
  1: ['a','o','s','m'],
  2: ['ba','ca','da','la'],
  3: ['casa','perro','gato','sol']
};

export default function GameScreen({language, setScreen, profile, saveProfile}){
  const [index, setIndex] = useState(0);
  const [stars, setStars] = useState(profile.stars || 0);
  const words = LEVEL_WORDS[profile.level] || LEVEL_WORDS[1];
  const word = words[index % words.length];

  const speak = (text) => {
    const opts = {rate:0.95, language: language === 'es' ? 'es-ES' : 'en-US'};
    Speech.speak(text, opts);
  };

  const correct = () => {
    const newStars = stars + 1;
    setStars(newStars);
    const p = {...profile, stars:newStars};
    saveProfile(p);
    Alert.alert(language === 'es' ? '¡Bien!' : 'Good job!', language === 'es' ? 'Has ganado una estrella' : 'You earned a star');
    setIndex(index+1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{language === 'es' ? 'Escucha y elige' : 'Listen and choose'}</Text>
      <View style={{height:16}} />
      <Button title={language === 'es' ? 'Escuchar' : 'Listen'} onPress={() => speak(word)} />
      <View style={{height:16}} />
      <Text style={styles.word}>{word.toUpperCase()}</Text>
      <View style={{height:16}} />
      <Button title={language === 'es' ? 'Correcto' : 'Correct'} onPress={correct} />
      <View style={{height:8}} />
      <Button title={language === 'es' ? 'Volver' : 'Back'} onPress={() => setScreen('home')} />
      <View style={{height:16}} />
      <Text>{language === 'es' ? 'Estrellas: ' : 'Stars: '}{stars}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{flex:1, justifyContent:'center', alignItems:'center', padding:20},
  title:{fontSize:22, fontWeight:'700'},
  word:{fontSize:56, fontWeight:'700', marginVertical:12}
});
