import React, {useState} from 'react';
import { Alert, Image, Modal, ToastAndroid, TouchableHighlight, TouchableNativeFeedback, TouchableOpacity } from 'react-native';
import { ImageBackground } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native';
import { FlatList, Pressable, RefreshControl, ScrollView, SectionList, TextInput } from 'react-native';
import { Button, Linking } from 'react-native';
import { 
  StyleSheet, 
  View, 
  Text
} from 'react-native';

export default function App() {
  /*First Steps*/
    const [user, setUser] = useState('GUTAO')
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
    {name:'item 1'},
    {name:'item 2'},
    {name:'item 3'},
    {name:'item 4'},
    {name:'item 5'},
    {name:'item 6'},
    {name:'item 7'},
    {name:'item 8'},    
    {name:'item 9'},
    {name:'item 10'},
    {name:'item 11'},
    {name:'item 12'},
    {name:'item 13'},
    {name:'item 14'},
    {name:'item 15'},
    {name:'item 16'},  
  ])

  const [DATA,setDATA] = useState([
    {
      title:'title-1',
      data:['item1-1','item1-2'],
    }
  ])

  const [countB,setCountB] = useState(2)

  const [refresh,setRefresh] = useState(false)

  const onRefresh = () => {
    setRefresh(true);
    setDATA([...DATA,
    {
      title:`title-${countB}`,
      data:[`item${countB}-1`,`item${countB}-2`]
    }
    ])
    setCountB(countB+1)
    setRefresh(false)
  }

  const [name,setName] = useState('')

  const [submitted,setSubmitted] = useState(false)

  const onPressButton = () => {
    if(name.length>3) {
      setSubmitted(!submitted)
    } else {
      //Alert
      /*Alert.alert("ERROR!","Write your name to register",[
        {text:"OK", onPress:()=>{console.warn('OK Pressed!')}},
        {text:"Test name", onPress:()=>{console.warn("Name")}},
        {text:"Cancel", onPress:()=>{console.warn("Cancelled")}}
      ],{cancelable:true, onDismiss:()=>{console.warn("cancel")}})*/

      //Toast - only in android
      /*ToastAndroid.show(
        "Message",
        ToastAndroid.LONG
        )*/
      
        setShowWarning(true)
    }
  }

  const [showWarning,setShowWarning] = useState(false)

  
  return (

    <ImageBackground style={styles.body} 
    source={{uri:'https://wallpaperaccess.com/full/529068.jpg'}}>
      <Modal
        visible={showWarning}
        transparent={true}
        onRequestClose={()=>{
          setShowWarning(false)
        }}
        animationType='fade'>
        <View 
        style={{
          backgroundColor:"#00000099",
          flex: 1,
          display:'flex',
          alignItems:'center',
          justifyContent:'center'
        }}>
          <View
          style={{
            backgroundColor:"#FFFFFF",
            display:'flex',
            alignItems:'center',
            width: 300,
            height: 150,
            borderRadius: 10
          }}>
            <View style={{
              backgroundColor:"#F0F",
              justifyContent:'flex-start' ,
              width:'100%',
              height: 30,
              justifyContent: 'center',
              alignItems: 'center',
              color: "#FFF",
              marginBottom:20,
              borderTopRightRadius:10,
              borderTopLeftRadius:10,
            }}>
              <Text style={{color: "#FFF"}}>WARNING!</Text>
            </View>
            <Text style={{fontSize:20}}>Write your name to submit</Text>
            <TouchableOpacity 
            style={{
              backgroundColor:"#F0F",
              padding: 10,
              width: '40%',
              textAlign:"center",
              borderRadius:5,
              marginTop: 15
            }}
            onPress={()=>{
              setShowWarning(false)
            }}>
              <Text style={{
              color:"#FFF",
              fontSize:20
            }}>Back</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Text style={{
        color:'#fff',
        fontSize: 30
      }}>Please Write your name:</Text>
      <TextInput style={{
        backgroundColor:'#fff',
        width: '80%',
        borderWidth: 5,
        borderColor: '#ABF',
        borderRadius: 2,
        padding: 10,
        color: '#F00',
        textAlign: 'center',
        margin: 10
      }} placeholder={'jonh'}
      maxLength={5}
      onChangeText={(value)=>{setName(value)}}></TextInput> 

      {/*<Button title={submitted?"Clear":"Submit"} onPress={()=>{
        onPressButton()
      }} color={'#F0F'}/>*/}

      <TouchableOpacity
      onPress={onPressButton}
      style={{
        backgroundColor:"#F0F",
        padding: 10,
        width: '40%',
        textAlign:"center",
        borderRadius:5
      }}
      activeOpacity={0.5}>
        <Text style={{
          color:"#FFF",
          fontSize:20
        }}>{submitted?"Clear":"Submit"}</Text>
      </TouchableOpacity>

      <TouchableHighlight
      onPress={onPressButton}
      style={{
        backgroundColor:"#F0F",
        padding: 10,
        width: '40%',
        textAlign:"center",
        borderRadius:5
      }}
      underlayColor={'#0F0'}>
        <Text style={{
          color:"#FFF",
          fontSize:20
        }}>{submitted?"Clear":"Submit"}</Text>
      </TouchableHighlight>

      <TouchableWithoutFeedback
      onPress={onPressButton}>
        <View style={{
        backgroundColor:"#F0F",
        padding: 10,
        width: '40%',
        textAlign:"center",
        borderRadius:5
      }}>
          <Text style={{
            color:"#FFF",
            fontSize:20
          }}>{submitted?"Clear":"Submit"}</Text>
        </View>
      </TouchableWithoutFeedback>

      <Pressable
      onPress={onPressButton}
      hitSlop={{top:10,bottom:10,left:10,right:10}}
      android_ripple={"#F00"}
      style={({pressed})=>[{
        backgroundColor: pressed?"#888":"#F0F",
        padding: 10,
        width: '40%',
        textAlign:"center",
        borderRadius:5
      }]}>
        <Text style={{
            color:"#FFF",
            fontSize:20
          }}>{submitted?"Clear":"Submit"}</Text>
      </Pressable>

      {submitted ?
        <View style={{
          width: '100%',
          justifyContent:'center',
          alignItems:'center'
        }}>
          <Text style={{
            color:'#fff',
            fontSize: 30,
            textAlign:'center',
            fontWeight:'bold',
            margin: 10
          }}>You are submitted! Hello {name}!</Text>

          <Image 
            source={{uri:'https://vps29400.publiccloud.com.br/images/2/2e/Confirm.png'}}
            style={{
              width:100,
              height:100,
              margin: 15,
              resizeMode: 'stretch',
            }} blurRadius={10}/>
        </View>
      :
        <View>
          <Image 
            source={require('./assets/1022476.png')}
            style={{
              width:100,
              height:100,
              margin: 15,
              resizeMode: 'stretch'
            }}/>
        </View>
        
      }
    </ImageBackground>

    /*<SectionList
      sections={DATA}
      keyExtractor={(item,index)=>index.toString()}
      renderItem={({item})=>(
        <View style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-around',
          borderColor: '#000',
          borderWidth: 1
        }}>
          <Text style={{
            fontSize: 40,
          }}>{item}</Text>
        </View>
      )}
      renderSectionHeader={({section})=>(
        <View style={{
          flex: 1,
          backgroundColor: '#ef0eee',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
          <Text style={{
            fontSize: 50,
          }}>{section.title}</Text>
        </View>
      )}

      refreshControl={
        <RefreshControl
          refreshing={refresh}
          onRefresh={onRefresh}
        ></RefreshControl>
      }

    />

    /*<SectionList
      sections={DATA}
      keyExtractor={(item,index)=>index.toString()}
      renderItem={({item})=>(
          <Text style={{
            fontSize: 50,
          }}>{item}</Text>
      )}
      renderSectionHeader={({section})=>(
        <View style={{
          flex: 1,
          backgroundColor: '#ef0eee',
          alignItems: 'center',
          justifyContent: 'space-around',
          margin: 10,
          marginTop: 30,
        }}>
          <Text style={{
            fontSize: 50,
          }}>{section.title}</Text>
        </View>
      )}
    />

    /*<FlatList
      keyExtractor={(item,index)=>index.toString()}
      data={items}
      renderItem={({item})=>(
        <View style={{
          flex: 1,
          backgroundColor: '#ef0234',
          alignItems: 'center',
          justifyContent: 'space-around',
          margin: 10,
        }}>
          <Text style={{
            fontSize: 50,
          }}>{item.name}</Text>
        </View>
      )} //<-works as a map
      refreshControl={
        <RefreshControl 
        refreshing={ refresh }
        onRefresh={onRefresh}></RefreshControl>
      }
      />
    
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
        </ScrollView>
        
      </View>*/
    
    
  );
}

const styles = StyleSheet.create({
  body: {
    flex:1,
    backgroundColor: '#888',
    justifyContent: 'center',
    alignItems: 'center'
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
