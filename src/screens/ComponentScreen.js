import React from 'react';
import { TouchableOpacity, View, Text, Image, StyleSheet, Linking } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const ComponentScreen = () => {

    return (
        
        //putting all the components into a single container

        <View style={styles.container}>

            {/*the main image is in a view element to enable easier styling */}

            <View style={styles.shadow}>
                <Image style={styles.image} source={require('../../assets/pic.jpg')} />
            </View>

            {/*main heading with bearing name, supposed to be dynamically gotten from the API but I couldn't figure out how to do that early enough */}

            <Text style={styles.text}>AQUILA  AVEION</Text>

            {/*page links */}

                <Text style={styles.home}>HOME</Text>

                <Text style={styles.about}>ABOUT</Text>

                <Text style={styles.gallery}>GALLERY</Text>

                <Text style={styles.contact}>CONTACT</Text>

            {/*smaller picture with a rounded border radius */}

            <View >
                <Image style={styles.image2} source={require('../../assets/pic2.jpg')} />
            </View>

            {/*sidebar social media links, which again, was supposed to be dynamic */}

            <View style={styles.iconBar}>
                <TouchableOpacity>
                <AntDesign name="instagram" size={24} color="white" onPress={() => Linking.openURL('https://www.instagram.com/aquilaveionofficial')}/>
                </TouchableOpacity>
                <TouchableOpacity>
                <AntDesign name="twitter" size={24} color="white" onPress={() => Linking.openURL('https://www.twitter.com/aquilaveion')}/>
                </TouchableOpacity>
                <TouchableOpacity>
                <FontAwesome name="snapchat-ghost" size={24} color="white" onPress={() => Linking.openURL('https://www.snapchat.com/aquilaveionsnaps')}/>
                </TouchableOpacity>
                <TouchableOpacity>
                <MaterialIcons name="email" size={24} color="white" onPress={() => Linking.openURL('https://aquilaveion@aquil.com')}/>
                </TouchableOpacity>
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