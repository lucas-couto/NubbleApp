import React from 'react';
import {Text} from '../../../components/Text/Text';
import {Screen} from '../../../components/Screen/Screen';
import {Button} from '../../../components/Button/Button';
import {TextInput} from '../../../components/TextInput/TextInput';
import {PasswordInput} from '../../../components/PasswordInput/PasswordInput';
import {useResetNavigationSuccess} from '../../../hooks/useResetNavigationSuccess';

export function SignupScreen() {
  const {reset} = useResetNavigationSuccess();
  function submitForm() {
    reset({
      title: 'Sua conta foi criada com sucesso!',
      description: 'Agora é so fazer login na nossa plataforma!',
      icon: {
        name: 'checkRound',
        color: 'greenSuccess',
      },
    });
  }

  return (
    <Screen canGoBack scrollable>
      <Text preset="headingLarge" mb="s32">
        Criar uma conta
      </Text>
      <TextInput placeholder="@" label="Seu username" boxProps={{mb: 's20'}} />
      <TextInput
        label="Nome completo"
        boxProps={{mb: 's20'}}
        placeholder="Digite seu nome completo"
      />
      <TextInput
        label="E-mail"
        boxProps={{mb: 's20'}}
        placeholder="Digite seu e-mail"
      />
      <PasswordInput
        label="Senha"
        boxProps={{mb: 's48'}}
        placeholder="Digite sua senha"
      />
      <Button title="Criar uma conta" onPress={submitForm} />
    </Screen>
  );
}
