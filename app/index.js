import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
} from 'react-native';

import TabBar from './components/TabBar';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import ChatThread from './components/ChatThread'
import StoryCollection from './components/StoryCollection'


export default class Storyline extends Component {

  componentWillMount() {
    StatusBar.setHidden(true);
  }

  render() {
    return <ScrollableTabView
      initialPage={1}
      renderTabBar={() => <TabBar/>}
      tabBarPosition='overlayTop'
      >
      <StoryCollection tabLabel="collection" style={styles.tabView}></StoryCollection>
      <ChatThread tabLabel="story" style={styles.tabView}> </ChatThread>
      <ScrollView tabLabel="profile" style={styles.tabView}>
        <View style={styles.card}>
          <Text>Profile View : Coming Soon</Text>
        </View>
      </ScrollView>

    </ScrollableTabView>;
  }
}

const styles = StyleSheet.create({
  tabView: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.01)',
  },
  card: {
    borderWidth: 1,
    backgroundColor: '#0f0',
    borderColor: 'rgba(0,0,0,0.1)',
    margin: 5,
    height: 750,
    padding: 15,
    shadowColor: '#ccc',
    shadowOffset: { width: 2, height: 2, },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
});
