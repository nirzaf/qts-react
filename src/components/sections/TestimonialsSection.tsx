import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechStart Inc.',
    content: "Quadrate Tech Solutions transformed our digital presence completely. Their team's expertise in web development and digital marketing helped us achieve remarkable growth.",
    image: 'https://ik.imagekit.io/quadrate/assets/img/testimonials/1.jpg',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'CTO, InnovateLabs',
    content: "The custom software solution developed by Quadrate has streamlined our operations significantly. Their attention to detail and technical expertise is outstanding.",
    image: 'https://ik.imagekit.io/quadrate/assets/img/testimonials/2.jpg',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Marketing Director, GrowthX',
    content: "Working with Quadrate has been a game-changer for our marketing efforts. Their strategic approach and innovative solutions have delivered exceptional results.",
    image: 'https://ik.imagekit.io/quadrate/assets/img/testimonials/3.jpg',
    rating: 5,
  },
];

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Don't just take our word for it. Here's what industry leaders have to say about their experience working with us.
          </p>
        </motion.div>

        <div className="mx-auto mt-16 grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="relative h-full overflow-hidden p-6">
                <div className="mb-4 flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-primary text-primary"
                      aria-hidden="true"
                    />
                  ))}
                </div>

                <blockquote className="relative">
                  <p className="text-muted-foreground">{testimonial.content}</p>
                </blockquote>

                <div className="mt-6 flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>

                <div className="absolute right-6 top-6">
                  <svg
                    className="h-8 w-8 text-muted-foreground/20"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mx-auto mt-16 text-center"
        >
          <p className="text-lg font-semibold">
            Ready to transform your business?
          </p>
          <p className="mt-2 text-muted-foreground">
            Join our growing list of satisfied clients and experience the Quadrate difference.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
