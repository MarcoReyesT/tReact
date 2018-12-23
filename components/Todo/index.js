import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Header, Content, List, ListItem, Icon, Button} from 'native-base';
import { reducers } from './reducers';
import Item from './Item';



export default class TodoList extends React.Component {
  
  constructor (props){
    super ();
  }

  render() {


    const list = [
      {
        title: 'uno',
        icon: 'flight-takeoff'
      },
      {
        title: 'dos',
        icon: 'flight-takeoff'
      },
      {
        title: 'tres',
        icon: 'flight-takeoff'
      },
      {
        title: 'cuatro',
        icon: 'flight-takeoff'
      }
    ];
    
    //let items = ['1', '2', '3asdasdawe'];
    return (
      <Container>
        <Header />
        <Content>
        <Button>
            <Text>Agregar</Text>
          </Button>
          <List>
            {
              list.map((item) => (
                <Item
                  key={item.title}
                  title={item.title}
                  leftIcon={{name: item.icon}}
                />
              ))
            }
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
