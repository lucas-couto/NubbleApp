import React from 'react';

import {Text} from '../../../components/Text/Text';
import {Button} from '../../../components/Button/Button';
import {Screen} from '../../../components/Screen/Screen';
import {TextInput} from '../../../components/TextInput/TextInput';
import {PasswordInput} from '../../../components/PasswordInput/PasswordInput';

export function LoginScreen() {
  return (
    <Screen>
      <Text mb="s8" preset="headingLarge">
        Olá
      </Text>
      <Text preset="paragraphLarge" mb="s40">
        Digite seu e-mail e senha para entrar
      </Text>
      <TextInput
        label="E-mail"
        boxProps={{mb: 's20'}}
        placeholder="Digite seu e-mail"
      />
      <PasswordInput
        label="Senha"
        boxProps={{mb: 's20'}}
        placeholder="Digite sua senha"
      />
      <Button mt="s48" title="Entrar" />
      <Button mt="s12" preset="outline" title="Criar uma conta" />
    </Screen>
  );
}
