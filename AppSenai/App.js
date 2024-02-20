// Autor: Vinicius de Oliveira Moura
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import React,{ useState } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const Header = () => {
  return (
    <View style={styles.header}>
      <Image source={require('./img/Logo.png')} style={styles.logo} />
      <Text style={styles.header}>Bem-Vindo(a)</Text>
    </View>
  );
}

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.textemail}>Email: </Text>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Digite seu e-mail"
      />
      <Text style={styles.textsenha}>Senha: </Text>
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="Digite sua senha"
        secureTextEntry
      />
      <TouchableOpacity style={styles.botãoacessar}>
        <Text style={styles.textbotao}>Acessar</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
      <Text style={styles.link}>
        Não possui uma conta? Cadastre-se!
      </Text>
      <View style={styles.icons}>
        <AntDesign name="google" size={30} color="black" />
        <FontAwesome5 name="facebook" size={30} color="black" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  header:{
    width: '100%',
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
    padding: 15,
    
  },
  logo:{
    width:200,
    height:50,
    marginTop: 42,
  },
  input: {
    height: 40,
    width: '80%',
    margin: 12,
    padding: 10,
    borderBottomWidth: 1,
  },
  textemail: {
    fontSize: 14,
    color: 'black',
    marginRight: 280,
    marginTop: 20,
    marginTop: 50,
  },

  textsenha: {
    fontSize: 14,
    color: 'black',
    marginRight: 280,
    marginTop: 20,
  },

  botãoacessar: {
    padding: 10,
  },

  textbotao: {
    fontSize: 20,
    color: 'white',
    backgroundColor: 'black',
    textAlign: 'center',
    padding: 10,
    width: 335,
  },
  
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
    marginRight: 95,
    marginTop: 20,
  },

  icons: {
    marginTop: 50,
    gap: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
