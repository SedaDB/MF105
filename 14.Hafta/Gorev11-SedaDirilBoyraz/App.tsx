import'react-native-gesture-handler';
import { LogBox } from 'react-native';
import 'react-native-reanimated';
import App from './src/app'; 
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function Root() {
  return (
    <SafeAreaProvider>
      <App />
    </SafeAreaProvider>
  );
}