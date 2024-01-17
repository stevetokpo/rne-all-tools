import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

import Layout from '../Layout';

const ImageDetails = ({ route: { params: { imageItem } } }) => {
    if (!imageItem) return null;

    return (
        <Layout>
            <View style={styles.fullScreen}>
                <ScrollView contentContainerStyle={styles.container}>
                    <Text style={styles.label}>{imageItem.label}</Text>
                    <Image source={imageItem.image} style={styles.image} />
                    <Text style={styles.rating}>
                        {'⭐️ ' + imageItem.rating.toFixed(1)}
                    </Text>
                    <Text style={styles.detailText}>Année: {imageItem.year}</Text>
                    <Text style={styles.detailText}>Vues: {imageItem.views}</Text>
                    <Text style={styles.description}>{imageItem.description}</Text>
                    {imageItem.comments.map((comment, index) => (
                        <Text key={index} style={styles.comment}>{comment}</Text>
                    ))}
                </ScrollView>
            </View>
        </Layout>
    );
};

const styles = StyleSheet.create({
    fullScreen: {
        flex: 1,
    },
    container: {
        backgroundColor: '#343541',
        alignItems: 'center',
        paddingTop: 20,
    },
    image: {
        width: '95%',
        height: 300,
        borderRadius: 15,
    },
    label: {
        fontSize: 36,
        color: '#FF9716',
        marginTop: 10,
        marginBottom: 20,
        fontFamily: 'Montserrat-Bold'
    },
    rating: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FF9716',
        marginTop: 10,
    },
    detailText: {
        fontSize: 18,
        color: '#ffffff',
        marginTop: 10,
        fontFamily: 'Montserrat-Regular'
    },
    description: {
        fontSize: 16,
        color: '#ffffff',
        marginTop: 20,
        paddingHorizontal: 20,
        fontFamily: 'Montserrat-Regular',
    },
    comment: {
        fontSize: 14,
        color: '#ffffff',
        marginTop: 5,
        fontStyle: 'italic',
        textAlign: 'center',
    },
});

export default ImageDetails;
