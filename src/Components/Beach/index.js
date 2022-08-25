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

export default function Beach(){
    const navigation = useNavigation();
    
    return(
        <Container
            
            showsVerticalScrollIndicator={false}
        >
            <ItemContainer>
                <Item onPress={() => navigation.navigate('DetailBeach')}>
                    <Image
                        source={require('../../Images/imgBeach1.png')}
                    />
                    <Title numberOfLines={1}>Biquini niva</Title>
                    <Price>R$ 149,99</Price>
                </Item>

                <Item>
                    <Image
                        source={require('../../Images/imgBeach2.png')}
                    />
                    <Title numberOfLines={1}>Saída de praia luxo</Title>
                    <Price>R$ 155,99</Price>
                </Item>
            </ItemContainer>
      
            <ItemContainer>
                <Item>
                    <Image
                        source={require('../../Images/imgBeach3.png')}
                    />
                    <Title numberOfLines={1}>Biquini plus size Tropical</Title>
                    <Price>R$ 124,99</Price>
                </Item>

                <Item>
                    <Image
                        source={require('../../Images/imgBeach4.png')}
                    />
                    <Title numberOfLines={1}>Saída de praia Tiffany</Title>
                    <Price>R$ 178.99</Price>
                </Item>
            </ItemContainer>
      
            <ItemContainer>
                <Item>
                    <Image
                        source={require('../../Images/imgBeach5.png')}
                    />
                    <Title numberOfLines={1}>Maiô sereia</Title>
                    <Price>R$ 199,99</Price>
                </Item>

                <Item>
                    <Image
                        source={require('../../Images/imgBeach6.png')}
                    />
                    <Title numberOfLines={1}>Saída de praia longa</Title>
                    <Price>R$ 189,99</Price>
                </Item>
            </ItemContainer>
      
        </Container>
    );
}