import { StyleSheet, Text, View, Switch, Pressable, Modal} from 'react-native';
import React, { useState } from 'react';
import styles from "../styles/stylesheet";
import { MaterialIcons } from '@expo/vector-icons';
import { Audio } from 'expo-av';

export default function HomeScreen({ navigation }) {
    const [openModal, setModal] = useState(false);
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => { 
        setIsEnabled(previousState => !previousState);
        if(isEnabled)
            sound.unloadAsync();
        if(!isEnabled)
            playSound();
    }
    const [musicstate, setMusic] = useState(true);
    const [sound, setSound] = useState();
    
    async function playSound() {
        const {sound} = await Audio.Sound.createAsync(
            require('../8bitvibes.mp3')
          );
        setSound(sound);
        console.log('Playing sound');
        await sound.playAsync();
        sound.setIsLoopingAsync(true);
    }
    
    if(!isEnabled && musicstate) 
    {
        toggleSwitch();
        setMusic(false);
    }
    //if(isEnabled) stopSound();
    return (
        <View style={styles.basics}>
            <Modal visible={openModal} animationType='slide'>
                <View style={{paddingTop: 40}}>
                    <MaterialIcons style={{alignSelf:'center', paddingBottom:10}} name='close' size={24} onPress={() => setModal(false)}>
                    </MaterialIcons>
                    <View
                        style={{
                            borderBottomColor: 'black',
                            borderBottomWidth: StyleSheet.hairlineWidth,
                        }}
                        />
                    <View style={{padding: 10,flexDirection:'row', alignItems:'center'}}>
                    <Text style={styles.labels}>Toggle Music:     </Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                    </View>
                    <View
                        style={{
                            borderBottomColor: 'black',
                            borderBottomWidth: StyleSheet.hairlineWidth,
                        }}
                        />
                </View>
            </Modal>
            <View style={{
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            flexDirection: 'row',
            alignContent: 'center',
            flexWrap: 'wrap',
            height: '30%'
            }}>
                <Text style={{
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 50
                }}>2 1 6 9
                </Text>
            </View>
            <View style={{
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            flexDirection: 'column',
            alignContent: 'center',
            flexWrap: 'wrap',
            height: '70%'
            }}>
                <Pressable style={styles.numbers2} onPress={() => navigation.navigate("Story")}>
                    <Text style={styles.labels}>Story Mode</Text>
                </Pressable>
                <Pressable style={styles.numbers2} onPress={() => navigation.navigate("Endless")}>
                    <Text style={styles.labels}>Endless Mode</Text>
                </Pressable>
                <Pressable style={styles.numbers2} onPress={() => setModal(true)}>
                    <Text style={styles.labels}>Settings</Text>
                </Pressable>
            </View>
        </View>
    )
}