import { Stack } from "expo-router";
//import { useRouter, useSegments } from 'expo-router'
//import { useEffect } from "react";


export default function RootLayout() {
  /*
  const router = useRouter();
  const segments = useSegments();

  const isLoggedIn = false;

  useEffect(()=>{
    const inAuthScreen = segments[0] === 'login';

    if(!isLoggedIn && !inAuthScreen) {
      //delay redirect until after mount
      const timeout = setTimeout(()=>{
        router.replace('/login')
      },0);

      return () => clearTimeout(timeout);
    }
  },[segments, isLoggedIn, router])

  */

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{headerShown: false, headerTitleAlign: 'center'}}/>
    </Stack>
  );
}
