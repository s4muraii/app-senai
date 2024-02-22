import React from "react";
import { Image, Text, View, StyleSheet } from "react-native";

const Logo = ({text, color}) => {
    const styles = StyleSheet.create({
        header: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: color,
            borderBottomWidth: 1,
            borderBottomColor: '#000',
            padding: 10,
        },
        logo: {
            width: 50,
            height: 50,
        },
        headerText: {
            fontSize: 20,
            fontWeight: 'bold',
        },
    });

    return (
        <View style={styles.header}>
            <Image source={require('./Img/Logo.png')} style={styles.logo} />
            <Text style={styles.headerText}>{text}</Text>
        </View>
    );
}

export default Logo;