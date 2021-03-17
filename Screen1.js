import React, { Component } from 'react'
import { View, Button, TextInput } from 'react-native'

export default class Screen1 extends Component {
constructor(props) {
        super(props);
        this.state={
            username:''
        };
    }
    render() 
    {
        return 
        (
            <View style={{flex:1, justifyContent:'center', padding:15 }}>

                <TextInput placeholder="Enter your Username"
                    style={{borderBottomWidth:1, borderBottomColor:'#ff0000', marginbottom:20 }}
                    onChangeText={username=>this.setState({username})}>
                </TextInput>
                <TextInput placeholder="Enter your Password"
                    style={{borderBottomWidth:1, borderBottomColor:'#ff0000', marginbottom:20 }}
                    onChangeText={username=>this.setState({username})}>
                </TextInput>
                
                <Button title="Submit" 
                    onPress={()=>this.props.navigation.navigate('Screen2', {Parameter1:this.state.username})}>
                </Button>

            </View>
        )
    }
}
