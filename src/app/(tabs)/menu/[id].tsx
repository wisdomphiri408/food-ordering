import { Stack, useLocalSearchParams } from 'expo-router';
import { Text, View, } from 'react-native';

export default function ProductDetailsScreen() {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Stack.Screen options={{title: "details " + id}} />
        <Text>Product Details page: { id }</Text>
    </View>
  )
};
