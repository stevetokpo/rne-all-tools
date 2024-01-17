import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import Layout from '../../Layout';

const Plus = () => {
    return (
        <Layout>
            <View style={styles.container}>
                <Text style={styles.title}>PLUS D'OPTION</Text>

                <View style={styles.row}>
                    <TouchableOpacity style={styles.box}>
                        <Text style={styles.boxText}>Contactez service client</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.box}>
                        <Text style={styles.boxText}>Aides & Infos</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.row}>
                    <TouchableOpacity style={styles.box}>
                        <Text style={styles.boxText}>Action</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.box}>
                        <Text style={styles.boxText}>Détails de l'app</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Layout>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingTop: 40
    },
    title: {
        fontSize: 30,
        marginLeft: 10,
        marginBottom: 20,
        color: '#ffffff',
        fontFamily: 'Montserrat-Bold',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    box: {
        backgroundColor: '#FF9716',
        padding: 15,
        borderRadius: 10,
        flex: 1,
        marginHorizontal: 5,
        marginBottom: 10
    },
    boxText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        fontFamily: 'Montserrat-Regular'
    },
});

export default Plus;