import React from 'react';
import Swiper from 'react-native-swiper';
import { ScrollView } from 'react-native';

import Fitness from '../../Components/Fitness';

import { 
    Container,
    ContainerSwiper,
    Image,
    PriceContainer,
    Price,
    Name,
    OptionsContainer,
    TitleColors,
    ColorsContainer,
    Color1,
    Color2,
    Color3,
    Color4,
    TitleSize,
    SizeButton,
    TextSize,
    DescriptionContainer,
    DescriptionTitle,
    Overview,
    BuyButton,
    TextButton,
    Footer,
    TitleFooter,
} from './styles';

export default function DetailBeach(){
    return(
        <Container
            showsVerticalScrollIndicator={false}
        >
            <ContainerSwiper>
                <Swiper                
                    dotStyle={{
                        backgroundColor: '#EA9685',
                        borderColor: '#EA9685',
                        borderWidth: 1,
                        width: 30,
                        borderRadious: 10,
                    }}
                    activeDotColor= '#fff'
                    activeDotStyle={{
                        borderColor: '#EA9685',
                        borderWidth: 1,
                        width: 30,
                        borderRadious: 10,
                    }}
                >
                    
                    <Image
                            source={require('../../Images/swiperBeach1.png')}
                        />
                        <Image
                            source={require('../../Images/swiperBeach2.png')}
                        />  
                </Swiper>
            </ContainerSwiper>

            <PriceContainer>
                <Price>R$ 149,99</Price>
                <Name>Biquini niva</Name>
            </PriceContainer>

            <OptionsContainer>
                <TitleColors>Cores:</TitleColors>

                <ColorsContainer>
                    <Color1></Color1>                
                    <Color2></Color2>                
                    <Color3></Color3>                
                    <Color4></Color4>                
                </ColorsContainer>

                <TitleSize>Tamanhos:</TitleSize>

                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                >
                    <SizeButton>
                        <TextSize>P</TextSize>
                    </SizeButton>
                    <SizeButton>
                        <TextSize>M</TextSize>
                    </SizeButton>
                    <SizeButton>
                        <TextSize>G</TextSize>
                    </SizeButton>
                    <SizeButton>
                        <TextSize>GG</TextSize>
                    </SizeButton>
                    <SizeButton>
                        <TextSize>XG</TextSize>
                    </SizeButton>
                </ScrollView>
            </OptionsContainer>

            <DescriptionContainer>
                <DescriptionTitle>Descri????o</DescriptionTitle>
                <Overview>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                </Overview>
            </DescriptionContainer>

            <BuyButton>
                <TextButton>Comprar</TextButton>
            </BuyButton>

            <Footer>
                <TitleFooter>Voc?? tamb??m pode gostar</TitleFooter>
                <Fitness/>
            </Footer>

        </Container>
    );
}