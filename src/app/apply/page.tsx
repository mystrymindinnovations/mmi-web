'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useSearchParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Script from "next/script";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { File as FileIcon, Loader2, Upload, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2),
  qualification: z.string().min(2),
  location: z.string().min(2),
  mobile: z.string().regex(/^\d{10}$/),
  email: z.string().email(),
  experience: z.string(),
  role: z.string(),
  resume: z.any().optional(),
  recaptchaToken: z.string(),
});

function ApplyForm() {
  const { toast } = useToast();
  const router = useRouter();
  const searchParams = useSearchParams();
  const roleFromQuery = searchParams.get('role');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [captchaVerified, setCaptchaVerified] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      qualification: "",
      location: "",
      mobile: "",
      email: "",
      role: roleFromQuery || "",
      resume: undefined,
      recaptchaToken: "",
    },
  });

  useEffect(() => {
    if (roleFromQuery) form.setValue('role', roleFromQuery);
  }, [roleFromQuery, form]);

  // ✅ Google reCAPTCHA v2 callback
  (globalThis as any).onRecaptchaSuccess = (token: string) => {
    setCaptchaVerified(true);
    form.setValue("recaptchaToken", token);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setResumeFile(file);
      form.setValue("resume", file, { shouldValidate: true });
    }
  };
  
  const removeFile = () => {
    setResumeFile(null);
    form.setValue("resume", undefined, { shouldValidate: true });
    const fileInput = document.getElementById('resume-upload') as HTMLInputElement;
    if (fileInput) fileInput.value = '';
  };

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (!captchaVerified) {
      toast({
        title: "Captcha Required",
        description: "Please complete the captcha before submitting.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    const formData = new FormData();

    Object.entries(values).forEach(([key, value]) => {
      if (key === 'resume' && resumeFile) {
        formData.append(key, resumeFile);
      } else {
        formData.append(key, value as string);
      }
    });

    try {
      const response = await fetch('/api/apply', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        form.reset();
        removeFile();
        setCaptchaVerified(false);
        (window as any).grecaptcha.reset();
        router.push('/apply/success');
      } else {
        toast({
          title: "Submission Failed",
          description: result.message || "An error occurred. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "An Unexpected Error Occurred",
        description: "Please check your network connection and try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-secondary flex items-center justify-center p-4">
      {/* Load Google reCAPTCHA v2 */}
      <Script src={`https://www.google.com/recaptcha/api.js`} strategy="afterInteractive" />

      <Card className="w-full max-w-2xl shadow-2xl">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center nav-text-gradient">Job Application</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

              {/* Role */}
              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Applying for</FormLabel>
                    <FormControl>
                      <Input {...field} readOnly className="bg-muted cursor-not-allowed" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Name */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your full name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Qualification */}
              <FormField
                control={form.control}
                name="qualification"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Highest Qualification</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. Bachelor's in Computer Science" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Location */}
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Current Location</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. San Francisco, CA" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Email + Mobile */}
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="your.email@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="mobile"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mobile Number</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="10-digit mobile number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Experience */}
              <FormField
                control={form.control}
                name="experience"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Experience</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your experience level" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="fresher">Fresher</SelectItem>
                        <SelectItem value="1-2">1-2 Years</SelectItem>
                        <SelectItem value="3-5">3-5 Years</SelectItem>
                        <SelectItem value="5-10">5-10 Years</SelectItem>
                        <SelectItem value="10+">10+ Years</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* ✅ reCAPTCHA v2 Checkbox */}
             {/* reCAPTCHA v2 Checkbox scaled down */}
<div
  className="g-recaptcha mt-2"
  style={{ transform: "scale(0.85)", transformOrigin: "0 0" }} // scale down to 85%
  data-sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
  data-callback="onRecaptchaSuccess"
/>


              {/* Resume Upload */}
              <FormField
                control={form.control}
                name="resume"
                render={() => (
                  <FormItem>
                    <FormLabel>Resume/CV</FormLabel>
                    {resumeFile ? (
                      <div className="flex items-center justify-between p-2 border rounded-md">
                        <div className="flex items-center gap-2">
                          <FileIcon className="h-6 w-6 text-primary" />
                          <div className="text-sm">
                            <p className="font-medium truncate max-w-[200px]">{resumeFile.name}</p>
                            <p className="text-xs text-muted-foreground">
                              {(resumeFile.size / 1024 / 1024).toFixed(2)} MB
                            </p>
                          </div>
                        </div>
                        <Button type="button" variant="ghost" size="icon" onClick={removeFile}>
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ) : (
                      <FormControl>
                        <Button variant="outline" className="w-full justify-start text-muted-foreground font-normal" asChild disabled={!captchaVerified}>
                          <label htmlFor="resume-upload" className="cursor-pointer flex items-center">
                            <Upload className="mr-2 h-4 w-4" />
                            Upload Resume
                            <input type="file" className="hidden" id="resume-upload" onChange={handleFileChange} accept=".pdf,.doc,.docx" disabled={!captchaVerified} />
                          </label>
                        </Button>
                      </FormControl>
                    )}
                    {!captchaVerified && <p className="text-gray-500 text-sm mt-1"> Verify captcha to enable resume upload</p>}
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full btn-gradient text-lg" disabled={isSubmitting}>
                {isSubmitting ? <Loader2 className="animate-spin" /> : 'Submit Application'}
              </Button>

            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}

export default function ApplyPage() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <ApplyForm />
    </React.Suspense>
  );
}
