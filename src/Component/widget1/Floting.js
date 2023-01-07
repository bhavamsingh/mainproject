import React, { useState } from 'react';

import { StyleSheet, View, Image, TouchableOpacity, Alert,Text,Modal } from 'react-native';
import { Button } from 'react-native-elements';
import {Dropdown}  from 'react-native-element-dropdown';

const data= [{ label: 'Year', value: '1' },
  { label: '2021', value: '2' },
  { label: '2022', value: '3' },];

const data1= [{ label: 'Leave List', value: '1' },
  { label: 'Casual Leave - CL', value: '2' },
  { label: 'Medical Leave - ML', value: '3' },];
const data2= [{ label: 'Status', value: '1' },
  { label: 'Paing', value: '2' },
  { label: 'Approval', value: '3' },];



const Floating =()=> {
    const[LeaveName,setLeaveName]= useState(null)
    const [value, setValue] = useState('');
    const[show,setShow] = useState(false)
    const Floating1 =()=> {
  Alert.alert('bhavam singh')
    }



    const Popup1= () =>{



        
         
    
      };
    return (

      <View style={styles.MainContainer}>
         <View style={{flex:1,marginTop:100}}>
              <Text style={{fontSize:80}}>Normal Screen text</Text>
              
              <TouchableOpacity  onPress={()=> setShow(true)} style={styles.TouchableOpacityStyle} >

<Image source={{uri : 'https://reactnativecode.com/wp-content/uploads/2017/11/Floating_Button.png'}} 

       style={styles.FloatingButtonStyle} />

</TouchableOpacity>
              <Modal
              transparent={true}
              visible={show} >
                  <View style={{backgroundColor:"#000000aa",flex:1,}}>
                      <View style={{backgroundColor:"lightgray",margin:20,padding:33,borderRadius:3,height:280,width:'90%'}}>
                        <View style={{backgroundColor:"dodgerblue",padding:10,alignItems:"center",position:"relative",bottom:30,width:310,marginRight:20}}>
                            <Text style={{fontSize:20}}>Search Filter</Text>
                        </View>
                        <View style={{position:"relative",bottom:40}}>
<View style={{flexDirection:"row"}}>
<View style={{marginTop:30}}>
      <Text style={{fontWeight:"bold",fontSize:18}}>Leave Year:  </Text>
      </View>
<View style={{alignItems:"center",justifyContent:"center",marginLeft:10,marginTop:18}}>
                      <Dropdown        

style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Year"
        searchPlaceholder="Search..."
        value={value}
        onChange={item => {
          setValue(item.value);
          setLeaveName(item.label);

          // alert(value)
          // alert(value)
        }}
 
    />
    </View>
    </View>

    </View>
    <View style={{position:"relative",bottom:30}}>

        <View style={{flexDirection:"row"}}>
        <View style={{marginTop:13}}>
      <Text style={{fontWeight:"bold",fontSize:17}}>Leave Type:  </Text>
      </View>

<View style={{marginLeft:17,alignItems:"center",justifyContent:"center"}}>
                      <Dropdown         

style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data1}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Leave List"
        searchPlaceholder="Search..."
        value={value}
        onChange={item => {
          setValue(item.value);
          setLeaveName(item.label);

          // alert(value)
          // alert(value)
        }}
 
    />
    </View>
    </View>
    </View>

    <View style={{position:"relative",bottom:20}}>
        <View style={{flexDirection:"row"}}>
        <View style={{marginTop:13}}>
      <Text style={{fontWeight:"bold",fontSize:17}}>Leave Status:  </Text>
      </View>
      <View style={{alignItems:"center",justifyContent:"center",marginLeft:5}}>
 <Dropdown         

style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data2}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Status"
        searchPlaceholder="Search..."
        value={value}
        onChange={item => {
          setValue(item.value);
          setLeaveName(item.label);

          // alert(value)
          // alert(value)
        }}
 
    />
    </View>
    </View>
    </View>
              {/* <Text style={{fontSize:50}}>Modal Text</Text> */}
              {/* <Button title='show modal' onPress={()=> setShow(false)}/> */}
              <View style={{flexDirection:"row",marginLeft:140,position:"relative"}}>
              <View style={{ marginLeft:20}}>
              <TouchableOpacity  onPress={()=> setShow(false)} style={{height:40}}>
                <Text style={{color:"dodgerblue",fontSize:15,fontWeight:"bold"}}>CLEAR</Text>
              </TouchableOpacity>
              </View>
              <View style={{marginLeft:30}}>
                <Text style={{color:"dodgerblue",fontSize:15,fontWeight:"bold"}}>SEARCH</Text>
              </View>
              </View>
              </View>
              </View>
              </Modal>
          </View>
      </View>
    );
  
    }

const styles = StyleSheet.create({

  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor : '#F5F5F5'
  },

  TouchableOpacityStyle:{

    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
  },

  FloatingButtonStyle: {

    resizeMode: 'contain',
    width: 50,
    height: 50,
  },
  dropdown: {
    // margin: 16,
    height: 50,
    
    marginLeft:40,
    width:150,
    borderBottomColor: 'gray',
    borderBottomWidth: 2,
    // position:"relative",
    // bottom:30
    // backgroundColor:"blue"
  },
  placeholderStyle: {
    fontSize: 16,
    fontWeight:"bold"
  },
  selectedTextStyle: {
    fontSize: 16,
    fontWeight:"bold"
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
export default Floating;