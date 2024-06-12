import { View, Text } from "react-native"
import React, { useEffect, useState } from "react"
import { Link } from "expo-router"
import { getPokemon,Pokemon } from "../api/pokeapi"

const Page = () => {
    const [pokemon, setPokemon] = useState<Pokemon[]>([]);

    useEffect(() => {
        const load = async () => {
            const result = await getPokemon();
            console.log("result: ",result);
            
        }
        load();
    }, [])
    return (
        <View>
            <Link href={"/(pokemon)/test"}>
                <Text>Hellogg</Text>
            </Link>
        </View>
    )
}

export default Page