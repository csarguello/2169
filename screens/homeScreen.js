import { Text, View, Switch, Pressable, Modal} from 'react-native';
import React, { useState, useContext } from 'react';
import styles from "../styles/stylesheet";
import { MaterialIcons } from '@expo/vector-icons';
import { Audio } from 'expo-av';
import { UserContext } from '../userContext';
import { StatusBar } from 'expo-status-bar';

export default function HomeScreen({ navigation }) {
    const [openModal, setModal] = useState(false);
    const [isEnabled, setIsEnabled] = useState(false);
    const [hidden1,setHidden1] = useState(false);
    const [hidden3, setHidden3] = useState();
    const {theme,setTheme} = useContext(UserContext);
    const [isEnabled2, setIsEnabled2] = useState(false);

    const easterEgg = () => {
        if(!hidden1)
            setHidden1(true);
    }

    const easterEgg2 = () => {
        if(hidden1)
            setHidden3("C + A forever <3");
    }

    const toggleSwitch = () => { 
        setIsEnabled(previousState => !previousState);
        if(isEnabled)
            sound.unloadAsync();
        if(!isEnabled)
            playSound();
    }

    const toggleTheme = () => {
        setIsEnabled2(prevState => !prevState);
        if(theme == 'light')
            setTheme('dark');
        else setTheme('light');
    }

    const [musicstate, setMusic] = useState(true);
    const [sound, setSound] = useState();
    
    async function playSound() {
        const {sound} = await Audio.Sound.createAsync(
            require('../8bitvibes.mp3')
          );
        setSound(sound);
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
        <View style={theme == 'light' ? styles.basics : styles.basicsDark}>
            <Modal visible={openModal} animationType='slide' style={{backgroundColor: '#333'}}>
                <View style={theme == 'light' ? styles.modalBG : styles.modalBGDark}>
                    <MaterialIcons style={theme == 'light' ? styles.refreshBut : styles.refreshButDark} name='close' size={24} onPress={() => setModal(false)}>
                    </MaterialIcons>
                    <View style={theme == 'light' ? styles.break : styles.breakDark} />
                    <View style={{padding: 10,flexDirection:'row', alignItems:'center'}}>
                        <Text style={theme == 'light' ? styles.labels : styles.labelsDark}>Toggle Music:     </Text>
                        <Switch
                            trackColor={{ false: "#767577", true: "#f4f3f4" }}
                            thumbColor={isEnabled ? "#767577" : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </View>
                    <View style={theme == 'light' ? styles.break : styles.breakDark} />
                    <View style={{padding: 10,flexDirection:'row', alignItems:'center'}}>
                        <Text style={theme == 'light' ? styles.labels : styles.labelsDark}>Toggle Dark Theme:     </Text>
                        <Switch
                            trackColor={{ false: "#767577", true: "#f4f3f4" }}
                            thumbColor={isEnabled2 ? "#767577" : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleTheme}
                            value={isEnabled2}
                        />
                    </View>
                    <View style={theme == 'light' ? styles.break : styles.breakDark} />
                    <View style={{height:'30%'}} />
                    <Pressable style={theme == 'light' ? styles.easterEgg : styles.easterEggDark} onPress={() => easterEgg()}>
                    </Pressable>
                    <Text style={theme == 'light' ? styles.eggText : styles.eggTextDark}>{hidden3}</Text>
                    <Pressable style={theme == 'light' ? styles.easterEgg : styles.easterEggDark} onPress={() => easterEgg2()}>
                    </Pressable>
                    
                </View>
            </Modal>
            <View style={theme == 'light' ? styles.homeNums : styles.homeNumsDark}>
                <Text style={theme == 'light' ? styles.titleNums : styles.titleNumsDark}>2 1 6 9
                </Text>
            </View>
            <View style={theme == 'light' ? styles.homeBottom : styles.homeBottomDark}>
                <Pressable style={theme == 'light' ? styles.numbers2 : styles.numbers2Dark} onPress={() => navigation.navigate("Story")}>
                    <Text style={theme == 'light' ? styles.labels : styles.labelsDark}>Story Mode</Text>
                </Pressable>
                <Pressable style={theme == 'light' ? styles.numbers2 : styles.numbers2Dark} onPress={() => navigation.navigate("Endless")}>
                    <Text style={theme == 'light' ? styles.labels : styles.labelsDark}>Endless Mode</Text>
                </Pressable>
                <Pressable style={theme == 'light' ? styles.numbers2 : styles.numbers2Dark} onPress={() => setModal(true)}>
                    <Text style={theme == 'light' ? styles.labels : styles.labelsDark}>Settings</Text>
                </Pressable>
            </View>
            <StatusBar style={theme == 'light' ? 'dark' : 'light'} backgroundColor="#999" animated={true}></StatusBar>
        </View>
    )
}