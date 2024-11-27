interface ButtonConfig {
  text: string;
  href: string;
}

interface Rating {
  score: number;
  count: string;
}

export interface HeroData {
  backgroundImage: string;
  heroImage: {
    src: string;
    alt: string;
  };
  primaryButton: ButtonConfig;
  secondaryButton: ButtonConfig;
  rating?: Rating;
}

export const defaultHeroData: HeroData = {
  backgroundImage: 'https://ik.imagekit.io/quadrate/assets/img/hero-bg.png?updatedAt=1718024113863',
  heroImage: {
    src: 'https://ik.imagekit.io/quadrate/assets/img/hero-image.avif?updatedAt=1725558115458',
    alt: 'Digital Solutions'
  },
  primaryButton: {
    text: 'Get Started',
    href: '/contact'
  },
  secondaryButton: {
    text: 'Learn More',
    href: '/services'
  },
  rating: {
    score: 4.9,
    count: '2.5k+'
  }
};
