import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import React,{ useState } from 'react';

export const Button = () => {
    return(
        <View>
            <TouchableOpacity style={styles.botãoacessar}>
                <Text style={styles.textbotao}>Acessar</Text>
            </TouchableOpacity>
            <StatusBar style="auto" />
        </View>
    );
};

const styles = StyleSheet.create({
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
});

export default Button;