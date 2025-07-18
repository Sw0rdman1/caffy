import { supabase } from '@/lib/supabase'
import { router } from 'expo-router'
import { Formik } from 'formik'
import { Alert, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import * as Yup from 'yup'
import EmailInput from '../Input/EmailInput'
import PasswordInput from '../Input/PasswordInput'

const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(6, 'Min 6 characters').required('Required'),
})

const LoginForm = () => {

    const handleLogin = async (values: { email: string; password: string }) => {
        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email: values.email,
                password: values.password,
            });

            if (error) {
                console.log('Login failed:', error);
                Alert.alert(error.message);
            } else {
                console.log('Login successful:', data);
                router.replace('/(tabs)');
            }
        } catch (e) {
            console.error('Unexpected login error:', e);
        }
    }

    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={LoginSchema}
            onSubmit={handleLogin}
        >
            {({ handleChange, handleSubmit, values, errors, touched }) => (
                <>
                    <EmailInput
                        value={values.email}
                        onChangeText={handleChange('email')}
                    />
                    <Text style={styles.error}>
                        {touched.email && errors.email ? errors.email : ''}
                    </Text>

                    <PasswordInput
                        value={values.password}
                        onChangeText={handleChange('password')}
                    />
                    <Text style={styles.error}>
                        {touched.password && errors.password ? errors.password : ''}
                    </Text>

                    <TouchableOpacity style={styles.button} onPress={() => handleSubmit()}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                </>
            )}
        </Formik>
    )
}

export default LoginForm

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5EFE6',
        paddingHorizontal: 30,
        alignItems: 'center',
    },
    title: {
        fontSize: RFValue(60),
        fontFamily: 'AmaticSCBold',
        color: '#5C4A3D',
        marginBottom: 40,
        marginTop: 30,
    },
    button: {
        backgroundColor: '#E09252',
        paddingVertical: 5,
        paddingHorizontal: 50,
        borderRadius: 30,
        marginTop: 10,
        marginBottom: 20,
        width: '80%',
    },
    buttonText: {
        fontSize: RFValue(30),
        color: '#F5EFE6',
        fontFamily: 'AmaticSCBold',
        textAlign: 'center',
    },
    linkText: {
        color: '#E09252',
        fontSize: RFValue(20),
        fontFamily: 'AmaticSCBold',
        textDecorationLine: 'underline',
    },
    error: {
        color: '#B0413E',
        fontSize: RFValue(16),
        fontFamily: 'AmaticSCBold',
        marginBottom: 8,
        alignSelf: 'flex-start',
        marginLeft: '10%',
        height: 30,
    },
})
