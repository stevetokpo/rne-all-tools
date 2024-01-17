import React, { useState, useEffect } from 'react';
import { View, StatusBar } from 'react-native';
import * as Font from 'expo-font';

import styles from './styles/Global.js'

const Layout = ({ children }) => {
    const [fontLoaded, setFontLoaded] = useState(false);

    useEffect(() => {
        const loadFonts = async () => {
            await Font.loadAsync({
                'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
                'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
                'Montserrat-Thin': require('./assets/fonts/Montserrat-Thin.ttf'),
            });
            setFontLoaded(true);
        };

        loadFonts();
    }, []);

    if (!fontLoaded) {
        return null;
    }
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#00061E" />
            {children}
        </View>
    );
};

export default Layout;