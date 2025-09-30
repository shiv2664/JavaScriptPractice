// import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
// import { Stack } from 'expo-router';
// import { StatusBar } from 'expo-status-bar';
// import 'react-native-reanimated';

// import { useColorScheme } from '@/hooks/use-color-scheme';

import { View, Text, Image, ImageBackground } from 'react-native';
const logoImage = require("../assets/images/icon.png");

export default function RootLayout() {

  return <View style={{ flex: 1, backgroundColor: "plum", padding: 50 }}>
    <View style={{ height: 50, width: 300, backgroundColor: "purple" }}>
      <Text style={{ color: "white" }}>Hello World </Text>
    </View>
    <View style={{ height: 50, width: 300, backgroundColor: "red" }}>
      {/* <Image
        source={{ uri: "https://picsum.photos/300" }}
        style={{ width: 150, height: 150 }} /> */}
      <ImageBackground
        source={{ uri: "https://picsum.photos/300" }}
        style={{ width: 150, height: 150 }}>
        <Image source={logoImage} style={{ width: 50, height: 50 }} />
      </ImageBackground>

    </View>
  </View>
}

// export const unstable_settings = {
//   anchor: '(tabs)',
// };


// const colorScheme = useColorScheme();

// return (
//   <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
//     <Stack>
//       <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
//       <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
//     </Stack>
//     <StatusBar style="auto" />
//   </ThemeProvider>
// );

