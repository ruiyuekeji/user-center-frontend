import { DefaultFooter } from '@ant-design/pro-components';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      links={[
        {
          key: 'ruiyuekeji',
          title: 'rui yue keji',
          href: 'https://www.123.com',
          blankTarget: true,
        },

        {
          key: '瑞悦科技',
          title: '瑞悦科技',
          href: 'https://www.456.com',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
