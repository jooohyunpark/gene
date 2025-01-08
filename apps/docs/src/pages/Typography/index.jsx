import { Link } from '@gene/ui';
import Section from '@/components/Section';
import { StyledTable, ExampleText, TableLayout } from './styles';

const Typography = () => (
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

      <TableLayout>
        <StyledTable>
          <thead>
            <tr>
              <th scope="col">Type</th>
              <th scope="col">Size (px/rem)</th>
              <th scope="col">Line height (unitless)</th>
              <th scope="col">Weight</th>
              <th scope="col">Letter spacing (em)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <ExampleText $type="heading01">Heading 01</ExampleText>
              </td>
              <td>48 / 3</td>
              <td>1</td>
              <td>600</td>
              <td>-0.02</td>
            </tr>

            <tr>
              <td>
                <ExampleText $type="heading02">Heading 02</ExampleText>
              </td>
              <td>32 / 2</td>
              <td>1</td>
              <td>600</td>
              <td>-0.02</td>
            </tr>

            <tr>
              <td>
                <ExampleText $type="heading03">Heading 03</ExampleText>
              </td>
              <td>24 / 1.5</td>
              <td>1.2</td>
              <td>600</td>
              <td>-0.01</td>
            </tr>

            <tr>
              <td>
                <ExampleText $type="heading04">Heading 04</ExampleText>
              </td>
              <td>20 / 1.25</td>
              <td>1.2</td>
              <td>600</td>
              <td>-0.01</td>
            </tr>

            <tr>
              <td>
                <ExampleText $type="heading05">Heading 05</ExampleText>
              </td>
              <td>18 / 1.125</td>
              <td>1.2</td>
              <td>700</td>
              <td>0</td>
            </tr>

            <tr>
              <td>
                <ExampleText $type="heading06">Heading 06</ExampleText>
              </td>
              <td>16 / 1</td>
              <td>1.2</td>
              <td>700</td>
              <td>0</td>
            </tr>

            <tr>
              <td>
                <ExampleText $type="body01">Body 01</ExampleText>
              </td>
              <td>18 / 1.125</td>
              <td>1.6</td>
              <td>400</td>
              <td>0</td>
            </tr>

            <tr>
              <td>
                <ExampleText $type="body02">Body 02</ExampleText>
              </td>
              <td>16 / 1</td>
              <td>1.6</td>
              <td>400</td>
              <td>0</td>
            </tr>

            <tr>
              <td>
                <ExampleText $type="body03">Body 03</ExampleText>
              </td>
              <td>14 / .875</td>
              <td>1.6</td>
              <td>400</td>
              <td>0</td>
            </tr>

            <tr>
              <td>
                <ExampleText $type="button01">Button 01</ExampleText>
              </td>
              <td>16 / 1</td>
              <td>1.5</td>
              <td>600</td>
              <td>0</td>
            </tr>

            <tr>
              <td>
                <ExampleText $type="label01">Label 01</ExampleText>
              </td>
              <td>14 / .875</td>
              <td>1.5</td>
              <td>500</td>
              <td>0.02</td>
            </tr>

            <tr>
              <td>
                <ExampleText $type="label02">Label 02</ExampleText>
              </td>
              <td>12 / .75</td>
              <td>1.5</td>
              <td>500</td>
              <td>0.02</td>
            </tr>
          </tbody>
        </StyledTable>
      </TableLayout>
    </Section>
  </>
);

export default Typography;
