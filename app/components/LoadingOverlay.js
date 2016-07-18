import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Animated,
  ActivityIndicator
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


class LoadingOverlay extends Component {
  constructor (props) {
    super(props);

    this.state = {
      opacity: new Animated.Value(0),
      visible: false
    }
  }

  componentWillReceiveProps (nextProps) {
    // fade in
    if (!this.props.visible && nextProps.visible) {
      Animated.timing(
        this.state.opacity, { toValue: 1 }
      ).start();

      setTimeout(() => this.setState({ visible: true }), 0);
    }

    // fade out
    if (this.props.visible && !nextProps.visible) {
      Animated.timing(
        this.state.opacity, { toValue: 0, duration: 300 }
      ).start();

      setTimeout(() => this.setState({ visible: false }), 300);
    }
  }

  render () {
    return (
      <Animated.View style={[ this.state.visible ? styles.open : styles.closed, { opacity: this.state.opacity } ]}>
        <ActivityIndicator
          color={this.props.color}
          size={this.props.size || "large"}
          style={{ flex: 1 }}/>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  open: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, .5)'
  },

  closed: {
    position: 'absolute',
    width: 0,
    height: 0
  }
});

module.exports = LoadingOverlay;
