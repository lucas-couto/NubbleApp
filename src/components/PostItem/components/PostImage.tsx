import React from 'react';
import {Dimensions, Image, ImageStyle, StyleProp} from 'react-native';

import {Post} from '@domain';

type Props = Pick<Post, 'imageURL'>;
export function PostImage({imageURL}: Props) {
  return (
    <Image source={{uri: imageURL}} resizeMode="cover" style={$postImage} />
  );
}

const $postImage: StyleProp<ImageStyle> = {
  width: Dimensions.get('screen').width,
  height: 300,
  marginHorizontal: -24,
};
