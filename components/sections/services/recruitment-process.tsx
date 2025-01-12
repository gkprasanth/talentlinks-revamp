"use client"

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, FileCheck, Users, UserCheck, Handshake, Award, ArrowRight } from "lucide-react";
import Link from "next/link";

const processSteps = [
  {
    icon: Search,
    title: "Initial Consultation",
    description: "Understanding your unique requirements",
    details: [
      "In-depth analysis of your organization's needs",
      "Understanding company culture and values",
      "Defining role requirements and expectations",
      "Timeline and process planning",
    ],
    duration: "1-2 Days",
    metrics: {
      meetings: "2-3 sessions",
      deliverables: "Detailed requirement document",
      outcome: "Clear hiring roadmap",
    },
  },
  {
    icon: FileCheck,
    title: "Strategy Development",
    description: "Creating a tailored recruitment plan",
    details: [
      "Custom sourcing strategy development",
      "Target candidate profile creation",
      "Assessment criteria establishment",
      "Timeline and milestone setting",
    ],
    duration: "2-3 Days",
    metrics: {
      meetings: "Strategy workshop",
      deliverables: "Recruitment strategy document",
      outcome: "Approved action plan",
    },
  },
  {
    icon: Users,
    title: "Candidate Sourcing",
    description: "Finding the perfect match",
    details: [
      "Multi-channel talent sourcing",
      "Proactive candidate outreach",
      "Database and network leveraging",
      "Market mapping and analysis",
    ],
    duration: "1-2 Weeks",
    metrics: {
      meetings: "Weekly progress updates",
      deliverables: "Candidate pipeline report",
      outcome: "Qualified candidate pool",
    },
  },
  {
    icon: UserCheck,
    title: "Screening & Assessment",
    description: "Evaluating potential candidates",
    details: [
      "Initial candidate screening",
      "Technical assessments",
      "Cultural fit evaluation",
      "Background verification",
    ],
    duration: "1-2 Weeks",
    metrics: {
      meetings: "Assessment reviews",
      deliverables: "Detailed candidate profiles",
      outcome: "Shortlisted candidates",
    },
  },
  {
    icon: Handshake,
    title: "Interview Process",
    description: "Facilitating seamless interactions",
    details: [
      "Interview coordination",
      "Feedback collection and analysis",
      "Offer negotiation support",
      "Candidate relationship management",
    ],
    duration: "1-3 Weeks",
    metrics: {
      meetings: "Interview rounds",
      deliverables: "Interview feedback reports",
      outcome: "Final candidate selection",
    },
  },
  {
    icon: Award,
    title: "Onboarding Support",
    description: "Ensuring successful transitions",
    details: [
      "Offer letter coordination",
      "Documentation assistance",
      "Onboarding checklist management",
      "30-60-90 day check-ins",
    ],
    duration: "1-2 Weeks",
    metrics: {
      meetings: "Onboarding sessions",
      deliverables: "Onboarding documentation",
      outcome: "Successful placement",
    },
  },
];

export function RecruitmentProcess() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Our Recruitment Process
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            A streamlined, data-driven approach to finding your next great hire. Our proven 6-step process combines industry expertise with modern recruitment methodologies.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-primary/20 via-primary/50 to-primary/20 hidden lg:block" />

          <div className="space-y-16">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative"
              >
                <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-6 items-center`}>                  
                  <div className="flex-1">
                    <Card className="relative h-full transition-all hover:shadow-md hover:-translate-y-1">
                      <div className="absolute -top-3 -left-3 w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-medium shadow-md">
                        {index + 1}
                      </div>
                      <CardContent className="p-4 md:p-6">
                        <div className="flex items-start gap-3">
                          <step.icon className="h-6 w-6 md:h-8 md:w-8 text-primary shrink-0" />
                          <div className="space-y-3 w-full">
                            <div>
                              <h3 className="text-lg font-semibold mb-1">{step.title}</h3>
                              <p className="text-muted-foreground text-sm md:text-base">{step.description}</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <h4 className="font-medium mb-2 text-sm">Key Activities</h4>
                                <ul className="space-y-2">
                                  {step.details.map((detail) => (
                                    <li key={detail} className="flex items-center gap-2 text-sm">
                                      <ArrowRight className="h-3 w-3 text-primary shrink-0" />
                                      {detail}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div className="space-y-3">
                                <div>
                                  <h4 className="font-medium mb-2 text-sm">Process Metrics</h4>
                                  <div className="space-y-1 text-sm">
                                    <p><span className="text-muted-foreground">Meetings:</span> {step.metrics.meetings}</p>
                                    <p><span className="text-muted-foreground">Deliverables:</span> {step.metrics.deliverables}</p>
                                    <p><span className="text-muted-foreground">Outcome:</span> {step.metrics.outcome}</p>
                                  </div>
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                  <span className="font-medium">Duration:</span>
                                  <span className="px-2 py-1 bg-primary/10 rounded-full text-primary">
                                    {step.duration}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="hidden lg:flex w-14 justify-center">
                    <div className="w-3 h-3 rounded-full bg-primary shadow-md" />
                  </div>
                  <div className="flex-1" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-base md:text-lg text-muted-foreground mb-6">
            Ready to transform your hiring process with our expert recruitment solutions?
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Start Your Hiring Journey</Link>
          </Button>
        </motion.div>
      </div>
    </section>

          )}
