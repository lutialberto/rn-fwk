import {StyleSheet} from 'react-native';
import React, {Suspense, useRef} from 'react';
import ScreenContainerApp from 'components/containers/screenContainer/ScreenContainerApp';
import {ResizeMode, Video} from 'expo-av';
import TextApp from 'components/texts/textApp/TextApp';

const VideoScreen = () => {
  const video = useRef(null);
  const uri = 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4';

  return (
    <ScreenContainerApp title="Video" showBackButton>
      <Suspense fallback={<TextApp>Loading...</TextApp>}>
        <Video
          ref={video}
          style={styles.video}
          source={{uri}}
          useNativeControls
          resizeMode={ResizeMode.CONTAIN}
        />
      </Suspense>
    </ScreenContainerApp>
  );
};

export default VideoScreen;

const styles = StyleSheet.create({
  video: {
    alignSelf: 'center',
    width: 320,
    aspectRatio: 16 / 9,
  },
});
