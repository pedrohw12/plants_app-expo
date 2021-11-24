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
  margin-top: ${getStatusBarHeight()} + 26%;
`;

export const Header = styled.View`
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
`;

export const Title = styled.Text`
  font-size: 26px;
  line-height: 34px;
  color: ${colors.green_dark};
`;

export const SubTitle = styled.Text`
  font-size: 26px;
  font-weight: bold;
  line-height: 34px;
  color: ${colors.green_dark};
`;

export const StyledImage = styled.Image`
  width: 100%;
  height: 360px;
`;

export const Description = styled.Text`
  color: ${colors.green_dark};
  line-height: 22px;
  margin-top: 50px;
  margin-bottom: 30px;
`;

export const NextButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background-color: ${colors.green};
  justify-content: center;
  align-items: center;
`;

export const List = styled.ScrollView`
  
`

export const ListItem = styled.TouchableOpacity`
  height: 40px;
  border-radius: 8px;
  margin: 10px;
  background-color: ${props => props.isSelected ? colors.green : colors.gray};
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const ListItemText = styled.Text`
  font-weight: ${props => props.isSelected ? 'bold' : 'normal'};
  color: ${props => props.isSelected ? colors.green_dark : colors.body_dark};
`;