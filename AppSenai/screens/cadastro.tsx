import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import InputField from '../components/input';
import Button from '../components/button';

const Header = () => {
        return (
            <View style={styles.header}>
                <Image source={require('./img/Logo.png')} style={styles.logo} />
                <Text style={styles.header}>Recuperação de Senha</Text>
            </View>
        );
}

export default function Cadastro() {
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.titulo}>
                <Text>
                    Insira seu e-mail para recuperar a senha
                </Text>
                <InputField />
                <Button />
            </View>
        </View>
    );
}


  const styles = StyleSheet.create({
    logo:{
        width:200,
        height:50,
        marginTop: 42,
      },

    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },

    header: {
        width: '100%',
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 20,
        color: 'white',
        padding: 15,
    },

    titulo: {
        marginTop: 20,
    },
  });