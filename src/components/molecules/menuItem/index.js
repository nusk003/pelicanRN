import React from 'react'
import {Text,View,StyleSheet} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import PropTypes from 'prop-types'
import { BLUE, GREY, STANDARD_MARGIN, STANDARD_PADDING, FONT_SIZE_M } from '../../settings';

const MenuItem = ({title,icon,active}) => {

    const styles = StyleSheet.create({
        containerIcon : {
            padding : STANDARD_PADDING,
            backgroundColor : active ? BLUE : 'white',
            width : widthPercentageToDP(15),
            height : widthPercentageToDP(15),
            borderRadius : widthPercentageToDP(10),
            justifyContent : 'center',
            alignItems : 'center',
            shadowColor: BLUE,
            shadowOffset: {
                width: 8,
                height: 8,
            },
            shadowOpacity: 0.46,
            shadowRadius: 11.14,
    
            elevation:25,
        },
        container : {
            alignItems : 'center',
            marginHorizontal : STANDARD_MARGIN
        },
        textStyle : {
            color : active ? BLUE : GREY,
            fontSize : FONT_SIZE_M,
            marginTop : widthPercentageToDP(1)
        }
    })


    return(
        <View style = {styles.container} >
        <View style = {styles.containerIcon} >  
            {icon}
        </View>
        <Text style = {styles.textStyle} >{title}</Text>
        </View>
    )
}



export default MenuItem