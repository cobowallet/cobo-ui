import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';

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
      {codes.map(eachCode => <CodeCell code={eachCode} key={eachCode.index} />)}
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

const Top = styled.View`
  position: absolute;
  top: 5;
  left: 5;
`;

const Content = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Index = styled.Text`
  font-size: 10;
  color: ${props => props.theme['codeIndexColor']};
`;

const Cell = styled.Text`
  font-size: 20;
  font-weight: 800;
  color: ${props => props.theme['codeColor']};
`;

const CodeCell = ({ code }) => (
  <CellContainer>
    <Top>
      <Index>{code.index}</Index>
    </Top>
    <Content>
      <Cell>{code.value}</Cell>
    </Content>
  </CellContainer>
);

const CodePanel = styled.View`
  background-color: ${props => props.theme['codePanelColor']};
  border-radius: 4;
`;

const CodeTable = ({ codes }) => {
  const chuckedCodes = chunk(codes, CODE_PER_ROW);
  return (
    <CodePanel>
      {chuckedCodes.map((eachChuck, index) => <CodeRow codes={eachChuck} key={index} />)}
    </CodePanel>
  );
};

CodeTable.propTypes = {
  codes: PropTypes.arrayOf(
    PropTypes.shape({
      index: PropTypes.number.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CodeTable;
