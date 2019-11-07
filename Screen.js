import React from 'react';
import { Text, View } from 'react-native';

class Screen extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
        <Text>{navigation.state.routeName}</Text>
      </View>
    );
  }
} 

export default Screen;