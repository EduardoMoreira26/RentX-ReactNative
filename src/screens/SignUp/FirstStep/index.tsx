import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { StatusBar, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native'
import * as Yup from 'yup';
import { BackButton } from '../../../components/BackButton';
import { Bullet } from '../../../components/Bullet';
import { Button } from '../../../components/Button';
import { Input } from '../../../components/Input';
import { PasswordInput } from '../../../components/PasswordInput';
import theme from '../../../styles/theme';

import { Container, Header, SubTitle, Title, Form, Steps, FormTitle } from './styles';

export function FirstStep() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    function handleBack() {
        navigation.goBack();
    }

    async function handleSignIn() {
        try {
            const schema = Yup.object().shape({
                email: Yup.string()
                    .required('E-mail obrigatório')
                    .email('Digite um e-mail válido'),
                password: Yup.string().required('Senha obrigatória'),
            });

            await schema.validate({ email, password });
            Alert.alert('Sucesso', 'Login realizado com sucesso');
        } catch (error) {
            if (error instanceof Yup.ValidationError) {
                Alert.alert('Erro', error.message);
            } else {
                Alert.alert('Erro', 'Erro ao realizar login');
            }
        }
    }

    return (
        <KeyboardAvoidingView behavior='position' enabled>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <Container>
                    <StatusBar
                        barStyle="dark-content"
                        backgroundColor="transparent"
                        translucent
                    />
                    <Header>
                        <BackButton onPress={handleBack} />
                        <Steps>

                            <Bullet active />
                            <Bullet />
                        </Steps>
                    </Header>

                    <Title>Crie sua{'\n'}conta</Title>
                    <SubTitle>
                        Faça seu cadastro de{'\n'}
                        forma rápida e facil
                    </SubTitle>

                    <Form>
                        <FormTitle>1. Dados</FormTitle>
                        <Input
                            iconName="user"
                            placeholder="Nome"
                            keyboardType="email-address"
                            autoCorrect={false}
                            autoCapitalize="none"
                            value={email}
                            onChangeText={setEmail}
                        />
                        <Input
                            iconName="mail"
                            placeholder="E-mail"
                            keyboardType="email-address"
                            autoCorrect={false}
                            autoCapitalize="none"
                            value={email}
                            onChangeText={setEmail}
                        />
                        <Input
                            iconName="credit-card"
                            placeholder="CNH"
                            keyboardType="email-address"
                            autoCorrect={false}
                            autoCapitalize="none"
                            value={email}
                            onChangeText={setEmail}
                        />
                    </Form>
                    <Button
                        title='Próximo'
                        onPress={handleSignIn}
                        enabled={true}
                        loading={false}
                    />
                </Container>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}
