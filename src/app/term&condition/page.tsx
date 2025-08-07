import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-secondary py-12">
      <div className="container mx-auto px-4 md:px-6">
        <Card className="max-w-4xl mx-auto shadow-2xl">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center nav-text-gradient">
              Terms & Conditions
            </CardTitle>
          </CardHeader>
          <CardContent className="prose prose-lg max-w-none text-muted-foreground">
            <p><strong>Effective Date:</strong> 01/08/2025</p>
            <p>
              <strong>Website:</strong>{" "}
              <a href="https://mystrymind.com" className="text-primary" target="_blank" rel="noopener noreferrer">
                https://mystrymind.com
              </a>
            </p>

            <h2 className="text-xl font-bold mt-4">1. Introduction</h2>
            <p>
              Welcome to Mystrymind Innovations Pvt Ltd. By accessing our website or using our services, you agree to the following terms and conditions.
            </p>

            <h2 className="text-xl font-bold mt-4">2. Use of the Website</h2>
            <ul>
              <li>Use the website for lawful purposes only.</li>
              <li>Not attempt to gain unauthorized access to our systems or interfere with site operations.</li>
            </ul>

            <h2 className="text-xl font-bold mt-4">3. Intellectual Property</h2>
            <p>
              All content on this site (including design, graphics, logo, text) is owned by Mystrymind. Do not copy, reproduce, or use without permission.
            </p>

            <h2 className="text-xl font-bold mt-4">4. Services and Payments</h2>
            <ul>
              <li>All services, features, and pricing are subject to change.</li>
              <li>Any custom development/service project will follow a mutual agreement or proposal.</li>
            </ul>

            <h2 className="text-xl font-bold mt-4">5. Client Responsibilities</h2>
            <ul>
              <li>Provide accurate information during engagement.</li>
              <li>Review and approve deliverables as agreed.</li>
              <li>Not misuse our services or codebase.</li>
            </ul>

            <h2 className="text-xl font-bold mt-4">6. Limitation of Liability</h2>
            <p>
              We are not liable for any indirect, incidental, or consequential damages arising from the use of our website or services.
            </p>

            <h2 className="text-xl font-bold mt-4">7. Termination</h2>
            <p>
              We reserve the right to suspend or terminate access if users violate these terms.
            </p>

            <h2 className="text-xl font-bold mt-4">8. Governing Law</h2>
            <p>
              These terms are governed by the laws of India. Any disputes will be handled in the jurisdiction of [your city/state].
            </p>

            <h2 className="text-xl font-bold mt-4">9. Changes to Terms</h2>
            <p>
              We may update these terms occasionally. Continued use of the website implies acceptance of the new terms.
            </p>

            <h2 className="text-xl font-bold mt-4">10. Contact</h2>
            <p>
              For questions, email us at:<br />
              📧 <a href="mailto:team@mystrymind.com" className="text-primary">team@mystrymind.com</a>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
