import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { ScrollView } from 'react-native';

import { 
    Container, 
    Header, 
    BannerContainer, 
    ImageBanner, 
    ShopButton,
    FilterContainer,
    NameApp,
    FilterButton,
    CategoryContainer,
    TextCategory,
    BannerCategory,
    ImageNews,
} from './styles';

import { Feather, MaterialIcons } from '@expo/vector-icons';

export default function Home(){
    const navigation = useNavigation();

    return(
        <Container>
            <Header>
                <BannerContainer>
                    <ImageBanner 
                        source={require('../../Images/imgBanner.png')}
                    />
                    <ShopButton>
                        <Feather
                            name='shopping-bag' size={26} color='#EA9685'
                        />
                    </ShopButton>
                </BannerContainer>

                <FilterContainer>
                    <NameApp>Maria Bonita</NameApp>
                    <FilterButton>
                        <MaterialIcons
                            name='sort'
                            size={36}
                            color='#EA9685'
                        />
                    </FilterButton>
                </FilterContainer>
            </Header>            
            
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <CategoryContainer>
                    <TextCategory>Lançamentos</TextCategory>
                    <BannerCategory onPress={() => navigation.navigate('News')}>
                        <ImageNews
                            source={(require('../../Images/imgBannerNews.png'))}
                        />
                    </BannerCategory>
                        
                    <TextCategory>Fitness</TextCategory>
                    <BannerCategory onPress={() => navigation.navigate('Fitness')}>
                        <ImageNews
                            source={(require('../../Images/imgBannerFitness.png'))}
                        />
                    </BannerCategory>
                        
                    <TextCategory>Praia</TextCategory>
                    <BannerCategory onPress={() => navigation.navigate('Beach')}>
                        <ImageNews
                            source={(require('../../Images/imgBannerBeach.png'))}
                        />
                    </BannerCategory>
                </CategoryContainer>
            </ScrollView>
        </Container>
    );
}