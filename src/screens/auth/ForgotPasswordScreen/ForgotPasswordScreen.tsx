import React from 'react';

import {Text} from '../../../components/Text/Text';
import {Button} from '../../../components/Button/Button';
import {Screen} from '../../../components/Screen/Screen';
import {TextInput} from '../../../components/TextInput/TextInput';
import {useResetNavigationSuccess} from '../../../hooks/useResetNavigationSuccess';

export function ForgotPasswordScreen() {
  const {reset} = useResetNavigationSuccess();
  function submitForm() {
    reset({
      title: 'Enviamos as intruções para seu e-mail',
      description:
        'Clique no link enviado no seu e-mail para recuperar sua senha',
      icon: {
        name: 'messageRound',
        color: 'primary',
      },
    });
  }

  return (
    <Screen canGoBack>
      <Text mb="s16" preset="headingLarge">
        Esqueci minha senha
      </Text>
      <Text preset="paragraphLarge" mb="s32">
        Digite seu e-mail e enviaremos as instruções para redefinição de senha.
      </Text>
      <TextInput
        label="E-mail"
        boxProps={{mb: 's40'}}
        placeholder="Digite seu e-mail"
      />
      <Button onPress={submitForm} title="Recuperar senha" />
    </Screen>
  );
}
