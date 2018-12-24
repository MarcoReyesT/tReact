import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Header, Content, List, Input, Icon, Button} from 'native-base';
import { reducers } from './reducers';
import Item from './Item';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators as actions } from './actions';


class TodoList extends React.Component {
  
  constructor (props){
    super ();
  }
  state = {
    texto: '',
    state: false
  };

  cantidad = 0;


  render() {

    const {
      items,
    } = this.props;
    this.cantidad = items.length;
    console.log("cantidad: " + this.cantidad)
    
    return (
      <Container>
        <Header />
        <Content>
          <View>
            <Input placeholder='Ingrese Texto de nueva tarea' onChangeText={(text) => this.state.texto = text} />
            <Button onPress={() => this.addItem()} >
              <Text>Agregar</Text>
            </Button>
          </View>
          <List>
            {
              items.map((item) => (
                <Item
                  //key={cantidad + 1}
                  key={item.key}
                  texto={item.texto}
                />
              ))
            }
          </List>
        </Content>
      </Container>
    );
  }

  addItem() {
    console.log("CANTIDAD ELEMENTOS");
    console.log(this.cantidad);
    item = {
      key: this.cantidad + 1,
      texto: this.state.texto,
      state: this.state.state
    }
    this.props.addItem(item);
    this.setState({ state: this.state });
    this.state.state = false;
    this.state = false;
    console.log("Agregado");
  }
}

function mapStateToProps(state) {
  const { items } = state;
  return {
      items
  };
}

function mapDispatchToProps(dispatch) {
  return {
      addItem: bindActionCreators(actions.addItem, dispatch),
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);