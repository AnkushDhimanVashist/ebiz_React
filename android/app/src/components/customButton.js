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


const SuccessBtn = (props) => {

    return (
        // <View style={styles.body}>
            // {/* <View style={styles.Btn_container}> */}
            <Pressable style={[styles.touchableBtn,{backgroundColor:props.color}]}
             onPress={props.onPressFunction} >
                <Text style={styles.text}>{props.title} </Text>
            </Pressable>
            //  </View> 
        // </View>


    )
};

// styles of the components
const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#099',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#fff',
        fontSize: 20,

    },
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
    Btn_container: {
        flexDirection: 'row',
    },
}
);


export default SuccessBtn;