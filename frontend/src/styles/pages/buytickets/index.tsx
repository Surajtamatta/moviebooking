import { Button, Calendar } from 'antd';
import styled from 'styled-components';
import { Datepicker } from "@meinefinsternis/react-horizontal-date-picker";


export const CustomCalendar = styled(Datepicker)`
  .dM{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background: inherit;
    padding:0;
    position: relative;
  }

`;


export const SelectButton = styled(Button)`
    cursor: pointer;
    background-color: rgb(159, 179, 176);
    border-radius: 8px;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    display: flex;
    margin-left: 4px;
    padding: 8px 15px;
    color: rgb(26, 26, 26);

`;