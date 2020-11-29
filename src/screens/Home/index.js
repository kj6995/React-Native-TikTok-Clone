import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import Post from '../../components/Post';

const post1 = {
  id: 'p1',
  videoUri:
    'https://biteable.com/static-assets/homepage/HubpageVideo_Instagram_16x9_01.mp4',
  user: {
    id: 'u1',
    username: 'smartycat',
    imageUri:
      'https://images.unsplash.com/profile-1446404465118-3a53b909cc82?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=27a346c2362207494baa7b76f5d606e5',
  },
  description: "hahahaha that's good boy @borat",
  songName: 'NF - The search',
  songImage:
    'https://images.unsplash.com/profile-1446404465118-3a53b909cc82?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128&s=27a346c2362207494baa7b76f5d606e5',
  likes: 168,
  comments: 12,
  shares: 44,
};

const Home = () => {
  return (
    <View>
      <Post post={post1} />
    </View>
  );
};

export default Home;
