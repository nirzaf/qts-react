import React from 'react';
import { motion } from 'framer-motion';
import {
  FiServer,
  FiShield,
  FiGlobe,
  FiUsers,
  FiDatabase,
  FiCloud,
  FiCpu,
  FiHardDrive,
  FiLock,
  FiMail,
  FiRefreshCw,
  FiLifeBuoy,
  FiInfo
} from 'react-icons/fi';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { PricingPlan } from '@/data/pricingData';

interface PricingCardProps {
  plan: PricingPlan;
  isPopular: boolean;
}

// Feature icon mapping with descriptions
const featureIcons = {
  'Server Resources': {
    icon: FiServer,
    description: 'Dedicated server resources for optimal performance'
  },
  'Security Features': {
    icon: FiShield,
    description: 'Advanced security measures to protect your data'
  },
  'Domain Names': {
    icon: FiGlobe,
    description: 'Custom domain name management'
  },
  'User Accounts': {
    icon: FiUsers,
    description: 'Multiple user account management'
  },
  'Database Storage': {
    icon: FiDatabase,
    description: 'Secure and scalable database storage'
  },
  'Cloud Backup': {
    icon: FiCloud,
    description: 'Automated cloud backup solutions'
  },
  'CPU Allocation': {
    icon: FiCpu,
    description: 'Dedicated CPU resources'
  },
  'Storage Space': {
    icon: FiHardDrive,
    description: 'Expandable storage capacity'
  },
  'SSL Certificate': {
    icon: FiLock,
    description: 'Secure SSL encryption'
  },
  'Email Services': {
    icon: FiMail,
    description: 'Professional email hosting'
  },
  'Auto Updates': {
    icon: FiRefreshCw,
    description: 'Automatic system updates'
  },
  'Support': {
    icon: FiLifeBuoy,
    description: '24/7 technical support'
  }
};

export const PricingCard: React.FC<PricingCardProps> = ({ plan, isPopular }) => {
  return (
    <TooltipProvider>
      <motion.div
        className={`h-full p-8 rounded-2xl border-2 ${isPopular
            ? 'border-primary shadow-lg'
            : 'border-border'
          } bg-card flex flex-col justify-between relative`}
        whileHover={{ y: -5 }}
      >
        {/* Plan Header */}
        <div>
          {isPopular && (
            <span className="inline-block px-4 py-1 mb-4 text-sm font-medium text-primary-foreground bg-primary rounded-full">
              Most Popular
            </span>
          )}
          <h3 className="text-2xl font-bold text-foreground">{plan.name}</h3>
          <p className="mt-2 text-muted-foreground text-base">{plan.description}</p>
          <div className="mt-4 mb-6">
            <span className="text-4xl font-bold text-foreground">{plan.price}</span>
            <span className="text-muted-foreground">/year</span>
          </div>
        </div>

        {/* Features List */}
        <div className="flex-grow">
          <ul className="space-y-4 mb-8">
            {plan.features.map((feature, index) => {
              const featureInfo = featureIcons[feature as keyof typeof featureIcons];
              const Icon = featureInfo?.icon || FiServer;

              return (
                <motion.li
                  key={index}
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="flex-shrink-0">
                    <Icon
                      size={18}
                      className={`${isPopular ? 'text-primary' : 'text-foreground'}`}
                    />
                  </span>
                  <span className="text-foreground font-medium text-sm flex-grow">
                    {feature}
                  </span>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button className="p-1 rounded-full hover:bg-primary/5 transition-colors">
                        <FiInfo
                          size={16}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{featureInfo?.description}</p>
                    </TooltipContent>
                  </Tooltip>
                </motion.li>
              );
            })}
          </ul>
        </div>

        {/* Action Button */}
        <motion.a
          href={plan.ctaLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-full py-3 px-6 rounded-xl text-base font-medium transition-colors text-center ${isPopular
              ? 'bg-primary text-primary-foreground hover:bg-primary/90'
              : 'bg-muted text-foreground hover:bg-muted/80'
            }`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {plan.ctaText}
        </motion.a>
      </motion.div>
    </TooltipProvider>
  );
};

export default PricingCard;
