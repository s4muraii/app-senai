import React, { useState } from 'react';
import { TextInput, Text, View, StyleSheet } from 'react-native';

export const InputField = () => {

        const [email, setEmail] = useState('');

        return (
            <View>
                <Text style={styles.textemail}>Email: </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setEmail}
                    value={email}
                    placeholder="Digite seu e-mail"
                />
            </View>
        );
};

const styles = StyleSheet.create({
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
                marginTop: 50,
        }
});

export default InputField;