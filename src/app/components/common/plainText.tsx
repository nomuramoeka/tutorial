/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { FontColor } from "../../view/helper/typographyHelper";

interface Iro {
  fontColor?: FontColor;
}

const PlainText: React.FC<Iro> = ({
  children,
  fontColor = FontColor.Paragraph
}) =>(
  <p
  css={css`
  font-size: 16px;
  font-weight:normal;
  color:${fontColor}
  `}
  >
{children}
  </p>
);

export default PlainText;