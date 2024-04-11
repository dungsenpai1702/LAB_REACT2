/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import TrackPlayer from 'react-native-track-player';
import { playbackService } from './src/hooks/trackService';

// TrackPlayer.registerPlaybackService(() => require('./service'));
TrackPlayer.registerPlaybackService(() => playbackService);


AppRegistry.registerComponent(appName, () => App);

