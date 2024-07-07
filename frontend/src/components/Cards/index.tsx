import React from "react";
import { Card } from "antd";

export interface TabItemType {
    key: string;
    label: React.ReactNode;
}
export interface CardProps {
    children: React.ReactNode;
    title?: string;
    width?: string | number;
    extra?: React.ReactNode;
    tabList?:TabItemType[];
    activeTabKey?: string;
    onTabChange?: (key:string) => void;
    cover?: React.ReactNode; 
    hoverable?:boolean;
    onClick?: () => void;
    styles?: {
      header?: React.CSSProperties;
      body?: React.CSSProperties;
      extra?: React.CSSProperties;
      title?: React.CSSProperties;
      actions?: React.CSSProperties;
      cover?: React.CSSProperties;
    };
    
}

const CardComponent = ({
  children,
  title,
  width,
  extra,
  onClick,
  ...rest
}: CardProps) => {
  return (
    <Card
      title={title}
      extra={extra}
      cover={rest.cover}
      tabList={rest.tabList}
      activeTabKey={rest.activeTabKey}
      onTabChange={rest.onTabChange}
      styles={rest.styles}
      hoverable={rest.hoverable}

      onClick={onClick}
    >
      {children}
    </Card>
  );
};

export default CardComponent;
