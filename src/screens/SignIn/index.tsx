import React from 'react'
import { Container, Header, SubTitle, Title } from './styles';
import { StatusBar } from 'react-native'

export function SignIn() {
    return (
        <Container>
            <StatusBar
                barStyle="dark-content"
                backgroundColor="transparent"
                translucent
            />
            <Header>
                <Title>Estamos{'\n'}quase lá</Title>
            </Header>
            <SubTitle>
                Faça seu login para começar{'\n'}
                uma experiência incrível.
            </SubTitle>
        </Container>
    )
}
