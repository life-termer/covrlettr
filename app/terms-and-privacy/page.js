import Container from "../_components/Container";
import Footer from "../_components/Footer";
import Header from "../_components/Header";

export const metadata = {
  title: "Terms and Privacy",
};

export default function Terms() {
  return (
    <>
      <Header />
      <Container>
        <div className="w-full sm:w-2/3 my-28">
          <h2 className="text-primary-700 text-3xl font-[family-name:var(--font-heading)] mb-4">
            Terms of Service
          </h2>
          <p className="mb-3">Effective Date: [Insert Date]</p>
          <p className="mb-5">
            Welcome to [App Name]! These Terms of Service ("Terms") govern your
            access to and use of our application (the "App"), which uses
            artificial intelligence (AI) to assist in creating personalized
            cover letters based on user input. By using the App, you agree to
            these Terms. If you do not agree, please do not use the App.
          </p>
          <h3 className="text-primary-700 text-xl font-[family-name:var(--font-heading)] mb-3">
            1. Eligibility
          </h3>
          <p className="mb-3">
            To use the App, you must be at least 18 years old or have the
            consent of a parent or guardian. By using the App, you confirm that
            you meet this requirement.
          </p>
          <h3 className="text-primary-700 text-xl font-[family-name:var(--font-heading)] mb-3">
            2. User Responsibilities
          </h3>
          <ul className="mb-4">
            <li className="list-disc ms-5">
              Input Accuracy: You are responsible for ensuring that the
              information you provide to the App is accurate and lawful.
            </li>
            <li className="list-disc ms-5">
              Usage: You agree not to misuse the App, including attempting to
              reverse-engineer, manipulate, or disrupt the App’s functionality.
            </li>
            <li className="list-disc ms-5">
              Compliance: You agree to comply with all applicable laws when
              using the App.
            </li>
          </ul>
          <h3 className="text-primary-700 text-xl font-[family-name:var(--font-heading)] mb-3">
            3. AI-Generated Content
          </h3>
          <ul className="mb-4">
            <li className="list-disc ms-5">
              The App uses AI to generate cover letters based on the information
              you provide. While we strive to deliver high-quality results, we
              do not guarantee the accuracy, completeness, or suitability of the
              generated content for any specific purpose.
            </li>
            <li className="list-disc ms-5">
              You are responsible for reviewing and editing the AI-generated
              content before using it.
            </li>
          </ul>
          <h3 className="text-primary-700 text-xl font-[family-name:var(--font-heading)] mb-3">
            4. Intellectual Property
          </h3>
          <ul className="mb-4">
            <li className="list-disc ms-5">
              The App and its underlying technology are owned by [Company Name].
            </li>
            <li className="list-disc ms-5">
              You retain ownership of the data and input you provide to the App.
              However, by using the App, you grant us a non-exclusive,
              royalty-free license to use your input solely for the purpose of
              providing the service.
            </li>
          </ul>
          <h3 className="text-primary-700 text-xl font-[family-name:var(--font-heading)] mb-3">
            5. Fees and Payments
          </h3>
          <ul className="mb-4">
            <li className="list-disc ms-5">
              Certain features of the App may require payment. By subscribing or
              making a purchase, you agree to the applicable fees and payment
              terms outlined at the time of purchase.
            </li>
            <li className="list-disc ms-5">
              Payments are non-refundable, except as required by law.
            </li>
          </ul>
          <h3 className="text-primary-700 text-xl font-[family-name:var(--font-heading)] mb-3">
            6. Privacy
          </h3>
          <p className="mb-4">
            Your privacy is important to us. Please review our
            <a href="#privacy" className="text-brand">
              &nbsp;Privacy Policy&nbsp;
            </a>
            to understand how we collect, use, and protect your information.
          </p>
          <h3 className="text-primary-700 text-xl font-[family-name:var(--font-heading)] mb-3">
            7. Termination
          </h3>
          <p className="mb-4">
            We reserve the right to terminate or suspend your access to the App
            if you violate these Terms or engage in unlawful or harmful
            behavior.
          </p>
          <h3 className="text-primary-700 text-xl font-[family-name:var(--font-heading)] mb-3">
            8. Disclaimers and Limitation of Liability
          </h3>
          <ul className="mb-4">
            <li className="list-disc ms-5">
              The App is provided "as is" without warranties of any kind.
            </li>
            <li className="list-disc ms-5">
              We are not liable for any direct, indirect, incidental, or
              consequential damages arising from your use of the App, including
              but not limited to errors in AI-generated content.
            </li>
          </ul>
          <h3 className="text-primary-700 text-xl font-[family-name:var(--font-heading)] mb-3">
            9. Changes to the Terms
          </h3>
          <p className="mb-4">
            We may update these Terms from time to time. If we make significant
            changes, we will notify you through the App or other communication
            channels. Continued use of the App constitutes acceptance of the
            revised Terms.
          </p>
          <h3 className="text-primary-700 text-xl font-[family-name:var(--font-heading)] mb-">
            10. Contact Us
          </h3>
          <p>
            If you have questions about these Terms, contact us at [Contact
            Email].
          </p>
          <div id="privacy" className="mb-16"></div>
          <h2 className="text-primary-700 text-3xl font-[family-name:var(--font-heading)] mb-4">
            Privacy Policy
          </h2>
          <p className="mb-3">Effective Date: [Insert Date]</p>
          <p className="mb-5">
            [App Name] ("we," "our," or "us") values your privacy. This Privacy
            Policy explains how we collect, use, and protect your personal
            information when you use our AI-powered cover letter creation app
            (the "App").
          </p>
          <h3 className="text-primary-700 text-xl font-[family-name:var(--font-heading)] mb-3">
            1. Information We Collect
          </h3>
          <ul className="mb-4">
            <li className="list-disc ms-5">
              User Input: Information you provide, such as your name, work
              experience, skills, and other details needed to generate cover
              letters.
            </li>
            <li className="list-disc ms-5">
              Usage Data: Information about your interactions with the App, such
              as device information, IP address, and analytics data.
            </li>
          </ul>
          <h3 className="text-primary-700 text-xl font-[family-name:var(--font-heading)] mb-3">
            2. How We Use Your Information
          </h3>
          <ul className="mb-4">
            <li className="list-disc ms-5">
              To generate cover letters based on your input.
            </li>
            <li className="list-disc ms-5">
              To improve the functionality and user experience of the App.
            </li>
            <li className="list-disc ms-5">
              To provide customer support and respond to inquiries.
            </li>
            <li className="list-disc ms-5">
              To comply with legal obligations or enforce our Terms of Service.
            </li>
          </ul>
          <h3 className="text-primary-700 text-xl font-[family-name:var(--font-heading)] mb-3">
            3. Sharing Your Information
          </h3>
          <p className="mb-3">
            We do not sell or share your personal information with third parties
            except:
          </p>
          <ul className="mb-4">
            <li className="list-disc ms-5">
              With service providers who assist in operating the App (e.g.,
              hosting and analytics).
            </li>
            <li className="list-disc ms-5">
              If required by law or to protect our rights.
            </li>
          </ul>
          <h3 className="text-primary-700 text-xl font-[family-name:var(--font-heading)] mb-3">
            4. Data Security
          </h3>
          <p className="mb-4">
            We implement industry-standard measures to protect your information.
            However, no method of transmission or storage is 100% secure, and we
            cannot guarantee absolute security.
          </p>
          <h3 className="text-primary-700 text-xl font-[family-name:var(--font-heading)] mb-3">
            5. Retention of Information
          </h3>
          <p className="mb-4">
            We retain your personal information for as long as necessary to
            provide the service or comply with legal obligations.
          </p>
          <h3 className="text-primary-700 text-xl font-[family-name:var(--font-heading)] mb-3">
            6. Your Rights
          </h3>
          <p className="mb-3">
            Depending on your jurisdiction, you may have the right to:
          </p>
          <ul className="mb-4">
            <li className="list-disc ms-5">
              Access, correct, or delete your personal information.
            </li>
            <li className="list-disc ms-5">
              Restrict or object to certain data processing activities.
            </li>
            <li className="list-disc ms-5">
              Withdraw consent where applicable.
            </li>
          </ul>
          <h3 className="text-primary-700 text-xl font-[family-name:var(--font-heading)] mb-3">
            6. Your Rights
          </h3>
          <p className="mb-4">
            Depending on your jurisdiction, you may have the right to:
          </p>
          <h3 className="text-primary-700 text-xl font-[family-name:var(--font-heading)] mb-3">
            7. Children’s Privacy
          </h3>
          <p className="mb-4">
            The App is not intended for children under 13. We do not knowingly
            collect personal information from children. If you believe a child
            has provided us with information, contact us to request its
            deletion.
          </p>
          <h3 className="text-primary-700 text-xl font-[family-name:var(--font-heading)] mb-3">
            8. International Data Transfers
          </h3>
          <p className="mb-4">
            If you are using the App outside of [Your Country/Region], your data
            may be transferred to and processed in a different jurisdiction. By
            using the App, you consent to such transfers.
          </p>
          <h3 className="text-primary-700 text-xl font-[family-name:var(--font-heading)] mb-3">
            9. Changes to This Policy
          </h3>
          <p className="mb-4">
            We may update this Privacy Policy periodically. If changes are
            significant, we will notify you through the App or other means.
            Continued use of the App indicates acceptance of the updated policy.
          </p>
          <h3 className="text-primary-700 text-xl font-[family-name:var(--font-heading)] mb-3">
            10. Contact Us
          </h3>
          <p className="mb-4">
            For questions or concerns about this Privacy Policy, contact us at
            [Contact Email].
          </p>
        </div>
      </Container>

      <Footer />
    </>
  );
}
