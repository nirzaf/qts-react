export interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
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
      "3 Months Support"
    ]
  },
  {
    name: "Professional",
    price: "999",
    description: "Ideal for growing businesses needing comprehensive solutions",
    features: [
      "Custom Website Development",
      "Unlimited Pages",
      "E-commerce Integration",
      "Advanced SEO Package",
      "12 Months Support",
      "Performance Optimization"
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
      "Scalable Infrastructure"
    ]
  }
];
