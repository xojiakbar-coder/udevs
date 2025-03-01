import { useMediaQuery } from "@mui/material";
import Card from "../Card/Card";
import { CardWrapper, GenericText, GenericTitle } from "../Left/style";
import {
  BackgroundCover,
  BoxWrapper,
  Container,
  ContentWrapper,
  LeftImage,
  LeftImageWrapper,
  RightContent,
} from "./style";

const Section = ({ title, text, imgSrc, card }) => {
  const small = useMediaQuery("(max-width: 900px)");
  return (
    <Container>
      <ContentWrapper>
        <GenericTitle>{title}</GenericTitle>
        <BoxWrapper>
          {!small && (
            <LeftImageWrapper>
              <BackgroundCover>
                <LeftImage src={imgSrc} />
              </BackgroundCover>
            </LeftImageWrapper>
          )}
          <RightContent>
            {small && (
              <LeftImageWrapper>
                <BackgroundCover>
                  <LeftImage src={imgSrc} />
                </BackgroundCover>
              </LeftImageWrapper>
            )}
            <GenericText>{text}</GenericText>
            <CardWrapper>
              {card?.map((item) => {
                const { id, cardType, cardIcon, title } = item;
                return (
                  <Card key={id} t={cardType} title={title} icon={cardIcon} />
                );
              })}
            </CardWrapper>
          </RightContent>
        </BoxWrapper>
      </ContentWrapper>
    </Container>
  );
};

export default Section;
