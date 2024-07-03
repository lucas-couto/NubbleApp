/* eslint-disable react-native/no-inline-styles */
import React, {PropsWithChildren} from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {useAppSafeArea} from '../../hooks/useAppSafeArea';
import {useAppTheme} from '../../hooks/useAppTheme';
import {Box, TouchableOpacityBox} from '../Box/Box';
import {Icon} from '../Icon/Icon';
import {Text} from '../Text/Text';

import {ScrollViewContainer, ViewContainer} from './components/ScreenContainer';

interface ScreenProps extends PropsWithChildren {
  canGoBack?: boolean;
  scrollable?: boolean;
}

export function Screen({children, canGoBack = false, scrollable = false}: ScreenProps) {
  const {goBack} = useNavigation();
  const {top, bottom} = useAppSafeArea();
  const {colors} = useAppTheme();

  const Container = scrollable ? ScrollViewContainer : ViewContainer;
  return (
    <KeyboardAvoidingView style={{flex: 1}} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Container backgroundColor={colors.background}>
        <Box
          paddingHorizontal="s24"
          style={{
            paddingTop: top,
            paddingBottom: bottom,
          }}>
          {canGoBack && (
            <TouchableOpacityBox mb="s24" flexDirection="row" alignItems="center" onPress={goBack} gap="s8">
              <Icon name="arrowLeft" color="primary" />
              <Text semiBold>Voltar</Text>
            </TouchableOpacityBox>
          )}
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
}
