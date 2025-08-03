
'use client';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import type { JobRole } from '@/types/JobRole';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface CareersSectionProps {
    jobRoles: JobRole[];
}

export function CareersSection({ jobRoles }: CareersSectionProps) {
    return (
        <section className="w-full py-8 md:py-12 bg-secondary" id="careers">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl nav-text-gradient">Open Positions</h2>
                </div>
                <div className="max-w-4xl mx-auto mb-10 text-center">
                    <p className="text-muted-foreground">
                        We're always looking for passionate minds — whether you're a student, a self-learner, or an experienced developer. If you’re hungry to build, solve, and grow, you’ll fit right in.
                    </p>
                </div>
                <div className="max-w-4xl mx-auto animate-slide-in-from-bottom">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {jobRoles.map((role) => (
                            <Card key={role.title} className="bg-white text-center p-0 flex flex-col justify-between shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                                <div className="p-6">
                                    <h4 className="text-xl font-semibold text-primary">{role.title}</h4>
                                    <p className="text-muted-foreground text-sm mt-1">{role.experience}</p>
                                </div>
                                <div className="mt-auto text-right">
                                    <Button asChild className="apply-btn-career px-4 py-2 h-auto">
                                        <Link href={{ pathname: './apply', query: { role: role.title } }} passHref target="_blank">
                                            Apply Now <ArrowRight className="w-4 h-4 ml-1" />
                                        </Link>
                                    </Button>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
