
import React, {useState} from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';

export default function SettingsScreen({language, setScreen, profile, saveProfile}){
  const [name, setName] = useState(profile.name || '');
  const [level, setLevel] = useState(profile.level || 1);

  const save = () => {
    const p = {...profile, name, level: Number(level)};
    saveProfile(p);
    setScreen('home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{language === 'es' ? 'Configuración' : 'Settings'}</Text>
      <TextInput placeholder={language==='es' ? 'Nombre del niño' : 'Child name'} value={name} onChangeText={setName} style={styles.input} />
      <TextInput placeholder={language==='es' ? 'Nivel (1-3)' : 'Level (1-3)'} value={String(level)} onChangeText={setLevel} style={styles.input} keyboardType='numeric' />
      <Button title={language === 'es' ? 'Guardar' : 'Save'} onPress={save} />
      <View style={{height:8}} />
      <Button title={language === 'es' ? 'Volver' : 'Back'} onPress={()=>setScreen('home')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{flex:1, justifyContent:'center', alignItems:'center', padding:20},
  title:{fontSize:22, fontWeight:'700'},
  input:{borderWidth:1, borderColor:'#ccc', padding:8, width:'80%', borderRadius:6, marginVertical:8}
});
