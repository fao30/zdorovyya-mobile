
import { StyleSheet, Text, View, Button } from 'react-native'; 
export const profile = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: '#fff'
    }, 
    photoCircle: {
        backgroundColor: '#E6EEFB',
        width: 86,
        height: 86,
        borderRadius: 43,
        alignItems: 'center',
        justifyContent: 'center', 
        marginBottom: 9
    },
    top: {
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30
    },
    placeholderPhoto: {
        position: 'absolute',
        width: 80,
        height: 70, 
    },
    editLink: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    phone: {
        fontWeight: 'bold',
        color: '#050220',
        marginBottom: 4
    },
    link: {
        fontSize: 12,
        color: '#3989FA'
    },
    body: {
        paddingLeft: 24,
        paddingRight: 24
    },
    settingLine: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 16,
        paddingBottom: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#f5f5f5'
    },
    settingIcons: {
        marginRight: 16
    },
    settingText: {
        color: '#050220',
        fontSize: 14,
        fontWeight: 'bold'
    },
    footer: {
        marginTop: 'auto',
        alignItems: 'center',
        justifyContent: 'center'
    },
    copyright: {
        fontSize: 10,
        color: '#9197B3'
    }
});