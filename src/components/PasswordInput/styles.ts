import styled, {css} from "styled-components/native";

interface Props {
    isFocused: boolean;
}

export const Container = styled.View`
    flex-direction: row;
`;

export const IconContainer = styled.View<Props>`
    height: 56px;
    width: 56px;
    justify-content: center;
    align-items: center;
    margin-right: 2px;

    background-color: ${({ theme }) => theme.colors.background_secondary};

    ${({isFocused, theme}) => isFocused && css`
        border-bottom-width: 2px;};
        border-color: ${theme.colors.main};
    `}
`;

export const InputText = styled.TextInput<Props>`
    flex: 1;

    background-color: ${({ theme }) => theme.colors.background_secondary};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.primary_400};
    font-size: 15px;

    padding: 0 23px;

    ${({isFocused, theme}) => isFocused && css`
        border-bottom-width: 2px;};
        border-color: ${theme.colors.main};
    `}
`;