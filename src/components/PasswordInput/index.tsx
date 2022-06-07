import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import { Feather } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';

import { Container, IconContainer, InputText } from './styles';
import { TextInputProps } from 'react-native';

interface Props extends TextInputProps {
    iconName: React.ComponentProps<typeof Feather>['name']
    value?: string
}

export function PasswordInput({ iconName, value, ...rest }: Props) {
    const theme = useTheme();
    const [isPasswordVisivle, setIsPasswordVisible] = useState(true);

    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);

    function handleInputFocus() {
        setIsFocused(true);
    }

    function handleInputBlur() {
        setIsFocused(false);
        setIsFilled(!!value);
    }

    function handlePasswordVisibleChange() {
        setIsPasswordVisible(prevState => !prevState);
    }

    return (
        <Container>
            <IconContainer isFocused={isFocused}>
                <Feather
                    name={iconName}
                    size={24}
                    color={isFocused || isFilled ? theme.colors.main : theme.colors.text_detail}
                />
            </IconContainer>

            <InputText
                secureTextEntry={isPasswordVisivle}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                isFocused={isFocused}
                {...rest}
            />

            <BorderlessButton onPress={handlePasswordVisibleChange}>
                <IconContainer isFocused={isFocused}>
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