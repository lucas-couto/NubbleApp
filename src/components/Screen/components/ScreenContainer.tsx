/* eslint-disable react-native/no-inline-styles */
import React, {PropsWithChildren} from 'react';
import {ScrollView, View} from 'react-native';

interface Props extends PropsWithChildren {
  backgroundColor: string;
}

export function ScrollViewContainer({children, backgroundColor}: Props) {
  return (
    <ScrollView keyboardShouldPersistTaps="handled" style={{backgroundColor, flex: 1}}>
      {children}
    </ScrollView>
  );
}

export function ViewContainer({children, backgroundColor}: Props) {
  return <View style={{backgroundColor, flex: 1}}>{children}</View>;
}
