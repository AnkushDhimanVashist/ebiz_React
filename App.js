/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import type { Node } from 'react';

import SuccessBtn from './android/app/src/components/customButton';
import MyHeader from './android/app/src/components/myHeader';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
  Image,
  Button,
  RefreshControl,
  FlatList,
  SectionList,
  TouchableOpacity,
  Pressable,
  Alert,
  ToastAndroid,
  Modal,
  ImageBackground
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { transformFileSync } from '@babel/core';

//importing  the NavigationContainer from the  react-navigatin/stack
import { NavigationContainer } from '@react-navigation/native';
//importing the createStackNavigator function to create a stack
import { createStackNavigator } from '@react-navigation/stack';


// const Section = ({ children, title }): Node => {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// };




const App = () => {
  // const [name,setName]= useState('Ankush');
  // const [session,setSession]=useState({number:7,state:'state'});
  // const [current, setCurent]=useState(true);
  // const onClickHandler=()=>{
  //   setName('Ankush kumar')
  //   setSession({number:6,state:'cool'})
  //   setCurent(false)
  // }
  // return (
  //   <View style={styles.body}>


  //   <Text style={styles.text}>
  //     My name is {name}
  //   </Text>
  //   <Text style={styles.text}>The session number is {session.number} and {session.state}</Text>
  //   <Text style={styles.text}>The session number is {current ? 'ture' : 'false'}</Text>
  //   <Button title='click me' onPress={onClickHandler}></Button>
  //   </View>

  // new exercise is that when you clicked on a button the value of clicked should update and the text field should be increase by the increent of 5
  // const [clicked ,setClicked]= useState(0);
  // const [value,updateValue]=useState(0);
  // const coutClicked=()=>{
  //   setClicked(
  // clicked+1
  //   )
  //   updateValue(
  //     value+5
  //   )        
  // }

  //   return(
  //     <View style={styles.body}>
  // <Text style={styles.text}>
  // {value}
  // </Text>
  // <View >
  // <Button   color='' title='update value' onPress={coutClicked} ></Button>
  // </View>
  // <Text style={styles.text}>I clicked {clicked} times</Text>

  //     </View>

  //   )

  //to create a list view from the array of the objects



  // const [items, setItems] = useState([
  //   { name: 'item 1' },
  //   { name: 'item 2' },
  //   { name: 'item 3' },
  //   { name: 'item 4' },
  //   { name: 'item 5' },
  //   { name: 'item 6' },
  //   { name: 'item 7' },
  // ]);
  // const Data = [
  //   {
  //     title: 'Title--1',
  //     data: ['item 1-1', 'item 1-2', 'item 1-3'],
  //   },
  //   {
  //     title: 'Title--2',
  //     data: ['item 2-1', 'item 2-2', 'item 2-3',]
  //   },
  //   {
  //     title: 'Title--3',
  //     data: ['item 3-1', 'item 3-2', 'item 3-3'],
  //   },
  // ]
  // const [myData, setMyData] = useState([
  //   {
  //     title: 'Title-1',
  //     data: ['item 1-1', 'item 1-2', 'item 1-3'],
  //   },
  // ]);


  // const [Refreshing, setRefreshControl] = useState(false);
  // const onRefresh = () => {
  //   setRefreshControl(true);
  //   setItems([...items, { name: 'item 8' }]);
  //   setRefreshControl(false);
  // }

  //creating a function to create a dynamic object to update the list 
  // const addOneItem = ({ myData }) => {
  //   var obj = {};
  //   var newArray=[];
  //   var arrayLen = myData.length;
  //   var dataArrayLen = myData.data.length;
  //   obj['title'] = `Title-${arrayLen+1}`;
  //     for(var i=1; i<=dataArrayLen; i++){
  //       var newItem=`item ${arrayLen+1}-{i}`;
  //         newArray.push({newItem});
  //     }

  //      obj['data']={newArray};
  //      return  obj;

  //trying to push this objec in the original array
  // myData.push({obj});

  // }

  // const onRefreshAddItems = () => {
  //   setRefreshControl(true);
  //   setMyData([...myData, {addOneItem}]);
  //   setRefreshControl(false);
  // }
  // return (
  //   <ScrollView style={styles.body} refreshControl={
  //     <RefreshControl refreshing={Refreshing} onRefresh={onRefresh}  colors={['pink']}/>
  // }
  //   >
  //     <View >
  //       {
  //         items.map((item) => {
  //           return (
  //             <View style={styles.item} key={item.key}>
  //               <Text style={styles.text}>{item.item}</Text>
  //             </View>
  //           )
  //         })
  //       }
  //     </View>

  //   </ScrollView>

  //creating the new flatlist to show the listed data in the app

  // <FlatList  

  // keyExtractor={(item,index)=>index.toString()}
  // data={items} renderItem={({item}) => (
  //   <View style={styles.item} key={item.key}>
  //     <Text style={styles.text}>{item.name}</Text>
  //   </View>
  // )} refreshControl={<RefreshControl refreshing={Refreshing} onRefresh={onRefresh}/>} 
  // ></FlatList>


  //section list to represnt the nested list items

  // <SectionList keyExtractor={(item, index) => index.toString()}
  //   sections={Data} renderItem={({ item }) => (

  //       <Text style={styles.text}>{item}</Text>

  //   )}
  //   renderSectionHeader={({section})=>(
  //     <View style={styles.item}>
  //     <Text style={styles.text}>{section.title}</Text>

  //     </View>
  //   )}
  //   >

  // </SectionList>

  // //mini task to create s nested list with its header and when reloding the new list with the updated number should be add in the view
  // <ScrollView style={styles.body} refreshControl={<RefreshControl refreshing={Refreshing} onRefresh={onRefreshAddItems}></RefreshControl>}>
  //   <SectionList keyExtractor={(item, index) => index.toString()} sections={myData} renderItem={({ item }) => (

  //     <Text style={styles.text}>{item}</Text>

  //   )} renderSectionHeader={({ section }) => (
  //     <View style={styles.item}>
  //       <Text style={styles.text}>{section.title}</Text>
  //     </View>
  //   )}>

  //   </SectionList>
  // </ScrollView>


  //creating the variables 
  // const [name, setName] = useState('');
  // const [submitted, setSubmitted] = useState('false');
  // const [val, setVal]=useState('');
  // const onPressHandler = () => {
  //   setSubmitted(!submitted);

  // }HHKJJ
  // const onFocusHandler=() =>{
  //   setSubmitted(false);
  // }
  const [name, setName] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [warnModal, setwarnModal] = useState(false);
  const [title, setTitle] = useState('');
  // const [val, setVal] = useState('');
  const onPressHandler = () => {


    // setName('Ankush');
    // Alert.alert('Greeting', "Hello Ankush kumar", [{ text: 'thanks', onPress: () => alert('You are Genious') }],
    //   { cancelable: true, onDismiss: () => Alert.alert("THis alert was dismissed by tapping outside of the dilogue box") });
    // We can use Toast to show the message it only works only in the Android

    //  ToastAndroid.show("Welcome to the heaven",ToastAndroid.LONG )
    // ToastAndroid.showWithGravity("Welcome to the heaven",ToastAndroid.SHORT ,ToastAndroid.CENTER)
    // ToastAndroid.showWithGravityAndOffset('Welcome to the heaven', ToastAndroid.SHORT, ToastAndroid.TOP, 0, 0)

    // Modal used to show the customized  warning message
    if (name != '') {
      setSubmitted(true);

    }
    else {
      setSubmitted(false);
      setwarnModal(true);
    }
  }
  //clear content function

  const clearContentfunc = () => {

    setSubmitted(false);
    setName('');

  }



  // user defined function  while press on it, will close the warning model
  GoBackBtnAction = () => {
    setwarnModal(false)
  }
  const onChangeTextHandler = (value) => {
    setName(value);
    // setVal(value);

  }
  //creating a stack for the  stack nvaigator 

  

  return (
    


        // <View style={styles.body}> 
        //   <Text style={styles.text}> 
        //     Please wreite your name:
        //   </Text>
        //   <TextInput style={styles.input} onChangeText={(value) => setName(value)}  onFocus={onFocusHandler} onBlur={onFocusHandler}></TextInput>
        //   <Button title="Submit" color='green' onPress={onPressHandler}></Button>
        //   {submitted ?
        //     <Text style={styles.text}>
        //       My name is: {name}
        //     </Text> : null
        //     }
        //  </View>

        //creating a  button using touchableOpacity that has many more option to customize the buttons


        // <View style={styles.body}>
        //   <TouchableOpacity style={styles.touchableBtn} onPress={onPressHandler}>
        //     <Text style={styles.text}>Submit </Text>
        //   </TouchableOpacity>
        //   <Text style={styles.text}> My name is: {name}</Text>
        // </View>

         <ScrollView style={styles.body} >
          <ImageBackground style={styles.backgroun_Image} source={require('./android/app/src/assets/images/background_image/backgtound1.jpg')}>
            <MyHeader />

            <Modal visible={warnModal} onRequestClose={() => setwarnModal(false)} transparent animationType='fade' accessibilityActions={true}>
              <View style={styles.warning_container}>
                <View style={styles.warning_modal_content}>
                  <View style={styles.warning_container_header}>
                    <Text style={styles.warning_model_text_color}>Warning!</Text>
                  </View>
                  <View style={styles.warning_container_content}>
                    <Text style={styles.warning_model_text_color}>Input field is empty!</Text>
                  </View>
                  <View style={styles.warning_container_goBackBtn}>
                    <Pressable style={styles.gobackBtn} onPress={GoBackBtnAction} android_ripple={{ color: '#000', borderless: false, radius: 49 }}>
                      <Text style={[styles.text, styles.gobackBtnText]}>Go Back</Text>
                    </Pressable>

                  </View>

                </View>
              </View>


            </Modal>
            <View style={styles.main_section}>
              <View style={styles.Btn_container}>
                <SuccessBtn onPressFunction={onPressHandler} title="Submit" color={'#00f'} /> 


                {/* <Pressable style={styles.touchableBtn} onPress={onPressHandler} >
          <Text style={styles.text}>Submit </Text>
        </Pressable> */}
                {/* <Pressable style={styles.touchableBtn} onPress={()=>{setName(''),setSubmitted(false)}} > */}
                {/* <Pressable style={styles.touchableBtn} onPress={clearContentfunc} >
          <Text style={styles.text}>Clear </Text>
        </Pressable> */}
                 <SuccessBtn onPressFunction={clearContentfunc} title="Clear" color={'#e83845'} />
              </View>

              <TextInput value={name} style={styles.Input_text} onChangeText={onChangeTextHandler}>

              </TextInput>
              {
                submitted ?
                  <View style={styles.success_msg_container}>
                    <Text style={styles.text}> My name is: {name} </Text>

                    <Image style={styles.error_image} source={require('./android/app/src/assets/images/success_image/done.png')}></Image>
                  </View>
                  :
                  <View style={styles.success_msg_container}>
                    <Text style={styles.text}>No name is set!</Text>
                    <Image style={styles.error_image} source={require('./android/app/src/assets/images/error_image/error.png')}></Image>
                  </View>
              }
            </View>



          </ImageBackground>
        </ScrollView>
 



      
  )
};


const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#fff',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 20,

  },
  main_section: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroun_Image: {
    width: '100%',
    height: 750,
  },
  // all buttons
  touchableBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#711',
    borderRadius: 20,
    width: 150,
    height: 50,
    fontWeight: 'bold',
    marginHorizontal: 5,

  },
  gobackBtn: {

    width: 100,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#01a',

  },


  //other css  for the components
  warning_container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'rgba(9,9,9,0.9)',




  },
  warning_modal_content: {
    width: 300,
    height: 300,
    backgroundColor: 'white',
    marginTop: 10,
    borderRadius: 20,





  },
  warning_container_header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: 'orange',
    paddingVertical: 10,
    paddingHorizontal: 10,
    // alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  warning_container_content: {
    flex: 3,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  warning_model_text_color: {
    color: 'black',
    fontSize: 20,
  },
  warning_container_goBackBtn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    // backgroundColor:'grey',
  },
  gobackBtnText: {
    color: '#fff',
    fontSize: 15,
  },
  //input text field customization
  Input_text: {
    borderBottomWidth: 1,
    padding: 5,
    fontSize: 20,
    minWidth: 100,
    maxWidth: 150,
    marginTop: 10,
    backgroundColor: '#fff',
    color: '#000',

  },
  //submit and clear button container customization
  Btn_container: {
    flexDirection: 'row',
  },
  //error image customization
  error_image: {
    width: 100,
    height: 100,
    marginTop: 20,
  },


  //success message container

  success_msg_container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
}
);




export default App;
