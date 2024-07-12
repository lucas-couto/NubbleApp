import React from 'react';
import {Image} from 'react-native';

import {Post} from '@domain';

import {Box, Text} from '@components';

type Props = Pick<Post, 'author'>;
export function PostHeader({author}: Props) {
  return (
    <Box marginBottom="s24" gap="s16">
      <Box flexDirection="row" gap="s12" alignItems="center">
        <Image
          source={{uri: author.profileURL}}
          width={32}
          height={32}
          borderRadius={14}
        />
        <Text semiBold>{author.userName}</Text>
      </Box>
    </Box>
  );
}
