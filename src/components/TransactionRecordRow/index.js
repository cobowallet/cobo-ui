import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { View } from 'react-native';
import { CBText } from '../Core';
import { SendIcon, ReceiveIcon, RewardIcon } from '../../icons';
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

const Icon = ({ isSendOut, action }) => {
  const styled = {
    width: 42,
    height: 42,
    marginRight: 12,
  };

  if (action === 'recv_pos_dividend') {
    return <RewardIcon style={styled} />;
  }
  if (isSendOut) {
    return <SendIcon type={'transaction'} style={styled} />;
  } else {
    return <ReceiveIcon type={'transaction'} style={styled} />;
  }
};

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
  message,
  coinCode,
  action,
  extra,
  style,
  onPress,
}) => (
  <Container onPress={onPress} style={style}>
    {showIcon && <Icon isSendOut={isSendOut} action={action} />}

    <View style={{ flex: 1 }}>
      <CBText bold color="dark">
        {title}
      </CBText>
      <CBText small color="grayLight" style={{ marginTop: 7 }}>
        {message}
      </CBText>
    </View>

    <View style={{ alignItems: 'flex-end' }}>
      <CBText bold color={isSendOut ? 'dark' : 'primary'}>{`${
        isSendOut ? '-' : '+'
      }${amount} ${coinCode}`}</CBText>
      {typeof extra === 'string' ? (
        <TimeText time={extra} style={{ marginTop: 7 }} />
      ) : (
        <TransactionStatus {...extra} style={{ marginTop: 7 }} />
      )}
    </View>
  </Container>
);

TransactionRecordRow.propTypes = {
  isSendOut: PropTypes.bool.isRequired,
  showIcon: PropTypes.bool,
  title: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  coinCode: PropTypes.string.isRequired,
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
