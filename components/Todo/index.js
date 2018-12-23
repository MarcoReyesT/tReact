import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Header, Content, List, ListItem, Button, Icon, CheckBox, Body} from 'native-base';
import { reducers } from './reducers';
import Item from './Item';

export default class TodoList extends React.Component {

  render() {
    const items = ['1', '2', '3asdasdawe'];
    return (
      <Container>
        <Header />
        <Content>
        <Button>
            <Text>Agregar</Text>
          </Button>
        <List dataArray={items}
          renderRow={(it) => <Item item={it}/>  }>
        </List>
        </Content>
      </Container>
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
