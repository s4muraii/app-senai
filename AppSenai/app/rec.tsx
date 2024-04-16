import React from "react";
import Logo from "../components/logo";
import InputField from "../components/input";
import Botao from "../components/button";
import { Text, View, StyleSheet } from "react-native";

function Recuperar(){
    return(
    <View>
    <View>
    <Logo text="Recuperção de Senha" color="darkblue" />
    </View>
    <Text style={styles.text}>Insira seu e-mail para recuperar a senha!</Text>
    <InputField  label="Email:" placeholder="Digite seu Email" secureTextEntry={false}/>
    
    <Botao text="Recuperar" color="black" href="/rec.tsx" />
    </View>
)}

const styles = StyleSheet.create({
    text : {
        fontSize: 20,
        fontWeight: '500',
        color: 'black',
        alignContent: 'center',
        textAlign: 'center',
        marginBottom: 20,
    },
});
export default Recuperar;