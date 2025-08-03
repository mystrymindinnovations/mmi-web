
"use client";

import React, { useState, useRef } from 'react';
import { getEstimate, EstimateInput, EstimateOutput } from '@/ai/flows/getEstimate';
import { useToast } from "@/hooks/use-toast";
import html2canvas from 'html2canvas';
import jsPDF from "jspdf";
import { HeroSection } from '@/components/section/Hero/Hero';
import { ServicesSection } from '@/components/section/Services/Services';
import { WhyChooseUsSection } from '@/components/section/WhyChooseUs/WhyChooseUs';
import { AboutUsSection } from '@/components/section/About/About';
import { DevelopmentProcessSection } from '@/components/section/DevelopmentProcess/DevelopmentProcess';
import { TechStackSection } from '@/components/section/TechStack/TechStack';
import { CareersSection } from '@/components/section/Careers/Careers';
import { ContactSection } from '@/components/section/Contact/Contact';
import { GetEstimateSection } from '@/components/section/GetEstimate/GetEstimate';

import { techStack } from '@/data/techStack';
import { jobRoles } from '@/data/jobRoles';

export default function Home() {
  const { toast } = useToast()
  const [serviceType, setServiceType] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [estimationResult, setEstimationResult] = useState<EstimateOutput | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const pdfContentRef = useRef<HTMLDivElement>(null);
  
  const handleEstimate = async () => {
    if (!serviceType || !projectDescription) {
      toast({
        title: "Missing Information",
        description: "Please select a service type and provide a project description.",
        variant: "destructive",
      })
      return;
    }
    setIsSubmitting(true);
    try {
      const input: EstimateInput = { serviceType, projectDescription };
      const result = await getEstimate(input);
      setEstimationResult(result);
      setIsDialogOpen(true);
    } catch (error) {
      console.error("Error getting estimate:", error);
       toast({
        title: "Error",
        description: "Failed to generate an estimate. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setServiceType('');
    setProjectDescription('');
    setEstimationResult(null);
    setIsDialogOpen(false);
  };
  
  const handleDownload = async () => {
    const input = pdfContentRef.current;
    if (!input) return;

    // Temporarily make the element visible to be captured by html2canvas
    input.style.position = 'fixed';
    input.style.left = '-9999px';
    input.style.top = '0';
    input.style.display = 'block';

    html2canvas(input, {
      scale: 2, // Higher scale for better quality
      useCORS: true,
      logging: false,
    }).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;
      const ratio = canvasWidth / canvasHeight;
      const width = pdfWidth;
      const height = width / ratio;

      let finalHeight = height;
      if (height > pdfHeight) {
          finalHeight = pdfHeight;
      }
      
      pdf.addImage(imgData, 'PNG', 0, 0, width, finalHeight);
      pdf.save('project-estimate.pdf');

      // Hide the element again
      input.style.display = 'none';
      input.style.position = 'static';
    });
  };

  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <AboutUsSection />
      <DevelopmentProcessSection />
      <TechStackSection techStack={techStack} />
      <CareersSection jobRoles={jobRoles} />
      <ContactSection />
      <GetEstimateSection
        serviceType={serviceType}
        setServiceType={setServiceType}
        projectDescription={projectDescription}
        setProjectDescription={setProjectDescription}
        isSubmitting={isSubmitting}
        handleEstimate={handleEstimate}
        estimationResult={estimationResult}
        isDialogOpen={isDialogOpen}
        setIsDialogOpen={setIsDialogOpen}
        pdfContentRef={pdfContentRef}
        resetForm={resetForm}
        handleDownload={handleDownload}
      />
    </>
  );
}
