import React,{ Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


export default class MediaPlayer extends Component {
    render(){
        return(
            <View style={styles.container}>
            <TouchableOpacity
            style={styles.btn}
            onPress={()=>this.props.navigation.navigate('VideoPlayer')}>
            <Text style={styles.btnText}>VideoPlayer</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.btn}
            onPress={()=>this.props.navigation.navigate('AudioPlayer')}>
            <Text style={styles.btnText}>AudioPlayer</Text>
            </TouchableOpacity>
            </View>
            );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        margin:20
    },
    btn:{
        backgroundColor:'black',
        borderRadius:10,
        margin:20
    },
    btnText:{
        fontSize:50,
        color:'white'
    }
})