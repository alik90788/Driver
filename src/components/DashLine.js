import React from 'react';
import Dash from 'react-native-dash';

const DashLine = ({
  dashGap=1,
  dashLength=17,
  dashThickness=2,
  dashColor = 'black',
  style,
}) => {
 
  return (
    <Dash
      DashGap={dashGap}
      dashLength={dashLength}
      dashThickness={dashThickness}
      dashColor={dashColor}
      style={[style]}
    />
  );
};
export default DashLine;
