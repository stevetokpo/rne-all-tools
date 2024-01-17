import { StyleSheet, StatusBar, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const itemWidth = width * 0.8;
const itemMargin = 10;

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        marginTop: 30
    },
    backgroundImage: {
        ...StyleSheet.absoluteFillObject,
        width: undefined,
        height: undefined,
        paddingTop: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight,
    },
    carouselItem: {
        width: itemWidth,
        marginHorizontal: itemMargin,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 10,
        backfaceVisibility: 'hidden',
    },
    image: {
        width: '100%',
        height: '78%',
        borderRadius: 10,
    },
    label: {
        fontSize: 25,
        marginTop: 10,
        color: 'white',
    },
    rating: {
        fontSize: 20,
        color: 'white',
        marginTop: 5,
    },
    smbtn: {
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
        width: '50%',
        marginTop: -20,
        marginLeft: 60
    },
    button_text: {
        color: '#00061E',
        fontSize: 15,
        fontFamily: 'Montserrat-Bold',
    }
});