import React from 'react';
import { motion } from 'framer-motion';
import { Users, Code2, Award, Briefcase } from 'lucide-react';

const stats = [
  {
    name: 'Happy Clients',
    value: '100+',
    description: 'Satisfied customers worldwide',
    icon: Users,
  },
  {
    name: 'Projects Completed',
    value: '250+',
    description: 'Successful project deliveries',
    icon: Code2,
  },
  {
    name: 'Awards Won',
    value: '15+',
    description: 'Industry recognition',
    icon: Award,
  },
  {
    name: 'Years Experience',
    value: '5+',
    description: 'In digital solutions',
    icon: Briefcase,
  },
];

export const StatsSection: React.FC = () => {
  return (
    <section className="bg-primary/5 py-16 sm:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Our Impact in Numbers
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We take pride in our achievements and the trust our clients place in us.
          </p>
        </motion.div>

        <div className="mx-auto mt-16 grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative"
              >
                <div className="absolute -inset-x-4 -inset-y-4 z-0 bg-primary/5 opacity-0 transition duration-300 group-hover:opacity-100 sm:rounded-2xl" />
                <div className="relative space-y-6 rounded-2xl bg-background p-8 shadow-sm ring-1 ring-primary/10 transition duration-300 hover:shadow-md">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
                  </div>

                  <div>
                    <div className="flex items-baseline gap-2">
                      <div className="text-4xl font-bold tracking-tight">
                        {stat.value}
                      </div>
                    </div>
                    <div className="mt-2">
                      <h3 className="font-semibold">{stat.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {stat.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mx-auto mt-16 max-w-2xl text-center"
        >
          <p className="text-lg font-semibold">
            Growing stronger with each success
          </p>
          <p className="mt-2 text-muted-foreground">
            Our numbers reflect our commitment to excellence and continuous growth.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
