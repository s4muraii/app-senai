import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity , Linking } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import React,{ useState } from 'react';
import Logo from '../components/logo';
import InputField from '../components/input';
import Botao from '../components/button';

function Cadastro () {
  return (
    <View>

        <View>
            <Logo text="Cadastre-se" color="red" />
        </View>
        <View>
          <InputField label="Nome" placeholder="Digite seu nome" value={""} setValue={() => {}} />
          <InputField label="Sobrenome" placeholder="Digite seu Sobrenome" value={""} setValue={() => {}} />
          <InputField label="Email" placeholder="Digite seu Email" value={""} setValue={() => {}} />
          <InputField label="Telefone" placeholder="Digite seu Telefone" value={""} setValue={() => {}} />
          <InputField label="Senha" placeholder="Digite sua Senha" value={""} setValue={() => {}} />
          <InputField label="Confirme sua Senha" placeholder="Confirme sua Senha" value={""} setValue={() => {}} />
          <Botao text="Cadastrar" color="black" />

        </View>
        <StatusBar style="auto" />
    </View>
  );
}

export default Cadastro;