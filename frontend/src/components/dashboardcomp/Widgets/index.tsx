import StatusBox from "../StatusBox"
import { Typography } from "antd";
import { BsFillPersonFill } from "react-icons/bs";
import {
  ChartWrapper,
  Wrapper,
  Title,
  TypographyContent,
  Content,
} from "@/styles/dashcomp/Widgets";
import LineChart from "../LineChart";
import BarChart from "../BarChart";

const Widgets = () => {
  return (
    <>
      <Content>
        <Title>
          <TypographyContent>
            <Typography.Title level={3} style={{ margin: 0 }}>
              DASHBOARD
            </Typography.Title>
            <Typography.Paragraph >
              Welcome to your dashboard
            </Typography.Paragraph>
          </TypographyContent>
        </Title>
        <Wrapper>
          <StatusBox
            title="431,225"
            subtitle="Sales Obtained"
            progress={50}
            increase="+21%"
            icon={<BsFillPersonFill color="black" fontSize="25px" />}
          />
          <StatusBox
            title="431,225"
            subtitle="Sales Obtained"
            progress={50}
            increase="+21%"
            icon={<BsFillPersonFill color="black" fontSize="25px" />}
          />
          <StatusBox
            title="431,225"
            subtitle="Sales Obtained"
            progress={50}
            increase="+21%"
            icon={<BsFillPersonFill color="black" fontSize="25px" />}
          />
          <StatusBox
            title="431,225"
            subtitle="Sales Obtained"
            progress={50}
            increase="+21%"
            icon={<BsFillPersonFill color="black" fontSize="25px" />}
          />
        </Wrapper>
        <ChartWrapper>
          <LineChart/>
          <BarChart/>
        </ChartWrapper>
      </Content>
    </>
  );
};

export default Widgets;
