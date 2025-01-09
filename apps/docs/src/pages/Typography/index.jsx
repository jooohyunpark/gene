import { Link } from '@gene/ui';
import Section from '@/components/Section';
import { Table, Th, Td } from '@/components/Table';
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

        <Table>
          <thead>
            <tr>
              <Th scope="col" align="left">
                Name
              </Th>
              <Th scope="col" align="left">
                Size (px/rem)
              </Th>
              <Th scope="col">Line height (unitless)</Th>
              <Th scope="col">Weight</Th>
              <Th scope="col">Letter spacing (em)</Th>
            </tr>
          </thead>
          <tbody>
            {typographyData.map((data, i) => {
              const { name, token, size, lineHeight, weight, letterSpacing } =
                data;

              return (
                <tr key={i}>
                  <Th scope="row" align="left">
                    <ExampleText $token={token}>{name}</ExampleText>
                  </Th>
                  <Td>{size}</Td>
                  <Td align="center">{lineHeight}</Td>
                  <Td align="center">{weight}</Td>
                  <Td align="center">{letterSpacing}</Td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Section>
    </>
  );
};

export default Typography;
