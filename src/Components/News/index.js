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

export default function News(){
    const navigation = useNavigation();
    
    return(
        <Container
            
            showsVerticalScrollIndicator={false}
        >
            <ItemContainer>
                <Item onPress={() => navigation.navigate('DetailsNew')}>
                    <Image
                        source={require('../../Images/imgNews1.png')}
                    />
                    <Title numberOfLines={1}>Vestido midi Glória</Title>
                    <Price>R$ 329,99</Price>
                </Item>

                <Item>
                    <Image
                        source={require('../../Images/imgNews2.png')}
                    />
                    <Title numberOfLines={1}>Calça jeans</Title>
                    <Price>R$ 199,99</Price>
                </Item>
            </ItemContainer>
      
            <ItemContainer>
                <Item>
                    <Image
                        source={require('../../Images/imgNews3.png')}
                    />
                    <Title numberOfLines={1}>Casaco Napoli</Title>
                    <Price>R$ 150</Price>
                </Item>

                <Item>
                    <Image
                        source={require('../../Images/imgNews4.png')}
                    />
                    <Title numberOfLines={1}>Casaco Conspiração</Title>
                    <Price>R$ 121,99</Price>
                </Item>
            </ItemContainer>
      
            <ItemContainer>
                <Item>
                    <Image
                        source={require('../../Images/imgNews5.png')}
                    />
                    <Title numberOfLines={1}>Conjunto Manga Longa</Title>
                    <Price>R$ 139,99</Price>
                </Item>

                <Item>
                    <Image
                        source={require('../../Images/imgNews6.png')}
                    />
                    <Title numberOfLines={1}>Short Casual Florença</Title>
                    <Price>R$ 109,99</Price>
                </Item>
            </ItemContainer>
      
        </Container>
    );
}