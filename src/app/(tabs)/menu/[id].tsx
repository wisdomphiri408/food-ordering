import products from '@/assets/data/products';
import Button from '@/src/components/Button';
import { defaultPizzaImage } from '@/src/components/ProductListItem';
import { Stack, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';


const sizes = ['S', 'M', 'L', 'XL', 'X'];

export default function ProductDetailsScreen() {
  const { id } = useLocalSearchParams();
  const [ selectedSize, setSelectedSize ] = useState('M');
  const product = products.find((p) => p.id.toString() === id);

  if (!product) return <Text>Product not found</Text>

  const addToCart = () => {
    alert('added to cart, size: ' + selectedSize)
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{title: product.name, headerTitleAlign: 'center'}} />
        <Image 
          source={{uri: product.image || defaultPizzaImage}} 
          style={styles.image}
        />
        <Text>Select size</Text>
        <View style={styles.sizes}>
            {sizes.map(size => (
              <Pressable
                onPress={() => setSelectedSize(size)} 
                key={size} 
                style={[styles.size, 
                  {backgroundColor: selectedSize === size ? 'gainsboro':'white'}]}>
                <Text 
                  style={[styles.sizeText, 
                    {color: selectedSize === size ? "black" : "gray"}]}
                >
                  {size}
                </Text>
              </Pressable>
            )
          )}
        </View>

        <Text style={styles.price}>${ product.price }</Text>
        <Button onPress={addToCart} text='Add to Cart'/>
    </View>
  )
};

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'white',
    flex: 1,
    padding: 10,
  },
  image: {
    width: '100%',
    aspectRatio:1,
    resizeMode: 'contain',
  },
  sizes:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  size: {
    backgroundColor: 'gainsboro',
    width: 50,
    aspectRatio: 1,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sizeText: {
    fontSize: 20,
    fontWeight: '500',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 'auto'
  },
});
