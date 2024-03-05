// Autor: Vinicius de Oliveira Moura
import { View, StyleSheet } from 'react-native';
import React from 'react';
import Login from './screens/login';
import Cadastro from './screens/cadastro';
import Recuperar from './screens/recuperação';
import Load from './screens/load';
import Itens from './screens/itens';

import cadastro from './screens/cadastro';

export default function App() {
  return (
    <View style={styles}>
      <Cadastro />
    </View>
  );
}
const styles = StyleSheet.create({
});