import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, FlatList, TouchableOpacity, ScrollView,Dimensions } from 'react-native';
import Video from 'react-native-video';
import MediaControls, { PLAYER_STATES } from 'react-native-media-controls';

const { width } = Dimensions.get('window');
class VideoPlayer extends Component {
  videoPlayer;

  constructor(props) {
    super(props);
    this.state = {
      currentTime: 0,
      duration: 0,
      isFullScreen: false,
      isLoading: true,
      paused: false,
      playerState: PLAYER_STATES.PLAYING,
      screenType: 'content',
      videos: '',
      videoList: [{   
        name:'Video 1',
        source:'../assets/video/videoplayback.mp4'
      },
      { name:'Video 2',
        source:'../assets/video/videoplayback(1).mp4'
      },
      { name:'Video 3',
        source:'../assets/video/videoplayback(2).mp4'
      },
      { name:'Video 4',
        source:'../assets/video/videoplayback(3).mp4'
      },
      { name:'Video 5',
        source:'../assets/video/videoplayback(4).mp4'
      },
      { name:'Video 6',
        source:'../assets/video/videoplayback(5).mp4'
      },
      { name:'Video 7',
        source:'../assets/video/videoplayback(6).mp4'
      },
      { name:'Video 8',
        source:'../assets/video/videoplayback(7).mp4'
      },
      { name:'Video 9',
        source:'../assets/video/videoplayback(8).mp4'
      },
      { name:'Video 10',
        source:'../assets/video/videoplayback(9).mp4'
      }
      ]
    };
  }

  get switchVideos() {
    switch (this.state.videos) {
      case '../assets/video/videoplayback.mp4':
        return require('../assets/video/videoplayback.mp4')
      case '../assets/video/videoplayback(1).mp4':
        return require('../assets/video/videoplayback(1).mp4')
      case '../assets/video/videoplayback(2).mp4':
        return require('../assets/video/videoplayback(2).mp4')
      case '../assets/video/videoplayback(3).mp4':
        return require('../assets/video/videoplayback(3).mp4')
      case '../assets/video/videoplayback(4).mp4':
        return require('../assets/video/videoplayback(4).mp4')
      case '../assets/video/videoplayback(5).mp4':
        return require('../assets/video/videoplayback(5).mp4')
      case '../assets/video/videoplayback(6).mp4':
        return require('../assets/video/videoplayback(6).mp4')
      case '../assets/video/videoplayback(7).mp4':
        return require('../assets/video/videoplayback(7).mp4')
      case '../assets/video/videoplayback(8).mp4':
        return require('../assets/video/videoplayback(8).mp4')
      case '../assets/video/videoplayback(9).mp4':
        return require('../assets/video/videoplayback(9).mp4')
    default:
        return require('../assets/video/videoplayback.mp4')
    }
  }

  changeVideos(name) {
    this.setState({ videos: name }); 
  }

  itemSeparator = () => {  
    return (  
        <View  
            style={styles.itemSeparator}  
        />  
    );  
  }

  onSeek = seek => {
    this.videoPlayer.seek(seek);
  };

  onPaused = playerState => {
    this.setState({
      paused: !this.state.paused,
      playerState,
    });
  };

  onReplay = () => {
    this.setState({ playerState: PLAYER_STATES.PLAYING });
    this.videoPlayer.seek(0);
  };

  onProgress = data => {
    const { isLoading, playerState } = this.state;
    if (!isLoading && playerState !== PLAYER_STATES.ENDED) {
      this.setState({ currentTime: data.currentTime });
    }
  };
  
  onLoad = data => this.setState({ duration: data.duration, isLoading: false });
  
  onLoadStart = data => this.setState({ isLoading: true });
  
  onEnd = () => this.setState({ playerState: PLAYER_STATES.ENDED });
  
  onError = () => alert('Oh! ', error);
  
  exitFullScreen = () => {
    alert('Exit full screen');
  };
  
  enterFullScreen = () => {};
  
  onFullScreen = () => {
    if (this.state.screenType == 'content')
      this.setState({ screenType: 'cover' });
    else this.setState({ screenType: 'content' });
  };

  onSeeking = currentTime => this.setState({ currentTime });

  render() {
    return (
      <View style={styles.container}>
        <View style={{flex:1}}>
        <Video
          onEnd={this.onEnd}
          onLoad={this.onLoad}
          onBuffer={this.onBuffer}                
          onError={this.videoError}
          onLoadStart={this.onLoadStart}
          onProgress={this.onProgress}
          paused={this.state.paused}
          ref={videoPlayer => (this.videoPlayer = videoPlayer)}
          resizeMode={this.state.screenType}
          onFullScreen={this.state.isFullScreen}
          source={this.switchVideos} 
          style={styles.mediaPlayer}
          volume={10}
        />
        <MediaControls
          duration={this.state.duration}
          isLoading={this.state.isLoading}
          mainColor="white"
          onFullScreen={this.onFullScreen}
          onPaused={this.onPaused}
          onReplay={this.onReplay}
          onSeek={this.onSeek}
          onSeeking={this.onSeeking}
          playerState={this.state.playerState}
          progress={this.state.currentTime}
        />
        </View>
        <View style={{flex:2}}>
        <FlatList
          data={this.state.videoList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) =>  
          <ScrollView>
          <TouchableOpacity
          onPress={() => this.changeVideos(item.source)}
          style={styles.btn}>
          <Text style={styles.btnText}>{item.name}</Text>
          </TouchableOpacity>
          </ScrollView>
          }
          ItemSeparatorComponent={this.itemSeparator}
        />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  toolbar: {
    marginTop: 30,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
  },
  mediaPlayer: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'white',
  },
  itemSeparator:{  
    height: 1,  
    width: "100%",  
    backgroundColor: "#000",  
  },
  btn:{
    flex:1,
    height:70,
    alignItems:'center',
    justifyContent:'center',
  },
  btnText:{
    fontSize:22
  }
});
export default VideoPlayer;