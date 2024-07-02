import React from 'react';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';

import {Text} from '../../../components/Text/Text';
import {Screen} from '../../../components/Screen/Screen';
import {Button} from '../../../components/Button/Button';
import {SignUpSchema, signUpSchema} from './signUpSchema';
import {FormTextInput} from '../../../components/Form/FormTextInput';
import {FormPasswordInput} from '../../../components/Form/FormPasswordInput';
import {useResetNavigationSuccess} from '../../../hooks/useResetNavigationSuccess';

export function SignupScreen() {
  const {reset} = useResetNavigationSuccess();

  const {control, formState, handleSubmit} = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

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
      <FormTextInput
        control={control}
        name="username"
        placeholder="@"
        label="Seu username"
        boxProps={{mb: 's20'}}
      />
      <FormTextInput
        control={control}
        name="fullName"
        label="Nome completo"
        boxProps={{mb: 's20'}}
        placeholder="Digite seu nome completo"
      />
      <FormTextInput
        control={control}
        name="email"
        label="E-mail"
        boxProps={{mb: 's20'}}
        placeholder="Digite seu e-mail"
      />
      <FormPasswordInput
        control={control}
        name="email"
        label="Senha"
        boxProps={{mb: 's48'}}
        placeholder="Digite sua senha"
      />
      <Button
        disabled={!formState.isValid}
        title="Criar uma conta"
        onPress={handleSubmit(submitForm)}
      />
    </Screen>
  );
}
