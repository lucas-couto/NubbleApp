import React from 'react';
import {Alert} from 'react-native';

import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';

import {
  Text,
  Button,
  Screen,
  FormTextInput,
  FormPasswordInput,
} from '@components';
import {AuthScreenProps} from '@routes';

import {LoginSchema, loginSchema} from './loginSchema';

export function LoginScreen({navigation}: AuthScreenProps<'LoginScreen'>) {
  function navigateToSignupScreen() {
    navigation.navigate('SignUpScreen');
  }

  const {control, formState, handleSubmit} = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  function submitForm(data: LoginSchema) {
    Alert.alert(`E-mail: ${data.email} ${'\n'} Senha: ${data.password}`);
  }

  function navigateToForgotPasswordScreen() {
    navigation.navigate('ForgotPasswordScreen');
  }

  return (
    <Screen scrollable>
      <Text mb="s8" preset="headingLarge">
        Olá
      </Text>
      <Text preset="paragraphLarge" mb="s40">
        Digite seu e-mail e senha para entrar
      </Text>
      <FormTextInput
        control={control}
        name="email"
        label="E-mail"
        boxProps={{mb: 's20'}}
        placeholder="Digite seu e-mail"
      />
      <FormPasswordInput
        control={control}
        name="password"
        label="Senha"
        boxProps={{mb: 's10'}}
        placeholder="Digite sua senha"
      />
      <Text
        onPress={navigateToForgotPasswordScreen}
        color="primary"
        preset="paragraphSmall">
        Esqueci minha senha
      </Text>
      <Button
        disabled={!formState.isValid}
        mt="s48"
        title="Entrar"
        onPress={handleSubmit(submitForm)}
      />
      <Button
        mt="s12"
        onPress={navigateToSignupScreen}
        preset="outline"
        title="Criar uma conta"
      />
    </Screen>
  );
}
