import React, { Fragment } from 'react';
import { Layout, Icon } from 'antd';
import GlobalFooter from '@/components/GlobalFooter';

const { Footer } = Layout;
const FooterView = () => (
  <Footer style={{ padding: 0 }}>
    <GlobalFooter
      links={[
        {
          key: '博客管理系统',
          title: '博客管理系统',
          href: 'https://github.com/alexwjj',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <Icon type="github" />,
          href: 'https://github.com/alexwjj',
          blankTarget: true,
        },
        {
          key: '吴俊杰',
          title: '吴俊杰',
          href: 'https://github.com/alexwjj',
          blankTarget: true,
        },
      ]}
      copyright={
        <Fragment>
          Copyright <Icon type="copyright" /> alexwjj
        </Fragment>
      }
    />
  </Footer>
);
export default FooterView;
