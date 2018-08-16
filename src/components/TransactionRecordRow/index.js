import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { View } from 'react-native';
import { CBText } from '../Core';
import { SendIcon, ReceiveIcon, RewardIcon, ExchangeTx } from '../../icons';
import TransactionStatus from '../TransactionStatus';

const Container = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-left: 16;
  padding-right: 16;
  padding-top: 14;
  padding-bottom: 14;
`;

const RecordInfo = styled.View`
  flex-flow: row;
  align-items: center;
  justify-content: space-between;
`;

const MessageBox = styled.View`
  flex: 1;
  flex-flow: row;
  align-items: center;
  padding-right: 120;
`;

const Icon = ({ isSendOut, action }) => {
  const styled = {
    width: 40,
    height: 40,
    marginRight: 8,
  };

  if (action === 'recv_pos_dividend' || action === 'recv_growth_dividend') {
    return <RewardIcon style={styled} />;
  }
  if (action === 'send_exchange' || action === 'recv_exchange') {
    return <ExchangeTx style={styled} />;
  }
  if (isSendOut) {
    return <SendIcon type={'transaction'} style={styled} />;
  } else {
    return <ReceiveIcon type={'transaction'} style={styled} />;
  }
};

const Amount = styled.View`
  flex: 1;
  flex-flow: row;
  align-items: center;
  justify-content: flex-end;
`;

const CoinAmount = styled(CBText)`
  flex: 1;
  text-align: right;
  padding-left: 20;
`;

const TimeText = ({ time, style }) => {
  return (
    <CBText small color="grayLight" style={style} numberOfLines={1} ellipsizeMode={'middle'}>
      {time}
    </CBText>
  );
};

const TransactionRecordRow = ({
  isSendOut,
  showIcon,
  title,
  amount,
  messageTitle,
  message,
  coinCode,
  displayCode,
  action,
  extra,
  style,
  onPress,
}) => (
  <Container onPress={onPress} style={style}>
    {showIcon && <Icon isSendOut={isSendOut} action={action} />}

    <View style={{ flex: 1 }}>
      <RecordInfo style={{ marginBottom: 7 }}>
        <CBText bold color="dark">
          {title}
        </CBText>
        <Amount>
          <CoinAmount superBold color={isSendOut ? 'dark' : 'primary'} numberOfLines={1}>{`${
            isSendOut ? '-' : '+'
          }${amount}`}</CoinAmount>
          <CBText superBold color={isSendOut ? 'dark' : 'primary'}>
            {' '}
            {displayCode || coinCode}
          </CBText>
        </Amount>
      </RecordInfo>
      <RecordInfo>
        <MessageBox>
          <CBText small color="grayLight" style={{ marginRight: 2 }}>
            {messageTitle}
          </CBText>
          <CBText small color="grayLight" numberOfLines={1}>
            {message}
          </CBText>
        </MessageBox>
        {typeof extra === 'string' ? <TimeText time={extra} /> : <TransactionStatus {...extra} />}
      </RecordInfo>
    </View>
  </Container>
);

TransactionRecordRow.propTypes = {
  isSendOut: PropTypes.bool.isRequired,
  showIcon: PropTypes.bool,
  title: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  messageTitle: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  coinCode: PropTypes.string.isRequired,
  displayCode: PropTypes.string,
  action: PropTypes.string,
  extra: PropTypes.oneOfType([
    PropTypes.shape({
      status: PropTypes.string.isRequired,
      statusText: PropTypes.string.isRequired,
    }),
    PropTypes.string,
  ]).isRequired,
  onPress: PropTypes.func,
  style: PropTypes.any,
};

TransactionRecordRow.defaultProps = {
  showIcon: true,
  style: {},
  action: '',
  onPress: () => {},
};

export default TransactionRecordRow;
