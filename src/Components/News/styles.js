import styled from 'styled-components/native';

export const Container = styled.ScrollView`
    padding: 0 14px;
    background-color: #efefef;
`;
export const ItemContainer = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin: 15px 0;
`;
export const Item = styled.TouchableOpacity`
    width: 150px;
`;
export const Image = styled.Image`
    width: 150px;
    height: 200px;
    border-radius: 5px;
    margin-bottom: 5px;
`;
export const Title = styled.Text`
    width: 100%;
    font-size: 14px;
    color: #606060;
`;
export const Price = styled.Text`
    width: 100%;
    font-size: 18px;
    font-weight: bold;
    color: #EA9685;
`;