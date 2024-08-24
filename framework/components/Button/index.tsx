import { TouchableOpacity, Text, GestureResponderEvent } from 'react-native';
import { styles } from './styles';

interface ButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
}

export const Button: React.FC<ButtonProps> = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};