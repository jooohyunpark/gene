import { Link, Button } from '@gene/ui';
import Section from '@/components/Section';
import { PrincipleLayout } from './styles';

const About = () => (
  <>
    <Section>
      <h1>Gene Design System</h1>
      <p>
        Gene Design System (GDS) is a concise, intelligent framework for
        showcasing creative works. It started as a side project by{' '}
        <Link href="https://dev.parkjoohyun.com/">Joohyun Park</Link> and is
        intended for his personal use only.
      </p>
    </Section>

    <Section>
      <h2>Principles</h2>

      <PrincipleLayout>
        <h3>Human</h3>
        <p>
          GDS is committed to human intelligence. It creates consistent user
          experiences that work for everyone.
        </p>
      </PrincipleLayout>

      <PrincipleLayout>
        <h3>Rational</h3>
        <p>
          GDS values simplicity and purpose. Every element and pattern is
          designed to be clear and intuitive, enhancing productivity.
        </p>
      </PrincipleLayout>

      <PrincipleLayout>
        <h3>Curious</h3>
        <p>
          GDS encourages exploration. It crafts spaces that spark curiosity,
          enabling users to embrace creativity in their works.
        </p>
      </PrincipleLayout>
    </Section>

    <Section>
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
        worship and observance. Everyone has the right to freedom of opinion and
        expression; this right includes freedom to hold opinions without
        interference and to seek, receive and impart information and ideas
        through any media and regardless of frontiers. Everyone has the right to
        rest and leisure, including reasonable limitation of working hours and
        periodic holidays with pay.
      </p>

      <Button>sdfsdf</Button>

      <Button>sdfsdf</Button>
    </Section>
  </>
);

export default About;
