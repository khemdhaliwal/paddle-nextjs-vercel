export interface Tier {
  name: string;
  id: 'starter' | 'pro' | 'advanced';
  icon: string;
  description: string;
  features: string[];
  featured: boolean;
  priceId: Record<string, string>;
}

export const PricingTier: Tier[] = [
  {
    name: 'Starter',
    id: 'starter',
    icon: '/assets/icons/price-tiers/free-icon.svg',
    description: 'Ideal for individuals who want to get started with simple design tasks.',
    features: ['1 workspace', 'Limited collaboration', 'Export to PNG and SVG'],
    featured: false,
    priceId: { month: 'pri_01jqrvr86ha12gja90vbr7mm4q', year: 'pri_01jqrwmfffn4eq10zr7vhf6v75' },
  },
  {
    name: 'Growth',
    id: 'growth',
    icon: '/assets/icons/price-tiers/basic-icon.svg',
    description: 'Enhanced design tools for scaling teams who need more flexibility.',
    features: ['Integrations', 'Unlimited workspaces', 'Advanced editing tools', 'Everything in Starter'],
    featured: true,
    priceId: { month: 'pri_01jqrvtkk1cdhczgxmytw3tnbt', year: 'pri_01jqrwk2xbjjt253wq0rd06d34' },
  },
  {
    name: 'Pro',
    id: 'pro',
    icon: '/assets/icons/price-tiers/pro-icon.svg',
    description: 'Powerful tools designed for extensive collaboration and customization.',
    features: [
      'Single sign on (SSO)',
      'Advanced version control',
      'Assets library',
      'Guest accounts',
      'Everything in Pro',
    ],
    featured: false,
    priceId: { month: 'pri_01jqrw60vde6asstex5t24zbnf', year: 'pri_01jqrwhvkp1wb8kva6h3ftw7pq' },
  },
];
