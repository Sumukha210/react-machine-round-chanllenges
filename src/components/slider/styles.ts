import styled from "styled-components";

export const SliderWrapper = styled.section<{
  slideWidth: number;
  activeSlideSet: number;
}>`
  & > * {
    width: ${({ slideWidth }) => slideWidth}px;
    flex: none;
    transition: translate 1s ease;
    translate: calc(
      -${(prop) => prop.slideWidth}px * ${(prop) => prop.activeSlideSet}
    );
  }
`;
