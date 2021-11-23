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

export const Title = styled.Text`
  font-size: 26px;
  font-weight: bold;
  line-height: 34px;
  color: ${colors.green_dark};
  text-align: center;
  margin-bottom: 50px;
`;

export const StyledImage = styled.Image`
  width: 100%;
  height: 360px;
`;

export const Description = styled.Text`
  color: ${colors.green_dark};
  text-align: center;
  line-height: 22px;
  margin-top: 50px;
  margin-bottom: 50px;
`;

export const NextButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background-color: ${colors.green};
  justify-content: center;
  align-items: center;
`;