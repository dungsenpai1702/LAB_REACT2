import { Easing, Image, ProgressBarAndroidBase, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import TrackPlayer, { Event, State, useProgress, useTrackPlayerEvents } from 'react-native-track-player'
import listTracks from '../../data/datamusic'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ProgressBar, MD3Colors } from 'react-native-paper';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBackwardStep } from '@fortawesome/free-solid-svg-icons/faBackwardStep'
import { faForwardStep } from '@fortawesome/free-solid-svg-icons/faForwardStep'
import { faPlay } from '@fortawesome/free-solid-svg-icons/faPlay'
import { faPause } from '@fortawesome/free-solid-svg-icons/faPause'
import Slider from '@react-native-community/slider'
import Animated, { useAnimatedStyle, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated';

export default function Lab4_3() {
    const [img, setImg] = useState('');
    const progress = useProgress();
    const [normalizedProgress, setNormalizedProgress] = useState(0);
    const [duration, setDuration] = useState(0)
    const [iconStatus, setIconStatus] = useState(faPlay);
    useEffect(() => {
        const setTrack = async () => {
            await TrackPlayer.setupPlayer()
            await TrackPlayer.add(listTracks);


        }
        setTrack()
    }, listTracks);

    const onTogglePlayTrack = async () => {
        const state = await TrackPlayer.getState();
        const current = await TrackPlayer.getCurrentTrack();
        const track = await TrackPlayer.getTrack(current);
        setDuration(track.duration)
        if (state === State.Playing) {
            await TrackPlayer.pause();
            setIconStatus(faPlay)
        } else {
            await TrackPlayer.play();
            setIconStatus(faPause)
        }
    }

    const nextTrack = async () => {
        await TrackPlayer.skipToNext();
    }

    const backTrack = async () => {
        await TrackPlayer.skipToPrevious();
    }

    useTrackPlayerEvents([Event.PlaybackTrackChanged], async event => {
        if (event.type === Event.PlaybackTrackChanged && event.nextTrack != null) {
            const track = await TrackPlayer.getTrack(event.nextTrack);
            const { title, artwork, duration } = track || {};
            setDuration(duration)
            console.log(title);
            console.log(artwork);
            setImg(artwork);
        }
    });

    useEffect(() => {
        // console.log(progress.position);
        // console.log(duration);
        if (duration != 0) {
            setNormalizedProgress(progress.position / duration);
        }
        // console.log(normalizedProgress);
    }, [progress.position])


    const rotate = useSharedValue(360);
    const rotateStyle = useAnimatedStyle(() => (
        {
            transform: [{ rotate: `${rotate.value}deg` }]
        }
    ))

    useEffect(() => {
        rotate.value = withRepeat(withTiming(360, { duration: 100000 }), -1);
        console.log(rotate.value);
    }, [])

    return (
        <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'black', justifyContent: 'center' }}>
            <Text>Lab4_3</Text>

            <View style={{ width: '90%', height: '80%', backgroundColor: 'rgba(255, 255, 255, 0.2)', borderRadius: 20, alignItems: 'center', justifyContent: 'center' }}>
                <Animated.View style={[{ width: 300, height: 300, borderRadius: 150, overflow: 'hidden' }, rotateStyle]}>
                    {img.trim() == '' ? (
                        <></>
                    ) : (<Image source={{ uri: img }} style={{ width: 300, height: 300, objectFit: 'fill' }} />)}
                </Animated.View>

                <View style={{ width: '100%', height: 30, marginVertical: 20, alignItems: 'center' }}>
                    {/* <ProgressBar

                    progress={normalizedProgress}
                    color={MD3Colors.error50}
                    
                /> */}
                    <Slider
                        style={{ width: '90%', height: 40 }}
                        minimumValue={0}
                        maximumValue={duration}
                        minimumTrackTintColor="#FFFFFF"
                        maximumTrackTintColor="#000000"
                        onSlidingComplete={(value) => {
                            console.log(value)
                            TrackPlayer.seekTo(value);
                            console.log(progress.position)
                        }}
                        value={progress.position}
                    />
                    <View style={{ width: '90%', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ color: 'white' }}>{`${Math.round((progress.position) / 60)} : ${Math.round((progress.position) % 60)}`}</Text>
                        <Text style={{ color: 'white' }}>{`${Math.round((progress.duration - progress.position) / 60)} : ${Math.round((progress.duration - progress.position) % 60)}`}</Text>

                    </View>
                </View>

                <View style={{
                    width: '90%', height: 80, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginTop: 50, backgroundColor: 'black',
                    shadowColor: "#999999", elevation: 3, shadowOpacity: 5, shadowRadius: 5, borderRadius: 10
                }}>
                    <TouchableOpacity style={{ width: 60, height: 35, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}
                        onPress={backTrack}
                    >
                        <FontAwesomeIcon icon={faBackwardStep} color='white' size={34} />
                    </TouchableOpacity>

                    <TouchableOpacity style={{ width: 60, height: 35, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}
                        onPress={onTogglePlayTrack}
                    >
                        <FontAwesomeIcon icon={iconStatus} color='white' size={34} />
                    </TouchableOpacity>

                    <TouchableOpacity style={{ width: 60, height: 35, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}
                        onPress={nextTrack}
                    >
                        <FontAwesomeIcon icon={faForwardStep} color='white' size={34} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})
