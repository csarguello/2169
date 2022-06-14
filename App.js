import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Pressable } from 'react-native';
import React, { useState } from 'react';



export default function App() {
  const [gumba, setGumba] = useState([]);
  const [result1, setResult1] = useState();
  const [result2, setResult2] = useState();
  const [result3, setResult3] = useState();

  const givens = [1,1,1,1];
  const signs = [1,1,1];
  function randomizeNums() {
    for (let i = 0; i < 4; i ++){
      givens[i] = Math.floor(Math.random() * 10) + 1
    }
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
      else if (signs[i] == 1)
      {
          target = target - givens[i+1];
      }
      else if (signs[i] == 1)
      {
          target = target * givens[i+1];
      }
    }
    return target;
  }


  randomizeSigns();
  const numList = randomizeNums();
  const targetNum = calculateTarget();
  const [target, setTarget] = useState(targetNum);
  const [currentNums, setCurrentNums] = useState(numList);

  // DOES EVERYTHING IMPORTANT
  const doeverything = value => {
    if(gumba.length <= 8)
    {
      
       if((value == '+' || value == '*' || value == '-') && (gumba.length == 1 || gumba.length == 4 || gumba.length == 7))
        setGumba([...gumba,value]);
      else if(!(value == '+' || value == '*' || value == '-') && !(gumba.length == 1 || gumba.length == 4 || gumba.length == 7))
        setGumba([...gumba,value]);
    }
    if(value == 'X')
        setGumba(gumba.slice(0,gumba.length-1));
    if(gumba[0] != null && gumba[1] != null && gumba[2] != null)
    {
      if(gumba[1] == '+')
        setResult1(gumba[0] + gumba[2]);
      if(gumba[1] == '-')
        setResult1(gumba[0] - gumba[2]);
      if(gumba[1] == '*')
        setResult1(gumba[0] * gumba[2]);
    }
    if(gumba[3] != null && gumba[4] != null && gumba[5] != null)
    {
      if(gumba[4] == '+')
        setResult2(gumba[3] + gumba[5]);
      if(gumba[4] == '-')
        setResult2(gumba[3] - gumba[5]);
      if(gumba[4] == '*')
        setResult2(gumba[3] * gumba[5]);
    }
    if(gumba[6] != null && gumba[7] != null && gumba[8] != null)
    {
      if(gumba[7] == '+')
        setResult3(gumba[6] + gumba[8]);
      if(gumba[7] == '-')
        setResult3(gumba[6] - gumba[8]);
      if(gumba[7] == '*')
        setResult3(gumba[6] * gumba[8]);
    }
    if(result3 == target)
      alert("Congratulations");
    
  }
  
  return (
    
    <View style={styles.basics}>
      {/* Top third; target number */}
      <View style={{alignContent:"center",justifyContent:"center",flex:1}}>
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
          <Pressable onPress={() => doeverything(currentNums[0])}
            style={({pressed}) => pressed ? styles.numbersPressed : styles.numbers}>
            <Text style={styles.labels}>{currentNums[0]}</Text>
          </Pressable>
          <Pressable onPress={() => doeverything(currentNums[1])}
            style={({pressed}) => pressed ? styles.numbersPressed : styles.numbers}>
            <Text style={styles.labels}>{currentNums[1]}</Text>
          </Pressable>
          <Pressable onPress={() => doeverything(currentNums[2])}
            style={({pressed}) => pressed ? styles.numbersPressed : styles.numbers}>
            <Text style={styles.labels}>{currentNums[2]}</Text>
          </Pressable>
          <Pressable onPress={() => doeverything(currentNums[3])}
            style={({pressed}) => pressed ? styles.numbersPressed : styles.numbers}>
            <Text style={styles.labels}>{currentNums[3]}</Text>
          </Pressable>

          {/* Results */}
          <Pressable
            style={({pressed}) => pressed ? styles.numbersPressed : styles.numbers}>
            <Text style={styles.labels}>{result1}</Text>
          </Pressable>
          <Pressable
            style={({pressed}) => pressed ? styles.numbersPressed : styles.numbers}>
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
            <Text style={styles.labels}>X</Text>
          </Pressable>
          {/* 2 other numbers */}
          <Text style={styles.labels}/>
          
          <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignContent: 'center',
    flexWrap: 'wrap'
  },
  basics: {
    flex: 1,
    flexDirection: 'column'
  },
  numbers: {
    backgroundColor: '#66FFFF',
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
  numbersPressed: {
    backgroundColor: '#666FFF',
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
  placeholders: {
    backgroundColor: '#CCCCCC',
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
  labels: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20
  },
  br: {
    height: 10,
    width: "100%"
  }
});
