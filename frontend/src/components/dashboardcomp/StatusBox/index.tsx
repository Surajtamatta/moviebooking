import { Typography} from "antd";

import {
  StatusBox,
  Wrapper,
  Content,
  ProgressCirle,
} from "@/styles/dashcomp/StatusBox";
import { ReactNode } from "react";

interface status{
   title:string,icon:ReactNode, subtitle:string,  progress:number, increase:string 
}

const StatBox: React.FC<status> = ({
  title,
  icon,
  subtitle,
  progress,
  increase,
}) => {
  return (
    <StatusBox>
      <Wrapper>
        <Content>
          {icon}
          <Typography.Title level={5} >
            {title}
          </Typography.Title>
        </Content>
        <Content>
          <ProgressCirle
            type="circle"
            percent={progress}
            size={40}
            showInfo={false}
          />
        </Content>
      </Wrapper>
      <Wrapper>
        <Typography>{subtitle}</Typography>
        <Typography>{increase}</Typography>
      </Wrapper>
    </StatusBox>
  );
};

export default StatBox;
