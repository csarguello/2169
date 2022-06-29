import { StyleSheet, Text, View, Pressable, Alert } from 'react-native';
import React, { useState, useContext } from 'react';
import styles from "../styles/stylesheet";
import { UserContext } from '../userContext';
import { MaterialIcons } from '@expo/vector-icons';

export default function Level ({ route }) {
  const [gumba, setGumba] = useState([]);
  const [result1, setResult1] = useState('?');
  const [result2, setResult2] = useState('?');
  const [result3, setResult3] = useState('?');
  const [used1, setUsed1] = useState(false);
  const [used2, setUsed2] = useState(false);
  const [used3, setUsed3] = useState(false);
  const [used4, setUsed4] = useState(false);
  const [used5, setUsed5] = useState(false);
  const [used6, setUsed6] = useState(false);
  const [prez1, setPrez1] = useState('#66FFFF');
  const [prez2, setPrez2] = useState('#66FFFF');
  const [prez3, setPrez3] = useState('#66FFFF');
  const [prez4, setPrez4] = useState('#66FFFF');
  const [prez5, setPrez5] = useState('#66FFFF');
  const [prez6, setPrez6] = useState('#66FFFF');
  const [target, setTarget] = useState(route.params.targ);
  const [currentNums, setCurrentNums] = useState([2,1,6,9]);
  const {value,setValue} = useContext(UserContext);

  const moncherry = () => {
    let bacon = value;
    bacon[target] = true;
    setValue(bacon);
    console.log(value);
    setGumba([]);
    setUsed1(false);
    setUsed2(false);
    setUsed3(false);
    setUsed4(false);
    setUsed5(false);
    setUsed6(false);
    setPrez1('#66FFFF');
    setPrez2('#66FFFF');
    setPrez3('#66FFFF');
    setPrez4('#66FFFF');
    setPrez5('#66FFFF');
    setPrez6('#66FFFF');
    setResult1('?');
    setResult2('?');
    setResult3('?');
    setTarget(target+1);
  }
  
  // DOES EVERYTHING IMPORTANT
  const doeverything = value => {
    if(value == '?')
        return;
    // Deleting values
    if(value == 'X')
    {
        if(currentNums[0] == gumba[gumba.length-1] && used1)
        {
            setUsed1(false);
            setPrez1('#66FFFF');
        }
        else if(currentNums[1] == gumba[gumba.length-1] && used2)
        {    
            setUsed2(false);
            setPrez2('#66FFFF');
        }
        else if(currentNums[2] == gumba[gumba.length-1] && used3)
        {    
            setUsed3(false);
            setPrez3('#66FFFF');
        }
        else if(currentNums[3] == gumba[gumba.length-1] && used4)
        {    
            setUsed4(false);
            setPrez4('#66FFFF');
        }
        else if(result1 == gumba[gumba.length-1] && used5)
        {    
            setUsed5(false);
            setPrez5('#66FFFF');
        }
        else if(result2 == gumba[gumba.length-1] && used6)
        {    
            setUsed6(false);
            setPrez6('#66FFFF');
        }

        setGumba(gumba.slice(0,gumba.length-1));
        
        // Changes results from default values
        if(gumba.length <= 3)
        {
            setResult1('?');
        }
        else if(gumba.length <= 6)
        {
            setResult2('?');
        }
        else if(gumba.length <= 9)
        {
            setResult3('?');
        }
        return;
    }
    // Adding values
    if(gumba.length <= 8)
    {
        if((value == '+' || value == '*' || value == '-') && (gumba.length == 1 || gumba.length == 4 || gumba.length == 7))
        {
            setGumba([...gumba,value]);
        }
        else if(!(value == '+' || value == '*' || value == '-') && !(gumba.length == 1 || gumba.length == 4 || gumba.length == 7))
        {
            if(value == currentNums[0] && used1 == false)
            {
                setGumba([...gumba,value]);
                setUsed1(true);
                setPrez1('#666FFF');
            }
            else if(value == currentNums[1] && used2 == false)
            {
                setGumba([...gumba,value]);
                setUsed2(true);
                setPrez2('#666FFF');
            }
            else if(value == currentNums[2] && used3 == false)
            {
                setGumba([...gumba,value]);
                setUsed3(true);
                setPrez3('#666FFF');
            }
            else if(value == currentNums[3] && used4 == false)
            {
                setGumba([...gumba,value]);
                setUsed4(true);
                setPrez4('#666FFF');
            }
            else if(value == result1 && used5 == false)
            {
                setGumba([...gumba,value]);
                setUsed5(true);
                setPrez5('#666FFF');
            }
            else if(value == result2 && used6 == false)
            {
                setGumba([...gumba,value]);
                setUsed6(true);
                setPrez6('#666FFF');
            }
            else return;
        }
        // CALCULATE RESULTS
        if(gumba[6] != null && gumba[7] != null && result3 == '?')
        {
            if(gumba[7] == '+')
            {
                setResult3(gumba[6] + value);
                if(gumba[6] + value == target)
                    Alert.alert(
                        'Level Complete!',
                        'On to the next one...',
                        [
                          {text: 'Continue', onPress: () => moncherry()},
                        ],
                        { 
                          cancelable: true 
                        }
                      );
            }
            if(gumba[7] == '-')
            {
                setResult3(gumba[6] - value);
                if(gumba[6] - value == target)
                    Alert.alert(
                        'Level Complete!',
                        'On to the next one...',
                        [
                          {text: 'Continue', onPress: () => moncherry()},
                        ],
                        { 
                          cancelable: true 
                        }
                      );
            }
            if(gumba[7] == '*')
            {
                setResult3(gumba[6] * value);
                if(gumba[6] * value == target)
                    Alert.alert(
                        'Level Complete!',
                        'On to the next one...',
                        [
                          {text: 'Continue', onPress: () => moncherry()},
                        ],
                        { 
                          cancelable: true 
                        }
                      );
            }
        }
        else if(gumba[3] != null && gumba[4] != null && result2 == '?')
        {
            if(gumba[4] == '+')
                setResult2(gumba[3] + value);
            if(gumba[4] == '-')
                setResult2(gumba[3] - value);
            if(gumba[4] == '*')
                setResult2(gumba[3] * value);
        }
        else if(gumba[0] != null && gumba[1] != null && result1 == '?')
        {
            if(gumba[1] == '+')
                setResult1(gumba[0] + value);
            if(gumba[1] == '-')
                setResult1(gumba[0] - value);
            if(gumba[1] == '*')
                setResult1(gumba[0] * value);
        }
    }
    
  }
  
  const literallyeverything = value => {
    doeverything(value);
  }

  const poop = StyleSheet.create( {
    numbersPressed1: {
        backgroundColor: prez1,
        width: "15%",
        height: "20%",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        justifyContent: 'center',
        shadowColor: '#171717',
        shadowOffset: {width: 2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5
    },
    numbersPressed2: {
        backgroundColor: prez2,
        width: "15%",
        height: "20%",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        justifyContent: 'center',
        shadowColor: '#171717',
        shadowOffset: {width: 2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5
    },
    numbersPressed3: {
        backgroundColor: prez3,
        width: "15%",
        height: "20%",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        justifyContent: 'center',
        shadowColor: '#171717',
        shadowOffset: {width: 2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5
    },
    numbersPressed4: {
        backgroundColor: prez4,
        width: "15%",
        height: "20%",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        justifyContent: 'center',
        shadowColor: '#171717',
        shadowOffset: {width: 2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5
    },
    numbersPressed5: {
        backgroundColor: prez5,
        width: "15%",
        height: "20%",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        justifyContent: 'center',
        shadowColor: '#171717',
        shadowOffset: {width: 2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5
    },
    numbersPressed6: {
        backgroundColor: prez6,
        width: "15%",
        height: "20%",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        justifyContent: 'center',
        shadowColor: '#171717',
        shadowOffset: {width: 2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5
    }
  })

  return (
    
    <View style={styles.basics}>
      {/* Top third; target number */}
      <View style={{backgroundColor: "#FFF",alignContent:"center",justifyContent:"center",flex:1}}>
        <Text style={styles.labels}>Target Number:</Text>
        <Text style={{fontSize:50,fontWeight:"bold",textAlign:"center"}}>{target}</Text>
      </View>

      {/* Middle third; grid */}
      <View style={styles.container}>
        <Pressable style={styles.placeholders}>
          <Text style={styles.labels}>{gumba[0]}</Text>
        </Pressable>
        <Pressable style={styles.placeholders}>
          <Text style={styles.labels}>{gumba[1]}</Text>
        </Pressable>
        <Pressable style={styles.placeholders}>
          <Text style={styles.labels}>{gumba[2]}</Text>
        </Pressable>
          <Text style={styles.labels}>=</Text>
        <Pressable style={styles.placeholders}>
          <Text style={styles.labels}>{result1}</Text>
        </Pressable>
        <Text style={styles.br}/>
        <Pressable style={styles.placeholders}>
          <Text style={styles.labels}>{gumba[3]}</Text>
        </Pressable>
        <Pressable style={styles.placeholders}>
          <Text style={styles.labels}>{gumba[4]}</Text>
        </Pressable>
        <Pressable style={styles.placeholders}>
          <Text style={styles.labels}>{gumba[5]}</Text>
        </Pressable>
        <Text style={styles.labels}>=</Text>
        <Pressable style={styles.placeholders}>
          <Text style={styles.labels}>{result2}</Text>
        </Pressable>
        <Text style={styles.br}/>
        <Pressable style={styles.placeholders}>
          <Text style={styles.labels}>{gumba[6]}</Text>
        </Pressable>
        <Pressable style={styles.placeholders}>
          <Text style={styles.labels}>{gumba[7]}</Text>
        </Pressable>
        <Pressable style={styles.placeholders}>
          <Text style={styles.labels}>{gumba[8]}</Text>
        </Pressable>
        <Text style={styles.labels}>=</Text>
        <Pressable style={styles.placeholders}>
          <Text style={styles.labels}>{result3}</Text>
        </Pressable>
      </View>

      {/* Bottom third; user input */}
        <View style={styles.container}>
          {/* First 4 numbers */}
          <Pressable onPress={() => literallyeverything(currentNums[0])}
            style={poop.numbersPressed1}>
            <Text style={styles.labels}>{currentNums[0]}</Text>
          </Pressable>
          <Pressable onPress={() => literallyeverything(currentNums[1])}
            style={poop.numbersPressed2}>
            <Text style={styles.labels}>{currentNums[1]}</Text>
          </Pressable>
          <Pressable onPress={() => literallyeverything(currentNums[2])}
            style={poop.numbersPressed3}>
            <Text style={styles.labels}>{currentNums[2]}</Text>
          </Pressable>
          <Pressable onPress={() => literallyeverything(currentNums[3])}
            style={poop.numbersPressed4}>
            <Text style={styles.labels}>{currentNums[3]}</Text>
          </Pressable>

          {/* Results */}
          <Pressable onPress={() => literallyeverything(result1)}
            style={poop.numbersPressed5}>
            <Text style={styles.labels}>{result1}</Text>
          </Pressable>
          <Pressable onPress={() => literallyeverything(result2)}
            style={poop.numbersPressed6}>
            <Text style={styles.labels}>{result2}</Text>
          </Pressable>

          {/* Signs */}
          <Text style={styles.br}/>
          <Pressable onPress={() => doeverything('+')}
            style={({pressed}) => pressed ? styles.numbersPressed : styles.numbers}>
            <Text style={styles.labels}>+</Text>
          </Pressable>
          <Pressable onPress={() => doeverything('-')}
            style={({pressed}) => pressed ? styles.numbersPressed : styles.numbers}>
            <Text style={styles.labels}>-</Text>
          </Pressable>
          <Pressable onPress={() => doeverything('*')}
            style={({pressed}) => pressed ? styles.numbersPressed : styles.numbers}>
            <Text style={styles.labels}>*</Text>
          </Pressable>
          <Pressable onPress={() => doeverything('/')}
            style={({pressed}) => pressed ? styles.numbersPressed : styles.numbers}>
            <Text style={styles.labels}>/</Text>
          </Pressable>
          {/* DELETE */}
          <Pressable onPress={() => doeverything('X')}
            style={({pressed}) => pressed ? styles.numbersPressed : styles.numbers}>
            <MaterialIcons style={{alignSelf:'center'}} name='backspace' size={24} >
            </MaterialIcons>
          </Pressable>
          {/* 2 other numbers */}
          <Text style={styles.labels}/>
          
      </View>
    </View>
  );
}