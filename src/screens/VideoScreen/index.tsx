import React, { useEffect, useRef, useState } from 'react';

import { StatusBar } from 'react-native';

import { useDispatch } from 'react-redux';

import * as ScreenOrientation from 'expo-screen-orientation';

import { Container, ContainerVideoControls, VideoCurrent } from './styles';

import VideoControls from './Components/VideoControls';

export function VideoScreen({ navigation }: any) {
  const playbackInstance: any = useRef(null);
  const dispatch = useDispatch();

  const [outOfBoundItems, setOutOfBoundItems] = useState([]);
  const [playbackInstanceInfo, setPlaybackInstanceInfo] = useState({
    position: 0,
    duration: 0,
    state: 'Buffering'
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [visibleControls, setVisibleControls] = useState<boolean>(true);

  useEffect(() => {
    async function screenOrientation() {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
      StatusBar.setHidden(true);
    }

    async function virar() {
      await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
      StatusBar.setHidden(false);
    }

    screenOrientation();
  
    return () => {
      if (playbackInstance.current) {
        playbackInstance.current.setStatusAsync({
          shouldPlay: false
        });

        playbackInstance.current.pauseAsync();
      }

      virar();
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
      });

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
        setErrorMessage(errorMsg)
      }
    }
  }

  useEffect(() => {
    console.log('entrou aqui')
    setTimeout(() => {
      setVisibleControls(false)
    }, 6000);
  }, [visibleControls])

  return (
    <Container onPress={() => setVisibleControls(true)} activeOpacity={1}>
      <VideoCurrent
        ref={playbackInstance}
        source={{ uri: '' }}
        resizeMode="contain"
        onLoad={() => playbackInstance.current.playAsync()}
        onPlaybackStatusUpdate={updatePlaybackCallback}
      />
      {visibleControls && (
        <ContainerVideoControls>
          <VideoControls
            state={playbackInstanceInfo.state}
            playbackInstance={playbackInstance.current}
            playbackInstanceInfo={playbackInstanceInfo}
            setPlaybackInstanceInfo={setPlaybackInstanceInfo}
            togglePlay={togglePlay}
          />
        </ContainerVideoControls>
      )}
    </Container>
  );
}