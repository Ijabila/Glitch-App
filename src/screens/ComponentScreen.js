import React from 'react';
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const ComponentScreen = () => {

    return (
        <View style={styles.container}>
           
            <View style={styles.shadow}>
                <Image style={styles.image} source={require('../../assets/pic.jpg')} />
            </View>

            <Text style={styles.text}>AQUILA  AVEION</Text>

                <Text style={styles.home}>HOME</Text>

                <Text style={styles.about}>ABOUT</Text>

                <Text style={styles.gallery}>GALLERY</Text>

                <Text style={styles.contact}>CONTACT</Text>

            <View >
                <Image style={styles.image2} source={require('../../assets/pic2.jpg')} />
            </View>

            <View style={styles.iconBar}>
                <AntDesign name="instagram" size={24} color="white" />
                <AntDesign name="twitter" size={24} color="white" />
                <FontAwesome name="snapchat-ghost" size={24} color="white" />
                <MaterialIcons name="email" size={24} color="white" />
            </View>


        </View>
        
        
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#c9326a',
        flexDirection: 'row'
    },

    image: {
        position: 'absolute',
        height: 250,
        width: 250,
        marginLeft: 80,
        marginTop: 200,
    },

    image2: {
        position: 'absolute',
        height: 50,
        width: 50,
        borderRadius: 50/2,
        marginTop: 580,
        marginLeft: -200
    },

    shadow: {
        shadowOpacity: 4,
        shadowRadius: 4,
        shadowColor: 'black',
        shadowOffset: {width: 1, height: 1}

    },

    text: {
        color: 'white',
        textAlign: 'center',
        fontWeight: '100',
        fontSize: 28,
        width: 400,
        marginTop: 100
    },

    about:{
        color: 'white',
        marginLeft: 25,
        textAlign: 'center',
        marginTop: 600,
        fontWeight: '100',

    },

    gallery:{
        color: 'white',
        marginLeft: 85,
        textAlign: 'center',
        marginTop: 600,
        fontWeight: '100',

    },

    contact:{
        color: 'white',
        marginLeft: 25,
        textAlign: 'center',
        marginTop: 600,
        fontWeight: '100',

    },

    home: {
        color: 'white',
        marginLeft: -350,
        textAlign: 'center',
        marginTop: 600,
        fontWeight: '100',
    },

    iconBar: {
        flexDirection: 'column',
        marginTop: 230,
        height: 200,
        justifyContent: 'space-between',
    }

}
);

export default ComponentScreen;