

import {
  Container,
} from "@/styles/views/dashhero";
import Widgets from "@/components/dashboardcomp/Widgets";
import RecentList from "@/components/dashboardcomp/RecentList";

const Dashhero = () => {
  return (
    <Container>
            <Widgets />
            <RecentList/>
    </Container>
  );
}

export default Dashhero
