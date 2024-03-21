import React from "react";
import { Image, View, StyleSheet } from "react-native";
import { FontAwesome6 } from '@expo/vector-icons'; // Add the import statement for FontAwesome6

const Load = () => {
    const styles = StyleSheet.create({
        Load: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#FF0000',
        },
        Logo: {
            width: 181,
            height: 39,
        },
    });

    return (
        <View style={styles.Load}>
            <Image source={require('./components/img/Logo.png')} style={styles.Logo} />
            <FontAwesome6 name="circle-notch" size={60} color="white" style={{ marginTop: 80 }} />
        </View>
    );
}

export default Load;