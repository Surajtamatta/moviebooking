import { 
  Container,
  Header,
  WrapperContent,
  Wrapper,
  Content,
  List,
  Box,
 } from "@/styles/dashcomp/RecentList";
import {Typography} from "antd"
import {mockTransactions} from './mockData'

const RecentList = () => {
  return (
       <Container>
          <Header>
            <Typography>
              Recent Transactions
            </Typography>
          </Header>
         <WrapperContent>
          <List>
          {mockTransactions.map((transaction, i) => (
            <Wrapper key={i}>
              <Content>
                <Typography>
                  {transaction.txId}
                </Typography>
                <Typography >
                  {transaction.user}
                </Typography>
              </Content>
              <Typography >{transaction.date}</Typography>
              <Box>
                ${transaction.cost}
              </Box>
            </Wrapper>
          ))}
          </List>
         </WrapperContent>
        </Container>
  )
}

export default RecentList
