import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { StatusBar, LogBox } from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { createDrawerNavigator, DrawerContentComponentProps } from '@react-navigation/drawer';

import { Header } from '../components/Header';

import { Account } from '../screens/Account';
import { All } from '../screens/All';
import { Search } from '../screens/Search';
import { SingIn } from '../screens/SingIn';
import { Home } from '../screens/Home';
import { Feed } from '../screens/Feed';
import { Configuration } from '../screens/Configuration';
import { VideoScreen } from '../screens/VideoScreen';

// import { TouchableOpacity } from 'react-native-gesture-handler';

import { setLogin } from '../store/modules/auth/actions';

import { Container, Image, Pelicula, ContentItem, ItemMenu, Text } from './styles';

import { left_menu } from '../assets';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

const showMenu: Array<Object> = [
  'Conta',
  'Início',
  'Pesquisa',
  'Todos capítulo',
  'Todos episódios',
  'Configuração',
]

export default function App() {
  const reduxDispatch = useDispatch();
  
  const isSingIn:boolean = useSelector((state): any => state.auth.logged);

  function Home_StackNavigator(props) {
    return (
      <Stack.Navigator
        initialRouteName="First"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen 
          name="First" 
          component={Feed}
          
        />
        <Stack.Screen 
          name="video" 
          component={VideoScreen} 
          options={{
            headerShown: false,
            
          }}
        />
      </Stack.Navigator>
    )
  }

  function customDrawerContent(props: DrawerContentComponentProps, dispatch: any){
    return (
      <Container>
        <Image source={left_menu} resizeMode="cover" />
        <Pelicula />
        <ContentItem>
          {props.state.routes.map((item, index) => {
            if(!(showMenu.filter(res => res === item.name).length > 0)) {
              return <></>
            }

            return ( 
              <ItemMenu key={index+"_item_menu"} onPress={() => props.navigation.navigate(item.name)}>
                <Text>{item.name}</Text>
              </ItemMenu>
            )
          })}
          <ItemMenu onPress={() => reduxDispatch(setLogin(false))}>
            <Text>Sair</Text>
          </ItemMenu>
        </ContentItem>
      </Container>
    )
  }

  return (
    <SafeAreaProvider>
      <StatusBar />
      {isSingIn ? (
        <NavigationContainer>
          <Drawer.Screen name="Conta" component={Account} /> 
          <Drawer.Navigator 
            initialRouteName="Início" 
            drawerContent={customDrawerContent}
            screenOptions={{
              header: () => <Header />,
            }}>
            <Drawer.Screen 
              name="Início" 
              component={Home_StackNavigator} 
              options={{
                headerShown: false
              }} 
            /> 
            <Drawer.Screen name="Pesquisa" component={Search} /> 
            <Drawer.Screen name="Todos capítulo" component={All} /> 
            <Drawer.Screen name="Todos episódios" component={All} /> 
            <Stack.Screen name="Configuração" component={Configuration} />
          </Drawer.Navigator>
        </NavigationContainer>
      ): (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen 
              name="Home" 
              component={Home} 
              options={{ 
                headerShown: false,
              }} 
            />
            <Stack.Screen 
              name="SingIn" 
              component={SingIn} 
              options={{ 
                headerShown: false,
              }} 
            />
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </SafeAreaProvider>
  );
}