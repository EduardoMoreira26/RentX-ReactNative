import { View, Text } from 'react-native'
import React from 'react'
import { Container } from "./styles"

interface Props {
    active?: boolean
}

export function Bullet({active = false}: Props) {
    return (
        <Container active={active} />
    )
}