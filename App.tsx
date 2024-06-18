import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Text} from './src/components/Text/Text';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';
import {Button} from './src/components/Button/Button';
import {TextInput} from './src/components/TextInput/TextInput';
import {Icon} from './src/components/Icon/Icon';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 24}}>
          <Text mb="s8" preset="headingLarge">
            Olá
          </Text>
          <Text preset="paragraphLarge" mb="s40">
            Digite seu e-mail e senha para entrar
          </Text>
          <TextInput
            errorMessage="Error"
            label="E-mail"
            placeholder="Digite seu e-mail"
          />
          <TextInput
            label="Senha"
            placeholder="Digite sua senha"
            RightComponent={<Icon name="eyeOn" color="gray2" />}
          />
          <Button mt="s48" title="Entrar" />
          <Button mt="s12" preset="outline" title="Criar uma conta" />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
