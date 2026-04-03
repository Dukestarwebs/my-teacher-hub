import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-12 md:py-20 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-10">Last updated: {new Date().toLocaleDateString("en-UG", { year: "numeric", month: "long", day: "numeric" })}</p>

        <div className="prose prose-sm md:prose-base max-w-none text-muted-foreground space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">1. Introduction</h2>
            <p>My Teacher ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform.</p>
            <p>By using My Teacher, you agree to the collection and use of information in accordance with this policy.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">2. Information We Collect</h2>
            <h3 className="text-base font-semibold text-foreground mb-2">Personal Information</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Name, email address, and profile photo (via Google OAuth or registration form)</li>
              <li>Phone number (for teachers and payment processing)</li>
              <li>Educational details such as learning challenges and goals</li>
              <li>Payment information (mobile money phone numbers — we do not store PINs or passwords)</li>
            </ul>
            <h3 className="text-base font-semibold text-foreground mt-4 mb-2">Usage Data</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Pages visited, features used, and time spent on the platform</li>
              <li>Exam results and seminar attendance records</li>
              <li>Device information and browser type</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">3. How We Use Your Information</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>To create and manage your account</li>
              <li>To connect students with teachers and facilitate seminars</li>
              <li>To process payments via MTN Mobile Money and Airtel Money</li>
              <li>To send notifications about seminars, exams, and platform updates</li>
              <li>To improve the platform experience and develop new features</li>
              <li>To ensure platform safety and prevent misuse</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">4. Data Sharing</h2>
            <p>We do not sell your personal information. We may share data with:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong className="text-foreground">Teachers:</strong> Students' names and enrolled seminar details are shared with relevant teachers</li>
              <li><strong className="text-foreground">Payment Providers:</strong> Phone numbers are shared with MTN and Airtel for payment processing</li>
              <li><strong className="text-foreground">Communication Services:</strong> Email and phone for notifications via Resend and Africa's Talking</li>
              <li><strong className="text-foreground">Legal Requirements:</strong> When required by Ugandan law or legal processes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">5. Data Security</h2>
            <p>We implement appropriate technical and organizational security measures to protect your data, including encrypted connections (HTTPS), secure authentication, and access controls. However, no electronic transmission is 100% secure.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">6. Data Retention</h2>
            <p>We retain your personal data for as long as your account is active or as needed to provide services. You can request account deletion at any time through your settings page or by contacting us.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">7. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your account and data</li>
              <li>Opt out of marketing communications</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">8. Children's Privacy</h2>
            <p>My Teacher is designed for students of all ages. For users under 13, we require parental or guardian consent. We do not knowingly collect personal data from children under 13 without such consent.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">9. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">10. Contact Us</h2>
            <p>If you have questions about this Privacy Policy, contact us at:</p>
            <div className="bg-accent rounded-xl p-4 mt-3 border border-border">
              <p className="text-foreground font-medium">My Teacher</p>
              <p>Email: <a href="mailto:privacy@myteacher.ug" className="text-primary hover:underline">privacy@myteacher.ug</a></p>
              <p>Phone: <a href="tel:+256700000000" className="text-primary hover:underline">+256 700 000 000</a></p>
              <p>Address: Kampala, Uganda</p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
