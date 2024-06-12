import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image } from "react-native"
import React, { useEffect, useState } from "react"
import { Link } from "expo-router"
import { getPokemon,Pokemon } from "../api/pokeapi"
import { Ionicons } from '@expo/vector-icons'

const Page = () => {
    const [pokemon, setPokemon] = useState<Pokemon[]>([]);

    useEffect(() => {
        const load = async () => {
            const result = await getPokemon();
            setPokemon(result);
        }
        load();
    }, [])
    return (
        <ScrollView>
            {pokemon.map((poke) => (
                <Link key={poke.id} href={`/(pokemon)/${poke.id}`} asChild>
                    <TouchableOpacity>
                        <View style={styles.item}>
                            <Image source={{ uri: poke.image }} style={styles.preview}/>
                            <Text style={styles.itemText}>{poke.name}</Text>
                            <Ionicons name="chevron-forward" size={24} color="black" />
                        </View>
                    </TouchableOpacity>
                </Link>
            ))}
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    item: {
        padding: 10,
        height: 100,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    itemText: {
        fontSize: 18,
        textTransform: 'capitalize',
        flex: 1,
    },
    preview: {
        width: 100,
        height: 100,
    }
})

export default Page