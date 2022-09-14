import React, {FC} from 'react';
import {Button} from 'react-native';
import {type CustomButtonProps} from '../components';

const CustomButton: FC<CustomButtonProps> = ({onPress, title}) => {
  return <Button title={title} onPress={onPress} />;
};

export default CustomButton;
