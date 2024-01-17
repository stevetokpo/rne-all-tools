import React, { useRef, useState, useMemo } from 'react';
import { View, Text, Image, Dimensions, ImageBackground, Animated, StatusBar, TouchableOpacity } from 'react-native';

import styles from '../../styles/Home';
import Layout from '../../Layout';
import Data from '../../data/Images';

const { width } = Dimensions.get('window');
const itemWidth = width * 0.8;
const itemMargin = 10;
const spacerWidth = (width - itemWidth) / 2 - itemMargin;

const Home = ({ navigation }) => {
    const [activeIndex, setActiveIndex] = useState(Data.length);
    const scrollX = useRef(new Animated.Value(0)).current;
    const flatListRef = useRef();

    const extendedData = useMemo(() => [...Data, ...Data], []);

    const backgroundImage = Data[activeIndex % Data.length]?.image;

    const openDetails = (item) => {
        if (item) {
            navigation.navigate('Details', { imageItem: item });
        }
    };

    const renderItem = ({ item, index }) => {
        const inputRange = [
            (index - 2) * (itemWidth + itemMargin * 2),
            (index - 1) * (itemWidth + itemMargin * 2),
            index * (itemWidth + itemMargin * 2),
        ];

        const scale = scrollX.interpolate({
            inputRange,
            outputRange: [0.9, 1, 0.9],
            extrapolate: 'clamp',
        });

        const rotateY = scrollX.interpolate({
            inputRange,
            outputRange: ['30deg', '0deg', '-30deg'],
            extrapolate: 'clamp',
        });

        return (
            <View>
                <Animated.View style={[styles.carouselItem, { transform: [{ scale }, { rotateY }] }]}>
                    <Image source={item.image} style={styles.image} />
                    <Text style={styles.label}>{item.label}</Text>
                    <Text style={styles.rating}>
                        {'⭐️ (' + item.rating.toFixed(1) + ')'}
                    </Text>
                </Animated.View>
                <TouchableOpacity style={styles.smbtn} onPress={() => openDetails(item)}>
                    <Text style={styles.button_text}>
                        Détails
                    </Text>
                </TouchableOpacity>
            </View>
        );
    };

    const handleScroll = Animated.event(
        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
        {
            useNativeDriver: true,
            listener: event => {
                const newIndex = Math.floor(event.nativeEvent.contentOffset.x / (itemWidth + itemMargin * 2) + 0.5) % Data.length;
                if (newIndex !== activeIndex % Data.length) {
                    setActiveIndex(newIndex + Data.length);
                }
            },
        }
    );

    return (
        <Layout>
            <StatusBar translucent backgroundColor="transparent" />
            <ImageBackground source={backgroundImage} style={styles.backgroundImage} blurRadius={10}>
                <View style={styles.container}>
                    <Animated.FlatList
                        ref={flatListRef}
                        horizontal
                        data={extendedData}
                        renderItem={renderItem}
                        keyExtractor={(item, index) => `${item.id}-${index}`}
                        snapToAlignment="start"
                        snapToInterval={itemWidth + itemMargin * 2}
                        decelerationRate="fast"
                        pagingEnabled
                        scrollEventThrottle={16}
                        onScroll={handleScroll}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{
                            paddingHorizontal: spacerWidth,
                        }}
                        initialScrollIndex={Data.length}
                        getItemLayout={(data, index) => ({
                            length: itemWidth + itemMargin * 2,
                            offset: (itemWidth + itemMargin * 2) * index,
                            index,
                        })}
                    />
                </View>
            </ImageBackground>
        </Layout>
    );
};

export default Home;