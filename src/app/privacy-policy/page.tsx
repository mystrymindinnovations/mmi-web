import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-secondary py-12">
      <div className="container mx-auto px-4 md:px-6">
        <Card className="max-w-4xl mx-auto shadow-2xl">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center nav-text-gradient">
              Privacy Policy
            </CardTitle>
          </CardHeader>
          <CardContent className="prose prose-lg max-w-none text-muted-foreground">
            <p>Effective Date: {new Date().toLocaleDateString()}</p>
            <p>Website: <a href="https://mystrymind.com" className="text-primary" target="_blank">https://mystrymind.com</a></p>

            <h2 className="text-xl font-bold mt-4">1. Introduction</h2>
            <p>
              At Mystrymind Innovations Pvt Ltd ("Mystrymind", "we", "our", "us"), we value your privacy. This Privacy Policy outlines how we collect, use, and protect your personal data when you visit our website or use our services.
            </p>

            <h2 className="text-xl font-bold mt-4">2. Information We Collect</h2>
            <ul>
              <li><strong>Personal Information:</strong> Name, email address, phone number, company name.</li>
              <li><strong>Technical Data:</strong> IP address, browser type, device information, cookies, and usage logs.</li>
              <li><strong>Communication Data:</strong> When you contact us or fill forms.</li>
            </ul>

            <h2 className="text-xl font-bold mt-4">3. How We Use Your Information</h2>
            <ul>
              <li>To respond to inquiries or service requests.</li>
              <li>To provide and improve our services.</li>
              <li>To send updates, newsletters, and offers (only with consent).</li>
              <li>For analytics and site optimization.</li>
            </ul>

            <h2 className="text-xl font-bold mt-4">4. Data Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal information. We may share your data with trusted third parties (like hosting or analytics providers) only to help us operate and improve our services.
            </p>

            <h2 className="text-xl font-bold mt-4">5. Data Security</h2>
            <p>
              We implement standard security practices to protect your data, but no digital system is 100% secure. Use the website at your own risk.
            </p>

            <h2 className="text-xl font-bold mt-4">6. Cookies</h2>
            <p>
              We use cookies to improve user experience and track usage. You can disable cookies in your browser settings.
            </p>

            <h2 className="text-xl font-bold mt-4">7. Third-party Links</h2>
            <p>
              Our website may contain links to external sites. We are not responsible for their content or privacy practices.
            </p>

            <h2 className="text-xl font-bold mt-4">8. Your Rights</h2>
            <p>
              You have the right to access, modify, or delete your data. To exercise these rights, contact us at <a href="mailto:team@mystrymind.com" className="text-primary">team@mystrymind.com</a>.
            </p>

            <h2 className="text-xl font-bold mt-4">9. Changes to This Policy</h2>
            <p>
              We may update this policy occasionally. Updates will be posted on this page.
            </p>

            <h2 className="text-xl font-bold mt-4">10. Contact Us</h2>
            <p>
              If you have any questions, please contact us at:<br />
              📧 Email: <a href="mailto:team@mystrymind.com" className="text-primary">team@mystrymind.com</a>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
