import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

interface Article {
  isRightSection: boolean;
  title: string;
  subTitle: string;
  btnExists?: boolean;
  btnTitle?: string;
  btnURL?: string;
  single?: boolean;
  img?: string;
  imgAlt?: string;
  imgOne?: string;
  imgOneAlt?: string;
  imgTwo?: string;
  imgTwoAlt?: string;
}

const articles: Article[] = [
  {
    isRightSection: true,
    title: 'Delivering Expert IT Guidance',
    subTitle:
      'Embarking on a digital transformation project can be overwhelming. With our professional consultation services, we guide you through every stage, ensuring you make informed decisions. Whether you\'re a small business or a large enterprise, our experts offer tailored advice on technology selection, project scope, and compliance with industry standards.',
    single: false,
    imgOne: 'https://ik.imagekit.io/quadrate/assets/img/features-2.png?updatedAt=1718024113386',
    imgOneAlt: 'Digital blueprints and tablet with IT infrastructure plans.',
    imgTwo: 'https://ik.imagekit.io/quadrate/wp8358553-software-developer-wallpapers.jpg?updatedAt=1724450586486',
    imgTwoAlt: 'IT professional working in a modern office',
  },
  {
    isRightSection: false,
    title: 'Provide Business Mail for Lower Price',
    subTitle:
      'We offer cost-effective business email solutions to enhance your communication and productivity. Our services include popular platforms such as Microsoft 365, Google Workspace, and Zoho One. With our expertise, you can enjoy professional email services tailored to your business needs at competitive prices.',
    img: 'https://ik.imagekit.io/quadrate/assets/img/features.png?updatedAt=1718024113900',
    imgAlt: 'Comparison of business email solutions',
    btnExists: true,
    btnTitle: 'Learn More',
    btnURL: 'https://quadratetechsolutions.zohobookings.com/#/quadratetechsolutions',
  },
  {
    isRightSection: true,
    title: 'Microsoft 365 with Business Integration',
    subTitle:
      'Unlock the full potential of your business with our Microsoft 365 integration services. We seamlessly incorporate Business Intelligence solutions into your workflow, enabling data-driven decision-making and enhanced productivity. Our expert team ensures a smooth transition, customizing Microsoft 365 tools to align with your specific business needs and goals.',
    single: false,
    imgOne: 'https://ik.imagekit.io/quadrate/assets/img/values-1.png?updatedAt=1718024118843',
    imgOneAlt: 'Business professionals collaborating using Microsoft 365 tools',
    imgTwo: 'https://ik.imagekit.io/quadrate/assets/img/values-2.png?updatedAt=1718024118844',
    imgTwoAlt: 'Visual representation of Business Intelligence dashboard',
  },
  {
    isRightSection: false,
    title: 'Our Commitment to Excellence',
    subTitle:
      'Our Commitment to be\nFast\nWe connect you with experts in record time,\nno more waiting for answers.\nPrecise\nLaser-focused searches find the exact\nexperts with the knowledge you need.\n\nCustomized\nWe tailor solutions to your\nspecific challenges, not a\none-size-fits-all approach.',
    img: 'https://ik.imagekit.io/quadrate/assets/img/values-3.png?updatedAt=1718024119302',
    imgAlt: 'Team of experts collaborating on tailored IT solutions',
  },
  {
    isRightSection: true,
    title: 'Crafting Bespoke IT Strategies for Unique Challenges',
    subTitle:
      'For our larger enterprise clients, Quadrate Tech Solutions offers custom IT solutions designed to meet specific industry challenges. By understanding your unique needs, we engineer tailored strategies aimed at optimizing your operations, enhancing efficiency, and driving your business forward in the digital age.',
    single: false,
    imgOne: 'https://ik.imagekit.io/quadrate/Best-Front-End-and-Back-End-Web-Development-Framework-1-1024x614.jpg?updatedAt=1724450412452',
    imgOneAlt: 'In-progress IT infrastructure upgrade',
    imgTwo: 'https://ik.imagekit.io/quadrate/assets/img/features-3.png?updatedAt=1718024113749',
    imgTwoAlt: 'Modern data center under construction',
    btnExists: true,
    btnTitle: 'Read more',
    btnURL: 'https://quadratetechsolutions.zohobookings.com/#/quadratetechsolutions',
  },
];

const ServicesPage: React.FC = () => {
  return (
    <>
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container space-y-6 py-8 md:py-12 lg:py-24"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h1 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Expert IT Consultation Services
          </h1>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            At Quadrate Tech Solutions, we take pride in providing comprehensive solutions and exceptional service in the IT industry. Our experienced team is dedicated to supporting your project from consultation to completion with a range of specialized services.
          </p>
          <Button asChild className="mt-8">
            <a href="https://quadratetechsolutions.zohobookings.com/#/quadratetechsolutions">
              Schedule a Consultation
            </a>
          </Button>
        </div>
      </motion.section>

      {articles.map((article, index) => (
        <motion.section 
          key={index} 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="container py-8 md:py-12"
        >
          <div className={`flex flex-col gap-8 ${article.isRightSection ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl font-bold tracking-tight">{article.title}</h2>
              <p className="text-muted-foreground leading-relaxed">{article.subTitle}</p>
              {article.btnExists && (
                <Button asChild className="mt-4">
                  <a href={article.btnURL}>{article.btnTitle}</a>
                </Button>
              )}
            </div>
            <motion.div 
              className="flex-1"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              {article.single ? (
                <img
                  src={article.img}
                  alt={article.imgAlt}
                  className="rounded-lg object-cover w-full h-full shadow-lg"
                />
              ) : (
                <div className="grid grid-cols-2 gap-4">
                  <img
                    src={article.imgOne}
                    alt={article.imgOneAlt}
                    className="rounded-lg object-cover w-full h-full shadow-lg"
                  />
                  <img
                    src={article.imgTwo}
                    alt={article.imgTwoAlt}
                    className="rounded-lg object-cover w-full h-full shadow-lg"
                  />
                </div>
              )}
            </motion.div>
          </div>
        </motion.section>
      ))}

      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container py-8 md:py-12 lg:py-24 bg-muted/50 rounded-lg"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight">Quadrate Tech: Your Affordable Microsoft 365 Partner</h2>
          <p className="text-muted-foreground">
            We offer competitive pricing for Microsoft 365 solutions, including Microsoft Exchange and the Office suite, without compromising on quality or support.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col items-center space-y-4 text-center p-6 bg-background rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-bold">Tailored</h3>
            <p className="text-sm text-muted-foreground">
              Customizable packages to meet your specific needs and budget
            </p>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col items-center space-y-4 text-center p-6 bg-background rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-bold">Expert</h3>
            <p className="text-sm text-muted-foreground">
              Guidance from our team of Microsoft experts
            </p>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col items-center space-y-4 text-center p-6 bg-background rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-bold">Seamless</h3>
            <p className="text-sm text-muted-foreground">
              Migration with minimal downtime and disruption
            </p>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default ServicesPage;
