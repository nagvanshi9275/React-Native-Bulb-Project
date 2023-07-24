


















//import React from "react";

//import {View, Text} from "react-native";

//function App() {
  //return (
  //  <View>
   //   <Text children="Hello, world!" />
   // </View>
  //);
//}

//export default App


import React, {useState} from "react";


import { View,  StyleSheet, Button, Image } from "react-native";

function APP() {

  const[Render, setRender] = useState(false)
  

  function Click(){
 //console.log("click")

 setRender(pre => !pre)



  }

  return(
<View style={styles.tanay}>

<Image
          source={Render? "https://i.postimg.cc/SRqnwgNG/led1-removebg-preview.png":
          
          "https://i.postimg.cc/y62KCT1d/native-bulb-removebg-preview.png"}
          style={styles.image}
        />


<View style={styles.baap}>
<Button
title="Click"
onPress={Click}
/>

</View>

</View>

  )
  
}

const styles = StyleSheet.create({

image : {

height: 260,
marginTop: 10,
width: 400

},

baap: {
height: 20,
width: 80,
borderRadius: 20,
marginLeft: 160,
marginTop: 10


},

tanay: {

backgroundColor: "black",
height: 1000




}







})






export default APP









