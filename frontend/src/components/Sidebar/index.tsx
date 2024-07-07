import React from 'react'
import {
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import {Layout, Menu, } from 'antd';
const { Sider } = Layout;

interface SideProps {
    collapsed?: boolean;
    setCollapsed?: (collapsed: boolean) => void;
  
}

const Sidebar:React.FC<SideProps> = ({ collapsed}) => {
  return (
    <Sider 
    trigger={null}
     collapsible 
     collapsed={collapsed}
     style={{background:' white '}}
     >
        <div className="demo-logo-vertical" >
            </div>
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'nav 1',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'nav 2',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'nav 3',
            },
          ]}
        />
      </Sider>
  )
}

export default Sidebar