import React, { useState, useRef, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, Modal, Animated, PanResponder, Dimensions } from 'react-native';

import imagesData from '../../data/Images' ;

const numColumns = 2;
const { width, height } = Dimensions.get('window');
const imageWidth = width / numColumns;

const Events = () => {
    const [popupVisible, setPopupVisible] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => {
                setSelectedImage(item);
                setPopupVisible(true);
            }}
        >
            <Image source={item.image} style={styles.image} />
            <Text style={styles.label}>{item.label}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                LISTE COMPLETE
            </Text>
            <FlatList
                data={imagesData}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                numColumns={numColumns}
            />
            {selectedImage && (
                <ImagePopup
                    isVisible={popupVisible}
                    image={selectedImage}
                    onClose={() => setPopupVisible(false)}
                />
            )}
        </View>
    );
};

const modalHeight = height * 0.75;

const ImagePopup = ({ isVisible, image, onClose }) => {
    const position = useRef(new Animated.ValueXY({ x: 0, y: height })).current;
    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: Animated.event([null, { dy: position.y }], { useNativeDriver: false }),
            onPanResponderRelease: (e, gestureState) => {
                if (gestureState.dy > 0) { // Si l'utilisateur tire vers le bas
                    Animated.timing(position, {
                        toValue: { x: 0, y: height },
                        duration: 300,
                        useNativeDriver: true
                    }).start(onClose); // Fermer le popup après l'animation
                } else {
                    // Si l'utilisateur tire vers le haut ou ne tire pas suffisamment
                    Animated.spring(position, {
                        toValue: { x: 0, y: 0 },
                        useNativeDriver: true
                    }).start();
                }
            },
        })
    ).current;

    useEffect(() => {
        if (isVisible) {
            Animated.timing(position, {
                toValue: { x: 0, y: 0 },
                duration: 300,
                useNativeDriver: true
            }).start();
        } else {
            Animated.timing(position, {
                toValue: { x: 0, y: height },
                duration: 300,
                useNativeDriver: true
            }).start();
        }
    }, [isVisible, position]);

    return (
        <Modal
            visible={isVisible}
            transparent={true}
            animationType="fade"
            onRequestClose={onClose}
        >
            <View style={popupStyles.modalOverlay}>
                <Animated.View
                    style={[popupStyles.modalContainer, { transform: position.getTranslateTransform() }]}
                    {...panResponder.panHandlers}
                >
                    <Image source={image.image} style={popupStyles.image} />
                    <Text style={popupStyles.label}>{image.label}</Text>
                    {/* Ajouter d'autres détails si nécessaire */}
                </Animated.View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00061E',
        paddingTop: 35
    },
    title: {
        fontSize: 30,
        marginLeft: 10,
        marginBottom: 20,
        color: '#ffffff',
        fontFamily: 'Montserrat-Bold',
    },
    itemContainer: {
        flex: 1,
        flexDirection: 'column',
        margin: 5,
        alignItems: 'center',
    },
    image: {
        width: imageWidth - 10,
        height: imageWidth - 10,
        borderRadius: 10,
    },
    label: {
        color: 'white',
        marginTop: 5,
    },
});

const popupStyles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'flex-end',
    },
    modalContainer: {
        height: modalHeight,
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
    },
    image: {
        width: '100%',
        height: modalHeight / 2,
        borderRadius: 10,
    },
    label: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
    },
});

export default Events;