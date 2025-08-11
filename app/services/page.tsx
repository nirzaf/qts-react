import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Explore our comprehensive range of technology services including AI consulting, software development, web development, and digital marketing.',
};

export default function ServicesPage() {
  const services = [
    {
      title: 'AI Strategy & Consulting',
      description: 'Strategic AI implementation guidance and consulting services to help businesses leverage artificial intelligence effectively.',
      features: ['AI Strategy Development', 'Technology Assessment', 'Implementation Planning', 'ROI Analysis']
    },
    {
      title: 'Machine Learning Solutions',
      description: 'Custom machine learning models and solutions tailored to your business needs and data requirements.',
      features: ['Predictive Analytics', 'Data Mining', 'Model Development', 'MLOps Implementation']
    },
    {
      title: 'Computer Vision',
      description: 'Advanced computer vision solutions for image recognition, object detection, and visual analysis applications.',
      features: ['Image Recognition', 'Object Detection', 'Video Analysis', 'Quality Control Systems']
    },
    {
      title: 'Natural Language Processing',
      description: 'NLP solutions for text analysis, chatbots, sentiment analysis, and language understanding applications.',
      features: ['Text Analysis', 'Chatbot Development', 'Sentiment Analysis', 'Language Translation']
    },
    {
      title: 'Custom Software Development',
      description: 'Tailored software solutions designed to meet your specific business requirements and objectives.',
      features: ['Web Applications', 'Desktop Software', 'API Development', 'System Integration']
    },
    {
      title: 'Web Development',
      description: 'Modern, responsive web applications built with the latest technologies and best practices.',
      features: ['React/Next.js', 'Node.js Backend', 'Database Design', 'Cloud Deployment']
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
      features: ['iOS Development', 'Android Development', 'React Native', 'Flutter']
    },
    {
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing services to help grow your online presence and reach your target audience.',
      features: ['SEO Optimization', 'Social Media Marketing', 'Content Strategy', 'Analytics & Reporting']
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-4xl font-bold text-primary">Our Services</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          We offer a comprehensive range of technology services to help your business 
          thrive in the digital age.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div key={index} className="bg-card p-6 rounded-lg border hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
            <p className="text-muted-foreground mb-4">{service.description}</p>
            <ul className="space-y-2">
              {service.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center text-sm">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="bg-primary/5 p-8 rounded-lg mt-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Ready to Get Started?</h2>
        <p className="text-muted-foreground mb-6">
          Contact us today to discuss your project requirements and learn how we can help 
          transform your business with innovative technology solutions.
        </p>
        <a 
          href="/contact" 
          className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}