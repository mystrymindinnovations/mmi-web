'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

import { jobRoles } from '@/data/jobRoles';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Head from 'next/head';

export function CareersSection() {
    // SEO Structured Data
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "JobPosting",
        "title": "IT Jobs & Careers at MystryMind Innovations",
        "description": "Apply for IT jobs in India at MystryMind Innovations — Web Development Careers, App Development Jobs, UI/UX Designer Roles, and Full Stack Developer Careers.",
        "hiringOrganization": {
            "@type": "Organization",
            "name": "MystryMind Innovations",
            "url": "https://mystrymind.com"
        },
        "employmentType": "Full-time",
        "industry": "Information Technology",
        "jobLocationType": "Remote",
        "applicantLocationRequirements": {
            "@type": "Country",
            "name": "India"
        }
    };

    return (
        <>
            {/* SEO / Meta Tags / Canonical */}
            <Head>
                <title>IT Jobs & Careers | MystryMind Innovations</title>
                <meta
                    name="description"
                    content="Explore job openings at MystryMind Innovations — Web Development Jobs, App Development Careers, UI/UX Designer Roles, and Full Stack Developer Jobs in India."
                />
                <meta
                    name="keywords"
                    content="IT Jobs in India, Web Development Careers, App Development Jobs, UI/UX Designer Roles, Full Stack Developer Careers, Software Development Jobs, Remote Developer Jobs"
                />
                <link rel="canonical" href="https://mystrymind.com/careers" />

                {/* Open Graph */}
                <meta property="og:title" content="IT Jobs & Careers | MystryMind Innovations" />
                <meta
                    property="og:description"
                    content="Explore job openings at MystryMind Innovations — Web Development Jobs, App Development Careers, UI/UX Designer Roles, and Full Stack Developer Jobs in India."
                />
                <meta property="og:url" content="https://mystrymind.com/careers" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://mystrymind.com/assets/logos/og-image.png" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="IT Jobs & Careers | MystryMind Innovations" />
                <meta
                    name="twitter:description"
                    content="Explore job openings at MystryMind Innovations — Web Development Jobs, App Development Careers, UI/UX Designer Roles, and Full Stack Developer Jobs in India."
                />
                <meta name="twitter:image" content="https://mystrymind.com/assets/logos/og-image.png" />

                {/* Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </Head>

            {/* Careers Section */}
            <section className="w-full py-8 md:py-12 bg-secondary" id="careers">
                <div className="container px-4 md:px-6">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl nav-text-gradient">
                            Open IT Positions & Careers in India
                        </h1>
                    </div>

                    <div className="max-w-4xl mx-auto mb-10 text-center">
                        <h2 className="text-muted-foreground">
                            We're always looking for passionate minds — whether you're a student, a self-learner, or an experienced professional. 
                            Join us for <strong>web development</strong>, <strong>mobile app development</strong>, <strong>UI/UX design</strong>, 
                            and <strong>full stack development</strong> careers. Your work will help us deliver world-class software and 
                            mobile applications that support our clients' success.
                        </h2>
                    </div>

                    <div className="max-w-6xl mx-auto">
                        <div className="grid sm:grid-cols-3 lg:grid-cols-3 gap-8 items-stretch">
                            {jobRoles.map((role, i) => {
                                const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: false });

                                return (
                                    <motion.div
                                        key={role.title}
                                        ref={ref}
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                                        transition={{ duration: 0.6, delay: i * 0.15 }}
                                        className="h-full"
                                    >
                                        <Card className="relative bg-white text-center flex flex-col justify-between shadow-lg hover:shadow-xl transition-shadow overflow-hidden h-full min-h-[280px]">
                                            <div className="p-6 flex-grow flex flex-col justify-center">
                                                <h4 className="text-xl font-semibold text-primary">{role.title}</h4>
                                                <p className="text-muted-foreground text-sm mt-2">
                                                    {role.experience}
                                                </p>
                                            </div>

                                            <Button
                                                asChild
                                                className="apply-btn-career px-4 py-2 h-auto m-0 rounded-none absolute bottom-0 right-0"
                                            >
                                                <Link
                                                    href={{ pathname: '/apply', query: { role: role.title } }}
                                                    passHref
                                                    target="_blank"
                                                >
                                                    Apply Now <ArrowRight className="w-4 h-4 ml-1" />
                                                </Link>
                                            </Button>
                                        </Card>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default CareersSection;