import styled from "styled-components";

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

export default function Link({
  href = "",
  to,
  underline = true,
  children,
  className,
  ...props
}) {
  return (
    <StyledLink className={className} href={href} {...props}>
      {children}
    </StyledLink>
  );
}
