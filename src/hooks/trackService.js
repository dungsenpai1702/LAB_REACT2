import { useState } from "react";
import TrackPlayer, { Capability, Event, RepeatMode, usePlaybackState, useProgress } from "react-native-track-player";



export async function playbackService() {

    TrackPlayer.addEventListener(Event.RemotePause, () => {
        TrackPlayer.pause();
    })

    TrackPlayer.addEventListener(Event.RemotePlay, () => {
        TrackPlayer.play();
    })


    TrackPlayer.addEventListener(Event.RemoteNext, () => {
        TrackPlayer.skipToNext();
    })

    TrackPlayer.addEventListener(Event.RemotePrevious, () => {
        TrackPlayer.skipToPrevious();
    })

    TrackPlayer.addEventListener(Event.RemoteSeek, ({ position }) => {
        TrackPlayer.seekTo(position);
    })

}

const startPlayer = async (setSetupDone) => {
    try {
        await TrackPlayer.setupPlayer().finally(() => setSetupDone(true));

        await TrackPlayer.updateOptions({
            capabilities: [
                Capability.Pause,
                Capability.Play,
                Capability.Stop,
                Capability.SeekTo,
                Capability.SkipToNext,
                Capability.SkipToPrevious,
            ],
        });

        await TrackPlayer.setRepeatMode(RepeatMode.Off);


    } catch (error) {
        console.log("Error player: ", error);
    }
}



export const usePlayTrack = (listTrack) => {
    const playBackState = usePlaybackState();
    [isSetupDone, setSetupDone] = useState(false);
    const { duration, buffered, position } = useProgress();
    const [trackTitle, setTrackTitle] = useState('');
    const [trackArtwork, setTrackAtwork] = useState('');
    const [trackArtist, setTrackArtist] = useState('');
    const [trackDuration, setTrackDuration] = useState('')

    useTrackPlayerEvents([Event.PlaybackActiveTrackChanged], async event => {
        if (event.type === Event.PlaybackActiveTrackChanged && event.nextTrack != null) {
            const track = await TrackPlayer.getTrack(event.nextTrack);
            const { title, artwork, duration, artist } = track || {};
            setTrackTitle(title);
            setTrackAtwork(artwork);
            setTrackDuration(duration);
            setTrackArtist(artist)
        }
    });

    
}