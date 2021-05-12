import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { Container } from './styles';

const stack = [
  { key: 'React Native (Bare Workflow)' },
  { key: 'Redux and redux-thunk' },
  { key: 'axios' },
  { key: 'styled-components' },
  { key: 'ESLint + Prettier' },
  { key: 'Husky + lint-staged + git-commit-msg-linter' },
];

export default function App() {
  return (
    <Container>
      <View>
        <Text>React Native Boilerplate Project</Text>
        <Text>Stack:</Text>
        <FlatList data={stack} renderItem={({ item }) => <Text>{item.key}</Text>} />
        <StatusBar />
      </View>
    </Container>
  );
}
