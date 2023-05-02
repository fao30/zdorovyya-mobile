
import { StyleSheet, Text, View, Button } from 'react-native'; 
export const splash = StyleSheet.create({
    logo: {
        width: 150,
        height: 150,
        marginBottom: 30,
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    container: {
        padding: 24,
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        backgroundColor: '#fff'
    }
});