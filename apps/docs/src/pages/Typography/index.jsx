import { Link, Button } from '@gene/ui';
import Section from '@/components/Section';
import { TypographyLayout } from './styles';

const Typography = () => (
  <>
    <Section>
      <h1>Typography</h1>
      <p>
        Typography is used to define typographic style of headings, body text,
        and GDS components. Font size tokens allow different scales to be used
        for responsive screen sizes.
      </p>
    </Section>

    <Section>
      <h2>Type Scale</h2>

      <TypographyLayout>
        <h1>Heading 01</h1>
        <h2>Heading 02</h2>
        <h3>Heading 03</h3>
        <h4>Heading 04</h4>
        <h5>Heading 05</h5>
        <h6>Heading 06</h6>
        <p>
          Everyone has the right to freedom of thought, conscience and religion;
          this right includes freedom to change his religion or belief, and
          freedom, either alone or in community with others and in public or
          private, to manifest his religion or belief in teaching, practice,
          worship and observance. Everyone has the right to freedom of opinion
          and expression; this right includes freedom to hold opinions without
          interference and to seek, receive and impart information and ideas
          through any media and regardless of frontiers. Everyone has the right
          to rest and leisure, including reasonable limitation of working hours
          and periodic holidays with pay.
        </p>
        <Button>sdfsdf</Button>
      </TypographyLayout>
    </Section>
  </>
);

export default Typography;
