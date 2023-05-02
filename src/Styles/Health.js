
import { StyleSheet, Text, View, Button } from 'react-native'; 
export const health = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: '#fff'
    },
    button: {
        backgroundColor: '#3989FA',
        padding: 16,
        borderRadius: 10,
        height: 130,
        marginBottom: 8,
        zIndex: 1
    },
    buttonTitle: {
        fontSize: 20,
        color: '#FFFFFF',
        fontWeight: 'bold'
    },
    body: {
        padding: 24
    },
    top: {
        marginTop: 24,
        paddingLeft: 24, 
    },
    title: {
        color: '#08024B',
        fontWeight: 'bold',
        fontSize: 20
    },
    icon: {
        position: 'absolute',
        width: '100%',
        height: 120,
        right: -1,
        bottom: 0,
        zIndex: -1
    }
});