import { Link } from '@jooohyunpark/gene-ui';
import Section from '@/components/Section';
import { HeroImage } from './styles';

const GDS = () => (
  <>
    <Section>
      <h1>Gene Design System</h1>
      <p>
        A gene is the basic unit of heredity. It is passed down from parents to
        offspring and contains the information needed to determine physical and
        biological traits. In a similar way, what you create defines who you
        are.
      </p>
      <p>
        Gene Design System (GDS) is a concise, intelligent framework for
        showcasing creative works. Created by{' '}
        <Link href="https://dev.parkjoohyun.com/">Joohyun Park</Link> for his
        portfolio website, it is intended for his personal use only.
      </p>

      <HeroImage src="/gene_hero.jpg" alt="" />
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

export default GDS;
