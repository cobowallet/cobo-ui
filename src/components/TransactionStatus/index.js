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

StatusContent.propTypes = {
  status: PropTypes.string,
};

const StatusText = CBText.extend`
  font-size: 10;
  color: ${props => StatusColors[props.status].font || StatusColors.other.font};
`;

StatusText.propTypes = {
  status: PropTypes.string,
};

function getTransactionStatusText({
  isInternal,
  status,
  statusText,
  coinCode,
  blockTotal,
  blockConfirmed,
}) {
  let statusTextPrefix = '';
  const nonStatusPrefixCoins = ['XRP', 'TXRP'];
  const findCoin = nonStatusPrefixCoins.find(coin => coin === coinCode);
  const isNonShowCoin = !isNil(findCoin) && findCoin.length > 0;
  if (!isInternal && !isNonShowCoin) {
    if (status === 'pending' || status === 'complete') {
      statusTextPrefix = `${blockConfirmed}/${blockTotal}`;
    }
  }
  return `${statusTextPrefix} ${statusText}`;
}

function TransactionStatus({
  style,
  isInternal,
  status,
  coinCode,
  blockTotal,
  blockConfirmed,
  statusText,
}) {
  const statusTextShowing = getTransactionStatusText({
    isInternal,
    status,
    statusText,
    coinCode,
    blockTotal,
    blockConfirmed,
  });

  return (
    <StatusContent style={style} status={status}>
      <StatusText status={status}>{statusTextShowing}</StatusText>
    </StatusContent>
  );
}

TransactionStatus.propTypes = {
  status: PropTypes.string.isRequired,
  statusText: PropTypes.string.isRequired,
  blockTotal: PropTypes.number,
  blockConfirmed: PropTypes.number,
  isInternal: PropTypes.bool,
  coinCode: PropTypes.string,
};

TransactionStatus.defaultProps = {
  blockTotal: 0,
  blockConfirmed: 12,
  isInternal: true,
  coinCode: '',
};

export default TransactionStatus;
