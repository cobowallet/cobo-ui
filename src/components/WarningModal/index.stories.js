import React from 'react';
import { storiesOf } from '@storybook/react-native';
import WarningModal from './index';

const modal = {
  header: '覆盖当前钱包 ？',
  description: '恢复钱包会覆盖当前钱包，如果您还未备份，当前钱包将会永远丢失。',
  clickBox: '我已备份好当前钱包，同意覆盖。',
  submit: '继续导入',
  cancel: '取消',
};

storiesOf('Warning Modal', module).add('default', () => (
  <WarningModal
    isModalOpen
    header={modal.header}
    description={modal.description}
    submitText={modal.submit}
    cancelText={modal.cancel}
    clickBox={modal.clickBox}
    onSuccess={() => {}}
    onCancel={() => {}}
  />
));
