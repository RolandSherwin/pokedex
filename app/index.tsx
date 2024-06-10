import { View, Text } from "react-native"
import React from "react"
import { Link } from "expo-router"

const Page = () => {
    return (
        <View>
            <Link href={"/(pokemon)/test"}>
                <Text>Hellogg</Text>
            </Link>
        </View>
    )
}

export default Page