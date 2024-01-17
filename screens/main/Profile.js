import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';
import { Video } from 'expo-av';

import Layout from '../../Layout';

const images = [
    require('../../assets/images/img1.jpg'),
    require('../../assets/images/img2.jpg'),
    require('../../assets/images/img3.jpg'),
    require('../../assets/images/img4.jpg'),
    require('../../assets/images/img5.jpg'),
    require('../../assets/images/img6.jpg'),
];

const ProfileScreen = () => {
    return (
        <Layout>
            <View style={styles.container}>
                <Video
                    source={require('../../assets/videos/profile-bg.mp4')}
                    rate={1.0}
                    volume={1.0}
                    isMuted={true}
                    resizeMode="cover"
                    shouldPlay
                    isLooping
                    style={StyleSheet.absoluteFill}
                />
                <ScrollView style={styles.scrollView}>
                    <View style={styles.profileHeader}>
                        <Image
                            source={require('../../assets/images/icon.png')}
                            style={styles.profileImage}
                        />
                        <Text style={styles.name}>
                            John X
                        </Text>
                        <Text style={styles.username}>
                            @AppAdmin
                        </Text>
                        <Text style={styles.bio}>
                            😉 Voici la description de mon bio lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam asperiores laboriosam, nam autem ullam at sed recusandae veritatis impedit, explicabo doloremque reiciendis dolorem ratione eius natus enim cumque temporibus aut!  
                        </Text>
                    </View>
                    <View style={styles.galleryContainer}>
                        <Text style={styles.contentTitle}>Ma Galerie</Text>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            {images.map((img, index) => (
                                <View key={index} style={styles.imageShadow}>
                                    <Image source={img} style={styles.galleryImage} />
                                </View>
                            ))}
                        </ScrollView>
                    </View>
                </ScrollView>
            </View>
        </Layout>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        paddingTop: 50
    },
    scrollView: {
        flex: 1,
        backgroundColor: 'transparent',
    },
    profileHeader: {
        alignItems: 'center',
        padding: 20,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: 'white',
    },
    name: {
        fontSize: 37,
        color: 'white',
        marginTop: 8,
        fontFamily: 'Montserrat-Bold'
    },
    username: {
        fontSize: 18,
        color: '#FF9716',
        fontFamily: 'Montserrat-Regular'
    },
    bio: {
        fontSize: 16,
        color: '#909090',
        marginTop: 8,
        textAlign: 'center',
        fontFamily: 'Montserrat-Regular'
    },
    content: {
        padding: 20,
    },
    contentTitle: {
        fontSize: 26,
        fontFamily: 'Montserrat-Bold',
        color: '#ffffff',
        marginBottom: 10,
    },
    galleryContainer: {
        marginTop: 10,
        marginBottom: 20,
        paddingLeft: 20
    },
    imageShadow: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5, // Pour Android
        marginRight: 15,
        borderRadius: 8, // Ajouter si vos images doivent avoir des coins arrondis
        overflow: 'hidden', // Important si vous utilisez borderRadius
    },
    galleryImage: {
        width: 250, // Taille plus grande
        height: 400, // Taille plus grande
        borderRadius: 8, // Ajouter si vos images doivent avoir des coins arrondis
    },
});

export default ProfileScreen;