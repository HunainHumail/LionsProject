import {Animated, Easing} from 'react-native';
import SlideFromLeft from './SlideFromLeft';
import Constants from './constants'

const transitionConfig = () => {
    return {
        transitionSpec: {
            duration: 600,
            easing: Easing.out(Easing.poly(4)),
            timing: Animated.timing,
            useNativeDriver: true
        },

        screenInterpolator: sceneProps => {
            const {layout, position, scene} = sceneProps;
            const width = layout.initWidth;
            const {index, route} = scene;
            const params = route.params || {};
            const transition = params.transition|| Constants.Default;
            return {
                SlideFromLeft: SlideFromLeft(index, position, -width)
            } [transition];
        }
    };
}

export default transitionConfig;