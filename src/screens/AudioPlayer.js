import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, FlatList, View, ScrollView, SafeAreaView, Image } from 'react-native';
import Sound from 'react-native-sound';

var sound, audio;
function playSound(item) {
    sound = new Sound(item.songUri, (error) => {
      if (error) {
        alert('error' + error.message);
        return;
      }
      sound.play(() => {
        sound.release();
      });
    })
}

function stopSound(item) {
    if (sound) {
        sound.stop(() => {
          console.log('Stop');
        });
      } 
  }

function componentWillUnmount() {
    sound.release();
  }
 

class AudioPlay extends Component {
  constructor(props) {
    super(props);
    Sound.setCategory('Playback', true);
    this.state = {
      images:'',
      tests: {},
      audioList : [
        {
        title: 'Sanam Re',
        isRequire: true,
        songUri: require('../assets/audio/SanamRe.mp3'),
        imageUri:require('../assets/image/SanamRe.jpg'),
        },
        {
        title: 'Ambarsariya',
        isRequire: true,
        songUri: require('../assets/audio/Ambarsariya.mp3'),
        imageUri:require('../assets/image/Ambarsariya.jpg'),
        },
        {
        title: 'Baarish',
        isRequire: true,
        songUri: require('../assets/audio/Baarish(wapking.fm).mp3'),
        imageUri:require('../assets/image/Baarish.jpg'),
        },
        {
        title: 'Wajah Tum Ho',
        isRequire: true,
        songUri: require('../assets/audio/WajahTumHo.mp3'),
        imageUri:require('../assets/image/WajahTumHo.jpg'),
        },
        {
        title: 'Foolishq',
        isRequire: true,
        songUri: require('../assets/audio/Foolishq.mp3'),
        imageUri:require('../assets/image/Foolishq.jpg'),
        },
        {
        title: 'Sawan Aaya',
        isRequire: true,
        songUri: require('../assets/audio/SawanAaya.mp3'),
        imageUri:require('../assets/image/SawanAaya.jpg'),
        },
      ]    
    };
  }

get changeImage(){
    let index=0;
    if(this.state.images=='')
    return require('../assets/image/music-player-media-icon-png_115310.jpg');
    else
    while(index<this.state.audioList.length)
    {
    if(this.state.images==this.state.audioList[index].title)
    return this.state.audioList[index].imageUri;
    index++;
    }
}

// get changeImage(){
//     for(let i=0;i<this.state.audioList.length;i++)
//     if(this.state.images==this.state.audioList[i].title)
//     return this.state.audioList[i].imageUri;
//     else 
//     return require('../assets/image/Ambarsariya.jpg');
// }

audioImage(name){
    this.setState({images:name})
    console.log(name);
}



ListViewItemSeparator = () => {  
return (  
    <View  
        style={styles.itemSeparator}
    />
    );  
}

  render() {
    return (
      <View style={styles.container}>
      <View style={styles.audioDetail}>
      <Image source={this.changeImage} style={{height:'80%', width:'80%'}}/>
      </View>
      <View style={styles.audioList}>
      <FlatList
        data={this.state.audioList}
        ItemSeparatorComponent={this.ListViewItemSeparator}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.renderItem}>
            <View style={{flex:2}}>
            <TouchableOpacity
            onPress={() =>{return playSound(item) || this.audioImage(item.title)}}>
            <View style={styles.btnContainer}>
            <Image source={item.imageUri}
            style={styles.image}/>
            <Text style={styles.textTitle}>{'  '+item.title}</Text>
            </View>
            </TouchableOpacity>
            </View>
            <View style={{flex:1, justifyContent:'center'}}>
            <TouchableOpacity
            onPress={() =>{
                return stopSound(item);
              }}>
            <Text style={styles.btnText}>Stop</Text>
            </TouchableOpacity>
            </View>
          </View>
        )}
      />
      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    audioDetail:{
        flex:1,
        alignItems:'center', 
        justifyContent:'center'
    },
    audioList:{
        flex:2
    },
    itemSeparator:{  
        height: 1,  
        width: "100%",  
        backgroundColor: "#000",  
    },
    renderItem:{
        margin:10,
        flexDirection:'row'
    },
    btnContainer:{
        flexDirection:'row', 
    },
    textTitle:{
        fontSize:18,
    },
    btnText:{
        fontSize:18,
    },
    image:{
        width:50,
        height:50,
    }
  
});

export default AudioPlay;