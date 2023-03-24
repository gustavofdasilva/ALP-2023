import React, {useState} from 'react';
import { Pressable, ScrollView } from 'react-native';
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
  
  return (
    <View style={styles.body}>
      <ScrollView>

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
    padding: 50,
  },

  header: {
    color: '#00f',
    fontSize: 40,
    alignSelf: 'flex-start',
    padding: 20
  },

  
});
