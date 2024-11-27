export interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    price: "499",
    description: "Perfect for small businesses starting their digital journey",
    features: [
      "Basic Website Development",
      "5 Pages Design",
      "Mobile Responsive",
      "Basic SEO Setup",
      "3 Months Support",
      "Performance Optimization",
      "Security Essentials"
    ]
  },
  {
    name: "Professional",
    price: "999",
    description: "Ideal for growing businesses needing comprehensive solutions",
    popular: true,
    features: [
      "Custom Website Development",
      "Unlimited Pages",
      "E-commerce Integration",
      "Advanced SEO Package",
      "12 Months Support",
      "Performance Optimization",
      "Enhanced Security",
      "Analytics Integration"
    ]
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Tailored solutions for large organizations",
    features: [
      "Custom Software Development",
      "Enterprise Integration",
      "Dedicated Support Team",
      "Custom Features",
      "Priority Support",
      "Scalable Infrastructure",
      "Advanced Security",
      "24/7 Monitoring"
    ]
  }
];
