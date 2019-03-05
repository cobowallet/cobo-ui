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
  TitleTag,
  AmountText,
  Message,
  TimeText,
} from './style';

const TransactionRecordRow = ({
  isSendOut,
  showIcon,
  iconUrl,
  title,
  titleTag,
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
  toBeApproved,
}) => (
  <Container onPress={onPress} style={style} disabled={!canPress} activeOpacity={0.6}>
    {showIcon && <RecordIcon isSendOut={isSendOut} type={type} action={action} iconUrl={iconUrl} />}

    <Content>
      <TitleRow>
        <TitleText title={title} />
        {!!titleTag && (
          <TitleTag
            text={titleTag}
            backgroundStartColor={'#ff5b2f'}
            backgroundEndColor={'#ff9c30'}
          />
        )}
        {!!toBeApproved && (
          <TitleTag
            text={toBeApproved}
            textColor={'#ffffff'}
            backgroundStartColor={'#FF582E'}
            backgroundEndColor={'#FF9D2E'}
          />
        )}
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
  titleTag: PropTypes.string,
  amount: PropTypes.string.isRequired,
  messageTitle: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  coinCode: PropTypes.string.isRequired,
  displayCode: PropTypes.string,
  action: PropTypes.string,
  type: PropTypes.oneOf(['exchange', 'reward', 'send', 'sending', 'receive']),
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
  toBeApproved: PropTypes.string,
};

TransactionRecordRow.defaultProps = {
  showIcon: true,
  style: {},
  action: '',
  iconUrl: null,
  titleTag: null,
  canPress: true,
  onPress: () => {},
  toBeApproved: '',
};

export default TransactionRecordRow;
