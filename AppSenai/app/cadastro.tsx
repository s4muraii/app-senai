import React from 'react';
import { Touchable, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Logo from '../components/logo';
import InputField from '../components/input';
import Botao from '../components/button';
import { Link } from 'expo-router';
import { TouchableOpacity } from 'react-native';

export default function Cadastro() {
  return (
    <KeyboardAwareScrollView
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={{ flexGrow: 1 }}
      scrollEnabled={false}
    >
      <View>
        <Logo text="Cadastre-se" color="red" />
        <InputField label="Nome" placeholder="Digite seu nome" secureTextEntry={false} />
        <InputField label="Sobrenome" placeholder="Digite seu Sobrenome" secureTextEntry={false} />
        <InputField label="Email" placeholder="Digite seu Email" secureTextEntry={false} />
        <InputField label="Telefone" placeholder="Digite seu Telefone" secureTextEntry={false} />
        <InputField label="Senha" placeholder="Digite sua Senha" secureTextEntry={true} />
        <InputField label="Confirme sua Senha" placeholder="Confirme sua Senha" secureTextEntry={true}/>
        <Link href="/index" asChild>
          <TouchableOpacity>
            <Botao text="Cadastrar" color="black" />
          </TouchableOpacity>
        </Link>
      </View>
    </KeyboardAwareScrollView>
  );
}