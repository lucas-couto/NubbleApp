import React from 'react';

import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';

import {Text, Button, Screen, FormTextInput} from '@components';
import {useResetNavigationSuccess} from '@hooks';

import {
  ForgotPasswordSchema,
  forgotPasswordSchema,
} from './forgotPasswordSchema';

export function ForgotPasswordScreen() {
  const {reset} = useResetNavigationSuccess();

  const {control, formState, handleSubmit} = useForm<ForgotPasswordSchema>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: '',
    },
    mode: 'onChange',
  });

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
      <FormTextInput
        control={control}
        name="email"
        label="E-mail"
        boxProps={{mb: 's40'}}
        placeholder="Digite seu e-mail"
      />
      <Button
        disabled={!formState.isValid}
        onPress={handleSubmit(submitForm)}
        title="Recuperar senha"
      />
    </Screen>
  );
}
