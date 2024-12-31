import { forwardRef, ForwardedRef } from "react";
import styled from "styled-components";
import { LinkProps } from "./Link.types";

const StyledLink = styled.a`
  text-decoration: none;
  transition: color 0.2s ease-in-out;

  &.underline {
    text-decoration: underline;
  }

  @media (hover: hover) {
    &:hover {
      color: design-tokens.colors(blue, 60);
    }
  }

  &:focus {
    outline-color: design-tokens.colors(blue, 60);
  }
`;

export const Link = forwardRef(
  (
    { href = "", to, underline = true, children, ...props }: LinkProps,
    ref: ForwardedRef<HTMLAnchorElement>
  ) => {
    const test = 2;

    return (
      <StyledLink ref={ref} href={href} {...props}>
        {children}
      </StyledLink>
    );
  }
);
