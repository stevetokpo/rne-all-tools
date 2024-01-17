import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';

import Layout from '../Layout';
import styles from '../styles/Intro.js'

const Intro = ({ onFinish }) => {

    const [isPressed, setIsPressed] = useState(false);

    return (
        <Layout>
            <Swiper
                style={styles.wrapper}
                showsButtons={false}
                activeDotColor="#FF9716"
                dotColor="#CCCCCC"
                loop={false}
            >
                <View style={styles.slide}>
                    <Text style={styles.title}>
                        TEMPLATE
                    </Text>
                    <Image source={require('../assets/images/icon.png')} style={styles.image} />
                    <Text style={styles.description}>
                        L'application par excellence ou vous trouvez tout ce dont vous aviez besoin pour passer une bonne journée. 😉
                    </Text>
                </View>

                <View style={styles.slide}>
                    <Text style={styles.title}>MEILLEUR APP</Text>
                    <Image source={require('../assets/images/icon.png')} style={styles.image} />
                    <Text style={styles.description}>Explorez plus de fonctionnalités.</Text>
                </View>

                <View style={styles.slide}>
                    <Text style={styles.title}>DESIGN ELEGANT</Text>
                    <Image source={require('../assets/images/icon.png')} style={styles.image} />
                    <Text style={styles.description}>Prêt à commencer?</Text>
                    <TouchableOpacity
                        style={[styles.button, isPressed && styles.buttonPressed]}
                        onPress={onFinish}
                        onPressIn={() => setIsPressed(true)}
                        onPressOut={() => setIsPressed(false)}
                    >
                        <Text style={styles.button_text}>Commencer</Text>
                    </TouchableOpacity>
                </View>
            </Swiper>
        </Layout>
    );
};

export default Intro;