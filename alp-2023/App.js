import React, {useState} from 'react';
import { Pressable, RefreshControl, ScrollView } from 'react-native';
import { Button, Linking } from 'react-native';
import { 
  StyleSheet, 
  View, 
  Text
} from 'react-native';

export default function App() {
  /*First Steps*/
    const [user, setName] = useState('GUTAO')
    const [session, setSession] = useState({
      number:6,
      title: 'state',
    })
    const [current, setCurrent] = useState(true)
    const onClickHandler = () => {
      setName('GUTAONADA')
      setSession({
        number: 1,
        title: 'ola',
      })
      setCurrent(false)
    }

  /*At 1*/
    const [count, setCount] = useState({
      times: 0,
      counts: 0
    })
    const addOne = () => {
      setCount({
        counts: count.counts+5,
        times: count.times+1,
      })
    }

  /*Style and Style Sheet*/ 
    const changeStyle = () => {

    }

  /*List, scrollview, refresh control*/
  const [items,setItems] = useState([
    {key:1,item:'Item 1'},
    {key:2,item:'Item 2'},
    {key:3,item:'Item 3'},
    {key:4,item:'Item 4'},
    {key:5,item:'Item 5'},
    {key:6,item:'Item 6'},
    {key:7,item:'Item 7'},
    {key:8,item:'Item 8'},    
  ])

  const [refresh,setRefresh] = useState(false)

  const onRefresh = () => {
    setRefresh(true);
    setItems([...items, {key:9,item:'Item 9'}])
    setRefresh(false)
  }

  
  return (
    <View style={styles.body}>
      <ScrollView refreshControl={
        <RefreshControl refreshing={ refresh }
        onRefresh={onRefresh}></RefreshControl>
      }>
      <View style={styles.divs}>
        <Text style={styles.header}>First Step</Text>
        <Text style={styles.text}>{user}</Text>
        <Text style={styles.text}>This is the session number {session.number}, about {session.title}</Text>
        <Text style={styles.text}>{current ? 'You can proceed' : 'You cant proceed :('}</Text>
        <Button buttonStyle={styles.button} title='Mudar nome'  onPress={onClickHandler}></Button>
      </View>

      <View style={styles.divs}>
        <Text style={styles.header}>At 1</Text>
        <Text style={styles.text}>{count.counts}</Text>
        <Button title='add' onPress={addOne}></Button>
        <Text style={styles.text}>You clicked {count.times} times</Text>
      </View>

      <View style={styles.divs}>
        <Text style={styles.header}>Style test</Text>
        <Text style={{
          fontSize: 40,
          textTransform: 'uppercase',
        }}>lorem ipsum</Text>
        <Button title='UPDATE STATE'></Button>
      </View>

      <View style={styles.divs}>
        {
          items.map((item)=>{
            return (
              <View style={{
                flex: 1,
                backgroundColor: '#ef0234',
                alignItems: 'stretch',
                justifyContent: 'space-around',
                margin: 10,
              }} key={item.key}>
                <Text style={{
                  fontSize: 50,
                }}>{item.item}</Text>
              </View>
            )
          })
        }
      </View>
      

      {/**FLEX UI RESPONSIBLE _ TELA INTEIRA */}
      {/*
        <View style={{
          flex: 1,
          flexDirection: 'column',
          backgroundColor: '#FFF',
          alignItems: 'stretch',
          justifyContent: 'center'
        }}>
          <View style={{
            backgroundColor: '#F00',
            flex: 1,
            alignItems: 'stretch',
            justifyContent: 'center',
            flexDirection: 'row'
          }}>

            <View style={{
              backgroundColor: '#0FF',
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Text style={styles.text}>1</Text>
            </View>  

            <View style={{
              backgroundColor: '#F0F',
              flex: 2,
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Text style={styles.text}>2</Text>
            </View> 

            <View style={{
              backgroundColor: '#FF0',
              flex: 3,
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Text style={styles.text}>3</Text>
            </View> 
          
          </View>

          <View style={{
            backgroundColor: '#F0F',
            flex: 2,
            alignItems: 'stretch',
            justifyContent: 'center'
          }}>
              <View style={{
              backgroundColor: '#F00',
              flex: 2,
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Text style={styles.text}>4</Text>
            </View>

            <View style={{
              backgroundColor: '#0F0',
              flex: 2,
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Text style={styles.text}>5</Text>
            </View>
          </View>

          <View style={{
            flex: 8,
            backgroundColor: '#FF0',
            flexDirection: 'row',
            alignItems: 'stretch',
            justifyContent: 'center'
          }}>
            <View style={{
            flex: 1,
            backgroundColor: '#FFF',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Text style={styles.text}>6</Text>
          </View>

          <View style={{
            flex: 1,
            backgroundColor: '#00F',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Text style={styles.text}>7</Text>
          </View>

          </View>

        </View>
      */}
        </ScrollView>
      </View>
    
    
  );
}

const styles = StyleSheet.create({
  body: {
    width: '100%',
    height: '100%',
    backgroundColor: '#000',
  },

  divs: {
    backgroundColor: '#FFF',
    margin: 10,  
    alignItems:'center',
    justifyContent: 'center',
    padding: 10,
    borderWidth: 10,
    borderColor: '#F09',
    borderRadius: 20,
  },

  text: {
    color: '#000',
    fontSize: 30,
  },

  header: {
    color: '#00f',
    fontSize: 40,
    alignSelf: 'flex-start',
    padding: 20
  },

  
});
