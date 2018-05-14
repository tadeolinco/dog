import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  NativeModules,
  Environment,
  asset,
  View,
  Text,
} from 'react-360';
import qs from 'qs';
const texts = {
  dog: `Dogs are commonly used for aiding physical therapy patients. 
  As per research, patients tend to be more encouraged to go on to therapy 
  when dogs are involved. Other institutions also let dogs interact with
  people to alleviate stress.`,
  horse: `Horseback riding can help stimulate muscles. They help in improving 
  the motor skills, balance and overall physical rehabilitation.
  (CBC) If you’re interested, head to Tagaytay for the experience!`,
  bird: `Bird watching can also be a type of therapy. 
  It can be calming to the audience and also help alleviate stress.`,
};

export default class hello360 extends React.Component {
  state = {
    text: '',
    image: null,
  };

  componentDidMount() {
    const { animal } = qs.parse(NativeModules.Location.search.slice(1));
    if (animal) {
      Environment.setBackgroundImage(asset(`${animal}.jpg`));
      this.setState({ text: texts[animal] });
    }
  }

  render() {
    return (
      <View style={styles.greetingBox}>
        <Text style={styles.greeting}>{this.state.text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
    opacity: 0.8,
  },
  greeting: {
    fontSize: 30,
    opacity: 1,
  },
});

AppRegistry.registerComponent('hello360', () => hello360);
