import styled from "styled-components";
import themeType from "@/app/theme.types";

type TypographyProps = {
  size?: number;
  color?: number;
  weight?: number;
  theme: themeType;
  ul?: string;
};

const Typography = styled.div<TypographyProps>`
  font-size: ${({ size, theme }) =>
    size ? theme.fontSize[size] : theme.fontSize[2]};
  font-weight: ${({ weight, theme }) =>
    weight ? theme.fontWeight[weight] : theme.fontWeight[2]};
  color: ${({ color, theme }) =>
    color ? theme.textColor[color] : theme.textColor[0]};
  display: flex;
  text-decoration: ${({ ul }) => (ul ? "underline" : "none")};
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
`;

export default Typography;
