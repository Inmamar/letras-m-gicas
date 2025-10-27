
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({language, setLanguage, setScreen, profile, saveProfile}){
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{language === 'es' ? 'Letras Mágicas' : 'Magic Letters'}</Text>
      <Text style={styles.subtitle}>{language === 'es' ? 'Nivel: ' : 'Level: '}{profile.level}</Text>
      <View style={{height:12}} />
      <Button title={language === 'es' ? 'Jugar' : 'Play'} onPress={()=>setScreen('game')} />
      <View style={{height:8}} />
      <Button title={language === 'es' ? 'Configuración' : 'Settings'} onPress={()=>setScreen('settings')} />
      <View style={{height:20}} />
      <Button title={language === 'es' ? 'Español' : 'Spanish'} onPress={()=>setLanguage('es')} />
      <View style={{height:8}} />
      <Button title={language === 'es' ? 'Inglés' : 'English'} onPress={()=>setLanguage('en')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{flex:1, justifyContent:'center', alignItems:'center', padding:20},
  title:{fontSize:32, fontWeight:'700', marginBottom:6},
  subtitle:{fontSize:18, color:'#444'}
});
