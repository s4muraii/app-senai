import React from "react";
import { View, Text, StyleSheet } from "react-native";
import InventoryInput from "../components/invinput";
export default function AddItens() {
        const styles = StyleSheet.create({
    paddingtop: {
        paddingTop: 60,
    }});

    return (
        <View>
<View>
    <View style={styles.paddingtop}>
    <InventoryInput label='N inventario'/>
    <InventoryInput label='Descrição' />
    <InventoryInput label='Local'/>
    <InventoryInput label='Responsavel'/>
    <InventoryInput label='Data de registro'/>
    </View>
    </View>
</View>
    );
} 