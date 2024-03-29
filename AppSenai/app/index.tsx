import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Logo from "../components/logo";
import InputField from "../components/input";
import Botao from "../components/button";
import { Link } from "expo-router";
import { TouchableOpacity } from "react-native";


function login() {
  return (
    <View>
      <View>
        <Logo text="Login" color="black" />
      </View>

      <View>
        <Text style={styles.text} >Faça Login Para Acessar o Sistema!</Text>
        <InputField label="Email:" placeholder="Digite Email" secureTextEntry={false}/>
        <InputField label="Senha:" placeholder="Digite sua Senha" secureTextEntry={true} />
        <Link href="/itens" asChild>
          <TouchableOpacity>
            <Botao text="Entrar" color="black" />
          </TouchableOpacity>
        </Link>
      </View>
      <View style={styles.links}>
          <Link href="/cadastro" asChild>
            <Text style={styles.link}>Cadastre-Se</Text>
          </Link>
          <Link href="/rec" asChild>
            <Text style={styles.link}>Esqueceu sua senha?</Text>
          </Link>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    text : {
        fontSize: 20,
        fontWeight: '500',
        color: 'black',
        alignContent: 'center',
        textAlign: 'center',
        marginBottom: 20,
    }, 
    link: {
    fontSize: 14,
    color: 'blue',
  },
  links: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
});
export default login;