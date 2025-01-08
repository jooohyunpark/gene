import { Link } from '@gene/ui';
import Section from '@/components/Section';
import {} from './styles';

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

      <h3>Human</h3>
      <p>
        GDS is committed to human intelligence. It creates consistent user
        experiences that work for everyone.
      </p>

      <h3>Rational</h3>
      <p>
        GDS values simplicity and purpose. Every element and pattern is designed
        to be clear and intuitive, enhancing productivity.
      </p>

      <h3>Curious</h3>
      <p>
        GDS encourages exploration. It crafts spaces that spark curiosity,
        enabling users to embrace creativity in their works.
      </p>
    </Section>
  </>
);

export default About;
