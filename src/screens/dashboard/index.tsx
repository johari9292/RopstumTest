import React from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
import styled from 'styled-components';
import {useAppDispatch} from '../../redux/store/hookType';
import {logout} from '../../redux/slices/auth';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <StyledContainer>
      <Text style={styles.text}>Number of Registered Car:</Text>
      <Text style={styles.highlight}>50</Text>
      <Button
        style={styles.button}
        mode="outlined"
        onPress={() => navigation.navigate('CarsList')}>
        Go to Car CRUD Screen!
      </Button>
      <StyledButton mode="contained" onPress={() => dispatch(logout())}>
        Logout
      </StyledButton>
    </StyledContainer>
  );
};
const StyledContainer = styled(View)`
  height: 100%;
`;
const StyledButton = styled(Button)`
  position: absolute;
  bottom: 5px;
  right: 10px;
`;

const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 30,
  },
  text: {
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 10,
    // fontSize: 30,
  },
  button: {
    marginHorizontal: 40,
    marginTop: 100,
  },
});
export default Dashboard;
