import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Header, Content, List, ListItem, Button, Icon, CheckBox, Body} from 'native-base';

export default class Item extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      checked: false,
      //checked: this.props.item.checked,
    };
  }


  render() {
            <ListItem>
              <CheckBox checked={this.state.checked} onPress={() => this.setState({ checked: !this.state.checked })} color="#44f"/>
              <Body>
                <Text>&nbsp;&nbsp;&nbsp;{it}</Text>
              </Body>
            </ListItem>
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
