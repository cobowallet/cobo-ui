import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';

const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  );

const CODE_PER_ROW = 3;

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

const CellInput = styled.TextInput`
  font-size: 20;
  font-weight: 800;
  width: 80%;
  color: ${props => props.theme['codeColor']};
`;

const CodeRow = ({ codes, onInputChange, focusedId, onKeyPress }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
      }}
    >
      {codes.map(eachCode => (
        <CodeCell
          code={eachCode}
          key={eachCode.index}
          onInputChange={onInputChange}
          onKeyPress={onKeyPress}
          focusedId={focusedId}
        />
      ))}
    </View>
  );
};

class CodeCell extends React.PureComponent {
  componentDidUpdate() {
    if (this.props.focusedId === this.props.code.index) {
      this.textInput.focus();
    }
  }

  render() {
    return (
      <CellContainer>
        <Top>
          <Index>{this.props.code.index}</Index>
        </Top>
        <Content>
          <CellInput
            innerRef={input => {
              this.textInput = input;
            }}
            value={this.props.code.value}
            onChangeText={text => this.props.onInputChange(this.props.code.index, text)}
            onKeyPress={e => this.props.onKeyPress(this.props.code.index, e.nativeEvent)}
          />
        </Content>
      </CellContainer>
    );
  }
}

const CodePanel = styled.View`
  background-color: ${props => props.theme['codePanelColor']};
  border-radius: 4;
`;

const CodeInputTable = ({ codes, onInputChange, focusedId, onKeyPress }) => {
  const chuckedCodes = chunk(codes, CODE_PER_ROW);
  return (
    <CodePanel>
      {chuckedCodes.map((eachChuck, index) => (
        <CodeRow
          codes={eachChuck}
          key={index}
          onInputChange={onInputChange}
          onKeyPress={onKeyPress}
          focusedId={focusedId}
        />
      ))}
    </CodePanel>
  );
};

CodeInputTable.propTypes = {
  codes: PropTypes.arrayOf(
    PropTypes.shape({
      index: PropTypes.number.isRequired,
      value: PropTypes.string,
    })
  ).isRequired,
};

export default CodeInputTable;
