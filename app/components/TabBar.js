import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

const TabBar = React.createClass({
  tabIcons: [],

  propTypes: {
    goToPage: React.PropTypes.func,
    activeTab: React.PropTypes.number,
    tabs: React.PropTypes.array,
  },

  componentDidMount() {
    this._listener = this.props.scrollValue.addListener(this.setAnimationValue);
  },

  setAnimationValue({ value, }) {},

  render() {
    return <View style={[styles.tabs, this.props.style, ]}>
      {this.props.tabs.map((tab, i) => {
          var icon;
             switch(i){
                case 0 :
                    icon = this.props.activeTab === 0 ? tabImages.collection.selected : tabImages.collection.unselected;
                    break;
                case 1 :
                    icon = this.props.activeTab === 1 ? tabImages.story.selected : tabImages.story.unselected;
                    break;
                case 2 :
                    icon = this.props.activeTab === 2 ? tabImages.profile.selected : tabImages.profile.unselected;  
                    break;
             } 
          return <TouchableOpacity key={tab} onPress={() => this.props.goToPage(i)} style={styles.tab}>
               <Image source={icon} />
          </TouchableOpacity>;
      })}
    </View>;
  },
});

const styles = StyleSheet.create({
  tab: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop:30,
      paddingBottom: 10,
  },
  tabs: {
      height: 60,
      flexDirection: 'row',
      paddingTop: 5,
      borderWidth: 1,
      borderTopWidth: 0,
      borderLeftWidth: 0,
      borderRightWidth: 0,
      borderBottomColor: 'rgba(0,0,0,0)',
  },
});

const tabImages = {
  collection : {
      selected : require('../images/collectionSelected.png'),
      unselected : require('../images/collectionUnselected.png'),
  },
  story : {
      selected : require('../images/storySelected.png'),
      unselected : require('../images/storyUnselected.png'),
  },
  profile : {
      selected : require('../images/profileSelected.png'),
      unselected : require('../images/profileUnselected.png'),
  },
};


export default TabBar;
