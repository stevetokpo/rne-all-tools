import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    slide: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 39,
        marginBottom: 20,
        color: '#ffffff',
        fontFamily: 'Montserrat-Bold',
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
        color: '#ffffff',
    },
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'contain',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#FF9716',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        width: '95%',
    },
    buttonPressed: {
        backgroundColor: '#CD7201',
    },
    button_text: {
        color: '#00061E',
        fontSize: 28,
        fontFamily: 'Montserrat-Bold',
    }
});