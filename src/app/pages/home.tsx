import React from "react";
import PlainText from "../components/common/plainText";
import Title from "../components/common/title";
import PageWrapper from "../components/layout/pageWrapper";
import { BackgroundColor } from "../view/helper/layoutHelper";
import { FontColor } from "../view/helper/typographyHelper";

const Home: React.FC = () => (
  <PageWrapper color={BackgroundColor.SubBackground}>
    <Title>React Tutorial</Title>
    <PlainText fontColor={FontColor.Paragraph}>text</PlainText>
  </PageWrapper>
);

export default Home;
