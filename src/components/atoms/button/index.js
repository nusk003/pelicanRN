import {View,TouchableOpacity} from 'react-native'
import { STANDARD_PADDING, LIGHT_BLUE, STANDARD_MARGIN, BLUE } from '../../settings';
import React from 'react'
import { widthPercentageToDP } from 'react-native-responsive-screen';

export default (props) => {
    return(
        <TouchableOpacity {...props} >
            <View style = {{alignItems : 'center',padding : STANDARD_PADDING,backgroundColor : BLUE,margin : STANDARD_MARGIN,borderRadius : widthPercentageToDP(2)}} >
                {props.children}
            </View>
        </TouchableOpacity>
    )
}