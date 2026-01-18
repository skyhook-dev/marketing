import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Skyhook Privacy Policy - Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-4xl font-semibold text-ink-primary mb-8">
          Privacy Policy
        </h1>

        <div className="prose prose-lg max-w-none prose-headings:text-ink-primary prose-p:text-ink-secondary prose-li:text-ink-secondary prose-strong:text-ink-primary prose-a:text-accent hover:prose-a:text-accent/80 prose-table:text-ink-secondary prose-th:text-ink-primary prose-td:text-ink-secondary">
          <h2>Introduction</h2>
          <p>
            Welcome to Skyhook, a Platform that allows you to design, deploy and manage your DevOps infrastructure (the &quot;<strong>Platform</strong>&quot;). The Platform is available at <a href="https://app.skyhook.io">app.skyhook.io</a>. It is owned and operated by Skyhook, Inc. (&quot;<strong>Skyhook</strong>&quot;, or &quot;<strong>we</strong>&quot;, &quot;<strong>us</strong>&quot;, &quot;<strong>our</strong>&quot;).
          </p>
          <p>
            This Privacy Policy (&quot;<strong>Policy</strong>&quot;) explains how we process personal information on the Platform. It is an integral part of our <Link href="/terms-and-conditions">Terms of Use</Link>.
          </p>
          <p>
            The Platform is not intended for users under the age of 18. We do not knowingly collect or process information of children under the age of 18 or knowingly allow minors under the age of 18 to use the Platform.
          </p>
          <p>
            This Policy may be amended from time to time. We will post any change to this Policy on our Platform at a reasonable time in advance of the effective date of the change, and we will also make efforts to proactively notify you by email of the changes, if we have your email address.
          </p>

          <h2>Contact us</h2>
          <p>
            If you have any questions, comments or concerns regarding this Policy or the processing of your personal information on the Platform, please contact us by email at <a href="mailto:support@skyhook.io">support@skyhook.io</a>.
          </p>

          <h2>What personal information is collected and why</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="text-left">Scenario</th>
                  <th className="text-left">Purposes</th>
                  <th className="text-left">Categories of information processed</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Registering to the Platform</strong></td>
                  <td>Creating your account on the Platform; our business development</td>
                  <td>Your public GitHub profile details.</td>
                </tr>
                <tr>
                  <td><strong>Payment for subscription</strong></td>
                  <td>Providing you with the Platform and its features, if you chose a paid subscription tier</td>
                  <td>Your name, email address, physical address, and the details of your payment method.</td>
                </tr>
                <tr>
                  <td><strong>Your conversations with the Skyhook Assistant</strong></td>
                  <td>Providing you with the functionality of the Skyhook Assistant</td>
                  <td>If you use the Skyhook Assistant, we collect and process any input you enter in the Skyhook Assistant (in free text form). Please use discretion when deciding which information to share with us. YOU ARE SOLELY LIABLE FOR PROTECTING THIRD PARTIES&apos; AND YOUR OWN PRIVACY, AND FOR OBTAINING THE PRIOR CONSENT OF INDIVIDUALS&apos; WHOSE PERSONAL INFORMATION YOU INCLUDE IN YOUR INPUT. WE WILL NOT BEAR LIABILITY FOR ANY DAMAGES THAT YOU OR OTHERS MIGHT INCUR AS A RESULT OF THE INCLUSION OF PERSONAL INFORMATION IN YOUR INPUT.</td>
                </tr>
                <tr>
                  <td><strong>Contacting us with inquiries</strong></td>
                  <td>Handling your inquiries; maintaining our customer relations with you; our business development</td>
                  <td>Your name, email address, and the subject and content of your inquiry.</td>
                </tr>
                <tr>
                  <td><strong>Analytics and use of cookies</strong></td>
                  <td>Operating and enhancing the Platform; our business development</td>
                  <td>Information concerning your use of the Platform, e.g., IP address from which you access the Platform, time and date of access, type of device and browser used, language used, links clicked via a mouse or a touch screen, and actions taken while using the Platform.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            You do not have a legal obligation to provide the above Information; however, if you choose to not share this information with us, we may not be able to provide you with the Platform and its features or handle your inquiries.
          </p>

          <h2>Methods and sources for collecting your personal information</h2>
          <p>We collect the personal information from several sources:</p>
          <ul>
            <li>Directly from you, when you register to the Platform, use the Skyhook Assistant or contact us with inquiries.</li>
            <li>Through the device you use to access our Platform.</li>
            <li>From third parties through which you register to our Platform, such as GitHub.</li>
          </ul>

          <h2>Sharing your personal information</h2>
          <p>
            We will not share your information with third parties, except in the events listed below or when you provide us your explicit and informed consent.
          </p>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="text-left">Scenario</th>
                  <th className="text-left">Purposes</th>
                  <th className="text-left">Examples of third parties involved</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>We will share your information with our service providers who assist us with the internal operations of the Platform. These companies are authorized to use your personal information in this context only as necessary to provide these services to us and not for their own promotional purposes</strong></td>
                  <td>Operating the Platform and managing our business</td>
                  <td>Google Cloud Platform, GitHub, MongoDB</td>
                </tr>
                <tr>
                  <td><strong>If you abused your rights to use the Platform or violated any applicable law while engaging with us</strong></td>
                  <td>Responding to, handling, and mitigating suspected violations of law in connection with our business</td>
                  <td>Competent authorities, legal counsels, and advisors</td>
                </tr>
                <tr>
                  <td><strong>If a judicial, governmental, or regulatory authority requires us to disclose your information</strong></td>
                  <td>Complying with a binding request from a competent authority</td>
                  <td>Competent authorities</td>
                </tr>
                <tr>
                  <td><strong>If the operation of the Platform or our business is organized within a different framework, or through another legal structure or entity</strong></td>
                  <td>Enabling a structural change in the operation of the Platform and our business</td>
                  <td>The target entity of the merger or acquisition, legal counsels, and advisors</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2>Data retention and security</h2>
          <h3>We retain your information for as long as you are an active user of the Platform, and thereafter as needed for record-keeping matters, but no longer than 7 years.</h3>
          <p>
            We will retain your information for as long as you are an active user of the Platform. Thereafter, we will still retain your personal information as necessary to comply with our legal obligations, resolve disputes, establish, and defend legal claims and enforce our agreements. However, we will not retain your data for more than 7 years.
          </p>
          <p>
            <strong>We implement measures to secure your information.</strong>
          </p>
          <p>
            We implement measures to reduce the risks of damage, loss of information and unauthorized access to or use of information. However, these measures do not provide absolute information security. Therefore, although efforts are made to secure your personal information, there is no guarantee that it will be immune from information security risks.
          </p>

          <h2>Your rights</h2>
          <p>As a user of our Platform, you have the following rights in relation to your personal information:</p>
          <p>
            <strong>Right to review your information.</strong> You have the right to review, either by yourself or through an authorized representative or a guardian, any information we have stored about you in our databases.
          </p>
          <p>
            <strong>Right to request to rectify your information.</strong> If, upon reviewing your information, you find your information to be incorrect, incomplete or outdated, you have the right to ask us to rectify your information or delete it. We will inform you within 30 days whether we can comply with your request.
          </p>
          <p>
            <strong>Right to have your personal data deleted,</strong> under certain circumstances, such as when the information is no longer necessary for the purposes the information was collected.
          </p>

          <h2>Additional Information for Individuals in The United States</h2>
          <p>
            Skyhook, Inc. is providing the following additional information to its clients residing in the United States, pursuant to applicable state privacy laws in the U.S.
          </p>
          <p>
            We do not sell your information to any third party, or share it for cross-context behavioral advertising. Furthermore, we do not collect, use or share sensitive information.
          </p>
          <p>
            We keep the personal information specified below as long as necessary to operate the Platform. Following that period, we shall see to it that the information is not accessed, other than in extraordinary events such as legal claims.
          </p>

          <h3>Categories of personal information we collect and process and their sources</h3>
          <p>Below are the categories of personal information we have collected and/or processed over the past 12 months, and the source of that information.</p>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="text-left">Categories of personal information</th>
                  <th className="text-left">Details of the personal information that was collected</th>
                  <th className="text-left">Sources of information</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Identifiers</strong></td>
                  <td>Public GitHub profile information</td>
                  <td>Directly from you. Through the device you use to access our Platform. From third parties through which you register to our Service, such as GitHub.</td>
                </tr>
                <tr>
                  <td><strong>Information that identifies, relates to, describes, or is capable of being associated with, a particular individual</strong></td>
                  <td>Contents of your inquiry. Contents of your conversations with the Skyhook Assistant</td>
                  <td></td>
                </tr>
                <tr>
                  <td><strong>Commercial information</strong></td>
                  <td>Your payment details</td>
                  <td></td>
                </tr>
                <tr>
                  <td><strong>Internet or other electronic network activity information</strong></td>
                  <td>Information collected through cookies and analytics tools</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Business purposes for the collection of personal information</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="text-left">Categories of personal information</th>
                  <th className="text-left">Business purposes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Identifiers; Information that identifies, relates to, describes, or is capable of being associated with, a particular individual; Commercial information; Internet or other electronic network activity information</strong></td>
                  <td>Performing services through the Platform. Debugging to identify and repair errors that impair existing intended functionality. Detecting and preventing security incidents. Undertaking activities to verify or maintain the quality or safety of the Platform and to improve, upgrade, or enhance the Platform.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Disclosures to third parties</h3>
          <p>Below are the categories of personal information we shared with third parties over the past 12 months, and the categories of third-party entities we share them with.</p>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="text-left">Categories of personal information</th>
                  <th className="text-left">Categories of entities we give the information to, and why</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Identifiers; Information that identifies, relates to, describes, or is capable of being associated with, a particular individual; Commercial information; Internet or other electronic network activity information</strong></td>
                  <td>Our service providers, who will use it only as necessary to assist us in the internal operations of our business and the Platform, and not for their own promotional purposes. Competent authorities, legal counsels, and advisors, if you abused your right to use the Platform or violated any applicable law in the course of doing business with us. Judicial, governmental, or regulatory authorities, if they require us to disclose your information. The target entity of a merger or acquisition, legal counsels, and advisors, if the operation of the Platform or our business is organized within a different framework, or through another legal structure or entity.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>Your rights</h3>
          <p>
            <strong>The right to know.</strong> You have the right to know whether we are processing your personal information. If we do, you have the right to know the following information, which we will provide to you after we receive your request and verify your identity:
          </p>
          <ul>
            <li>The categories of personal information we collected about you.</li>
            <li>The categories of sources from which the personal information was collected.</li>
            <li>The purposes for which we collect personal information.</li>
            <li>The categories of third parties with whom we share personal information.</li>
            <li>The specific pieces of personal information we collected about you.</li>
          </ul>
          <p>
            <strong>The right to obtain a copy of your personal information.</strong> If your data is available in a digital format, you have the right to obtain a copy of the personal information that you previously provided to us, in a portable and readable format (to the extent this is technically feasible).
          </p>
          <p>
            <strong>The right to delete your personal information.</strong> In some cases, state privacy laws provide for the right to request the deletion of your personal information.
          </p>
          <p>
            <strong>The right to correct inaccurate personal information.</strong> Once we receive a request from you to correct your data, and verify your identity, we will examine the veracity of the corrected information provided by you, consider your request to correct, and inform you of our decision.
          </p>
          <p>
            To establish the veracity of the personal information as per your request, we will consider all the circumstances pertaining to the personal information the correction of which is requested. We may also require you to provide documentation in support of your request to correct the personal information.
          </p>
          <p>
            <strong>The right to opt-out of processing for solely-automated profiling.</strong> You have the right to opt-out of solely-automated processing of your personal information to evaluate, analyze, or predict your personal aspects related to your economic situation, health, personal preferences, interests, reliability, behavior, location, or movements, where that processing is done in furtherance of a decision that produces a legal or similarly significant effect on you.
          </p>
          <p>
            <strong>The right to non-discrimination as a result of exercising your rights.</strong> You have the right to not be discriminated by us for exercising the rights granted to you under applicable law. If you exercise your rights, we cannot:
          </p>
          <ul>
            <li>deny you services.</li>
            <li>charge different prices or fees for services, also through discounts, benefits, or fines.</li>
            <li>provide you with a different level or quality of services.</li>
            <li>propose that you receive different prices or tariffs for services.</li>
          </ul>
          <p>
            Please note that we may charge a different fee or provide a different level or quality of services, if the difference is reasonably related to the value we gain from your personal information.
          </p>

          <h3>Filing requests</h3>
          <p>
            Should you wish to exercise your rights under applicable laws as specified above, please contact us by email at <a href="mailto:support@skyhook.io">support@skyhook.io</a>.
          </p>
          <p>
            To verify your identity, we will ask you to provide additional information, through a verification process in which you will be asked to provide us with two items of information known to you and to us.
          </p>
          <p>
            Note you may appoint an authorized agent to file requests to exercise your rights on your behalf. To this end, you must provide your authorized agent with written approval to do so. The authorized agent will have to present us with proof, attesting that you authorized them to act on your behalf. Furthermore, we will require verification of your identity, as explained above.
          </p>

          <h3>Our response to your requests</h3>
          <p>
            We will respond to your requests within 45 days (or within 90 days, where the law permits and we determine it necessary considering the complexity and number of the requests you have filed). If we take longer than 45 days, we will inform you of the extension within the initial forty-five-day response period, together with the reason for the extension.
          </p>
          <p>We may deny your request in the following cases:</p>
          <ul>
            <li>If we believe in good faith, based on reasons which are documented in writing, that your request is fraudulent or is an abuse of your rights under applicable law.</li>
            <li>If we conclude that the request is irrelevant, based on all the circumstances at issue (e.g., if you requested to correct your personal information, and we find that it is likely to be accurate).</li>
            <li>If it is contrary to federal or state law.</li>
            <li>Due to discrepancy in the required documentation.</li>
            <li>If the fulfilment of your request turns out to be impossible or involves disproportionate effort.</li>
          </ul>
          <p>
            We will provide you with a detailed explanation including sufficient facts to enable you to meaningfully understand why we cannot fulfil your request.
          </p>
          <p>
            You may appeal our decision to deny your request by submitting a written appeal to <a href="mailto:support@skyhook.io">support@skyhook.io</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
