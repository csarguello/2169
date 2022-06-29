import { StyleSheet } from "react-native";

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
      backgroundColor: '#fff',
      flex: 1,
      flexDirection: 'column'
    },
    container2: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'column',
        alignContent: 'center',
        flexWrap: 'wrap'
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
    levels: {
        backgroundColor: '#66FFFF',
        width: "15%",
        height: "200%",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        justifyContent: 'center',
        shadowColor: '#171717',
        shadowOffset: {width: 2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5,
      },
      levelsContainer: {
        flex:1,
        padding: 35,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        alignContent: 'center',
        flexWrap: 'wrap',
        flexGrow: 1
      },
    numbers2: {
        backgroundColor: '#66FFFF',
        width: "50%",
        height: "10%",
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

  export default styles;
  