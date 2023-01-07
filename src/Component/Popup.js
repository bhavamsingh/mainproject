import React,{useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Modal,
  Button
} from 'react-native';

const Popup= () =>{

    const[show,setShow] = useState(false)

  return (
    <View style={{flex:1,marginTop:100}}>
        <Text style={{fontSize:80}}>Normal Screen text</Text>
        <Button title='show modal' onPress={()=> setShow(true)}/>
        <Modal
        transparent={true}
        visible={show}>
            <View style={{backgroundColor:"#000000aa",flex:1}}>
                <View style={{backgroundColor:"#ffffff",margin:50,padding:40,borderRadius:10,flex:1}}>
        <Text style={{fontSize:50}}>Modal Text</Text>
        <Button title='show modal' onPress={()=> setShow(false)}/>
        </View>
        </View>
        </Modal>
    </View>
  );
};




export default Popup;
