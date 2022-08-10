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
    containerDark: {
        flex: 1,
        backgroundColor: '#333',
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
    basicsDark: {
        backgroundColor: '#333',
        flex: 1,
        flexDirection: 'column'
    },
    topThird: {
        backgroundColor: "#FFF",
        alignContent:"center",
        justifyContent:"center",
        flex:1
    },
    topThirdDark: {
        backgroundColor: "#333",
        alignContent:"center",
        justifyContent:"center",
        flex:1
    },
    target: {
        fontSize:50,
        fontWeight:"bold",
        textAlign:"center"
    },
    targetDark: {
        fontSize:50,
        fontWeight:"bold",
        textAlign:"center",
        color: 'white'
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
    infoBut: {
        position:'absolute',
        top:0,
        right:0,
        padding: 20
    },
    infoButDark: {
        position:'absolute',
        top:0,
        right:0,
        padding: 20,
        color: 'white'
    },
    closeModal: {

    },
    refreshBut: {
        alignSelf:'center', 
        paddingBottom:20,
    },
    refreshButDark: {
        alignSelf:'center', 
        paddingBottom:20,
        color: 'white'
    },
    deleteBut: {
        alignSelf:'center'
    },
    deleteButDark: {
        alignSelf:'center',
        color: 'white'
    },
    numbersPressed: {
        backgroundColor: '#444',
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
        backgroundColor: '#666',
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
    scrollBG: {
        backgroundColor:"#FFF"
    },
    scrollBGDark: {
        backgroundColor:"#333"
    },
    levels: {
        backgroundColor: '#BBB',
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
    levelsDark: {
        backgroundColor: '#111',
        width: "15%",
        height: "200%",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        justifyContent: 'center',
        shadowColor: '#CCC',
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
    levelsContainerDark: {
        flex:1,
        padding: 35,
        backgroundColor: '#333',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        alignContent: 'center',
        flexWrap: 'wrap',
        flexGrow: 1
    },
    numbers2: {
        backgroundColor: '#BBB',
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
    numbers2Dark: {
        backgroundColor: '#111',
        width: "50%",
        height: "10%",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        justifyContent: 'center',
        shadowColor: '#CCC',
        shadowOffset: {width: 2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5
    },
    titleNums: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 60
    },
    titleNumsDark: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 60,
        color: 'white'
    },
    modalBG: {
        paddingTop: 40,
        backgroundColor: '#fff',
        height: '100%'
    },
    modalBGDark: {
        paddingTop: 40,
        backgroundColor: '#333',
        height: '100%'
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
    placeholdersDark: {
        backgroundColor: '#111',
        width: "15%",
        height: "20%",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        justifyContent: 'center',
        shadowColor: '#CCC',
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
    labelsDark: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white'
    },
    break: {
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    breakDark: {
        borderBottomColor: 'white',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    br: {
        height: 10,
        width: "100%"
    },
    easterEgg: {
        backgroundColor: '#FFFFFF', 
        width: "20%", 
        height: "10%", 
        justifyContent: 'center'
    },
    easterEggDark: {
        backgroundColor: '#333', 
        width: "20%", 
        height: "10%", 
        justifyContent: 'center'
    },
    homeNums: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        alignContent: 'center',
        flexWrap: 'wrap',
        height: '30%'
    },
    homeNumsDark: {
        flex: 1,
        backgroundColor: '#333',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        alignContent: 'center',
        flexWrap: 'wrap',
        height: '30%'
    },
    eggText: {
        alignSelf: 'center',
        height:'20%'
    },
    eggTextDark: {
        alignSelf: 'center',
        height:'20%',
        color: 'white'
    },
    homeBottom: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'column',
        alignContent: 'center',
        flexWrap: 'wrap',
        height: '70%'
    },
    homeBottomDark: {
        backgroundColor: '#333',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'column',
        alignContent: 'center',
        flexWrap: 'wrap',
        height: '70%'
    },
    });

  export default styles;
  