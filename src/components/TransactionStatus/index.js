import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import { isNil } from 'ramda';
import { CBText } from '../Core';

export const StatusColors = {
  confirming: { font: '#FF9B00', background: '#FFF0D3' },
  complete: { font: '#5170EB', background: '#E0E9FB' },
  pending: { font: '#FF9B00', background: '#FFF5D3' },
  failed: { font: '#FF0E3D', background: '#FFE6EC' },
  canceled: { font: '#8F95AA', background: '#EBEDF6' },
  expired: { font: '#8F95AA', background: '#EBEDF6' },
  partial_complete: { font: '#8F95AA', background: '#EBEDF6' },
  partial_complete_canceled: { font: '#8F95AA', background: '#EBEDF6' },
  other: { font: '#8F95AA', background: '#EBEDF6' },
};

const StatusContent = styled.View`
  border-radius: 3;
  background-color: ${props =>
    StatusColors[props.status].background || StatusColors.other.background};
  justify-content: center;
  align-items: center;
  padding-left: 8;
  padding-right: 8;
  padding-top: 4;
  padding-bottom: 4;
`;

const StatusText = CBText.extend`
  font-size: 10;
  color: ${props => StatusColors[props.status].font || StatusColors.other.font};
`;

function TransactionStatus({ style, status, statusText }) {
  return (
    <StatusContent style={style} status={status}>
      <StatusText status={status}>{statusText}</StatusText>
    </StatusContent>
  );
}

TransactionStatus.propTypes = {
  status: PropTypes.string.isRequired,
  statusText: PropTypes.string.isRequired,
};

export default TransactionStatus;
