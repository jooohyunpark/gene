// import { forwardRef, ForwardedRef } from 'react';
// import styled, { css } from 'styled-components';
// import { color, space } from '@gene/token';
// import { LinkProps, GeneLinkProps } from './Link.types';

// const colors = {
//   primary: color.blue30,
//   inherit: 'inherit',
// };

// const GeneLink = styled.a<GeneLinkProps>`
//   position: relative;
//   text-decoration: ${({ $underline }) => ($underline ? 'underline' : 'none')};
//   color: ${({ $color = 'inherit' }) => colors[$color]};

//   @media (hover: hover) {
//     &:hover {
//       text-decoration: underline;
//     }
//   }

//   &::after {
//     content: '';
//     position: absolute;
//     width: 100%;
//     height: ${space(0.25)}px;
//     bottom: ${-1 * space(0.25)}px;
//     left: 0;
//     background-color: currentColor;

//     ${({ $underline }) =>
//     $underline
//       ? css``
//       : css`
//           transform: scaleX(0);
//           transition: transform 0.25s ease-out;
//           transform-origin: bottom right;
//         `}
//   }

//   ${({ $expressive, $underline }) =>
//     $expressive &&
//     css`
//       @media (hover: hover) {
//         &:hover {
//           &::after {
//             ${$underline &&
//             css`
//               animation: 0.25s ease-out slide-in;
//               transform-origin: bottom left;

//               @keyframes slide-in {
//                 0% {
//                   transform: scaleX(0);
//                 }
//                 100% {
//                   transform: scaleX(1);
//                 }
//               }
//             `}

//             ${!$underline &&
//             css`
//               transform: scaleX(1);
//               transform-origin: bottom left;
//             `}
//           }
//         }
//       }
//     `}

//   &:focus-visible {
//     /* inner indicator */
//     outline: 2px ${color.white} solid;
//     outline-offset: 0;

//     /* outer indicator */
//     box-shadow: 0 0 0 4px ${color.blue30};
//   }
// `;

// export const Link = forwardRef(
//   (
//     {
//       href = '',
//       color = 'inherit',
//       // expressive = true,
//       underline = true,
//       children,
//       ...props
//     }: LinkProps,
//     ref: ForwardedRef<HTMLAnchorElement>,
//   ) => {
//     return (
//       <GeneLink
//         ref={ref}
//         href={href}
//         $color={color}
//         $underline={underline}
//         // $expressive={expressive}
//         {...props}
//       >
//         {children}
//       </GeneLink>
//     );
//   },
// );
