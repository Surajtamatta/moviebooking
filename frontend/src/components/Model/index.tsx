import React, { useContext } from "react";
import { Modal } from "antd";
import { ShowModal } from "@/contexts/Modal";
import { ModalChildren } from "@/styles/components/Modal";



export interface ModalProps {
  children: React.ReactNode;
  title?: string;
  footer?: React.ReactNode | null;
  centered?: boolean;
  onOk?: () => void;
  width?: string | number;
  onCancel?:()=>void
  closable?:boolean
  open?:boolean,
  
}


const StyledModal = ({
  children,
  title,
  centered,
  width,
  open,
  onCancel,
  onOk,
  footer
}: ModalProps) => {
  
  const { isModalOpen, setModalOpen } = useContext(ShowModal);

  const handleCancel = () => {
    setModalOpen(false);
  };

  return (
    <Modal
      title={title}
      centered={centered}
      open={open}
      onCancel={onCancel || handleCancel}
      width={width}
      footer={footer}
      onOk={onOk}
      
    >
      <ModalChildren>{children}</ModalChildren>
    </Modal>
  );
};

export default StyledModal;
