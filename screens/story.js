import { StyleSheet, Text, View, Button, Pressable, ScrollView } from 'react-native';
import React, { useContext, useEffect, useState, useMemo } from 'react';
import styles from "../styles/stylesheet";
import { UserContext } from '../userContext';
import { MaterialIcons } from '@expo/vector-icons';
// import { MMKV } from 'react-native-mmkv';

export default function Story ({ navigation }) {
    const {value,setValue} = useContext(UserContext);
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
    
    // const storage = new MMKV({

    // });

    

    const susano = chicken => {
        if(value[chicken-1] == false)
            return;
        if(chicken == 31)
            chicken = 50;
        if(chicken == 32)
            chicken = 65;
        if(chicken == 33)
            chicken = 81;
        if(chicken == 34)
            chicken = 117;
        if(chicken == 35)
            chicken = 162;
        
        navigation.navigate("Level",{targ: chicken});
    }

    // Unlocks level upon return to this screen
    navigation.addListener('focus', () => blank());

    const blank = () => {
        // const numUnlocked = storage.getNumber('unlocked');
        // if(numUnlocked >= 1)
        // {
        //     setLock(2);
        // }
        // if(numUnlocked >= 2)
        // {
        //     setLock2(3);
        // }
        // else if(charlie )
        for(let j = 1; j < value.length; j++)
        {
            if(value[j])
            {
                switch(j) {
                    case 1:
                        setLock(2);
                        break;
                    case 2:
                        setLock2(3);
                        break;
                    case 3:
                        setLock3(4);
                        break;
                    case 4:
                        setLock4(5);
                        break;
                    case 5:
                        setLock5(6);
                        break;
                    case 6:
                        setLock6(7);
                        break;
                    case 7:
                        setLock7(8);
                        break;
                    case 8:
                        setLock8(9);
                        break;
                    case 9:
                        setLock9(10);
                        break;
                    case 10:
                        setLock10(11);
                        break;
                    case 11:
                        setLock11(12);
                        break;
                    case 12:
                        setLock12(13);
                        break;
                    case 13:
                        setLock13(14);
                        break;
                    case 14:
                        setLock14(15);
                        break;
                    case 15:
                        setLock15(16);
                        break;
                    case 16:
                        setLock16(17);
                        break;
                    case 17:
                        setLock17(18);
                        break;
                    case 18:
                        setLock18(19);
                        break;
                    case 19:
                        setLock19(20);
                        break;
                    case 20:
                        setLock20(21);
                        break;
                    case 21:
                        setLock21(22);
                        break;
                    case 22:
                        setLock22(23);
                        break;
                    case 23:
                        setLock23(24);
                        break;    
                    case 24:
                        setLock24(25);
                        break;
                    case 25:
                        setLock25(26);
                        break;
                    case 26:
                        setLock26(27);
                        break;
                    case 27:
                        setLock27(28);
                        break;
                    case 28:
                        setLock28(29);
                        break;
                    case 29:
                        setLock29(30);
                        break;   
                    case 30:
                        setLock30(31);
                        break;
                    case 31:
                        setLock31(32);
                        break;
                    case 32:
                        setLock32(33);
                        break;
                    case 33:
                        setLock33(34);
                        break;
                    case 34:
                        setLock34(35);
                        break;     
                }
            }
        }
    }
    
    return (
        <ScrollView style={{backgroundColor:"#FFF"}}>
            <View style={styles.levelsContainer}>
                <Pressable style={styles.levels} onPress={() => susano(1)}>
                    <Text style={styles.labels}>1</Text>
                </Pressable>
                <Pressable style={styles.levels} onPress={() => susano(2)}>
                    <Text style={styles.labels}>{lock}</Text>
                </Pressable>
                <Pressable style={styles.levels} onPress={() => susano(3)}>
                <Text style={styles.labels}>{lock2}</Text>
                </Pressable>
                <Pressable style={styles.levels} onPress={() => susano(4)}>
                <Text style={styles.labels}>{lock3}</Text>
                </Pressable>
            </View>
            <View style={styles.levelsContainer}>
                <Pressable style={styles.levels} onPress={() => susano(5)}> 
                    <Text style={styles.labels}>{lock4}</Text>
                </Pressable>
                <Pressable style={styles.levels} onPress={() => susano(6)}>
                    <Text style={styles.labels}>{lock5}</Text>
                </Pressable>
                <Pressable style={styles.levels} onPress={() => susano(7)}>
                    <Text style={styles.labels}>{lock6}</Text>
                </Pressable>
                <Pressable style={styles.levels} onPress={() => susano(8)}>
                    <Text style={styles.labels}>{lock7}</Text>
                </Pressable>
            </View>
            <View style={styles.levelsContainer}>
                <Pressable style={styles.levels} onPress={() => susano(9)}>
                    <Text style={styles.labels}>{lock8}</Text>
                </Pressable>
                <Pressable style={styles.levels} onPress={() => susano(10)}>
                    <Text style={styles.labels}>{lock9}</Text>
                </Pressable>
                <Pressable style={styles.levels} onPress={() => susano(11)}>
                    <Text style={styles.labels}>{lock10}</Text>
                </Pressable>
                <Pressable style={styles.levels} onPress={() => susano(12)}>
                    <Text style={styles.labels}>{lock11}</Text>
                </Pressable>
            </View>
            <View style={styles.levelsContainer}>
                <Pressable style={styles.levels} onPress={() => susano(13)}>
                    <Text style={styles.labels}>{lock12}</Text>
                </Pressable>
                <Pressable style={styles.levels} onPress={() => susano(14)}>
                    <Text style={styles.labels}>{lock13}</Text>
                </Pressable>
                <Pressable style={styles.levels} onPress={() => susano(15)}>
                    <Text style={styles.labels}>{lock14}</Text>
                </Pressable>
                <Pressable style={styles.levels} onPress={() => susano(16)}>
                    <Text style={styles.labels}>{lock15}</Text>
                </Pressable>
            </View>
            <View style={styles.levelsContainer}>
                <Pressable style={styles.levels} onPress={() => susano(17)}>
                    <Text style={styles.labels}>{lock16}</Text>
                </Pressable>
                <Pressable style={styles.levels} onPress={() => susano(18)}>
                    <Text style={styles.labels}>{lock17}</Text>
                </Pressable>
                <Pressable style={styles.levels} onPress={() => susano(19)}>
                    <Text style={styles.labels}>{lock18}</Text>
                </Pressable>
                <Pressable style={styles.levels} onPress={() => susano(20)}>
                    <Text style={styles.labels}>{lock19}</Text>
                </Pressable>
            </View>
            <View style={styles.levelsContainer}>
                <Pressable style={styles.levels} onPress={() => susano(21)}>
                    <Text style={styles.labels}>{lock20}</Text>
                </Pressable>
                <Pressable style={styles.levels} onPress={() => susano(22)}>
                    <Text style={styles.labels}>{lock21}</Text>
                </Pressable>
                <Pressable style={styles.levels} onPress={() => susano(23)}>
                    <Text style={styles.labels}>{lock22}</Text>
                </Pressable>
                <Pressable style={styles.levels} onPress={() => susano(24)}>
                    <Text style={styles.labels}>{lock23}</Text>
                </Pressable>
            </View>
            <View style={styles.levelsContainer}>
                <Pressable style={styles.levels} onPress={() => susano(25)}>
                    <Text style={styles.labels}>{lock24}</Text>
                </Pressable>
                <Pressable style={styles.levels} onPress={() => susano(26)}>
                    <Text style={styles.labels}>{lock25}</Text>
                </Pressable>
                <Pressable style={styles.levels} onPress={() => susano(27)}>
                    <Text style={styles.labels}>{lock26}</Text>
                </Pressable>
                <Pressable style={styles.levels} onPress={() => susano(28)}>
                    <Text style={styles.labels}>{lock27}</Text>
                </Pressable>
            </View>
            <View style={styles.levelsContainer}>
                <Pressable style={styles.levels} onPress={() => susano(29)}>
                    <Text style={styles.labels}>{lock28}</Text>
                </Pressable>
                <Pressable style={styles.levels} onPress={() => susano(30)}>
                    <Text style={styles.labels}>{lock29}</Text>
                </Pressable>
            </View>
            <View style={styles.levelsContainer}>
                <Text style={styles.labels}>Bonus Levels</Text>
            </View>
            <View style={styles.levelsContainer}>
                <Pressable style={styles.levels} onPress={() => susano(31)}>
                    <Text style={styles.labels}>{lock30}</Text>
                </Pressable>
                <Pressable style={styles.levels} onPress={() => susano(32)}>
                    <Text style={styles.labels}>{lock31}</Text>
                </Pressable>
                <Pressable style={styles.levels} onPress={() => susano(33)}>
                    <Text style={styles.labels}>{lock32}</Text>
                </Pressable>
                <Pressable style={styles.levels} onPress={() => susano(34)}>
                    <Text style={styles.labels}>{lock33}</Text>
                </Pressable>
                <Pressable style={styles.levels} onPress={() => susano(35)}>
                    <Text style={styles.labels}>{lock34}</Text>
                </Pressable>
            </View>
            <View style={styles.levelsContainer}></View>
        </ScrollView>
    
    );
}