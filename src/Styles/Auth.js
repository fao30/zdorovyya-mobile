
import { StyleSheet, Text, View, Button } from 'react-native'; 
export const auth = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%'
    },
    top: { 
        backgroundColor: '#3989FA',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: '50%',
        zIndex: 5, 
        paddingTop: 80
    }, 
    enter: {
        marginTop: '60%',
        zIndex: 8,
        color: '#000',
        position: 'absolute',
        textAlign: 'center',
        width: '100%',
        fontSize: 24,
        fontWeight: 'bold'
    },  
    content: {
        height: '50%',
        width: '100%',
        backgroundColor: '#fff',
        padding: 24, 
        zIndex: 10
    },
    text: {
        fontSize: 24,
        color: '#fff'
    },
    input: {
        borderBottomColor: '#9197B3',
        borderBottomWidth: 1,
        fontSize: 16,
        padding: 4,
        marginBottom: 24
    },
    button: {
        backgroundColor: '#3989FA',
        padding: 16,
        borderRadius: 4
    },
    textButton: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold'
    },
    triangleShape: {
        width: '100%',
        height: 0,
        borderLeftWidth: '100%',
        borderRightWidth: '100%',
        borderBottomWidth: '100%',
        borderStyle: 'solid',
        backgroundColor: 'transparent',
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: '#fff',
        zIndex: 10,
        position: 'absolute',
        marginTop: '-10%'
    }
});