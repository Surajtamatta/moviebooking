import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  DownOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, MenuProps, SelectProps, Space, Typography, theme } from 'antd';
import InputComponent from '../Input';
import { Content } from '@/styles/components/Navbar';
import { ShowModal } from '@/contexts/Modal';
import { BsPersonCircle } from "react-icons/bs";
import ModalContainer from '@/pages/auth/login';
import SelectComponent from '../Select';
import StyledModal from '../Model';
import CardComponent from '../Cards';
import Link from 'next/link';
import { useMessage } from '../Message';
import { useAdminAuth } from '@/utils/context/AdminAuth';

interface NavbarProps {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

const { Header } = Layout;

const indianCities = [
  "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Ahmedabad", "Chennai", "Kolkata",
  "Surat", "Pune", "Jaipur", "Lucknow", "Kanpur", "Nagpur", "Indore", "Thane",
  "Bhopal", "Visakhapatnam", "Pimpri-Chinchwad", "Patna", "Vadodara", "Ghaziabad",
  "Ludhiana", "Agra", "Nashik", "Faridabad", "Meerut", "Rajkot", "Kalyan-Dombivli",
  "Vasai-Virar", "Varanasi", "Srinagar", "Aurangabad", "Dhanbad", "Amritsar",
  "Navi Mumbai", "Allahabad", "Ranchi", "Howrah", "Coimbatore", "Jabalpur",
  "Gwalior", "Vijayawada", "Jodhpur", "Madurai", "Raipur", "Kota", "Guwahati",
  "Chandigarh", "Solapur", "Hubli-Dharwad", "Tiruchirappalli", "Bareilly", "Mysore",
  "Tiruppur", "Gurgaon", "Aligarh", "Jalandhar", "Bhubaneswar", "Salem",
  "Mira-Bhayandar", "Warangal", "Guntur", "Bhiwandi", "Saharanpur", "Gorakhpur",
  "Bikaner", "Amravati", "Noida", "Jamshedpur", "Bhilai", "Cuttack", "Firozabad",
  "Kochi", "Nellore", "Bhavnagar", "Dehradun", "Durgapur", "Asansol", "Rourkela",
  "Nanded", "Kolhapur", "Ajmer", "Akola", "Gulbarga", "Jamnagar", "Ujjain",
  "Loni", "Siliguri", "Jhansi", "Ulhasnagar", "Nellore", "Jammu", "Sangli-Miraj & Kupwad",
  "Belgaum", "Mangalore", "Ambattur", "Tirunelveli", "Malegaon", "Gaya", "Jalgaon",
  "Udaipur", "Maheshtala", "Davanagere", "Kozhikode", "Kurnool", "Jamtara", "Palwal",
  "Pilibhit", "Ratnagiri", "Shajapur", "Shivpuri", "Siwan", "Ujjain", "Vellore",
  "Mahbubnagar", "Yamunanagar", "Chittoor", "Deoria", "Firozabad", "Muzaffarpur"
];

const Navbar: React.FC<NavbarProps> = ({ collapsed, setCollapsed }) => {
  const { isAdminAuth } = useAdminAuth();
  console.log(isAdminAuth)
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (modalType: string) => {
    setActiveModal(modalType);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setActiveModal(null);
    setIsModalOpen(false);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const options: SelectProps['options'] = indianCities.map((city: any) => ({
    value: city,
    label: city,
  }));

  const menus: MenuProps['items'] = [
    {
      key: '1',
      label: <Link href="/admin">Home</Link>,
    },
    {
      key: '2',
      label: <Link href="/admin/movie/createmovie">Movie</Link>,
    },
    {
      key: '3',
      label: <Link href="/admin/screen">Screen</Link>,
    },
    {
      key: '4',
      label: <Link href="/admin/schedule">Schedule</Link>,
    },
    {
      key: '5',
      label: <Link href="/pages/admin/celebrity">Celebrity</Link>,
    },
  ];

  return (
    <>
      <Header style={{ 
        padding: '10px',
        display: 'flex',
        background: colorBgContainer,
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '10px',
        position: 'sticky',
        top: 0,
        zIndex: 99,
        width: '100%',
      }}>
        {isAdminAuth ? (
          <Content style={{ justifyContent: 'space-between' }}>
            <Menu
              mode="horizontal"
              defaultSelectedKeys={['1']}
              items={menus}
              style={{ flex: 1, minWidth: 0 }}
            />
            <Button
              type="primary"
              danger
              onClick={() => handleOpenModal('login')}
            >
              Log Out
            </Button>
          </Content>
        ) : (
          <>
            <Content>
              <Space>
                <Typography.Title level={4} style={{ margin: 0, display: 'flex', alignItems: 'center', gap: 10 }}>
                  My <img src={'https://www.freeiconspng.com/uploads/download-ticket-ticket-free-entertainment-icon-orange-ticket-design-0.png'} width={50} /> Show
                </Typography.Title>
              </Space>
              <InputComponent
                type={'search'}
                name={'search'}
                placeholder={'Search for Movies'}
              />
            </Content>
            <Space>
              <Typography onClick={() => handleOpenModal('location')}>
                <Space style={{ fontSize: '16px', width: 85, gap: 8 }}>
                  Mumbai
                  <DownOutlined />
                </Space>
              </Typography>
              <Button
                type="primary"
                danger
                onClick={() => handleOpenModal('login')}
              >
                Sign Up
              </Button>
              <BsPersonCircle style={{
                fontSize: '30px',
                display: 'flex',
                alignItems: 'center',
              }} />
            </Space>
          </>
        )}
      </Header>
      {activeModal === 'login' && <ModalContainer isOpen={isModalOpen} setisOpen={handleCloseModal} />}
      {activeModal === 'location' && (
        <StyledModal 
          open={isModalOpen} 
          onCancel={handleCloseModal}
          onOk={handleOk}
          centered
          width={350}
        >
          <CardComponent styles={{ body: { minHeight: 220 } }}>
            <SelectComponent 
              options={options} 
            />
          </CardComponent>
        </StyledModal>
      )}
    </>
  );
};

export default Navbar;
