"use client";

import React, { useState, useRef } from "react";
import Head from "next/head";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import { useToast } from "@/hooks/use-toast";
import { getEstimate, EstimateInput, EstimateOutput } from "@/ai/flows/getEstimate";

import { HeroSection } from "@/app/(sections)/hero/page";
import { ServiceSection } from "@/app/(sections)/service/page";
import { WhyChooseUsSection } from "@/app/(sections)/whyChooseUs/page";
import { AboutPage } from "@/app/(sections)/about/page";
import { DevelopmentProcessSection } from "@/app/(sections)/developmentProcess/page";
import { TechStackSection } from "@/app/(sections)/techStack/page";
import { CareersSection } from "@/app/(sections)/careers/page";
import { ContactSection } from "@/app/(sections)/contact/page";
import { GetEstimateSection } from "@/app/(sections)/getEstimate/page";

import { techStack } from "@/data/techStack";
import { jobRoles } from "@/data/jobRoles";

export default function Home() {
  const { toast } = useToast();

  const [serviceType, setServiceType] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
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
      });
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
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setServiceType("");
    setProjectDescription("");
    setEstimationResult(null);
    setIsDialogOpen(false);
  };

  const handleDownload = async () => {
    const input = pdfContentRef.current;
    if (!input) return;

    input.style.position = "fixed";
    input.style.left = "-9999px";
    input.style.top = "0";
    input.style.display = "block";

    html2canvas(input, {
      scale: 2,
      useCORS: true,
      logging: false,
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const canvasRatio = canvas.width / canvas.height;
      const pdfCanvasHeight = pdfWidth / canvasRatio;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfCanvasHeight > pdfHeight ? pdfHeight : pdfCanvasHeight);
      pdf.save("project-estimate.pdf");

      input.style.display = "none";
      input.style.position = "static";
    });
  };

  return (
    <>
      {/* SEO META TAGS */}
      <Head>
        <title>MystryMind - Tech-Powered Digital Solutions</title>
        <meta name="description" content="MystryMind builds intelligent digital products for startups & enterprises. Get free consultation or project estimates today!" />
        <meta name="keywords" content="software development, web apps, mobile apps, tech agency, product development, MystryMind" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="MystryMind Innovations" />
        
        {/* Open Graph Meta */}
        <meta property="og:title" content="MystryMind - Transforming Ideas into Scalable Digital Products" />
        <meta property="og:description" content="We specialize in smart tech solutions for startups and enterprises. Book your free consultation today." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mystrymind.com" />
        <meta property="og:image" content="/og-image.png" />

        {/* Twitter Meta */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MystryMind - Tech-Powered Digital Solutions" />
        <meta name="twitter:description" content="Get project estimates and free consultation for digital solutions crafted by MystryMind." />
        <meta name="twitter:image" content="/og-image.png" />
      </Head>

      {/* Page Sections */}
      <HeroSection />
      <ServiceSection />
      <WhyChooseUsSection />
      <AboutPage />
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
