'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Linkedin } from 'lucide-react';

const team = [
  {
    name: 'Dr. Sarah Chen',
    role: 'Chief Executive Officer',
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400',
    linkedin: '#',
  },
  {
    name: 'Michael Rodriguez',
    role: 'Head of Healthcare',
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400',
    linkedin: '#',
  },
  {
    name: 'Dr. Emily Thompson',
    role: 'Director of Operations',
    image:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=400',
    linkedin: '#',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function TeamSection() {
  return (
    <section>
      <div className="container">
        <motion.h2
          className="mb-12 text-center text-3xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Meet Our Leadership Team
        </motion.h2>
        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {team.map((member) => (
            <motion.div key={member.name} variants={itemVariants}>
              <Card className="overflow-hidden">
                <div className="aspect-square relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-primary hover:text-primary/80"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span>Connect on LinkedIn</span>
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
