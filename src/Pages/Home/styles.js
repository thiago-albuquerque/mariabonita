import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #efefef;    
`;
export const Header = styled.View`
    margin: 5.5% 0 0 0;    
`;
export const BannerContainer = styled.View`
    width: 100%;
`;
export const ImageBanner = styled.Image`
    width: 100%;
`;
export const ShopButton = styled.TouchableOpacity`
    position: absolute;
    top: 12%;
    right: 3%;
`;
export const FilterContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-bottom-width: 1px;
    border-bottom-color: #d8d8d8;
    padding: 10px 14px;
`;
export const NameApp = styled.Text`
    font-size: 24px;
    font-weight: bold;
    color: #EA9685;
`;
export const FilterButton = styled.TouchableOpacity`    
`;
export const CategoryContainer = styled.View`
    flex: 1;
    padding: 0 14px;
    margin-bottom: 30px;
`;
export const TextCategory = styled.Text`
    width: 100%;
    font-size: 20px;
    font-weight: bold;
    color: #808080;
    margin: 10px 0;
`;
export const BannerCategory = styled.TouchableOpacity`
    width: 100%;    
`;
export const ImageNews = styled.Image`
    width: 100%;
    border-radius: 5px;
`;