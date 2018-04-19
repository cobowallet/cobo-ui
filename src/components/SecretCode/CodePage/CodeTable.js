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

const CodeCell = ({ code }) => (
  <CellContainer>
    <Top>
      <Text style={{ fontSize: 10, color: '#D8D8D8' }}>{code.index}</Text>
    </Top>
    <Content>
      <Text style={{ fontSize: 20, color: '#ffff', fontWeight: '800' }}>{code.value}</Text>
    </Content>
  </CellContainer>
);

const CodeTable = ({ codes }) => {
  const chuckedCodes = chunk(codes, CODE_PER_ROW);
  return (
    <View style={{ backgroundColor: '#5026C1', borderRadius: 4 }}>
      {chuckedCodes.map((eachChuck, index) => <CodeRow codes={eachChuck} key={index} />)}
    </View>
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
