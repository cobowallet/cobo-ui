import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { Image, View } from 'react-native';
import { CBText } from '../Core';
import { SendIcon, ReceiveIcon } from '../../icons';
import TransactionStatus from '../TransactionStatus';

const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-left: 16;
  padding-right: 16;
  padding-top: 16;
  padding-bottom: 16;
`;

const Icon = ({ isSendOut }) => {
  const styled = {
    width: 50,
    height: 50,
    marginEnd: 12,
  };

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
  extra,
  style,
  onPress,
}) => (
  <Container>
    {showIcon && <Icon isSendOut={isSendOut} />}

    <View style={[{ flex: 1 }, style]} onPress={onPress}>
      <CBText bold color="dark">
        {title}
      </CBText>
      <CBText small color="grayLight" style={{ marginTop: 4 }}>
        {message}
      </CBText>
    </View>

    <View style={{ alignItems: 'flex-end' }}>
      <CBText bold color={isSendOut ? 'dark' : 'primary'}>{`${
        isSendOut ? '-' : '+'
      }${amount} ${coinCode}`}</CBText>
      {typeof extra === 'string' ? (
        <TimeText time={extra} style={{ marginTop: 4 }} />
      ) : (
        <TransactionStatus {...extra} />
      )}
    </View>
  </Container>
);

TransactionRecordRow.propTypes = {
  isSendOut: PropTypes.bool.isRequired,
  showIcon: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  coinCode: PropTypes.string.isRequired,
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
  onPress: () => {},
};

export default TransactionRecordRow;
