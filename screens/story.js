import { StyleSheet, Text, View, Button, Pressable, ScrollView } from 'react-native';
import React, { useContext, useState } from 'react';
import styles from "../styles/stylesheet";
import { UserContext } from '../userContext';

export default function Story ({ navigation }) {
    const {value,setValue} = useContext(UserContext);

    const susano = chicken => {
        if(value[chicken-1] == false)
            return;
        navigation.navigate("Level",{targ: chicken});
    }

    return (
        <ScrollView style={{backgroundColor:"#FFF"}}>
            <View style={styles.levelsContainer}>
                <Pressable style={styles.levels} onPress={() => susano(1)}>
                    <Text style={styles.labels}>1</Text>
                </Pressable>
                <Pressable style={styles.levels} onPress={() => susano(2)}>
                    <Text style={styles.labels}>2</Text>
                </Pressable>
                <Pressable style={styles.levels} onPress={() => susano(3)}>
                    <Text style={styles.labels}>3</Text>
                </Pressable>
                <Pressable style={styles.levels} onPress={() => susano(4)}>
                    <Text style={styles.labels}>4</Text>
                </Pressable>
            </View>
            <View style={styles.levelsContainer}>
                <Pressable style={styles.levels} onPress={() => susano(5)}> 
                    <Text style={styles.labels}>5</Text>
                </Pressable>
                <Pressable style={styles.levels} onPress={() => susano(6)}>
                    <Text style={styles.labels}>6</Text>
                </Pressable>
                <Pressable style={styles.levels} onPress={() => susano(7)}>
                    <Text style={styles.labels}>7</Text>
                </Pressable>
                <Pressable style={styles.levels} onPress={() => susano(8)}>
                    <Text style={styles.labels}>8</Text>
                </Pressable>
            </View>
            <View style={styles.levelsContainer}>
                <Pressable style={styles.levels} onPress={() => susano(9)}>
                    <Text style={styles.labels}>9</Text>
                </Pressable>
                <Pressable style={styles.levels} onPress={() => susano(10)}>
                    <Text style={styles.labels}>10</Text>
                </Pressable>
                <Pressable style={styles.levels} onPress={() => susano(11)}>
                    <Text style={styles.labels}>11</Text>
                </Pressable>
                <Pressable style={styles.levels} onPress={() => susano(12)}>
                    <Text style={styles.labels}>12</Text>
                </Pressable>
            </View>
            <View style={styles.levelsContainer}>
                <Pressable style={styles.levels} onPress={() => susano(13)}>
                    <Text style={styles.labels}>13</Text>
                </Pressable>
                <Pressable style={styles.levels} onPress={() => susano(14)}>
                    <Text style={styles.labels}>14</Text>
                </Pressable>
                <Pressable style={styles.levels} onPress={() => susano(15)}>
                    <Text style={styles.labels}>15</Text>
                </Pressable>
                <Pressable style={styles.levels} onPress={() => susano(16)}>
                    <Text style={styles.labels}>16</Text>
                </Pressable>
            </View>
            <View style={styles.levelsContainer}>
                <Pressable style={styles.levels} onPress={() => susano(17)}>
                    <Text style={styles.labels}>17</Text>
                </Pressable>
                <Pressable style={styles.levels} onPress={() => susano(18)}>
                    <Text style={styles.labels}>18</Text>
                </Pressable>
                <Pressable style={styles.levels} onPress={() => susano(19)}>
                    <Text style={styles.labels}>19</Text>
                </Pressable>
                <Pressable style={styles.levels} onPress={() => susano(20)}>
                    <Text style={styles.labels}>20</Text>
                </Pressable>
            </View>
            <View style={styles.levelsContainer}>
                <Pressable style={styles.levels} onPress={() => susano(21)}>
                    <Text style={styles.labels}>21</Text>
                </Pressable>
                <Pressable style={styles.levels} onPress={() => susano(22)}>
                    <Text style={styles.labels}>22</Text>
                </Pressable>
                <Pressable style={styles.levels} onPress={() => susano(23)}>
                    <Text style={styles.labels}>23</Text>
                </Pressable>
                <Pressable style={styles.levels} onPress={() => susano(24)}>
                    <Text style={styles.labels}>24</Text>
                </Pressable>
            </View>
            <View style={styles.levelsContainer}>
                <Pressable style={styles.levels} onPress={() => susano(25)}>
                    <Text style={styles.labels}>25</Text>
                </Pressable>
                <Pressable style={styles.levels} onPress={() => susano(26)}>
                    <Text style={styles.labels}>26</Text>
                </Pressable>
                <Pressable style={styles.levels} onPress={() => susano(27)}>
                    <Text style={styles.labels}>27</Text>
                </Pressable>
                <Pressable style={styles.levels} onPress={() => susano(28)}>
                    <Text style={styles.labels}>28</Text>
                </Pressable>
            </View>
            <View style={styles.levelsContainer}>
                <Pressable style={styles.levels} onPress={() => susano(29)}>
                    <Text style={styles.labels}>29</Text>
                </Pressable>
                <Pressable style={styles.levels} onPress={() => susano(30)}>
                    <Text style={styles.labels}>30</Text>
                </Pressable>
            </View>
            <View style={styles.levelsContainer}>
                <Text style={styles.labels}>Bonus Levels</Text>
            </View>
            <View style={styles.levelsContainer}>
                <Pressable style={styles.levels} onPress={() => susano(50)}>
                    <Text style={styles.labels}>1</Text>
                </Pressable>
                <Pressable style={styles.levels} onPress={() => susano(65)}>
                    <Text style={styles.labels}>2</Text>
                </Pressable>
                <Pressable style={styles.levels} onPress={() => susano(81)}>
                    <Text style={styles.labels}>3</Text>
                </Pressable>
                <Pressable style={styles.levels} onPress={() => susano(117)}>
                    <Text style={styles.labels}>4</Text>
                </Pressable>
                <Pressable style={styles.levels} onPress={() => susano(162)}>
                    <Text style={styles.labels}>5</Text>
                </Pressable>
            </View>
            <View style={styles.levelsContainer}></View>
        </ScrollView>
    
    );
}