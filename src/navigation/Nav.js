import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Splash from '../screens/Splash';
import VideoPlayer from '../screens/VideoPlayer';
import MediaPlayer from '../screens/MediaPlayer';
import AudioPlayer from '../screens/AudioPlayer';
import MusicPlayer from '../screens/MusicPlayer';
import AudioPlay from '../screens/AudioPlay';


const AppStack = createStackNavigator({
    Splash:{
        screen:Splash,
    },
    MediaPlayer:{
        screen:MediaPlayer,
    },
    VideoPlayer:{
        screen:VideoPlayer,
    },
    AudioPlayer:{
        screen:AudioPlayer,
    },
    MusicPlayer:{
        screen:MusicPlayer,
    },
    AudioPlay:{
        screen:AudioPlay,
    }
},
{
    initialRouteName: 'Splash',  
});

export default createAppContainer(AppStack);