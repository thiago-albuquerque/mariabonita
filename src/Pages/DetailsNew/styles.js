import styled from 'styled-components/native';

export const Container = styled.ScrollView`
    flex: 1;
    background-color: #efefef;
`;
export const ContainerSwiper = styled.View`
    width: 100%;
    height: 300px;
    align-items: center;
    justify-content: center;
`;
export const Image = styled.Image`
    width: 100%;
    height: 300px;
`;
export const PriceContainer = styled.View`
    width: 100%;
    padding: 0 14px;
    margin: 10px 0;
`;
export const Price = styled.Text`
    font-size: 26px;
    font-weight: bold;
    color: #EA9685;
`;
export const Name = styled.Text`
    font-size: 22px;
    font-weight: bold;
    color: #606060;
`;
export const OptionsContainer = styled.View`
    width: 100%;
    padding: 0 14px;
    margin-bottom: 30px;   
`;
export const TitleColors = styled.Text` 
    font-size: 12px;
    color: #757575;
    margin-bottom: 10px;
`;
export const ColorsContainer = styled.View`
    width: 100%;
    flex-direction: row;
    margin-bottom: 10px;
`;
export const Color1 = styled.TouchableOpacity`
    width: 50px;
    height: 24px;
    background: #E4B1B1;
    border-radius: 8px;
    margin-right: 15px;
`;
export const Color2 = styled.TouchableOpacity`
    width: 50px;
    height: 24px;
    background: #B2CEB2;
    border-radius: 8px;
    margin-right: 15px;
`;
export const Color3 = styled.TouchableOpacity`
    width: 50px;
    height: 24px;
    background: #000;
    border-radius: 8px;
    margin-right: 15px;
`;
export const Color4 = styled.TouchableOpacity`
    width: 50px;
    height: 24px;
    background: #fff;
    border-radius: 8px;
    margin-right: 15px;
`;
export const TitleSize = styled.Text`
    font-size: 12px;
    color: #757575;
    margin-bottom: 10px;
`;
export const SizeButton = styled.TouchableOpacity`
    width: 80px;
    height: 30px;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    border-width: 1px;
    border-color: #EA9685;
    border-radius: 5px;
    margin-right: 15px;
`;
export const TextSize = styled.Text`
    font-size: 18px;
    color: #EA9685;
`;
export const DescriptionContainer = styled.View`
    width: 100%;
    padding: 0 14px;
    margin-bottom: 30px; 
`;
export const DescriptionTitle = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #757575;
    margin-bottom: 10px;
`;
export const Overview = styled.Text`
    font-size: 16px;
    color: #757575;
`;
export const BuyButton = styled.TouchableOpacity`
    width: 94%;
    height: 45px;
    align-items: center;
    justify-content: center;
    background-color: #EA9685;
    border-radius: 5px;
    margin: 0 auto 30px auto;
`;
export const TextButton = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #fff;
`;
export const Footer = styled.View`
    width: 100%;
    border-top-width: 1px;
    border-top-color: #e1e1e1;
    padding-top: 15px;
`;
export const TitleFooter = styled.Text`
    width: 100%;
    font-size: 20px;
    font-weight: bold;
    color: #808080;
    padding: 0 14px;
    margin-bottom: 10px;
`;