
'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useSearchParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

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

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_FILE_TYPES = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  qualification: z.string().min(2, { message: "Qualification is required." }),
  location: z.string().min(2, { message: "Location is required." }),
  mobile: z.string().regex(/^\d{10}$/, { message: "Mobile number must be 10 digits." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  experience: z.string({ required_error: "Please select your experience level." }),
  role: z.string({ required_error: "Please select the role you are applying for." }),
  resume: z
    .any()
    .refine((file) => file, "Resume is required.")
    .refine((file) => file?.size <= MAX_FILE_SIZE, `Max file size is 5MB.`)
    .refine(
      (file) => ACCEPTED_FILE_TYPES.includes(file?.type),
      "Only .pdf, .doc, and .docx formats are supported."
    ),
});

const jobRoles = [
  'UI/UX Designers',
  'Frontend Developers',
  'Graphic Designers',
  'Content Writers',
  'Web Interns'
];

function ApplyForm() {
  const { toast } = useToast();
  const router = useRouter();
  const searchParams = useSearchParams();
  const roleFromQuery = searchParams.get('role');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resumeFile, setResumeFile] = useState<File | null>(null);

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
    },
  });

  useEffect(() => {
    if (roleFromQuery) {
      form.setValue('role', roleFromQuery);
    }
  }, [roleFromQuery, form]);

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
    if (fileInput) {
      fileInput.value = '';
    }
  };

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => {
      if (key === 'resume') {
        formData.append(key, resumeFile!);
      } else {
        formData.append(key, value);
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
      <Card className="w-full max-w-2xl shadow-2xl">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center nav-text-gradient">Job Application</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Applying for</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select the role you're applying for" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {jobRoles.map((role) => (
                          <SelectItem key={role} value={role}>{role}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
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

              <FormField
                control={form.control}
                name="resume"
                render={({ field }) => (
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
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          onClick={removeFile}
                          className="h-8 w-8"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ) : (
                      <FormControl>
                        <Button variant="outline" className="w-full justify-start text-muted-foreground font-normal" asChild>
                          <label htmlFor="resume-upload" className="cursor-pointer flex items-center">
                            <Upload className="mr-2 h-4 w-4" />
                            Upload Resume
                            <input
                              type="file"
                              className="hidden"
                              id="resume-upload"
                              onChange={handleFileChange}
                              accept=".pdf,.doc,.docx"
                            />
                          </label>
                        </Button>
                      </FormControl>
                    )}
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
  )
}
