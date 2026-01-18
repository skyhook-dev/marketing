import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Skyhook Terms and Conditions - Read our terms of service for using the Skyhook platform.",
};

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-4xl font-semibold text-ink-primary mb-8">
          Terms and Conditions
        </h1>

        <div className="prose prose-lg max-w-none prose-headings:text-ink-primary prose-p:text-ink-secondary prose-li:text-ink-secondary prose-strong:text-ink-primary prose-a:text-accent hover:prose-a:text-accent/80">
          <h2>Introduction</h2>
          <p>
            Welcome to Skyhook, a Platform that allows you to design, deploy and manage your DevOps infrastructure (the &quot;<strong>Platform</strong>&quot;). The Platform is available at <a href="https://app.skyhook.io">app.skyhook.io</a>. It is owned and operated by Skyhook, Inc. (&quot;<strong>Skyhook</strong>&quot;, or &quot;<strong>we</strong>&quot;, &quot;<strong>us</strong>&quot;, &quot;<strong>our</strong>&quot;).
          </p>
          <p>
            These Terms of Use (the &quot;<strong>Terms</strong>&quot;) form a binding agreement between you and Skyhook, and they govern your use of the Platform. If You are acting on behalf of an organization when using our Platform, you represent and warrant that you are duly authorized to enter into these Terms on behalf of the organization and that you have the proper authority to legally bind the organization by these Terms.
          </p>
          <p>
            Please read these Terms carefully before using our Platform. By using our Platform, you indicate that you accept and agree to these Terms and to the <Link href="/privacy-policy">Privacy Policy</Link>, which is an integral part of them. If you do not agree to these Terms in their entirety, you must not use the Platform.
          </p>
          <p>
            Access to the Platform is granted through third-party platforms (&quot;<strong>Third-Party Platforms</strong>&quot;), such as GitHub.com. Skyhook is not affiliated with any such Third-Party Platforms. These Terms apply solely to your contractual relationship with Skyhook. Your use of Third-Party Platform may be subject to additional separate terms and conditions. You are solely liable for complying with such terms and conditions and Skyhook will not have any liability in relation to your use of Third-Party Platforms.
          </p>
          <p>
            These Terms may be amended from time to time. We will post any change to these terms on our Platform at a reasonable time in advance of the effective date of the change, and we will also make efforts to proactively notify you by email of the changes, if we have your email address.
          </p>

          <h2>Contact us</h2>
          <p>
            If you have any questions, comments or concerns regarding the Platform, these Terms or our Privacy Policy, please contact us at <a href="mailto:support@skyhook.io">support@skyhook.io</a>.
          </p>
          <p>
            <strong>If you are an individual residing in the United States, by agreeing to these Terms you also agree to the use of email (&quot;Electronic Record&quot;) to send you legally required notices. You may withdraw your consent to use an Electronic Record by notifying us at <a href="mailto:support@skyhook.io">support@skyhook.io</a> and indicating your withdrawal of consent, your full name and postal address. To access and retain a copy of this disclosure or the Electronic Record in which we send you any legal required notices, you will need (i) a computer with a web browser and Internet access and (ii) either a printer or storage space on such device. To request a paper copy of this disclosure or the Electronic Record in which we send you any legal required notices, contact us at <a href="mailto:support@skyhook.io">support@skyhook.io</a> and indicate your request, your full name and postal address. We will charge you the cost of first-class mail-international, for each paper copy you request. To update the contact details we use to contact you electronically, contact us at <a href="mailto:support@skyhook.io">support@skyhook.io</a> and indicate your full name, your old email address and new email address.</strong>
          </p>

          <h2>Use of the Platform</h2>
          <p>
            <strong>Grant of License.</strong> Subject to the terms herein, Skyhook grants you a limited, worldwide, non-transferrable, non-sublicensable, revocable license to use the Platform solely for your internal business operations.
          </p>
          <p>
            Use of the Platform may be subject to payment, in accordance with your chosen subscription tier.
          </p>
          <p>
            Use of the Platform is only permitted to Authorized Users. You and your organization will remain, at all times, liable to Skyhook for all acts and omissions of the Authorized Users.
          </p>
          <p>
            <strong>Restrictions.</strong> When using our Platform, you must comply with these Terms and adhere to any applicable law. You may not:
          </p>
          <ul>
            <li>Attempt to circumvent, bypass or deactivate security or protection measures of the Platform;</li>
            <li>Use our Platform in order to develop or create an application, website or any other product similar to, or competing with, the Platform;</li>
            <li>Attempt to compromise information security on our Platform or in any network or server used by us, attempt to uncover information security vulnerabilities, or attempt to engage in any form of probing, scanning, crawling, robotic navigating or hacking of the Platform;</li>
            <li>Attempt to access the Platform, download any information or use any information in our Platform, in an automated or mechanized process;</li>
            <li>Attempt to activate or access features or capabilities that are undocumented, not ordinarily accessible or deactivated in the Platform;</li>
            <li>Attempt to engage in reverse-engineering, disassembling or decompiling of the Platform;</li>
            <li>Use the Platform in any manner that may give rise to a criminal offense, civil tort, infringement or violation of the rights of any third party;</li>
            <li>Attempt to burden or interfere with the operation of the systems related to the operation of our Platform;</li>
            <li>Attempt to integrate the Platform or any part thereof in any application, webpage, or any other way;</li>
            <li>Use the Platform for or in connection with any action that may encourage or constitute threat, harassment or fraud.</li>
          </ul>
          <p>
            <strong>Service Levels; Support.</strong> We endeavor to achieve a service level of 99.0%, calculated on a monthly-basis – i.e., no more than 223 minutes of Downtime per month.
          </p>
          <p>
            You may contact us for support in the operation of the Platform at <a href="mailto:support@skyhook.io">support@skyhook.io</a>. Customer support is available throughout the week.
          </p>
          <p>
            We will commence the repair of a critical error promptly, and no later than one business day after it was reported. All other non-critical errors will be handled during regular business hours, at Skyhook&apos;s discretion.
          </p>
          <p>
            <strong>Updates and Upgrades.</strong> We may (but are not obligated to) provide Updates and Upgrades to the Platform. All Updates may be applied immediately.
          </p>
          <p>
            <strong>Backups.</strong> We back up the Platform&apos;s contents and your Customer Data once every 7 days, on one archival backup. We will store each backup file for 30 days. The backup is intended for use in case of malfunctions and is not meant to be used for archival purposes.
          </p>
          <p>
            If you wish to restore a backup, you may do so by contacting us at <a href="mailto:support@skyhook.io">support@skyhook.io</a>. You will assume full liability for any damage caused to data during restoration. You may create your own backups when using the Platform.
          </p>

          <h2>Fees</h2>
          <p>
            Use of the Platform may be subject to payment of the fees, as applicable to your chosen subscription tier, in the amounts and terms presented on <a href="https://skyhook.io/pricing">skyhook.io/pricing</a> (the &quot;<strong>Fees</strong>&quot;).
          </p>
          <p>
            Your subscription will renew automatically on a monthly basis, at the then-current rates and terms. By subscribing to the Platform you authorize us to charge your chosen payment method on a recurring monthly basis for the duration of our engagement with you. You may cancel your subscription at any time by emailing us at <a href="mailto:support@skyhook.io">support@skyhook.io</a>, and cancellation will become effective at the end of the then-current subscription cycle.
          </p>
          <p>
            We reserve the right to change, from time to time and in our sole discretion, the available subscription tiers and the Fees associated therewith. We will notify you of any such changes in advance. The change will become effective a reasonable time thereafter, and in any case not before the end of the current subscription cycle. If you find this change unacceptable, you may terminate these Terms upon written notice to us, and termination will become effective following the end of the current subscription cycle.
          </p>
          <p>
            Failure to settle any overdue Fee within twenty-one (21) calendar days of its original due date will constitute a material breach of these Terms and, without limiting any other remedies available to us, we may, following written notice to you: (i) terminate these Terms; or (ii) suspend access to the Platform for all Authorized Users, until payment is made current. Overdue Fees shall bear interest at the rate of one percent (1%) per month.
          </p>

          <h2>Intellectual Property</h2>
          <p>
            <strong>Our Intellectual Property.</strong> All rights, title and interest in and to the Platform, including all content therein, and all patents, copyrights, trademarks, trade secrets and other intellectual property rights and any goodwill associated therewith, embodied therein or utilized by us in the operation of the Platform (excluding Customer Data and Generated Materials), are the exclusive property of Skyhook or our licensors. This includes our databases and the Platform&apos;s design, graphics, computer code, algorithms and &quot;look and feel&quot; (all together: &quot;<strong>Proprietary Content</strong>&quot;).
          </p>
          <p>
            Other than as expressly permitted in these Terms, you may not, either by yourself or by a third party on your behalf, copy, distribute, display or perform publicly, sublicense, decompile, disassemble, reduce to human readable form, execute publicly, make available to the public, adapt, make commercial use of, process, compile, translate, sell, lend, rent, reverse engineer, combine with other software, modify or create derivative works of, the Proprietary Content or any part thereof, in any way or by any means.
          </p>
          <p>
            You may not use any name, mark or logo that is similar to our marks and logos. You must refrain from any action or omission that may dilute or damage our goodwill.
          </p>
          <p>
            <strong>Your Intellectual Property.</strong> You retain full ownership of your Customer Data and the Generated Materials. By using the Platform, you grant us an irrevocable, perpetual, world-wide, royalty-free, sub-licensable and assignable license to use your Customer Data: (i) to provide you with the Platform and its functionality; (ii) in aggregated, statistical and anonymized form, to improve and enhance our Platform and services.
          </p>

          <h2>Privacy</h2>
          <p>
            We respect your privacy as a user of our Platform. Our Privacy Policy explains our privacy practices and we encourage you to read it carefully.
          </p>
          <p>
            By using our Platform, you acknowledge that your Customer Data must not include any personally identifiable data relating to you, others in your organization, the organization&apos;s clients or vendors or any other third party.
          </p>

          <h2>Disclaimer of Warranty</h2>
          <p>
            THE PLATFORM IS PROVIDED FOR USE &quot;AS IS&quot; AND &quot;WITH ALL FAULTS&quot;. WE AND OUR DIRECTORS, OFFICERS, EMPLOYEES, AGENTS, ADVISORS, CONSULTANTS, SUBCONTRACTORS AND ASSIGNEES (COLLECTIVELY, OUR &quot;<strong>STAFF</strong>&quot;) DISCLAIM ALL WARRANTIES AND REPRESENTATIONS, EITHER EXPRESS OR IMPLIED, WITH RESPECT TO THE PLATFORM, INCLUDING ANY WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, QUALITY, CORRECTNESS, LEGAL COMPLIANCE, NON-INFRINGEMENT, TITLE, COMPATIBILITY, PERFORMANCE, AVAILABILITY, SAFETY, SECURITY OR ACCURACY. YOU ACKNOWLEDGE AND AGREE THAT THE USE OF THE PLATFORM IS ENTIRELY, OR TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, AT YOUR OWN RISK.
          </p>
          <p>
            WE DO NOT WARRANT THAT THE PLATFORM WILL OPERATE WITHOUT DISRUPTION, ERRORS OR INTERRUPTIONS, OR THAT IT WILL BE, AT ALL TIMES, ACCESSIBLE, AVAILABLE OR IMMUNE TO ERRORS, GLITCHES OR UNAUTHORIZED ACCESS.
          </p>
          <p>
            MESSAGES PROVIDED THROUGH THE SKYHOOK ASSISTANT ARE AUTOMATICALLY GENERATED BY ARTIFICIAL INTELLIGENCE (AI) AND NOT PROVIDED BY HUMANS. ANY INFORMATION, GUIDANCE OR ADVICE PROVIDED THROUGH THE SKYHOOK ASSISTANT IS FOR INFORMATIONAL PURPOSES ONLY. YOU ARE SOLELY RESPONSIBLE FOR EVALUATING THE ACCURACY, COMPLETENESS AND RELEVANCE OF ANY MESSAGES YOU RECEIVE THROUGH THE SKYHOOK ASSISTANT. YOUR USE OF, AND RELIANCE UPON, THE SKYHOOK ASSISTANT AND THE MESSAGES PROVIDED TO YOU THROUGH IT IS SOLELY AT YOUR OWN RISK. YOU ASSUME FULL RESPONSIBILITY FOR ANY LOSS OR DAMAGE ARISING FROM OR IN RELATION TO YOUR USE OF THE SKYHOOK ASSISTANT.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, NEITHER PARTY SHALL BE LIABLE FOR ANY DIRECT, INDIRECT, SPECIAL, PUNITIVE, EXEMPLARY, STATUTORY, INCIDENTAL OR CONSEQUENTIAL DAMAGE, OR ANY SIMILAR DAMAGE OR LOSS (INCLUDING LOSS OF PROFIT AND LOSS OF DATA), COSTS, EXPENSES AND PAYMENTS, EITHER IN TORT (INCLUDING NEGLIGENCE), CONTRACT, OR IN ANY OTHER FORM OR THEORY OF LIABILITY, ARISING FROM, OR IN CONNECTION WITH THE USE OF, OR THE INABILITY TO USE THE PLATFORM, OR FROM ANY FAILURE, ERROR, OR BREAKDOWN IN THE FUNCTION OF THE PLATFORM.
          </p>
          <p>
            THE TOTAL LIABILITY OF EITHER PARTY TO THE OTHER UNDER THESE TERMS SHALL BE LIMITED TO THE TOTAL FEES ACTUALLY PAID BY YOU TO SKYHOOK DURING THE TWELVE (12) MONTHS PERIOD IMMEDIATELY PRECEDING THE EVENT GIVING RISE TO THE CLAIM(S).
          </p>

          <h2>Indemnity</h2>
          <p>
            Each party shall indemnify and hold the other party and its officers, directors, employees, agents, successors and assigns harmless from and against all loss, liability, costs (including reasonable attorney&apos;s fees), charges, claims or damages against any third party claim, loss, damages or liability which result from (i) the willful misconduct or negligent act of commission or omission of a party, its agents or employees, in relation to these Terms or the Platform; or (ii) any material breach of these Terms.
          </p>
          <p>
            In case any action, proceeding or claim shall be brought against one of the parties hereto (an &quot;<strong>Indemnified Party</strong>&quot;) based upon any of the above claims and in respect of which indemnity may be sought against the other party hereto (the &quot;<strong>Indemnifying Party</strong>&quot;) such Indemnified Party shall promptly notify the Indemnifying Party in writing.
          </p>
          <p>
            The failure by an Indemnified Party to notify the Indemnifying Party of such a claim shall not relieve the Indemnifying Party of responsibility under this Section, except to the extent such failure adversely prejudices the ability of the Indemnifying Party to defend such claim. The Indemnifying Party, at its expense, with counsel of its own choice, shall defend against, negotiate, settle or otherwise deal with any such claim, provided that the Indemnifying Party shall not enter into any settlement or compromise of any claim which could lead to liability or create any financial or other obligation on the part of the Indemnified Party without the Indemnified Party&apos;s prior written consent. The Indemnified Party may participate in the defense of any claim with counsel of its own choice and at its own expense.
          </p>
          <p>
            The parties agree to cooperate with each other in connection with the defense, negotiation or settlement of any such claims. In the event that the Indemnifying Party does not undertake the defense, compromise or settlement of any claim, the Indemnified Party shall have the right to control the defense or settlement of such claim with counsel of its choosing.
          </p>

          <h2>Availability</h2>
          <p>
            We will provide the Platform in a manner that substantially conforms to the features, abilities and functions specified by us. In addition, we will endeavor to have the Platform available and operate properly without errors, on a 24/7 basis. However, as a service that relies on software, infrastructure, servers, third-party networks and continuous internet connectivity outside our control, we cannot guarantee that the Platform will operate in an uninterrupted or error-free manner, or that it will always be available, or free from errors, omissions or malfunctions. If we become aware of any failure or malfunction, we will attempt to regain the Platform&apos;s availability as soon as practicable.
          </p>
          <p>
            The Platform may be temporarily unavailable due to scheduled maintenance or unscheduled emergency maintenance, either by us or our third-party providers. Where possible, we will provide you with advance notice by email of any scheduled Platform disruptions.
          </p>

          <h2>Confidentiality</h2>
          <p>
            Throughout the engagement, each party may provide its Confidential Information (the &quot;<strong>Disclosing Party</strong>&quot;) to the other party (the &quot;<strong>Receiving Party</strong>&quot;). The Receiving Party must hold any Confidential Information in confidence using the same degree of care, but in no case less than a reasonable degree of care, that it uses to prevent the unauthorized dissemination or publication of its own Confidential Information. The Receiving Party shall use the Confidential Information disclosed by the Disclosing Party, solely for the purpose of performing its obligations under these Terms.
          </p>
          <p>
            The parties agree that any violation or threat of violation hereof could result in irreparable harm to the Disclosing Party for which damages would be an inadequate remedy. Therefore, in addition to its rights and remedies otherwise available by applicable law, the Disclosing Party shall be entitled to equitable relief as a court may deem proper, including injunctions, to prevent any unauthorized use, disclosure or any other breach hereof.
          </p>

          <h2>Termination</h2>
          <p>
            Either party may terminate these Terms for breach of a material term or condition, upon written notice to the other party with immediate effect, if the breaching party has not cured the breach to the reasonable satisfaction of the non-breaching party within 14 days of receiving notice thereof from the other party.
          </p>
          <p>
            Either party may immediately terminate these Terms in their entirety by giving the other party written notice if the other party files in any court or agency pursuant to any statute or regulation of any state or country, a petition in bankruptcy or insolvency or for reorganization or for an arrangement or for the appointment of a receiver or trustee of the other party or of its assets, or if the other party proposes a written agreement of composition or extension of its debts, or if the other party is served with an involuntary petition against it, filed in any insolvency proceeding, and such petition will not be dismissed within sixty (60) days after the filing thereof, or if the other party proposes or is a party to any dissolution or liquidation, or if the other party makes an assignment for the benefit of creditors.
          </p>
          <p>
            We may block your access to, and terminate these Terms and your use of the Platform, effective immediately upon sending a notice, if:
          </p>
          <ul>
            <li>We reasonably believe that your use of the Platform causes substantial harm or liability to us or to third parties;</li>
            <li>We&apos;re required to do so under applicable law or a judicial order.</li>
          </ul>
          <p>
            Upon termination, you must pay all outstanding payments and cease using the Platform. In addition, each party will destroy the other party&apos;s Confidential Information in its possession (except that a party may retain one archived and safeguarded copy of the other party&apos;s Confidential Information, which shall not be used for any purpose except for accounting, bookkeeping or enforcement of these Terms). For the avoidance of doubt, you may continue to use any Generated Materials you have generated using the Platform, following termination.
          </p>
          <p>
            Provisions in these Terms that by their nature should survive termination or expiration, will so survive and remain in full force and effect following such termination or expiration.
          </p>

          <h2>General</h2>
          <p>
            <strong>Governing law and dispute resolution.</strong> These Terms shall be governed by the laws of the State of Delaware, without reference to its conflict of laws rules. Any and all disputes, claims or controversies between you and Skyhook regarding these Terms or the use of the Platform, which are not amicably resolved, shall be settled through binding arbitration (rather than in court) by telephone, online or based solely upon written submissions without in-person appearance, administered by the American Arbitration Association (AAA), under its Commercial Arbitration Rules (which are available at www.adr.org). The substantive laws of arbitration shall be the laws of the State of Delaware.
          </p>
          <p>
            Judgment on the award rendered by the arbitrator(s) may be entered in any court having jurisdiction thereof. The Federal Arbitration Act and Federal Arbitration Law apply to this Agreement. Payment of filing, administration and arbitrator fees will be governed by the AAA&apos;s Commercial Arbitration Rules. These fees will be shared equally, unless the arbitrator: (i) determines that the claims are frivolous, in which case the claimant shall bear all such fees arising from the frivolous claim; or (ii) determines that the fees should be allocated differently.
          </p>
          <p>
            You and Skyhook hereby acknowledge, agree and covenant that any disputes shall only be adjudicated in arbitration on an individual basis, and not in class, collective, consolidated or representative proceedings. Notwithstanding the foregoing, a party may assert an impleader claim against the other party pursuant to the indemnity clause, in any court adjudicating a third-party claim against the other party.
          </p>
          <p>
            <strong>Relationship.</strong> These Terms do not create any agency, partnership, employment, trustee, or other type of legal relationship between you and Skyhook.
          </p>
          <p>
            <strong>Completeness.</strong> These Terms constitute the entire agreement between you and us concerning the subject matter herein and supersede all prior and contemporaneous negotiations and oral representations, agreements and statements regarding the Platform.
          </p>
          <p>
            <strong>Assignment.</strong> Neither party shall assign or delegate these Terms or any of its rights, performances, duties or obligations hereunder. Any purported assignment or delegation, in contravention of the above, will be null and void. In the event of a merger, acquisition, change of control or the sale of all or substantially all of our equity or assets of Skyhook, we may, upon notice to you and without obtaining your consent, assign and delegate these Terms, in their entirety, including all of our rights, performances, duties, liabilities and obligations contained herein, to a third party. With such assignment, transfer and delegation, we are irrevocably and fully released from all rights, performance, duties, liabilities and obligations under these Terms.
          </p>

          <h2>Definitions</h2>
          <ul>
            <li>&quot;<strong>Authorized Users</strong>&quot; shall mean employees and subcontractors of a customer organization.</li>
            <li>&quot;<strong>Confidential Information</strong>&quot; shall mean any and all information, including but not limited to documentation, designs, software and software code, prototypes, product descriptions, technical or business information, ideas, discoveries, inventions, specifications, formulas, processes, programs, plans, drawings, models, network configuration and rights-of-way, requirements, standards, financial and non-financial data, marketing, trade secrets, know-how, customer lists, prices, as well as any and all intellectual and industrial property rights contained therein and/or in relation thereto; provided however, that Confidential Information may be disclosed if it (i) is or becomes lawfully in the public domain other than through a breach of any non-disclosure agreement or any a confidentiality obligation, (ii) was definitely known to either party prior to the disclosure, as evidenced by its business records, (iii) is independently developed by or for the party without reference to or use of Confidential Information, (iv) is lawfully obtained by any party from a third party without violation of a confidentiality obligation, (v) the Disclosing Party agrees in writing that it may be disclosed by the Receiving Party, or (vi) is required or compelled by law to be disclosed, provided that the Receiving Party gives reasonable prior written notice to the Discloser to allow it to seek protective or other court orders. For the avoidance of doubt, Customer Data shall be your Confidential Information.</li>
            <li>&quot;<strong>Customer Data</strong>&quot; shall mean any data, information, files, or methods relating to or provided by the Customer which are stored, processed, or passed through the Platform.</li>
            <li>&quot;<strong>Downtime</strong>&quot; shall mean any time the Platform is unavailable, except for: (i) scheduled maintenance downtimes; and (ii) network errors, infrastructure errors or other errors that are not due to Skyhook&apos;s fault or are beyond Skyhook&apos;s reasonable control.</li>
            <li>&quot;<strong>Generated Materials</strong>&quot; shall mean any derivative works created by you through your use of the Platform, to be implemented by you in your own or your organization&apos;s environment.</li>
            <li>&quot;<strong>Update</strong>&quot; shall mean minor changes to the Platform, that do not materially change the Platform&apos;s specifications.</li>
            <li>&quot;<strong>Upgrade</strong>&quot; shall mean major changes to the Platform, that affect the interface, functionality or design of the Platform.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
