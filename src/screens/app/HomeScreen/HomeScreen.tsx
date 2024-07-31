/* eslint-disable react-native/no-inline-styles */
import React, {useRef} from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  RefreshControl,
  StyleProp,
  ViewStyle,
} from 'react-native';

import {Post, usePostList} from '@domain';
import {useScrollToTop} from '@react-navigation/native';

import {PostItem, Screen} from '@components';
import {AppTabScreenProps} from '@routes';

import {HomeEmpty} from './components/HomeEmpty';
import {HomeHeader} from './components/HomeHeader';

export function HomeScreen({}: AppTabScreenProps<'HomeScreen'>) {
  const flatListRef = useRef<FlatList<Post>>(null);
  useScrollToTop(flatListRef);
  const {postList, loading, error, refresh, fetchNextPage} = usePostList();

  function renderItem({item}: ListRenderItemInfo<Post>) {
    return <PostItem post={item} />;
  }

  return (
    <Screen style={$screen}>
      <FlatList
        ref={flatListRef}
        data={postList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<HomeHeader />}
        contentContainerStyle={{flexGrow: 1}}
        onEndReached={fetchNextPage}
        refreshing={true}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={refresh} />
        }
        onEndReachedThreshold={0.5}
        ListEmptyComponent={
          <HomeEmpty loading={loading} error={error} refetch={refresh} />
        }
      />
    </Screen>
  );
}

const $screen: StyleProp<ViewStyle> = {
  flex: 1,
  paddingTop: 0,
  paddingBottom: 0,
  paddingHorizontal: 0,
};
