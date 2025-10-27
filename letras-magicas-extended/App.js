
import React, {useState, useEffect} from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import GameScreen from './screens/GameScreen';
import SettingsScreen from './screens/SettingsScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App(){
  const [screen, setScreen] = useState('home'); // 'home'|'game'|'settings'
  const [language, setLanguage] = useState('es'); // 'es' or 'en'
  const [profile, setProfile] = useState({name:'Alumno', ageGroup:'5-7', level:1, stars:0});

  useEffect(()=>{
    // load profile from local storage if exists
    AsyncStorage.getItem('lm_profile').then(r=>{
      if(r) setProfile(JSON.parse(r));
    }).catch(()=>{});
  },[]);

  const saveProfile = async(p) => {
    setProfile(p);
    await AsyncStorage.setItem('lm_profile', JSON.stringify(p));
  };

  return (
    <SafeAreaView style={styles.container}>
      {screen === 'home' && <HomeScreen language={language} setLanguage={setLanguage} setScreen={setScreen} profile={profile} saveProfile={saveProfile} />}
      {screen === 'game' && <GameScreen language={language} setScreen={setScreen} profile={profile} saveProfile={saveProfile} />}
      {screen === 'settings' && <SettingsScreen language={language} setScreen={setScreen} profile={profile} saveProfile={saveProfile} />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{flex:1, backgroundColor:'#FAFAFD'}
});
