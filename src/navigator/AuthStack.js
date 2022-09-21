import { createStackNavigator } from '@react-navigation/stack';
import AuthScreen from '../pages/AuthScreen';
import OnboardingCarousel from '../pages/OnboardingCarousel';

const Auth = createStackNavigator();

export default function AuthStack() {
  return (
    <Auth.Navigator
      screenOptions={{
        headerShown: false,
        animationTypeForReplace: 'pop',
      }}
    >
      <Auth.Screen name="Auth" component={AuthScreen} />
      <Auth.Screen name="OnboardingCarousel" component={OnboardingCarousel} />
    </Auth.Navigator>
  );
}
