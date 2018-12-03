import React from 'react';
import styled from 'styled-components/native';
import { Image } from 'react-native';
import { CBText } from '../Core';
import { SendIcon, ReceiveIcon, RewardIcon, ExchangeTx } from '../../icons';

export const Container = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  padding-left: 16;
  padding-right: 16;
  padding-top: 14;
  padding-bottom: 14;
`;

export const Content = styled.View`
  background-color: transparent;
  align-items: stretch;
  flex: 1;
`;

export const TitleRow = styled.View`
  flex-flow: row;
  align-items: center;
`;

export const DescRow = styled.View`
  margin-top: 7;
  flex-flow: row;
  align-items: center;
`;

export const TitleText = ({ title }) => {
  return (
    <CBText bold color="dark" numberOfLines={1}>
      {title}
    </CBText>
  );
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
  padding-left: 16;
`;

export const AmountText = ({ isSendOut, amount, displayCode, coinCode }) => {
  return (
    <Amount>
      <CoinAmount superBold color={isSendOut ? 'dark' : 'primary'} numberOfLines={1}>{`${
        isSendOut ? '-' : '+'
      }${amount}`}</CoinAmount>
      <CBText superBold color={isSendOut ? 'dark' : 'primary'}>
        {` ${displayCode || coinCode}`}
      </CBText>
    </Amount>
  );
};

const MessageBox = styled.View`
  flex: 1;
  flex-flow: row;
  align-items: center;
  padding-right: 8;
`;

export const Message = ({ messageTitle, message }) => {
  return (
    <MessageBox>
      {!!messageTitle && (
        <CBText small color="grayLight" style={{ marginRight: 2 }} numberOfLines={1}>
          {messageTitle}
        </CBText>
      )}

      <CBText small color="grayLight" numberOfLines={1} style={{ flex: 1 }}>
        {message}
      </CBText>
    </MessageBox>
  );
};

export const TimeText = ({ time, style }) => {
  return (
    <CBText small color="grayLight" style={style} numberOfLines={1} ellipsizeMode={'middle'}>
      {time}
    </CBText>
  );
};

export const RecordIcon = ({ isSendOut, action, iconUrl, type }) => {
  const styled = {
    width: 40,
    height: 40,
    marginRight: 8,
  };
  if (iconUrl && iconUrl.length > 0) {
    return <Image style={styled} source={{ uri: iconUrl }} />;
  }
  if (type && type.length > 0) {
    switch (type) {
      case 'exchange':
        return <ExchangeTx style={styled} />;
      case 'reward':
        return <RewardIcon style={styled} />;
      case 'send':
        return <SendIcon type={'transaction'} style={styled} />;
      case 'sending':
        return <SendIcon type={'sending'} style={styled} />;
      case 'receive':
        return <ReceiveIcon type={'transaction'} style={styled} />;
    }
  }
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
