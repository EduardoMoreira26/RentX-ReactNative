import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import { Feather } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';



import { Container, IconContainer, InputText } from './styles';
import { TextInputProps } from 'react-native';

interface Props extends TextInputProps {
    iconName: React.ComponentProps<typeof Feather>['name']
}


export function PasswordInput({ iconName, ...rest }: Props) {
    const theme = useTheme();
    const [isPasswordVisivle, setIsPasswordVisible] = useState(true);

    function handlePasswordVisibleChange() {
        setIsPasswordVisible(prevState => !prevState);
    }

    return (
        <Container>
            <IconContainer>

                <Feather
                    name={iconName}
                    size={24}
                    color={theme.colors.text_detail}
                />
            </IconContainer>

            <InputText
                secureTextEntry={isPasswordVisivle}
                {...rest}
            />

            <BorderlessButton onPress={handlePasswordVisibleChange}>
                <IconContainer>

                    <Feather
                        name={isPasswordVisivle ? "eye" : "eye-off"}
                        size={24}
                        color={theme.colors.text_detail}
                    />
                </IconContainer>
            </BorderlessButton>
        </Container>
    )


}
