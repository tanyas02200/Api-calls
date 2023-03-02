import { StyleSheet } from "react-native";
import COLORS from "./COLORS";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
rcorners2 :{
    marginTop:10,
    margin:10,
    borderRadius: 30,
    borderWidth: 2 ,
    borderColor :COLORS.primary,
    padding: 20,
    height: 70,
    opacity:1,
   
  },
  input:{
    color:COLORS.dark,
    flex:1,
    fontSize:18,
},
});
export default styles;