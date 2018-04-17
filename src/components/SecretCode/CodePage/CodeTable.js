import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import { CBText } from '../../Core/index';

const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  );

const CODE_PER_ROW = 3;

const CodeRow = ({ codes }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
      }}
    >
      {codes.map(eachCode => <CodeCell code={eachCode} />)}
    </View>
  );
};

const CellContainer = styled.View`
  flex: 1;
  height: 60;
  flex-direction: row;
  border-right-color: rgba(194, 180, 255, 0.1);
  border-right-width: 1;
  border-bottom-color: rgba(194, 180, 255, 0.1);
  border-bottom-width: 1;
`;

const Left = styled.View`
  width: 10%;
  padding-top: 2;
  padding-left: 2;
`;

const Right = styled.View`
  width: 90%;
  justify-content: center;
  align-items: center;
`;

const CodeCell = ({ code }) => (
  <CellContainer>
    <Left>
      <Text style={{ fontSize: 10, color: '#D8D8D8' }}>{'11'}</Text>
    </Left>
    <Right>
      <Text style={{ fontSize: 20, color: '#ffff', fontWeight: '800' }}>{code}</Text>
    </Right>
  </CellContainer>
);

const CodeTable = ({ codes }) => {
  const chuckedCodes = chunk(codes, CODE_PER_ROW);
  return (
    <View style={{ backgroundColor: '#5026C1' }}>
      {chuckedCodes.map(eachChuck => <CodeRow codes={eachChuck} />)}
    </View>
  );
};
export default CodeTable;
