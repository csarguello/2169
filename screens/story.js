import { Text, View, Pressable, ScrollView } from 'react-native';
import React, { useContext, useState } from 'react';
import styles from "../styles/stylesheet";
import { UserContext } from '../userContext';
import { MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Story ({ navigation }) {
    const {theme,setTheme} = useContext(UserContext);
    const [lock,setLock] = useState(<MaterialIcons style={{alignSelf:'center'}} name='lock' size={24}></MaterialIcons>);
    const [lock2,setLock2] = useState(<MaterialIcons style={{alignSelf:'center'}} name='lock' size={24}></MaterialIcons>);
    const [lock3,setLock3] = useState(<MaterialIcons style={{alignSelf:'center'}} name='lock' size={24}></MaterialIcons>);
    const [lock4,setLock4] = useState(<MaterialIcons style={{alignSelf:'center'}} name='lock' size={24}></MaterialIcons>);
    const [lock5,setLock5] = useState(<MaterialIcons style={{alignSelf:'center'}} name='lock' size={24}></MaterialIcons>);
    const [lock6,setLock6] = useState(<MaterialIcons style={{alignSelf:'center'}} name='lock' size={24}></MaterialIcons>);
    const [lock7,setLock7] = useState(<MaterialIcons style={{alignSelf:'center'}} name='lock' size={24}></MaterialIcons>);
    const [lock8,setLock8] = useState(<MaterialIcons style={{alignSelf:'center'}} name='lock' size={24}></MaterialIcons>);
    const [lock9,setLock9] = useState(<MaterialIcons style={{alignSelf:'center'}} name='lock' size={24}></MaterialIcons>);
    const [lock10,setLock10] = useState(<MaterialIcons style={{alignSelf:'center'}} name='lock' size={24}></MaterialIcons>);
    const [lock11,setLock11] = useState(<MaterialIcons style={{alignSelf:'center'}} name='lock' size={24}></MaterialIcons>);
    const [lock12,setLock12] = useState(<MaterialIcons style={{alignSelf:'center'}} name='lock' size={24}></MaterialIcons>);
    const [lock13,setLock13] = useState(<MaterialIcons style={{alignSelf:'center'}} name='lock' size={24}></MaterialIcons>);
    const [lock14,setLock14] = useState(<MaterialIcons style={{alignSelf:'center'}} name='lock' size={24}></MaterialIcons>);
    const [lock15,setLock15] = useState(<MaterialIcons style={{alignSelf:'center'}} name='lock' size={24}></MaterialIcons>);
    const [lock16,setLock16] = useState(<MaterialIcons style={{alignSelf:'center'}} name='lock' size={24}></MaterialIcons>);
    const [lock17,setLock17] = useState(<MaterialIcons style={{alignSelf:'center'}} name='lock' size={24}></MaterialIcons>);
    const [lock18,setLock18] = useState(<MaterialIcons style={{alignSelf:'center'}} name='lock' size={24}></MaterialIcons>);
    const [lock19,setLock19] = useState(<MaterialIcons style={{alignSelf:'center'}} name='lock' size={24}></MaterialIcons>);
    const [lock20,setLock20] = useState(<MaterialIcons style={{alignSelf:'center'}} name='lock' size={24}></MaterialIcons>);
    const [lock21,setLock21] = useState(<MaterialIcons style={{alignSelf:'center'}} name='lock' size={24}></MaterialIcons>);
    const [lock22,setLock22] = useState(<MaterialIcons style={{alignSelf:'center'}} name='lock' size={24}></MaterialIcons>);
    const [lock23,setLock23] = useState(<MaterialIcons style={{alignSelf:'center'}} name='lock' size={24}></MaterialIcons>);
    const [lock24,setLock24] = useState(<MaterialIcons style={{alignSelf:'center'}} name='lock' size={24}></MaterialIcons>);
    const [lock25,setLock25] = useState(<MaterialIcons style={{alignSelf:'center'}} name='lock' size={24}></MaterialIcons>);
    const [lock26,setLock26] = useState(<MaterialIcons style={{alignSelf:'center'}} name='lock' size={24}></MaterialIcons>);
    const [lock27,setLock27] = useState(<MaterialIcons style={{alignSelf:'center'}} name='lock' size={24}></MaterialIcons>);
    const [lock28,setLock28] = useState(<MaterialIcons style={{alignSelf:'center'}} name='lock' size={24}></MaterialIcons>);
    const [lock29,setLock29] = useState(<MaterialIcons style={{alignSelf:'center'}} name='lock' size={24}></MaterialIcons>);
    const [lock30,setLock30] = useState(<MaterialIcons style={{alignSelf:'center'}} name='lock' size={24}></MaterialIcons>);
    const [lock31,setLock31] = useState(<MaterialIcons style={{alignSelf:'center'}} name='lock' size={24}></MaterialIcons>);
    const [lock32,setLock32] = useState(<MaterialIcons style={{alignSelf:'center'}} name='lock' size={24}></MaterialIcons>);
    const [lock33,setLock33] = useState(<MaterialIcons style={{alignSelf:'center'}} name='lock' size={24}></MaterialIcons>);
    const [lock34,setLock34] = useState(<MaterialIcons style={{alignSelf:'center'}} name='lock' size={24}></MaterialIcons>);
    const [progession, setProgression] = useState(0);

    const getData = async () => {
        try {
          const value = await AsyncStorage.getItem('unlocked')
          if(value !== null) {
            setProgression(parseInt(value));
          }
        if(progession >= 1)
        {
            setLock(2);
        }
        if(progession >= 2)
        {
            setLock2(3);
        }
        if(progession >= 3)
        {
            setLock3(4);
        }
        if(progession >= 4)
        {
            setLock4(5);
        }
        if(progession >= 5)
        {
            setLock5(6);
        }
        if(progession >= 6)
        {
            setLock6(7);
        }
        if(progession >= 7)
        {
            setLock7(8);
        }
        if(progession >= 8)
        {
            setLock8(9);
        }
        if(progession >= 9)
        {
            setLock9(10);
        }
        if(progession >= 10)
        {
            setLock10(11);
        }
        if(progession >= 11)
        {
            setLock11(12);
        }
        if(progession >= 12)
        {
            setLock12(13);
        }
        if(progession >= 13)
        {
            setLock13(14);
        }
        if(progession >= 14)
        {
            setLock14(15);
        }
        if(progession >= 15)
        {
            setLock15(16);
        }
        if(progession >= 16)
        {
            setLock16(17);
        }
        if(progession >= 17)
        {
            setLock17(18);
        }
        if(progession >= 18)
        {
            setLock18(19);
        }
        if(progession >= 19)
        {
            setLock19(20);
        }
        if(progession >= 20)
        {
            setLock20(21);
        }
        if(progession >= 21)
        {
            setLock21(22);
        }
        if(progession >= 22)
        {
            setLock22(23);
        }
        if(progession >= 23)
        {
            setLock23(24);
        }
        if(progession >= 24)
        {
            setLock24(25);
        }
        if(progession >= 25)
        {
            setLock25(26);
        }
        if(progession >= 26)
        {
            setLock26(27);
        }
        if(progession >= 27)
        {
            setLock27(28);
        }
        if(progession >= 28)
        {
            setLock28(29);
        }
        if(progession >= 29)
        {
            setLock29(30);
        }
        if(progession >= 30)
        {
            setLock30(31);
        }
        if(progession >= 31)
        {
            setLock31(32);
        }
        if(progession >= 32)
        {
            setLock32(33);
        }
        if(progession >= 33)
        {
            setLock33(34);
        }
        if(progession >= 34)
        {
            setLock34(35);
        }
        } catch(e) {
          // error reading value
        }
      }
      
    // Function that gets called upon clicking a lvl to go to it
    const goToLvl = lvlTarget => {
        if(!(lvlTarget-1 <= progession))
            return;
        if(lvlTarget == 31)
            lvlTarget = 50;
        if(lvlTarget == 32)
            lvlTarget = 65;
        if(lvlTarget == 33)
            lvlTarget = 81;
        if(lvlTarget == 34)
            lvlTarget = 107;
        if(lvlTarget == 35)
            lvlTarget = 162;
        
        navigation.navigate("Level",{targ: lvlTarget});
    }

    // Unlocks level upon return to this screen
    navigation.addListener('focus', () => blank());
    getData();

    const blank = () => {
        getData();
    }
    
    return (
        <ScrollView style={theme == 'light' ? styles.scrollBG : styles.scrollBGDark}>
            <View style={theme == 'light' ? styles.levelsContainer : styles.levelsContainerDark}>
                <Pressable style={theme == 'light' ? styles.levels : styles.levelsDark} onPress={() => goToLvl(1)}>
                    <Text style={theme == 'light' ? styles.labels : styles.labelsDark}>1</Text>
                </Pressable>
                <Pressable style={theme == 'light' ? styles.levels : styles.levelsDark} onPress={() => goToLvl(2)}>
                    <Text style={theme == 'light' ? styles.labels : styles.labelsDark}>{lock}</Text>
                </Pressable>
                <Pressable style={theme == 'light' ? styles.levels : styles.levelsDark} onPress={() => goToLvl(3)}>
                    <Text style={theme == 'light' ? styles.labels : styles.labelsDark}>{lock2}</Text>
                </Pressable>
                <Pressable style={theme == 'light' ? styles.levels : styles.levelsDark} onPress={() => goToLvl(4)}>
                    <Text style={theme == 'light' ? styles.labels : styles.labelsDark}>{lock3}</Text>
                </Pressable>
            </View>
            <View style={theme == 'light' ? styles.levelsContainer : styles.levelsContainerDark}>
                <Pressable style={theme == 'light' ? styles.levels : styles.levelsDark} onPress={() => goToLvl(5)}> 
                    <Text style={theme == 'light' ? styles.labels : styles.labelsDark}>{lock4}</Text>
                </Pressable>
                <Pressable style={theme == 'light' ? styles.levels : styles.levelsDark} onPress={() => goToLvl(6)}>
                    <Text style={theme == 'light' ? styles.labels : styles.labelsDark}>{lock5}</Text>
                </Pressable>
                <Pressable style={theme == 'light' ? styles.levels : styles.levelsDark} onPress={() => goToLvl(7)}>
                    <Text style={theme == 'light' ? styles.labels : styles.labelsDark}>{lock6}</Text>
                </Pressable>
                <Pressable style={theme == 'light' ? styles.levels : styles.levelsDark} onPress={() => goToLvl(8)}>
                    <Text style={theme == 'light' ? styles.labels : styles.labelsDark}>{lock7}</Text>
                </Pressable>
            </View>
            <View style={theme == 'light' ? styles.levelsContainer : styles.levelsContainerDark}>
                <Pressable style={theme == 'light' ? styles.levels : styles.levelsDark} onPress={() => goToLvl(9)}>
                    <Text style={theme == 'light' ? styles.labels : styles.labelsDark}>{lock8}</Text>
                </Pressable>
                <Pressable style={theme == 'light' ? styles.levels : styles.levelsDark} onPress={() => goToLvl(10)}>
                    <Text style={theme == 'light' ? styles.labels : styles.labelsDark}>{lock9}</Text>
                </Pressable>
                <Pressable style={theme == 'light' ? styles.levels : styles.levelsDark} onPress={() => goToLvl(11)}>
                    <Text style={theme == 'light' ? styles.labels : styles.labelsDark}>{lock10}</Text>
                </Pressable>
                <Pressable style={theme == 'light' ? styles.levels : styles.levelsDark} onPress={() => goToLvl(12)}>
                    <Text style={theme == 'light' ? styles.labels : styles.labelsDark}>{lock11}</Text>
                </Pressable>
            </View>
            <View style={theme == 'light' ? styles.levelsContainer : styles.levelsContainerDark}>
                <Pressable style={theme == 'light' ? styles.levels : styles.levelsDark} onPress={() => goToLvl(13)}>
                    <Text style={theme == 'light' ? styles.labels : styles.labelsDark}>{lock12}</Text>
                </Pressable>
                <Pressable style={theme == 'light' ? styles.levels : styles.levelsDark} onPress={() => goToLvl(14)}>
                    <Text style={theme == 'light' ? styles.labels : styles.labelsDark}>{lock13}</Text>
                </Pressable>
                <Pressable style={theme == 'light' ? styles.levels : styles.levelsDark} onPress={() => goToLvl(15)}>
                    <Text style={theme == 'light' ? styles.labels : styles.labelsDark}>{lock14}</Text>
                </Pressable>
                <Pressable style={theme == 'light' ? styles.levels : styles.levelsDark} onPress={() => goToLvl(16)}>
                    <Text style={theme == 'light' ? styles.labels : styles.labelsDark}>{lock15}</Text>
                </Pressable>
            </View>
            <View style={theme == 'light' ? styles.levelsContainer : styles.levelsContainerDark}>
                <Pressable style={theme == 'light' ? styles.levels : styles.levelsDark} onPress={() => goToLvl(17)}>
                    <Text style={theme == 'light' ? styles.labels : styles.labelsDark}>{lock16}</Text>
                </Pressable>
                <Pressable style={theme == 'light' ? styles.levels : styles.levelsDark} onPress={() => goToLvl(18)}>
                    <Text style={theme == 'light' ? styles.labels : styles.labelsDark}>{lock17}</Text>
                </Pressable>
                <Pressable style={theme == 'light' ? styles.levels : styles.levelsDark} onPress={() => goToLvl(19)}>
                    <Text style={theme == 'light' ? styles.labels : styles.labelsDark}>{lock18}</Text>
                </Pressable>
                <Pressable style={theme == 'light' ? styles.levels : styles.levelsDark} onPress={() => goToLvl(20)}>
                    <Text style={theme == 'light' ? styles.labels : styles.labelsDark}>{lock19}</Text>
                </Pressable>
            </View>
            <View style={theme == 'light' ? styles.levelsContainer : styles.levelsContainerDark}>
                <Pressable style={theme == 'light' ? styles.levels : styles.levelsDark} onPress={() => goToLvl(21)}>
                    <Text style={theme == 'light' ? styles.labels : styles.labelsDark}>{lock20}</Text>
                </Pressable>
                <Pressable style={theme == 'light' ? styles.levels : styles.levelsDark} onPress={() => goToLvl(22)}>
                    <Text style={theme == 'light' ? styles.labels : styles.labelsDark}>{lock21}</Text>
                </Pressable>
                <Pressable style={theme == 'light' ? styles.levels : styles.levelsDark} onPress={() => goToLvl(23)}>
                    <Text style={theme == 'light' ? styles.labels : styles.labelsDark}>{lock22}</Text>
                </Pressable>
                <Pressable style={theme == 'light' ? styles.levels : styles.levelsDark} onPress={() => goToLvl(24)}>
                    <Text style={theme == 'light' ? styles.labels : styles.labelsDark}>{lock23}</Text>
                </Pressable>
            </View>
            <View style={theme == 'light' ? styles.levelsContainer : styles.levelsContainerDark}>
                <Pressable style={theme == 'light' ? styles.levels : styles.levelsDark} onPress={() => goToLvl(25)}>
                    <Text style={theme == 'light' ? styles.labels : styles.labelsDark}>{lock24}</Text>
                </Pressable>
                <Pressable style={theme == 'light' ? styles.levels : styles.levelsDark} onPress={() => goToLvl(26)}>
                    <Text style={theme == 'light' ? styles.labels : styles.labelsDark}>{lock25}</Text>
                </Pressable>
                <Pressable style={theme == 'light' ? styles.levels : styles.levelsDark} onPress={() => goToLvl(27)}>
                    <Text style={theme == 'light' ? styles.labels : styles.labelsDark}>{lock26}</Text>
                </Pressable>
                <Pressable style={theme == 'light' ? styles.levels : styles.levelsDark} onPress={() => goToLvl(28)}>
                    <Text style={theme == 'light' ? styles.labels : styles.labelsDark}>{lock27}</Text>
                </Pressable>
            </View>
            <View style={theme == 'light' ? styles.levelsContainer : styles.levelsContainerDark}>
                <Pressable style={theme == 'light' ? styles.levels : styles.levelsDark} onPress={() => goToLvl(29)}>
                    <Text style={theme == 'light' ? styles.labels : styles.labelsDark}>{lock28}</Text>
                </Pressable>
                <Pressable style={theme == 'light' ? styles.levels : styles.levelsDark} onPress={() => goToLvl(30)}>
                    <Text style={theme == 'light' ? styles.labels : styles.labelsDark}>{lock29}</Text>
                </Pressable>
            </View>
            <View style={theme == 'light' ? styles.levelsContainer : styles.levelsContainerDark}>
                <Text style={theme == 'light' ? styles.labels : styles.labelsDark}>Bonus Levels</Text>
            </View>
            <View style={theme == 'light' ? styles.levelsContainer : styles.levelsContainerDark}>
                <Pressable style={theme == 'light' ? styles.levels : styles.levelsDark} onPress={() => goToLvl(31)}>
                    <Text style={theme == 'light' ? styles.labels : styles.labelsDark}>{lock30}</Text>
                </Pressable>
                <Pressable style={theme == 'light' ? styles.levels : styles.levelsDark} onPress={() => goToLvl(32)}>
                    <Text style={theme == 'light' ? styles.labels : styles.labelsDark}>{lock31}</Text>
                </Pressable>
                <Pressable style={theme == 'light' ? styles.levels : styles.levelsDark} onPress={() => goToLvl(33)}>
                    <Text style={theme == 'light' ? styles.labels : styles.labelsDark}>{lock32}</Text>
                </Pressable>
                <Pressable style={theme == 'light' ? styles.levels : styles.levelsDark} onPress={() => goToLvl(34)}>
                    <Text style={theme == 'light' ? styles.labels : styles.labelsDark}>{lock33}</Text>
                </Pressable>
                <Pressable style={theme == 'light' ? styles.levels : styles.levelsDark} onPress={() => goToLvl(35)}>
                    <Text style={theme == 'light' ? styles.labels : styles.labelsDark}>{lock34}</Text>
                </Pressable>
            </View>
            <View style={theme == 'light' ? styles.levelsContainer : styles.levelsContainerDark}></View>
        </ScrollView>
    
    );
}