import {
  Link,
  TableContainer,
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '@gene/ui';
import Section from '@/components/Section';
import { ExampleText } from './styles';

const Typography = () => {
  const typographyData = [
    {
      name: 'Heading 01',
      token: 'heading01',
      size: '48 / 3',
      lineHeight: 1,
      weight: 600,
      letterSpacing: -0.02,
    },
    {
      name: 'Heading 02',
      token: 'heading02',
      size: '32 / 2',
      lineHeight: 1,
      weight: 600,
      letterSpacing: -0.02,
    },
    {
      name: 'Heading 03',
      token: 'heading03',
      size: '24 / 1.5',
      lineHeight: 1.2,
      weight: 600,
      letterSpacing: -0.01,
    },
    {
      name: 'Heading 04',
      token: 'heading04',
      size: '20 / 1.25',
      lineHeight: 1.2,
      weight: 600,
      letterSpacing: -0.01,
    },
    {
      name: 'Heading 05',
      token: 'heading05',
      size: '18 / 1.125',
      lineHeight: 1.2,
      weight: 700,
      letterSpacing: 0,
    },
    {
      name: 'Heading 06',
      token: 'heading06',
      size: '16 / 1',
      lineHeight: 1.2,
      weight: 700,
      letterSpacing: 0,
    },
    {
      name: 'Body 01',
      token: 'body 01',
      size: '18 / 1.125',
      lineHeight: 1.6,
      weight: 400,
      letterSpacing: 0,
    },
    {
      name: 'Body 02',
      token: 'body02',
      size: '16 / 1',
      lineHeight: 1.6,
      weight: 400,
      letterSpacing: 0,
    },
    {
      name: 'Body 03',
      token: 'body03',
      size: '14 / .875',
      lineHeight: 1.6,
      weight: 400,
      letterSpacing: 0,
    },
    {
      name: 'Button 01',
      token: 'button01',
      size: '16 / 1',
      lineHeight: 1.5,
      weight: 600,
      letterSpacing: 0,
    },
    {
      name: 'Label 01',
      token: 'label01',
      size: '14 / .875',
      lineHeight: 1.5,
      weight: 500,
      letterSpacing: 0.02,
    },
    {
      name: 'Label 02',
      token: 'label02',
      size: '12 / .75',
      lineHeight: 1.5,
      weight: 500,
      letterSpacing: 0.02,
    },
  ];

  return (
    <>
      <Section>
        <h1>Typography</h1>
        <p>
          The type system is used to define the typographic style of headings,
          body text, and GDS components. GDS typography is based on the{' '}
          <Link href="https://rsms.me/inter/">Inter typeface</Link>, offering a
          refined aesthetic and optimal legibility.
        </p>
      </Section>

      <Section>
        <h2>Type scale</h2>
        <p>
          The type scale ensures consistent type usage across the design and can
          be easily customized with <Link href="">typography tokens</Link> as
          needed. It is recommended to use different scales for responsive
          screens.
        </p>

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell component="th" scope="col" align="left">
                  Name
                </TableCell>
                <TableCell component="th" scope="col" align="left">
                  Size (px/rem)
                </TableCell>
                <TableCell component="th" scope="col">
                  Line height (unitless)
                </TableCell>
                <TableCell component="th" scope="col">
                  Weight
                </TableCell>
                <TableCell component="th" scope="col">
                  Letter spacing (em)
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {typographyData.map((data, i) => {
                const { name, token, size, lineHeight, weight, letterSpacing } =
                  data;

                return (
                  <TableRow key={i}>
                    <TableCell scope="row" align="left">
                      <ExampleText $token={token}>{name}</ExampleText>
                    </TableCell>
                    <TableCell>{size}</TableCell>
                    <TableCell align="center">{lineHeight}</TableCell>
                    <TableCell align="center">{weight}</TableCell>
                    <TableCell align="center">{letterSpacing}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Section>
    </>
  );
};

export default Typography;
