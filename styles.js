import styled from 'styled-components/native';
import { Platform } from 'react-native';
import Constants from 'expo-constants';

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.ScrollView`
  margin-top: ${Platform.OS !== 'ios' ? 0 : Constants.statusBarHeight}px;
  margin-left: 20px;
`;
