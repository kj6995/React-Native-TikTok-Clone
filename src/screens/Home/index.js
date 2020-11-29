import React from 'react';
import {SafeAreaView, View, Text, FlatList, Dimensions} from 'react-native';
import Post from '../../components/Post';
import posts from '../../../data/posts';

const Home = () => {
  return (
    <View>
      <FlatList
        data={posts}
        renderItem={({item}) => <Post post={item} />}
        showsVerticalScrollIndicator={false}
        snapToInterval={Dimensions.get('window').height - 48}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
      />
    </View>
  );
};

export default Home;
