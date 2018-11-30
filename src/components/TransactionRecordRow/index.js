import React from 'react';
import PropTypes from 'prop-types';
import TransactionStatus from '../TransactionStatus';
import {
  RecordIcon,
  Container,
  Content,
  DescRow,
  TitleRow,
  TitleText,
  AmountText,
  Message,
  TimeText,
} from './style';

const TransactionRecordRow = ({
  isSendOut,
  showIcon,
  iconUrl,
  title,
  amount,
  messageTitle,
  message,
  coinCode,
  displayCode,
  action,
  type,
  extra,
  style,
  canPress,
  onPress,
}) => (
  <Container onPress={onPress} style={style} disabled={!canPress} activeOpacity={0.6}>
    {showIcon && <RecordIcon isSendOut={isSendOut} type={type} action={action} iconUrl={iconUrl} />}

    <Content>
      <TitleRow>
        <TitleText title={title} />
        <AmountText
          isSendOut={isSendOut}
          amount={amount}
          coinCode={coinCode}
          displayCode={displayCode}
        />
      </TitleRow>

      <DescRow>
        <Message messageTitle={messageTitle} message={message} />
        {typeof extra === 'string' ? <TimeText time={extra} /> : <TransactionStatus {...extra} />}
      </DescRow>
    </Content>
  </Container>
);

TransactionRecordRow.propTypes = {
  isSendOut: PropTypes.bool.isRequired,
  showIcon: PropTypes.bool,
  iconUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  messageTitle: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  coinCode: PropTypes.string.isRequired,
  displayCode: PropTypes.string,
  action: PropTypes.string,
  type: PropTypes.oneOf(['exchange', 'reward', 'send', 'receive']),
  extra: PropTypes.oneOfType([
    PropTypes.shape({
      status: PropTypes.string.isRequired,
      statusText: PropTypes.string.isRequired,
    }),
    PropTypes.string,
  ]).isRequired,
  canPress: PropTypes.bool,
  onPress: PropTypes.func,
  style: PropTypes.any,
};

TransactionRecordRow.defaultProps = {
  showIcon: true,
  style: {},
  action: '',
  iconUrl: null,
  canPress: true,
  onPress: () => {},
};

export default TransactionRecordRow;
