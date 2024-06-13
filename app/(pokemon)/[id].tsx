import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams, useNavigation } from 'expo-router'
import { Pokemon, getPokemonDetails } from '../../api/pokeapi';

const Page = () => {
  const {id} = useLocalSearchParams<{ id: string}>();
  const [details, setDetails] = useState<Pokemon>();
  const navigation = useNavigation();

  useEffect(() => {
    const load = async () => {
        const details = await getPokemonDetails(id!);
        setDetails(details);
        navigation.setOptions({ title: details.name.charAt(0).toUpperCase() + details.name.slice(1)});
    };
    load();
  }, [id]);
  return (
    <View style={{padding: 10}}>
      {/* only if details is defined execute the rest */}
      { details && (
        <>
          <View style={[styles.card, {alignItems: 'center'}]}>
            <Image source={{ uri: details.sprites.front_default }} style={{width: 200, height: 200}}/>
            <Text style={styles.name}>
              #{details.id} {details.name} 
            </Text>
          </View>
           
          <View style={styles.card}>
            <Text style={{ fontSize: 16, fontWeight: 'bold'}}>Stats:</Text>
            {details.stats.map((stat: any) => (
                <Text key={stat.stat.name}>{stat.stat.name}: {stat.base_stat}</Text>
            ))}
          </View>
        </>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        padding: 10,
        margin: 10,
        elevation: 1,
        gap: 4,
        shadowColor: '#00000',
        shadowOpacity: 0.1,
        shadowRadius: 1,
        shadowOffset: {
            width: 0,
            height: 1
        
        }
    },
    name: {
        fontSize: 20,
        textTransform: 'capitalize',
        fontWeight: 'bold'
    }
})

export default Page