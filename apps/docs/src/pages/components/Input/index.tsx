import { Table, Input } from '@jooohyunpark/gene-ui';
import Section from '@/components/Section';
import PreviewBlock from '@/components/PreviewBlock';
import Code from '@/components/Code';

const InputComponent = () => (
  <>
    <Section>
      <h1>Input</h1>
      <p>An input allows users to enter short, free-form text data.</p>
    </Section>

    <Section>
      <h2>Default</h2>

      <PreviewBlock code={`<Input label="Password" required/>`}>
        <Input label="Password" required />
      </PreviewBlock>
    </Section>

    <Section>
      <h2>Props</h2>

      <Table.Container>
        <Table>
          <Table.Head>
            <Table.Row>
              <Table.Cell scope="col">Name</Table.Cell>
              <Table.Cell scope="col">Type</Table.Cell>
              <Table.Cell scope="col">Default</Table.Cell>
              <Table.Cell scope="col">Description</Table.Cell>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            <Table.Row>
              <Table.Cell>
                <Code>label</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>string</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>''</Code>
              </Table.Cell>
              <Table.Cell>Label for description.</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Code>required</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>boolean</Code>
              </Table.Cell>
              <Table.Cell>
                <Code>false</Code>
              </Table.Cell>
              <Table.Cell>
                A value is required or must be checked for the form to be
                submittable
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Table.Container>
    </Section>
  </>
);

export default InputComponent;
