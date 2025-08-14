'use client';

import { EstimateOutput, getEstimate } from '@/ai/flows/getEstimate';
import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogFooter, DialogHeader } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Download, RefreshCw } from 'lucide-react';
import React from 'react';
import { services } from '@/data/services';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface EstimatePDFContentProps {
  estimationResult: EstimateOutput;
}

const EstimatePDFContent: React.FC<EstimatePDFContentProps> = ({ estimationResult }) => (
  <div className="p-8 font-sans text-gray-800 bg-white w-[800px]">
    <div className="flex flex-col space-y-4 mb-6">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 border-b pb-4">
        <div className="w-32 h-auto"><Logo /></div>
        <div className="text-right">
          <h1 className="text-2xl font-bold text-gray-800">Project Estimate</h1>
          <p className="text-sm text-gray-500">Generated on: {new Date().toLocaleDateString()}</p>
        </div>
      </div>
      {estimationResult.serviceType && (
        <div className="text-center">
          <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-2 rounded">
            Service Type: {estimationResult.serviceType}
          </span>
        </div>
      )}
      <div className="text-center text-sm text-gray-500 max-w-xl mx-auto">
        <p>This estimate is generated using AI and is intended for reference only. Actual project costs and timelines may vary in real-world execution</p>
      </div>
    </div>

    <div className="mb-10">
      <h2 className="text-xl font-semibold mb-4 text-blue-700">Timeline Breakdown</h2>
      <div className="space-y-4">
        {estimationResult.timeline.map((item, index) => (
          <div key={index} className="flex justify-between items-center py-2 border-b border-gray-200">
            <span className="font-medium text-gray-700">{item.step}</span>
            <span className="text-primary font-bold">{item.duration}</span>
          </div>
        ))}
      </div>
    </div>

    <div className="flex justify-end items-center mt-8 pt-4 border-t-2 border-gray-800">
      <div className="text-right">
        <p className="text-lg font-semibold text-gray-700">Total Estimated Timeline:</p>
        <p className="text-2xl font-bold text-primary">{estimationResult.totalDuration}</p>
      </div>
    </div>

    <div className="mt-16 text-center text-xs text-gray-400 space-y-1">
      <p>Tech-Powered Solutions | Innovation-Driven Services<br />🚀 Turning Ideas into Scalable Digital Realities</p>
      <p>© {new Date().getFullYear()} MystryMind Innovations. All rights reserved.</p>
    </div>
  </div>
);

interface GetEstimateSectionProps {
    serviceType: string;
    setServiceType: (value: string) => void;
    projectDescription: string;
    setProjectDescription: (value: string) => void;
    isSubmitting: boolean;
    handleEstimate: () => void;
    estimationResult: EstimateOutput | null;
    isDialogOpen: boolean;
    setIsDialogOpen: (open: boolean) => void;
    pdfContentRef: React.RefObject<HTMLDivElement>;
    resetForm: () => void;
    handleDownload: () => void;
}

export function GetEstimateSection({
    serviceType,
    setServiceType,
    projectDescription,
    setProjectDescription,
    isSubmitting,
    handleEstimate,
    estimationResult,
    isDialogOpen,
    setIsDialogOpen,
    pdfContentRef,
    resetForm,
    handleDownload,
}: GetEstimateSectionProps) {
  const [cardRef, cardInView] = useInView({ threshold: 0.2, triggerOnce: false });

  return (
    <>
      <section className="w-full py-8 md:py-12 bg-gradient-to-r from-brand-blue to-brand-blue-dark animated-gradient" id="get-estimate">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl flex items-center justify-center gap-2 text-primary-foreground">
              Let's Make Tech Less Mysterious
            </h2>
            <p className="mt-2 text-lg text-primary-foreground/80">
              Use our AI-powered tools for quick project insights.
            </p>
          </div>

          <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 50 }}
            animate={cardInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.7 }}
          >
            <Card className="max-w-2xl mx-auto bg-background/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-2xl text-primary-foreground">Estimated Timeline Generator</CardTitle>
                <CardDescription className="text-primary-foreground/80">
                  Select a service and describe your project to get a timeline estimate.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-primary-foreground">Service Type</label>
                  <Select onValueChange={setServiceType} value={serviceType}>
                    <SelectTrigger className="bg-white text-foreground">
                      <SelectValue placeholder="Select a service..." />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service.title} value={service.title}>
                          {service.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-primary-foreground">Project Description</label>
                  <Textarea
                    placeholder="Describe your project goals, key features, and requirements."
                    className="bg-white text-foreground min-h-[120px]"
                    value={projectDescription}
                    onChange={(e) => setProjectDescription(e.target.value)}
                  />
                </div>

                <Button onClick={handleEstimate} disabled={isSubmitting} className="w-full bg-brand-orange hover:bg-brand-orange-light text-white font-bold text-lg py-6">
                  {isSubmitting ? 'Generating...' : 'Check Estimate'}
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {estimationResult && (
        <div ref={pdfContentRef} style={{ display: 'none', width: '800px' }}>
            <EstimatePDFContent estimationResult={estimationResult} />
        </div>
      )}

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-lg w-full max-h-[90vh] overflow-y-auto bg-secondary text-foreground p-0 rounded-lg">
          <div className="p-6 space-y-6">
            <DialogHeader className="flex flex-col space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full gap-4">
                <div className="w-32 h-auto flex-shrink-0"><Logo /></div>
                <div className="text-left sm:text-right">
                  <CardTitle className="text-2xl font-bold nav-text-gradient mb-1">Project Estimate</CardTitle>
                </div>
              </div>
              {serviceType && (
                <div className="w-full text-center space-y-1">
                  <span className="inline-block rounded-md bg-primary/10 text-primary font-semibold px-4 py-2">
                    Service Type: {serviceType}
                  </span>
                  <CardDescription className="text-muted-foreground max-w-md mx-auto">
                    This estimate is generated using AI and is intended for reference only. Actual project costs and timelines may vary in real-world execution
                  </CardDescription>
                </div>
              )}
            </DialogHeader>

            {estimationResult && (
              <div className="space-y-4">
                <div className="space-y-3">
                  {estimationResult.timeline.map((item, index) => (
                    <div key={index} className="flex justify-between items-center border-b border-dashed pb-3">
                      <span className="font-semibold text-foreground">{item.step}</span>
                      <span className="text-primary font-bold">{item.duration}</span>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between items-center font-bold text-lg pt-4 bg-primary/10 p-3 rounded-md">
                  <span className="nav-text-gradient">Total Estimated Timeline:</span>
                  <span className="text-primary">{estimationResult.totalDuration}</span>
                </div>
              </div>
            )}
          </div>

          <DialogFooter className="flex justify-between w-full p-4 border-t bg-background">
            <Button onClick={resetForm} variant="outline">
              <RefreshCw className="mr-2 h-4 w-4" /> Reset
            </Button>
            <Button onClick={handleDownload} className="btn-blue-gradient text-white">
              <Download className="mr-2 h-4 w-4" /> Download PDF
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
export default GetEstimateSection;
