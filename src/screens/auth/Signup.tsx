import React, {Component} from 'react';
import {Text, Alert, View, StyleSheet} from 'react-native';
import * as yup from 'yup';
import {Formik} from 'formik';
import {Button, TextInput} from 'react-native-paper';
import {login, setUserInfo} from '../../redux/slices/auth';
import {useAppDispatch} from '../../redux/store/hookType';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack/lib/typescript/src/types';

//SignUp Page with formik Validation
const SignUp = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const inputStyle = {
    marginTop: 20,
  };
  const onSignUp = (values: {
    name: string;
    email: string;
    password: string;
  }) => {
    try {
      setTimeout(() => {
        console.log(values.name, values.email, values.password);
        //const data =axios.post("url",{body}) if used axios
        dispatch(login('Token'));
        dispatch(
          setUserInfo({name: 'Ishaq Ali', email: 'johari9292@gmail.com'}),
        );
      }, 1000);
    } catch (error) {
      console.log('error', error);
    }
  };
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      onSubmit={values => onSignUp(values)}
      validationSchema={yup.object().shape({
        name: yup.string().required('Please, provide your name!'),
        email: yup.string().email().required(),
        password: yup
          .string()
          .min(4)
          .max(10, 'Password should not excced 10 chars.')
          .required(),
      })}>
      {({
        values,
        handleChange,
        errors,
        setFieldTouched,
        touched,
        isValid,
        handleSubmit,
      }) => (
        <View style={styles.formContainer}>
          <Text style={styles.text}>
            Let join us! Sign up to create Account
          </Text>
          <TextInput
            value={values.name}
            style={inputStyle}
            label="Name"
            mode="outlined"
            onChangeText={handleChange('name')}
            onBlur={() => setFieldTouched('name')}
            placeholder="Enter Name"
          />
          {touched.name && errors.name && (
            <Text style={{fontSize: 12, color: '#FF0D10'}}>{errors.name}</Text>
          )}
          <TextInput
            value={values.email}
            style={inputStyle}
            label="E-mail"
            mode="outlined"
            onChangeText={handleChange('email')}
            onBlur={() => setFieldTouched('email')}
            placeholder="E-mail"
          />
          {touched.email && errors.email && (
            <Text style={{fontSize: 12, color: '#FF0D10'}}>{errors.email}</Text>
          )}
          <TextInput
            value={values.password}
            style={inputStyle}
            label="Password"
            mode="outlined"
            onChangeText={handleChange('password')}
            placeholder="Enter Password"
            onBlur={() => setFieldTouched('password')}
            secureTextEntry={true}
          />
          {touched.password && errors.password && (
            <Text style={{fontSize: 12, color: '#FF0D10'}}>
              {errors.password}
            </Text>
          )}
          <Button
            style={styles.button}
            mode="contained"
            disabled={!isValid}
            onPress={handleSubmit}>
            Submit
          </Button>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    padding: 50,
  },
  button: {
    marginTop: 30,
  },
  text: {
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 40,
    marginBottom: 10,
    // fontSize: 30,
  },
});

export default SignUp;
