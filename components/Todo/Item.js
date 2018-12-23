import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Header, Content, List, ListItem, Button, Icon, CheckBox, Body} from 'native-base';

export default class Item extends React.Component {
  states = {
    checked: false
  };

  constructor (props){
    super (props);
    this.states.checked = this.props.states;

    this.handleClick = this.handleClick.bind(this);    
  }

  handleClick (){
    this.setState({
      checked: !this.states.checked
    })

    this.states.checked = !this.states.checked

  }

  render() {
    //let text = this.state.checked ? <strike>{this.props.title}</strike> : this.props.icon;
    return(
      <View style={styles}>
        <CheckBox checked={this.states.checked} onPress={this.handleClick.bind(this)} color="#44f"/>
        <Body>
          <Text>&nbsp;&nbsp;&nbsp;{this.props.title}</Text>
        </Body>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
