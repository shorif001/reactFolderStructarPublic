import styled from "@emotion/styled";
export * from '@emotion/styled';

import { v } from "../../styles/variables";

export const DashboardLayoutStyle = styled.div`
  display: flex; 
`;

export const DashboardLayoutMain = styled.main`
  padding: calc(${v.smSpacing} * 0);
  width: 100%;
  overflow: hidden;
  height: calc(100vh - 0px);
`;


