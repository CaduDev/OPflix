import React, { useEffect, useRef, useState } from 'react';

import { StyleSheet } from 'react-native';

import { Video } from 'expo-av';

import { Container, ContainerVideoControls } from './styles';

import { VideoPlayerProps } from './types';

import VideoControls from '../VideoControls';

export function VideoPlayer(props: VideoPlayerProps) {
  const { 
    height, 
    width, 
    videoUri,
    outOfBoundItems,
    item 
  } = props;

  const playbackInstance: any = useRef(null);

  const [playbackInstanceInfo, setPlaybackInstanceInfo] = useState({
    position: 0,
    duration: 0,
    state: 'Buffering'
  });

  useEffect(() => {
    return () => {
      if (playbackInstance.current) {
        playbackInstance.current.setStatusAsync({
          shouldPlay: false
        })
      }
    }
  }, []);

  useEffect(() => {
    playbackInstance.current.pauseAsync();
  }, [outOfBoundItems]);

  const togglePlay = async () => {
    const shouldPlay = playbackInstanceInfo.state !== 'Playing';

    if (playbackInstance.current !== null) {
      await playbackInstance.current.setStatusAsync({
        shouldPlay,
        ...(playbackInstanceInfo.state === 'Ended' && { positionMillis: 0 }),
      })
      setPlaybackInstanceInfo({
        ...playbackInstanceInfo,
        state:
          playbackInstanceInfo.state === 'Playing'
          ? 'Paused'
          : 'Playing',
      })
    }
  }

  const updatePlaybackCallback = (status: any) => {
    console.log(status, 'status');
    if (status.isLoaded) {
      setPlaybackInstanceInfo({
        ...playbackInstanceInfo,
        position: status.positionMillis,
        duration: status.durationMillis || 0,
        state: status.didJustFinish ? 'Ended' : 
        status.isBuffering ? 'Buffering':
        status.shouldPlay ? 'Playing' : 'Paused'
      })
    } else {
      if (status.isLoaded === false && status.error) {
        const errorMsg = `Encountered a fatal error during playback: ${status.error}`;
        console.log(errorMsg, 'error')
        // setErrorMessage(errorMsg)
      }
    }
  }

  return (
    <Container>
      <Video
        ref={playbackInstance}
        style={styles.video(width, height)}
        source={{ uri: 'https://api.animesgratisbr.com/video/8908' }}
        resizeMode="cover"
        isLooping
        onPlaybackStatusUpdate={updatePlaybackCallback}
      />
      <ContainerVideoControls>
        <VideoControls
          state={playbackInstanceInfo.state}
          playbackInstance={playbackInstance.current}
          playbackInstanceInfo={playbackInstanceInfo}
          setPlaybackInstanceInfo={setPlaybackInstanceInfo}
          togglePlay={togglePlay}
        />
      </ContainerVideoControls>
    </Container>
  );
}

const styles = StyleSheet.create({
  video: (width: number, height: number) => ({
    alignSelf: 'center',
    width: width,
    height: height
  }),
  container: {
    flex: 1,
    justifyContent: 'center'
  },
});
