import React, { Component } from 'react';
import {
  LayoutAnimation,
  StyleSheet,
  Text,
  TextInput,
  Image,
  View,
  TouchableWithoutFeedback,
  Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import LoadingOverlay from '../components/LoadingOverlay';
import vars from '../vars';

class LoginScreen extends Component {
  constructor (props) {
    super(props);

    this.state = {
      isOpen: false,
      username: '',
      password: '',
      loading: false
    };
  }

  _open () {
    LayoutAnimation.easeInEaseOut();
    this.setState({ isOpen: true });

    this._focusUsername();
  }

  _close () {
    LayoutAnimation.easeInEaseOut();
    this.setState({
      isOpen: false,
      loading: true
    });

    setTimeout(() => this.setState({ loading: false }), 3000);
  }

  _focusUsername () {
    this.refs.usernameInput.focus();
  }

  _focusPassword () {
    console.log('password');
    this.refs.passwordInput.focus();
  }

  render () {
    let topStyle = { flex: 1 };
    let bottomStyle = this.state.isOpen ? { flex: 3, height: null } : { flex: 0, height: 0 };

    return (
      <Image
        resizeMode="cover"
        source={require('../../images/login_background.jpg')}
        style={styles.backgroundImage}>
        <View style={styles.container}>
          <View style={[ styles.section, topStyle ]}>
            <View>
              <TouchableWithoutFeedback onPress={ () => this._open() }>
                <View>
                  <Icon name="cube" style={styles.mainIcon} />
                </View>
              </TouchableWithoutFeedback>
            </View>
          </View>

          <View style={[ styles.section, bottomStyle ]}>
            <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
              <View style={[ styles.inputContainer, { marginBottom: 30 } ]}>
                <Icon name="user" style={[ styles.inputIcon, { paddingRight: 10 } ]} />

                <TextInput
                  ref="usernameInput"
                  autoCapitalize="none"
                  autoCorrect={false}
                  returnKeyType="next"
                  style={styles.input}
                  focus={this.state.focusUsername}
                  value={this.state.username}
                  underlineColorAndroid="rgba(0, 0, 0, 0)"
                  onChange={ e => this.setState({ username: e.nativeEvent.text })}
                  onSubmitEditing={ () => this._focusPassword() }
                />
              </View>

              <View style={[ styles.inputContainer, { marginBottom: 70 } ]}>
                <Icon name="lock" style={[ styles.inputIcon, { paddingRight: 10 } ]} />

                <TextInput
                  ref="passwordInput"
                  secureTextEntry
                  autoCapitalize="none"
                  autoCorrect={false}
                  returnKeyType="done"
                  style={styles.input}
                  value={this.state.password}
                  underlineColorAndroid="rgba(0, 0, 0, 0)"
                  onChange={ e => this.setState({ password: e.nativeEvent.text })}
                  onSubmitEditing={ () => this._close() }
                />
              </View>

              <Icon.Button name="sign-in" backgroundColor="transparent" style={styles.button}
                onPress={ () => this._close() }>
                <Text style={styles.text}>Log in</Text>
              </Icon.Button>
            </View>
          </View>
        </View>

        <LoadingOverlay visible={this.state.loading} />
      </Image>

    );
  }
}

let { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    height: null,
    width: null
  },

  container: {
    backgroundColor: 'rgba(0, 0, 0, .5)',
    flex: 1
  },

  section: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: Dimensions.get('window').width - 40,
    borderBottomColor: 'white',
    borderBottomWidth: 1
  },

  input: {
    height: 40,
    flex: 1,
    color: 'white'
  },

  inputIcon: {
    color: 'white',
    fontSize: 20,
    width: 30,
    textAlign: 'center'
  },

  mainIcon: {
    color: 'white',
    fontSize: 96
  },

  text: {
    color: 'white'
  },

  button: {
    backgroundColor: 'transparent',
    borderColor: 'white',
    borderWidth: 1
  }
});

module.exports = LoginScreen;
