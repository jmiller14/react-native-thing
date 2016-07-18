import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  StatusBar,
  Platform,
  UIManager
} from 'react-native';

import vars from './vars';
import LoginScreen from './screens/LoginScreen';

class ReactThing extends Component {
  constructor (props) {
    super(props);

    if (Platform.OS === 'ios') {
      StatusBar.setBarStyle('light-content');
    } else if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor('black');
      UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }
  render () {
    return (
      <View style={styles.mainView}>
        <LoginScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: 'black',
    paddingTop: vars.GLOBAL_PADDING_TOP
  }
});

AppRegistry.registerComponent('ReactThing', () => ReactThing);
