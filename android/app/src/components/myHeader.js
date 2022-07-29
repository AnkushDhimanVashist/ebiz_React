import React from "react";
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
    Modal

} from 'react-native';

 const MyHeader=(props)=>{
    return(
        <View style={styles.header_container}>
            <Text style={styles.header_text}>
                React-Native mini task
            </Text>
        </View>
    )
 };

 const styles=StyleSheet.create({
header_container:{
width:'100%',
height:50,
justifyContent:"center",
alignItems:'center',
backgroundColor:'#099',

},
 header_text:{
    fontSize:20,
    fontWeight:'bold',
//     backgroundColor:'#099',
color:'#fff',
 },
 });


 export default MyHeader;