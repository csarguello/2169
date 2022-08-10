import { StyleSheet, Text, View, Pressable, Alert } from 'react-native';
import React, { useState, useContext } from 'react';
import styles from "../styles/stylesheet";
import { MaterialIcons,AntDesign } from '@expo/vector-icons';
import { UserContext } from '../userContext';

export default function Endless () {
  const [mainLogicArray, setmainLogicArray] = useState([]);
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
  const [prez1, setPrez1] = useState('#666');
  const [prez2, setPrez2] = useState('#666');
  const [prez3, setPrez3] = useState('#666');
  const [prez4, setPrez4] = useState('#666');
  const [prez5, setPrez5] = useState('#666');
  const [prez6, setPrez6] = useState('#666');
  const {theme, setTheme} = useContext(UserContext);

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
    setmainLogicArray([]);
    setTemp([]);
    setUsed1(false);
    setUsed2(false);
    setUsed3(false);
    setUsed4(false);
    setUsed5(false);
    setUsed6(false);
    setPrez1('#666');
    setPrez2('#666');
    setPrez3('#666');
    setPrez4('#666');
    setPrez5('#666');
    setPrez6('#666');
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
  const doeverything = (value,btnTracker) => {
    if(value == '?')
        return;
    // Deleting values
    if(value == 'X')
    {
        if(currentNums[0] == mainLogicArray[mainLogicArray.length-1] && used1 && temp[temp.length-1] == 1)
        {
            setUsed1(false);
            setPrez1('#666');
            setTemp(temp.slice(0,temp.length-1));
        }
        else if(currentNums[1] == mainLogicArray[mainLogicArray.length-1] && used2 && temp[temp.length-1] == 2)
        {    
            setUsed2(false);
            setPrez2('#666');
            setTemp(temp.slice(0,temp.length-1));
        }
        else if(currentNums[2] == mainLogicArray[mainLogicArray.length-1] && used3 && temp[temp.length-1] == 3)
        {    
            setUsed3(false);
            setPrez3('#666');
            setTemp(temp.slice(0,temp.length-1));
        }
        else if(currentNums[3] == mainLogicArray[mainLogicArray.length-1] && used4 && temp[temp.length-1] == 4)
        {    
            setUsed4(false);
            setPrez4('#666');
            setTemp(temp.slice(0,temp.length-1));
        }
        else if(result1 == mainLogicArray[mainLogicArray.length-1] && used5 && temp[temp.length-1] == 5)
        {    
            setUsed5(false);
            setPrez5('#666');
            setTemp(temp.slice(0,temp.length-1));
        }
        else if(result2 == mainLogicArray[mainLogicArray.length-1] && used6 && temp[temp.length-1] == 6)
        {    
            setUsed6(false);
            setPrez6('#666');
            setTemp(temp.slice(0,temp.length-1));
        }

        setmainLogicArray(mainLogicArray.slice(0,mainLogicArray.length-1));
        
        if(mainLogicArray.length <= 3)
        {
            setResult1('?');
        }
        else if(mainLogicArray.length <= 6)
        {
            setResult2('?');
        }
        else if(mainLogicArray.length <= 9)
        {
            setResult3('?');
        }
        return;
    }
    // Adding values
    if(mainLogicArray.length <= 8)
    {
        if((value == '+' || value == '*' || value == '-') && (mainLogicArray.length == 1 || mainLogicArray.length == 4 || mainLogicArray.length == 7))
        {
            setmainLogicArray([...mainLogicArray,value]);
        }
        else if(!(value == '+' || value == '*' || value == '-') && !(mainLogicArray.length == 1 || mainLogicArray.length == 4 || mainLogicArray.length == 7))
        {
            if(value == currentNums[0] && used1 == false && btnTracker == 1)
            {
                setmainLogicArray([...mainLogicArray,value]);
                setUsed1(true);
                setPrez1('#444');
                if(temp.length <= 6)
                    setTemp([...temp,1]);
            }
            else if(value == currentNums[1] && used2 == false && btnTracker == 2)
            {
                setmainLogicArray([...mainLogicArray,value]);
                setUsed2(true);
                setPrez2('#444');
                if(temp.length <= 6)
                    setTemp([...temp,2]);
            }
            else if(value == currentNums[2] && used3 == false && btnTracker == 3)
            {
                setmainLogicArray([...mainLogicArray,value]);
                setUsed3(true);
                setPrez3('#444');
                if(temp.length <= 6)
                    setTemp([...temp,3]);
            }
            else if(value == currentNums[3] && used4 == false && btnTracker == 4)
            {
                setmainLogicArray([...mainLogicArray,value]);
                setUsed4(true);
                setPrez4('#444');
                if(temp.length <= 6)
                    setTemp([...temp,4]);
            }
            else if(value == result1 && used5 == false && btnTracker == 5)
            {
                setmainLogicArray([...mainLogicArray,value]);
                setUsed5(true);
                setPrez5('#444');
                if(temp.length <= 6)
                    setTemp([...temp,5]);
            }
            else if(value == result2 && used6 == false && btnTracker == 6)
            {
                setmainLogicArray([...mainLogicArray,value]);
                setUsed6(true);
                setPrez6('#444');
                if(temp.length <= 6)
                    setTemp([...temp,6]);
            }
            else return;
        }
        // CALCULATE RESULTS
        if(mainLogicArray[6] != null && mainLogicArray[7] != null && result3 == '?')
        {
            if(mainLogicArray[7] == '+')
            {
                setResult3(mainLogicArray[6] + value);
                if(mainLogicArray[6] + value == target)
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
            if(mainLogicArray[7] == '-')
            {
                setResult3(mainLogicArray[6] - value);
                if(mainLogicArray[6] - value == target)
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
            if(mainLogicArray[7] == '*')
            {
                setResult3(mainLogicArray[6] * value);
                if(mainLogicArray[6] * value == target)
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
        else if(mainLogicArray[3] != null && mainLogicArray[4] != null && result2 == '?')
        {
            if(mainLogicArray[4] == '+')
                setResult2(mainLogicArray[3] + value);
            if(mainLogicArray[4] == '-')
                setResult2(mainLogicArray[3] - value);
            if(mainLogicArray[4] == '*')
                setResult2(mainLogicArray[3] * value);
        }
        else if(mainLogicArray[0] != null && mainLogicArray[1] != null && result1 == '?')
        {
            if(mainLogicArray[1] == '+')
                setResult1(mainLogicArray[0] + value);
            if(mainLogicArray[1] == '-')
                setResult1(mainLogicArray[0] - value);
            if(mainLogicArray[1] == '*')
                setResult1(mainLogicArray[0] * value);
        }
    }
    
  }
  
  const literallyeverything = (value,btnTracker) => {
    doeverything(value,btnTracker);
  }

  const pressedStyles = StyleSheet.create( {
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
    numbersPressed1Dark: {
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
      <View style={theme == 'light' ? styles.topThird : styles.topThirdDark}>
        <AntDesign style={theme == 'light' ? styles.infoBut : styles.infoButDark} name='questioncircleo' onPress={() => Alert.alert(
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
        <MaterialIcons style={theme == 'light' ? styles.refreshBut : styles.refreshButDark} name='refresh' size={24} onPress={() => newGame()}>
        </MaterialIcons>
        <Text style={theme == 'light' ? styles.labels : styles.labelsDark}>Target Number:</Text>
        <Text style={theme == 'light' ? styles.target : styles.targetDark}>{target}</Text>
      </View>

      {/* Middle third; grid */}
      <View style={theme == 'light' ? styles.container : styles.containerDark}>
        <Pressable style={theme == 'light' ? styles.placeholders : styles.placeholdersDark}>
          <Text style={theme == 'light' ? styles.labels : styles.labelsDark}>{mainLogicArray[0]}</Text>
        </Pressable>
        <Pressable style={theme == 'light' ? styles.placeholders : styles.placeholdersDark}>
          <Text style={theme == 'light' ? styles.labels : styles.labelsDark}>{mainLogicArray[1]}</Text>
        </Pressable>
        <Pressable style={theme == 'light' ? styles.placeholders : styles.placeholdersDark}>
          <Text style={theme == 'light' ? styles.labels : styles.labelsDark}>{mainLogicArray[2]}</Text>
        </Pressable>
          <Text style={theme == 'light' ? styles.labels : styles.labelsDark}>=</Text>
        <Pressable style={theme == 'light' ? styles.placeholders : styles.placeholdersDark}>
          <Text style={theme == 'light' ? styles.labels : styles.labelsDark}>{result1}</Text>
        </Pressable>
        <Text style={styles.br}/>
        <Pressable style={theme == 'light' ? styles.placeholders : styles.placeholdersDark}>
          <Text style={theme == 'light' ? styles.labels : styles.labelsDark}>{mainLogicArray[3]}</Text>
        </Pressable>
        <Pressable style={theme == 'light' ? styles.placeholders : styles.placeholdersDark}>
          <Text style={theme == 'light' ? styles.labels : styles.labelsDark}>{mainLogicArray[4]}</Text>
        </Pressable>
        <Pressable style={theme == 'light' ? styles.placeholders : styles.placeholdersDark}>
          <Text style={theme == 'light' ? styles.labels : styles.labelsDark}>{mainLogicArray[5]}</Text>
        </Pressable>
        <Text style={theme == 'light' ? styles.labels : styles.labelsDark}>=</Text>
        <Pressable style={theme == 'light' ? styles.placeholders : styles.placeholdersDark}>
          <Text style={theme == 'light' ? styles.labels : styles.labelsDark}>{result2}</Text>
        </Pressable>
        <Text style={styles.br}/>
        <Pressable style={theme == 'light' ? styles.placeholders : styles.placeholdersDark}>
          <Text style={theme == 'light' ? styles.labels : styles.labelsDark}>{mainLogicArray[6]}</Text>
        </Pressable>
        <Pressable style={theme == 'light' ? styles.placeholders : styles.placeholdersDark}>
          <Text style={theme == 'light' ? styles.labels : styles.labelsDark}>{mainLogicArray[7]}</Text>
        </Pressable>
        <Pressable style={theme == 'light' ? styles.placeholders : styles.placeholdersDark}>
          <Text style={theme == 'light' ? styles.labels : styles.labelsDark}>{mainLogicArray[8]}</Text>
        </Pressable>
        <Text style={theme == 'light' ? styles.labels : styles.labelsDark}>=</Text>
        <Pressable style={theme == 'light' ? styles.placeholders : styles.placeholdersDark}>
          <Text style={theme == 'light' ? styles.labels : styles.labelsDark}>{result3}</Text>
        </Pressable>
      </View>

      {/* Bottom third; user input */}
        <View style={theme == 'light' ? styles.container : styles.containerDark}>
          {/* First 4 numbers */}
          <Pressable onPress={() => literallyeverything(currentNums[0],1)}
            style={pressedStyles.numbersPressed1}>
            <Text style={theme == 'light' ? styles.labels : styles.labelsDark}>{currentNums[0]}</Text>
          </Pressable>
          <Pressable onPress={() => literallyeverything(currentNums[1],2)}
            style={pressedStyles.numbersPressed2}>
            <Text style={theme == 'light' ? styles.labels : styles.labelsDark}>{currentNums[1]}</Text>
          </Pressable>
          <Pressable onPress={() => literallyeverything(currentNums[2],3)}
            style={pressedStyles.numbersPressed3}>
            <Text style={theme == 'light' ? styles.labels : styles.labelsDark}>{currentNums[2]}</Text>
          </Pressable>
          <Pressable onPress={() => literallyeverything(currentNums[3],4)}
            style={pressedStyles.numbersPressed4}>
            <Text style={theme == 'light' ? styles.labels : styles.labelsDark}>{currentNums[3]}</Text>
          </Pressable>

          {/* Results */}
          <Pressable onPress={() => literallyeverything(result1,5)}
            style={pressedStyles.numbersPressed5}>
            <Text style={theme == 'light' ? styles.labels : styles.labelsDark}>{result1}</Text>
          </Pressable>
          <Pressable onPress={() => literallyeverything(result2,6)}
            style={pressedStyles.numbersPressed6}>
            <Text style={theme == 'light' ? styles.labels : styles.labelsDark}>{result2}</Text>
          </Pressable>

          {/* Signs */}
          <Text style={styles.br}/>
          <Pressable onPress={() => doeverything('+')}
            style={({pressed}) => pressed ? styles.numbersPressed : styles.numbers}>
            <Text style={theme == 'light' ? styles.labels : styles.labelsDark}>+</Text>
          </Pressable>
          <Pressable onPress={() => doeverything('-')}
            style={({pressed}) => pressed ? styles.numbersPressed : styles.numbers}>
            <Text style={theme == 'light' ? styles.labels : styles.labelsDark}>-</Text>
          </Pressable>
          <Pressable onPress={() => doeverything('*')}
            style={({pressed}) => pressed ? styles.numbersPressed : styles.numbers}>
            <Text style={theme == 'light' ? styles.labels : styles.labelsDark}>*</Text>
          </Pressable>
          {/* DELETE */}
          <Pressable onPress={() => doeverything('X')}
            style={({pressed}) => pressed ? styles.numbersPressed : styles.numbers}>
            <MaterialIcons style={theme == 'light' ? styles.deleteBut : styles.deleteButDark} name='backspace' size={24} >
            </MaterialIcons>
          </Pressable>
          {/* 2 other numbers */}
          <Text style={styles.labels}/>
          
      </View>
    </View>
  );
}

