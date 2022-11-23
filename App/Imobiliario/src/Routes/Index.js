import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from '../pages/welcome/Index'
import SignIn from '../pages/signIn/Index'
import Perfil from '../pages/perfil';
import Fundos from '../pages/fundo/Index';
import Cadastre from '../pages/cadastro';
const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false}}/>
            <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false}}/>
            <Stack.Screen name="Perfil" component={Perfil}/>
            <Stack.Screen name="Cadastre" component={Cadastre}/>
            <Stack.Screen name="Fundos" component={Fundos}/>
        </Stack.Navigator>
    )
}