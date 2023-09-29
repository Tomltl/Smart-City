import React, {useRef} from 'react';
import {
  TouchableOpacity,
  Animated,
  Easing,
  StyleSheet,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const CustomCheckbox = ({checked, onChange}) => {
  const scaleValue = useRef(new Animated.Value(0)).current;

  const toggleCheckbox = () => {
    const toValue = checked ? 0 : 1;
    Animated.timing(scaleValue, {
      toValue,
      duration: 300,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
    onChange();
  };

  const animatedScale = scaleValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0.8, 1.2, 1],
  });

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={toggleCheckbox}
      style={{flexDirection: 'row', alignItems: 'center'}}>
      <Animated.View
        style={[
          styles.checkbox,
          {
            // transform: [{scale: animatedScale}],
            backgroundColor: checked ? 'white' : 'transparent',
          },
        ]}>
        {checked && <Icon name="check" size={16} color="#2D2D2D" />}
      </Animated.View>
      <Text style={styles.label}>{checked ? 'Crée votre compte signifie que vous êtes d’accord avec notre politique de confidentialité' : 'Crée votre compte signifie que vous êtes d’accord avec notre politique de confidentialité'}</Text>
    </TouchableOpacity>
  );
};

export default CustomCheckbox;

const styles = StyleSheet.create({
  checkbox: {
    width: 23,
    height: 23,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },

  label:{
    fontSize:12, 
    fontWeight:400, 
    color:'white', 
    marginLeft:10,
    width: 250,
  }
});