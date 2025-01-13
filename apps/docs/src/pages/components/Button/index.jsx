import { space } from '@gene/token';
import { Card, Button } from '@gene/ui';
import Section from '@/components/Section';
import PreviewBlock from '@/components/PreviewBlock';
import { Table, Th, Td } from '@/components/Table';

const ButtonComponent = () => (
  <>
    <Section>
      <h1>Button</h1>
      <p>
        Buttons allow users to perform an action or to navigate to another page.
        GDS offers different kinds of button variations which each suit for
        different needs.
      </p>
    </Section>

    <Section>
      <h2>Variant</h2>
      <p>ddd</p>

      <PreviewBlock>
        <Button variant="fill" expressive={false}>
          Click me
        </Button>
        <Button variant="outline" expressive={false}>
          Click me
        </Button>
        <Button variant="subtle" expressive={false}>
          Click me
        </Button>
      </PreviewBlock>
    </Section>

    <Section>
      <h2>Color</h2>
      <p>ddd</p>

      <PreviewBlock>
        <Button color="primary" expressive={false}>
          Click me
        </Button>
        <Button color="base" expressive={false}>
          Click me
        </Button>
      </PreviewBlock>
    </Section>

    <Section>
      <h2>Expressive</h2>
      <p>ddd</p>

      <PreviewBlock>
        <Button variant="fill">Click me</Button>
        <Button variant="outline">Click me</Button>
        <Button variant="subtle">Click me</Button>
      </PreviewBlock>
    </Section>

    <Section>
      <h2>Props</h2>

      <Table>
        <thead>
          <tr>
            <Th scope="col" align="left">
              Name
            </Th>
            <Th scope="col" align="left">
              Type
            </Th>
            <Th scope="col" align="left">
              Default
            </Th>
            <Th scope="col" align="left">
              Description
            </Th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <Td>variant</Td>
            <Td>'fill' | 'outline' | 'subtle'</Td>
            <Td>'fill'</Td>
            <Td>The component style variation.</Td>
          </tr>
          <tr>
            <Td>color</Td>
            <Td>'primary' | 'base'</Td>
            <Td>'primary'</Td>
            <Td>The color of the component.</Td>
          </tr>
          <tr>
            <Td>expressive</Td>
            <Td>boolean</Td>
            <Td>true</Td>
            <Td>Set the expressive hover animation.</Td>
          </tr>
          <tr>
            <Td>children</Td>
            <Td>node</Td>
            <Td>-</Td>
            <Td>The content of the component.</Td>
          </tr>
        </tbody>
      </Table>
    </Section>
  </>
);

export default ButtonComponent;
