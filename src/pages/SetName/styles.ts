import styled from 'styled-components/native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import colors from '../../styles/colors';

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  width: 100%;
  padding-left: 24px;
  padding-right: 24px;
  align-items: center;
  margin-top: ${getStatusBarHeight()} + 26%;
`;

export const Emoji = styled.Text`
  font-size: ${props => props.big ? '40px' : '30px'};
`;

export const Title = styled.Text`
  font-size: 26px;
  font-weight: bold;
  line-height: 34px;
  color: ${colors.green_dark};
  text-align: center;
  margin-bottom: ${props => props.isConfirmed ? '0px' : '50px'};
  margin-top: 20px;
`;

export const Input = styled.TextInput`
  width: 80%;
  height: 50px;
  padding: 10px;
  border-bottom-width: 2px;
  text-align: center;
  border-bottom-color: ${colors.gray};
`;

export const ButtonContainer = styled.View`
  height: 50px;
  width: 100%;
  align-items: center;
`;

export const ConfirmButton = styled.TouchableOpacity`
  height: 50px;
  width: 75%;
  background-color: ${colors.green};
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin-top: ${props => props.isConfirmed ? '0px' : '30px'};
`;

export const BtnText = styled.Text`
  color: ${colors.white};
  font-weight: bold;
`;

export const Description = styled.Text`
  color: ${colors.green_dark};
  text-align: center;
  line-height: 22px;
  margin-top: ${props => props.isConfirmed ? '10px' : '50px'};
  margin-bottom: ${props => props.isConfirmed ? '30px' : '50px'};
`;