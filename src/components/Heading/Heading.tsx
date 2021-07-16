import styled from "styled-components";
import Text from "../Text/Text";
import { tags, sizes, HeadingProps } from "./types";

const style = {
  [sizes.MD]: {
    fontSize: "18px",
  },
  [sizes.LG]: {
    fontSize: "20px",
  },
  [sizes.XL]: {
    fontSize: "22px",
  },
  [sizes.XXL]: {
    fontSize: "34px",
  },
};

const Heading = styled(Text).attrs({ bold: true })<HeadingProps>`
  ${({ size }) => style[size || sizes.MD]}
  font-weight:300;
  line-height: 1.1;
`;

Heading.defaultProps = {
  as: tags.H2,
};

export default Heading;
