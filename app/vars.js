import { Platform } from 'react-native';

module.exports = {
  GLOBAL_PADDING_TOP: Platform.OS === 'ios' ? 20 : 0
};
