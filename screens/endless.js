import { StyleSheet, Text, View, Pressable, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import styles from "../styles/stylesheet";
import { MaterialIcons,AntDesign } from '@expo/vector-icons';

export default function Endless () {
  const [gumba, setGumba] = useState([]);
  const [temp, setTemp] = useState([]);
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

  const givens = [1,1,1,1];
  const signs = [1,1,1];

  function randomizeNums() {
    givens[0] = Math.floor(Math.random() * 3) + 1;
    givens[1] = Math.floor(Math.random() * 2) + 4;
    givens[2] = Math.floor(Math.random() * 2) + 6;
    givens[3] = Math.floor(Math.random() * 3) + 8;
    return givens;
  }

  function randomizeSigns() {
    for (let i = 0; i < 3; i ++){
      signs[i] = Math.floor(Math.random() * 3) + 1;
    }
  }

  function calculateTarget() {
    let target = givens[0];
    for (let i = 0; i < 3; i++){
      if (signs[i] == 1)
      {
          target = target + givens[i+1];
      }
      else if (signs[i] == 2)
      {
          target = target - givens[i+1];
      }
      else if (signs[i] == 3)
      {
          target = target * givens[i+1];
      }
    }
    return target;
  }

  const newGame = () => {
    randomizeSigns();
    let numList = randomizeNums();
    const targetNum = calculateTarget();
    numList = shuffle(numList);
    setTarget(targetNum);
    setCurrentNums(numList);
    setGumba([]);
    setTemp([]);
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
  }

  function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

  randomizeSigns();
  let numList = randomizeNums();
  const targetNum = calculateTarget();
  numList = shuffle(numList);
  const [target, setTarget] = useState(targetNum);
  const [currentNums, setCurrentNums] = useState(numList);


  
  // DOES EVERYTHING IMPORTANT
  const doeverything = (value,cheddar) => {
    if(value == '?')
        return;
    // Deleting values
    if(value == 'X')
    {
        if(currentNums[0] == gumba[gumba.length-1] && used1 && temp[temp.length-1] == 1)
        {
            setUsed1(false);
            setPrez1('#66FFFF');
            setTemp(temp.slice(0,temp.length-1));
        }
        else if(currentNums[1] == gumba[gumba.length-1] && used2 && temp[temp.length-1] == 2)
        {    
            setUsed2(false);
            setPrez2('#66FFFF');
            setTemp(temp.slice(0,temp.length-1));
        }
        else if(currentNums[2] == gumba[gumba.length-1] && used3 && temp[temp.length-1] == 3)
        {    
            setUsed3(false);
            setPrez3('#66FFFF');
            setTemp(temp.slice(0,temp.length-1));
        }
        else if(currentNums[3] == gumba[gumba.length-1] && used4 && temp[temp.length-1] == 4)
        {    
            setUsed4(false);
            setPrez4('#66FFFF');
            setTemp(temp.slice(0,temp.length-1));
        }
        else if(result1 == gumba[gumba.length-1] && used5 && temp[temp.length-1] == 5)
        {    
            setUsed5(false);
            setPrez5('#66FFFF');
            setTemp(temp.slice(0,temp.length-1));
        }
        else if(result2 == gumba[gumba.length-1] && used6 && temp[temp.length-1] == 6)
        {    
            setUsed6(false);
            setPrez6('#66FFFF');
            setTemp(temp.slice(0,temp.length-1));
        }

        setGumba(gumba.slice(0,gumba.length-1));
        
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
            if(value == currentNums[0] && used1 == false && cheddar == 1)
            {
                setGumba([...gumba,value]);
                setUsed1(true);
                setPrez1('#666FFF');
                if(temp.length <= 6)
                    setTemp([...temp,1]);
            }
            else if(value == currentNums[1] && used2 == false && cheddar == 2)
            {
                setGumba([...gumba,value]);
                setUsed2(true);
                setPrez2('#666FFF');
                if(temp.length <= 6)
                    setTemp([...temp,2]);
            }
            else if(value == currentNums[2] && used3 == false && cheddar == 3)
            {
                setGumba([...gumba,value]);
                setUsed3(true);
                setPrez3('#666FFF');
                if(temp.length <= 6)
                    setTemp([...temp,3]);
            }
            else if(value == currentNums[3] && used4 == false && cheddar == 4)
            {
                setGumba([...gumba,value]);
                setUsed4(true);
                setPrez4('#666FFF');
                if(temp.length <= 6)
                    setTemp([...temp,4]);
            }
            else if(value == result1 && used5 == false && cheddar == 5)
            {
                setGumba([...gumba,value]);
                setUsed5(true);
                setPrez5('#666FFF');
                if(temp.length <= 6)
                    setTemp([...temp,5]);
            }
            else if(value == result2 && used6 == false && cheddar == 6)
            {
                setGumba([...gumba,value]);
                setUsed6(true);
                setPrez6('#666FFF');
                if(temp.length <= 6)
                    setTemp([...temp,6]);
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
                        'Congratulations!',
                        'Start a new game?',
                        [
                          {text: 'Yes', onPress: () => newGame()},
                          {text: 'No', style:'cancel'},
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
                        'Congratulations!',
                        'Start a new game?',
                        [
                          {text: 'Yes', onPress: () => newGame()},
                          {text: 'No', style:'cancel'},
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
                        'Congratulations!',
                        'Start a new game?',
                        [
                          {text: 'Yes', onPress: () => newGame()},
                          {text: 'No', style:'cancel'},
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
  
  const literallyeverything = (value,cheddar) => {
    doeverything(value,cheddar);
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
        <AntDesign style={{position:'absolute', top:0, right:0, padding: 20}} name='questioncircleo' onPress={() => Alert.alert(
                        'How to Play',
                        '- Each number can only be used once \n- Each number must be used \n- Signs can be used any amount of times',
                        [
                          {text: 'Got it'},
                        ],
                        { 
                          cancelable: true 
                        }
                      )} size={24} >
        </AntDesign>
        <MaterialIcons style={{alignSelf:'center', paddingBottom:20}} name='refresh' size={24} onPress={() => newGame()}>
        </MaterialIcons>
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
          <Pressable onPress={() => literallyeverything(currentNums[0],1)}
            style={poop.numbersPressed1}>
            <Text style={styles.labels}>{currentNums[0]}</Text>
          </Pressable>
          <Pressable onPress={() => literallyeverything(currentNums[1],2)}
            style={poop.numbersPressed2}>
            <Text style={styles.labels}>{currentNums[1]}</Text>
          </Pressable>
          <Pressable onPress={() => literallyeverything(currentNums[2],3)}
            style={poop.numbersPressed3}>
            <Text style={styles.labels}>{currentNums[2]}</Text>
          </Pressable>
          <Pressable onPress={() => literallyeverything(currentNums[3],4)}
            style={poop.numbersPressed4}>
            <Text style={styles.labels}>{currentNums[3]}</Text>
          </Pressable>

          {/* Results */}
          <Pressable onPress={() => literallyeverything(result1,5)}
            style={poop.numbersPressed5}>
            <Text style={styles.labels}>{result1}</Text>
          </Pressable>
          <Pressable onPress={() => literallyeverything(result2,6)}
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

