import React from "react";
import { View, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import Itens from "../components/item";
import { AntDesign, Entypo, Foundation } from '@expo/vector-icons';
import Bottom from "../components/bottom";
import { Link } from "expo-router";

const itens = () => {
    return (
        <View>
        <ScrollView>
            <View style={styles.displaytop}>
                <Foundation name="list" size={24} color="#595959" />
                <TouchableOpacity>
                    <Entypo name="magnifying-glass" size={24} color="#595959" />
                </TouchableOpacity>
            </View>
            <View>
                <Link href="/editar" ><Itens id="956389" item="CADEIRA  SENAI" /></Link>
                <Link href="/editar" ><Itens id="956389" item="CADEIRA  SENAI" /></Link>
                <Link href="/editar" ><Itens id="956389" item="CADEIRA  SENAI" /></Link>
                <Link href="/editar" ><Itens id="956389" item="CADEIRA  SENAI" /></Link>
                <Link href="/editar" ><Itens id="956389" item="CADEIRA  SENAI" /></Link>
                <Link href="/editar" ><Itens id="956389" item="CADEIRA  SENAI" /></Link>
                <Link href="/editar" ><Itens id="956389" item="CADEIRA  SENAI" /></Link>
                <Link href="/editar" ><Itens id="956389" item="CADEIRA  SENAI" /></Link>
                <Link href="/editar" ><Itens id="956389" item="CADEIRA  SENAI" /></Link>
                <Link href="/editar" ><Itens id="956389" item="CADEIRA  SENAI" /></Link>
                <Link href="/editar" ><Itens id="956389" item="CADEIRA  SENAI" /></Link>
                <Link href="/editar" ><Itens id="956389" item="CADEIRA  SENAI" /></Link>
            </View>
        </ScrollView>
            <View style={styles.addButtonContainer}>
                <Link href="/additens" >
                    <AntDesign name="pluscircle" size={50} color="red" />
                </Link>
            </View>
            <Bottom color="#ff0000" coloricons= "#ffffff" bottom={0} position="absolute" />
        </View>
    );
};

const styles = StyleSheet.create({
    displaytop:{
        padding: 20,
        marginTop: 40,
        width: "100%",
        height: 120,
        flexDirection: "row",
        justifyContent: "space-between",
    },
display: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 60,
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    alignItems: "center",
    backgroundColor: "#ff0000",
},
addButtonContainer: {
    position: "absolute",
    bottom: 20,
    right: 0,
    margin: 20,
    marginBottom: 40,
    marginRight: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
},
});

export default itens;