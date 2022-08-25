import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { 
    Container,
    ItemContainer,
    Item,
    Image,
    Title,
    Price
} from './styles';

export default function Fitness(){
    const navigation = useNavigation();
    
    return(
        <Container
            
            showsVerticalScrollIndicator={false}
        >
            <ItemContainer>
                <Item onPress={() => navigation.navigate('DetailFitness')}>
                    <Image
                        source={require('../../Images/imgFitness1.png')}
                    />
                    <Title numberOfLines={1}>Conjunto camouflage degradê</Title>
                    <Price>R$ 229,99</Price>
                </Item>

                <Item>
                    <Image
                        source={require('../../Images/imgFitness2.png')}
                    />
                    <Title numberOfLines={1}>Conjunto Vibration</Title>
                    <Price>R$ 154,99</Price>
                </Item>
            </ItemContainer>
            
            <ItemContainer>
                <Item>
                    <Image
                        source={require('../../Images/imgFitness3.png')}
                    />
                    <Title numberOfLines={1}>Conjunto tonic</Title>
                    <Price>R$ 209,99</Price>
                </Item>

                <Item>
                    <Image
                        source={require('../../Images/imgFitness4.png')}
                    />
                    <Title numberOfLines={1}>Conjunto alquimia</Title>
                    <Price>R$ 139,99</Price>
                </Item>
            </ItemContainer>

            <ItemContainer>
                <Item>
                    <Image
                        source={require('../../Images/imgFitness5.png')}
                    />
                    <Title numberOfLines={1}>Calça legging by bike</Title>
                    <Price>R$ 97,99</Price>
                </Item>

                <Item>
                    <Image
                        source={require('../../Images/imgFitness6.png')}
                    />
                    <Title numberOfLines={1}>Calça legging invincible</Title>
                    <Price>R$ 109,99</Price>
                </Item>
            </ItemContainer>

        </Container>
    );
}