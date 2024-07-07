import React, { useContext, useState } from 'react';
import SignIn from '@/components/signin';
import SignUp from '@/components/signup';
import StyledModal from '@/components/Model';
import { Space } from 'antd';
import { Button, ButtonContent } from '@/styles/components/signin';
import { ShowModal } from '@/contexts/Modal';

interface ModalContainerProps {
  isOpen: boolean;
  setisOpen: (open: boolean) => void;
}

const ModalContainer: React.FC<ModalContainerProps> = ({ isOpen, setisOpen }) => {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSwitch = () => {
    setIsSignUp((prev) => !prev);
  };

  return (
    <StyledModal
      centered
      open={isOpen}
      onCancel={() => setisOpen(false)}
      width={450}
      footer={null}
    >
      <Space direction="vertical" style={{ width: '100%', gap: 24, padding: 20 }}>
        <ButtonContent>
          <Button type="submit" onClick={() => setIsSignUp(false)} bgColor={!isSignUp}>
            Login
          </Button>
          <Button type="submit" onClick={() => setIsSignUp(true)} bgColor={isSignUp}>
            Registration
          </Button>
        </ButtonContent>
        {isSignUp ? <SignUp /> : <SignIn />}
      </Space>
    </StyledModal>
  );
};

export default ModalContainer;


