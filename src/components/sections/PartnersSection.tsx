import AnimatedHeading from '@/components/ui/AnimatedHeading';

interface PartnersSectionProps {
  title: string;
  description: string;
}

const partners = [
  {
    name: "Client 1",
    logo: "https://ik.imagekit.io/quadrate/assets/img/clients/client-1.png?updatedAt=1725572926790",
  },
  {
    name: "Client 2",
    logo: "https://ik.imagekit.io/quadrate/assets/img/clients/client-2.png?updatedAt=1725572926836",
  },
  {
    name: "Client 3",
    logo: "https://ik.imagekit.io/quadrate/assets/img/clients/client-3.png?updatedAt=1725572926671",
  },
  {
    name: "Client 4",
    logo: "https://ik.imagekit.io/quadrate/assets/img/clients/client-4.png?updatedAt=1725572926848",
  },
  {
    name: "Zoho",
    logo: "https://ik.imagekit.io/quadrate/assets/img/clients/zoho.png?updatedAt=1725572927006",
  },
  {
    name: "ClickUp",
    logo: "https://ik.imagekit.io/quadrate/assets/img/clients/clickup%20logo@2x.png?updatedAt=1726851526358",
  },
];

export default function PartnersSection({ title, description }: PartnersSectionProps) {
  return (
    <section className="py-16">
      <div className="container">
        <AnimatedHeading text={title} />
        <p className="mt-4 text-gray-600">{description}</p>
        <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center justify-center">
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
