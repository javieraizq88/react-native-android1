import { Text, View } from "react-native"
import { globalStyles } from "../../../config/theme/global.styles"
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native"
import { RootStackParams } from "../../routes/StackNavigation"
import { useEffect } from "react"

export const ProductScreen = () => {
    const navigation = useNavigation();

    const params = useRoute<RouteProp<RootStackParams, 'Product'>>().params;

useEffect(() => {
    navigation.setOptions({
        title: params.name
    })
})

    return (
        <View style={globalStyles.container} >
            <Text style={{ marginBottom: 10, fontSize: 30 }} >    {params.id} - {params.name}</Text>

        </View>
    )
}