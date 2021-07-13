import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";
import { useTheme } from "styled-components";

const Icon: React.FC<SvgProps> = (props) => {
  const theme = useTheme();

  return (
    <Svg viewBox="0 0 19 19" {...props} width='19px'>
      <image width="19" height="19" href={theme.isDark ? '/images/mediumDark.svg' : '/images/mediumLight.svg'} />
    </Svg>
  );
};

export default Icon;
