import React, { useState } from "react"
import { Text, View } from "react-native"
import { globalStyles } from "../../theme/global.styles"

import Icon from 'react-native-vector-icons/Ionicons'

import { FAB } from 'react-native-paper'

interface Props {
    label: string,
    onPress?: () => void,
    onLongPress?: () => void,
}


export const CounterM3Screen = ({ label, onLongPress, onPress }: Props) => {

    const [count, setCount] = useState(10)

    return (
        <View style={globalStyles.container} >
            <Text style={globalStyles.title} >{count}</Text>

           <Icon
                  name='accessibility-outline'
               size={ 45 }
              /> 

            <FAB
                label="+1"
                style={globalStyles.fab}
                onPress={() => setCount(count + 1)}
                onLongPress={() => setCount(0)}
                icon={'add'}
            />
        </View>
    )
}


