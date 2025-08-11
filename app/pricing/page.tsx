import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Explore our competitive pricing plans for AI consulting, software development, and digital marketing services.',
};

export default function PricingPage() {
  const pricingPlans = [
    {
      name: 'Starter',
      price: '$2,500',
      period: 'per project',
      description: 'Perfect for small businesses and startups looking to get started with digital solutions.',
      features: [
        'Basic Web Development',
        'Responsive Design',
        'SEO Optimization',
        'Content Management System',
        '3 Months Support',
        'Basic Analytics Setup'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$5,000',
      period: 'per project',
      description: 'Ideal for growing businesses that need comprehensive digital solutions and AI integration.',
      features: [
        'Advanced Web Applications',
        'Custom Software Development',
        'AI Integration',
        'Database Design',
        'API Development',
        '6 Months Support',
        'Advanced Analytics',
        'Performance Optimization'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'quote',
      description: 'Tailored solutions for large enterprises with complex requirements and scalability needs.',
      features: [
        'Full-scale AI Solutions',
        'Machine Learning Models',
        'Computer Vision Systems',
        'NLP Applications',
        'Cloud Infrastructure',
        '12 Months Support',
        'Dedicated Team',
        'Custom Integrations',
        'Training & Consultation'
      ],
      popular: false
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-4xl font-bold text-primary">Pricing Plans</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Choose the perfect plan for your business needs. All plans include our commitment 
          to quality and ongoing support.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {pricingPlans.map((plan, index) => (
          <div 
            key={index} 
            className={`relative bg-card p-8 rounded-lg border ${
              plan.popular ? 'border-primary shadow-lg scale-105' : ''
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
            )}
            
            <div className="text-center mb-6">
              <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
              <div className="mb-2">
                <span className="text-3xl font-bold text-primary">{plan.price}</span>
                <span className="text-muted-foreground ml-2">{plan.period}</span>
              </div>
              <p className="text-muted-foreground text-sm">{plan.description}</p>
            </div>

            <ul className="space-y-3 mb-8">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center text-sm">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  {feature}
                </li>
              ))}
            </ul>

            <a 
              href="/contact" 
              className={`w-full inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-medium transition-colors ${
                plan.popular 
                  ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
                  : 'border border-input bg-background hover:bg-accent hover:text-accent-foreground'
              }`}
            >
              Get Started
            </a>
          </div>
        ))}
      </div>

      <div className="bg-card p-8 rounded-lg border">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-semibold mb-4">Custom Solutions Available</h2>
          <p className="text-muted-foreground">
            Need something specific? We offer custom pricing for unique requirements, 
            long-term partnerships, and enterprise-level solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <h3 className="font-semibold mb-2">Flexible Payment Terms</h3>
            <p className="text-sm text-muted-foreground">
              We offer flexible payment schedules to accommodate your budget and project timeline.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">No Hidden Fees</h3>
            <p className="text-sm text-muted-foreground">
              Transparent pricing with no surprise costs. What you see is what you pay.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Money-back Guarantee</h3>
            <p className="text-sm text-muted-foreground">
              We stand behind our work with a satisfaction guarantee on all our services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}