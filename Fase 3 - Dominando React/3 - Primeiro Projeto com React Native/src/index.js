import React from 'react';
import { ToastAndroid, StatusBar } from 'react-native';
import './config/reactotronconfig';

import Routes from './routes';

export default function App() {
    ToastAndroid.show('Nice', ToastAndroid.LONG);
    ToastAndroid.show('teste', ToastAndroid.LONG);
    ToastAndroid.showWithGravityAndOffset(
        'A wild toast appeared!',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50
    );
    ToastAndroid.showWithGravityAndOffset(
        'www',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50
    );
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
            <Routes />
        </>
    );
}
