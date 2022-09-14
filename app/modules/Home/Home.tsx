import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {CustomButton} from '../../components';
import {Strings} from '../../constants';
import type {AppDispatch, RootState} from '../../redux';
import {decrement, increment} from '../../redux';
import {styles} from './Styles';

const Home = () => {
  const count = useSelector<RootState, number>(state => state?.counter?.value);
  const dispatch = useDispatch<AppDispatch>();
  const [steps, setSteps] = useState<number>(0);

  return (
    <View style={styles.container}>
      <CustomButton
        title={Strings.increment}
        onPress={() => dispatch(increment(steps))}
      />
      <Text>{count}</Text>
      <CustomButton
        title={Strings.decrement}
        onPress={() => dispatch(decrement(steps))}
      />
      <TextInput
        style={styles.textInput}
        value={steps}
        onChangeText={e => setSteps(e)}
        placeholder={Strings.type}
      />
    </View>
  );
};

export default Home;
