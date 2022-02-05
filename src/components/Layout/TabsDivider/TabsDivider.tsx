import React from 'react';
import styled from '@emotion/native';

const TabsDivider = styled.View`
  width: 100%;
  ${props => props.theme.border.lightGray('bottom')};
  border-top-width: 0;
  border-left-width: 0;
  border-right-width: 0;
`;

export default TabsDivider;
