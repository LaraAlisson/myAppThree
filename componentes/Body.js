import React from 'react';
import {Text, View, Image, ScrollView } from 'react-native';


const Body = () => {
    return(
        <View>
            <View style = {{flex:1, flexDirection:'row',flexWrap:'wrap',padding:30}}>
           <Image
                style={{width:190, height:190}}
                source={{
                    uri: 'https://img.freepik.com/vetores-gratis/vetor-de-gradiente-de-logotipo-colorido-de-passaro_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.87170709.1707609600&semt=ais' }}

            /> 
           <Text style = {{color:'#f2f7f7',width:'100%', paddingRight:3,paddingLeft:3, paddingTop:20,fontSize:15, textAlign:'justify'}}>Lorem ipsum pulvinar adipiscing eget lacinia proin interdum porttitor egestas molestie, quam venenatis pulvinar luctus enim ipsum nostra nam luctus nulla, in metus vestibulum quam imperdiet ac a dolor aliquam. urna ultricies molestie curae potenti venenatis hendrerit habitasse auctor rhoncus, nisl morbi pulvinar condimentum varius lorem ut ipsum euismod hac, eget potenti eu libero vehicula ornare sociosqu ipsum. sodales porttitor viverra eget sapien egestas suscipit lacus egestas ac porta augue, tempus consequat dui fames curabitur imperdiet curae tempus sagittis arcu class, molestie aliquet laoreet quisque venenatis congue est ut primis ultricies. </Text>
        </View>
        <View style = {{flex:1, flexDirection:'row',flexWrap:'wrap',padding:30}}>
           <Image
                style={{width:190, height:190}}
                source={{
                    uri: 'https://img.freepik.com/vetores-gratis/vetor-de-gradiente-de-logotipo-colorido-de-passaro_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.87170709.1707609600&semt=ais' }}

            /> 
           <Text style = {{color:'#f2f7f7',width:'100%', paddingRight:3,paddingLeft:3, paddingTop:20,fontSize:15, textAlign:'justify'}}>Lorem ipsum pulvinar adipiscing eget lacinia proin interdum porttitor egestas molestie, quam venenatis pulvinar luctus enim ipsum nostra nam luctus nulla, in metus vestibulum quam imperdiet ac a dolor aliquam. urna ultricies molestie curae potenti venenatis hendrerit habitasse auctor rhoncus, nisl morbi pulvinar condimentum varius lorem ut ipsum euismod hac, eget potenti eu libero vehicula ornare sociosqu ipsum. sodales porttitor viverra eget sapien egestas suscipit lacus egestas ac porta augue, tempus consequat dui fames curabitur imperdiet curae tempus sagittis arcu class, molestie aliquet laoreet quisque venenatis congue est ut primis ultricies. </Text>
        </View>
        </View>
    );
}

export default Body;