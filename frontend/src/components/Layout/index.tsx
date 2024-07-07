import React, { useState } from 'react';
import {Layout, theme } from 'antd';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

const {Content } = Layout;

interface LayoutProps {
    children?: React.ReactNode;
}

const Layouts: React.FC<LayoutProps> = ({ children }) => {
    const [collapsed, setCollapsed] = useState<boolean>(true);

    const {
        token: { colorBgContainer, borderRadiusLG },
      } = theme.useToken();
    return (
        <Layout 
        style={{maxHeight:'100vh'}}>
            {/* <Sidebar collapsed={collapsed} /> */}
            <Layout 
            style={{minHeight:'100vh'}}
            >
            <Navbar collapsed={collapsed} setCollapsed={setCollapsed}/>
            <Content style={{ padding: 24,}}>  
            <div style={{ 
              height:'100%',
              overflowY: 'scroll', 
              borderRadius:'10px',
              }}>
              
              
                <main>
                {children}
                </main>
             
            

           
            </div>
             </Content>
            </Layout>
        </Layout>
    );
};

export default Layouts;
