export interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular: boolean;
  ctaText: string;
  ctaLink: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    name: 'Starter',
    price: '299,999',
    description: 'Perfect for small businesses starting their digital journey',
    features: [
      'Basic website development',
      'Mobile responsive design',
      'Contact form integration',
      '5 pages included',
      'Basic SEO optimization',
      '3 months support',
      'Basic security features',
      'Standard hosting setup'
    ],
    popular: false,
    ctaText: 'Get Started',
    ctaLink: 'https://quadratetechsolutions.zohobookings.com/#/quadratetechsolutions'
  },
  {
    name: 'Professional',
    price: '499,999',
    description: 'Ideal for growing businesses needing advanced features',
    features: [
      'Advanced website development',
      'Custom animations & interactions',
      'Content Management System',
      '10 pages included',
      'Advanced SEO optimization',
      '6 months support',
      'Enhanced security features',
      'Premium hosting setup',
      'Social media integration',
      'Analytics dashboard'
    ],
    popular: true,
    ctaText: 'Get Started',
    ctaLink: 'https://quadratetechsolutions.zohobookings.com/#/quadratetechsolutions'
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Tailored solutions for large organizations',
    features: [
      'Custom web application development',
      'Advanced system integration',
      'Unlimited pages',
      'Enterprise-grade security',
      'Priority 24/7 support',
      'Custom feature development',
      'Performance optimization',
      'Load balancing setup',
      'Multi-language support',
      'Dedicated project manager'
    ],
    popular: false,
    ctaText: 'Contact Us',
    ctaLink: 'https://quadratetechsolutions.zohobookings.com/#/quadratetechsolutions'
  }
];
