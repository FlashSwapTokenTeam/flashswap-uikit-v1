import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 48 48" {...props}>
      <circle cx="24" cy="24" r="24" fill="url(#paint0_linear)" />
      <image width={48} height={48} href="/images/ticket.svg"/>
    </Svg>
  );
};

export default Icon;
