"use client";
import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="bg-slate-900 text-gray-300 font-sans min-h-screen">
      {/* Header */}
      <header
        className="relative py-20 text-center px-4 rounded-b-3xl shadow-lg bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/counter.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/60 rounded-b-3xl"></div>
        <div className="relative z-10">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Privacy Policy
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 py-12 space-y-10">
        <div>
          <h2 className="text-3xl font-semibold text-white">
            I. Our commitment to your personal data
          </h2>
          <p className="text-gray-400 leading-relaxed">
            The Personal Data Processing Policy describes the categories of your
            personal data that we process, the ways and purposes for which we
            collect them, in which situations we transfer personal data, as well
            as the rights and options you have in this regard. At the same time,
            the Personal Data Processing Policy details how we process personal
            data in customer relationship management, most often to keep you up
            to date with the latest developments or events in your field of
            interest.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-semibold text-white">
            II. The operator of your personal data
          </h2>
          <p className="text-gray-400 leading-relaxed">
            The operator in relation to your personal data is S.S.I.F. Blue Rock
            Financial Services headquartered in Bucharest, 2st District, 35
            Aurel Vlaicu Street, Corp B, 4th floor, postal code 020091: tel.
            0213000455, fax. 0213000479, email: office@bluerock.ro, registered
            with the Bucharest Trade Register under no. J40/14241/2011, C.U.I.
            9814029 and owner of the website blueroc.ro
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-semibold text-white">
            III. Categories of personal data processed
          </h2>
          <p className="text-gray-400 leading-relaxed">
            The personal data we process may include:
          </p>
          <ul className="list-disc list-inside text-gray-400 space-y-1">
            <li>
              Contact information, such as your name, mailing address, including
              your home address, if you provided it to us, business address,
              telephone number, mobile phone number, fax number, and e-mail
              address;
            </li>
            <li>
              The data resulting from your browsing on our website collected
              through cookies and similar technologies.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-semibold text-white">
            IV. Legal bases for the processing of personal data
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Any operation of processing your personal data will be carried out
            on the basis of one of the following legal grounds:
          </p>
          <ul className="list-disc list-inside text-gray-400 space-y-1">
            <li>The processing is necessary for concluding or executing a contract to which you are a party;</li>
            <li>The processing is necessary in order to comply with a legal obligation of the operator;</li>
            <li>The processing is performed based on your consent;</li>
            <li>Processing is necessary in order to protect the vital interests of you or another individual;</li>
            <li>Processing is necessary for the legitimate interests of Blue Rock Financial Services or a third party, unless your interests or fundamental rights and freedoms prevail over those interests;</li>
          </ul>
          <p className="text-gray-400 leading-relaxed">
            In the case of special categories of data, the processing will be
            done if, in addition to a general legal basis for data processing,
            one of the following specific processing conditions will be met:
          </p>
          <ul className="list-disc list-inside text-gray-400 space-y-1">
            <li>The consent of the data subject was obtained;</li>
            <li>We have a legal obligation to process these categories of data;</li>
            <li>Processing is necessary to establish, exercise or defend a right in court.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-semibold text-white">
            V. For what purposes do we process your personal data?
          </h2>
          <p className="text-gray-400 leading-relaxed">
            We may use your personal data for the following purposes (“Allowed
            Purposes”):
          </p>
          <ul className="list-disc list-inside text-gray-400 space-y-1">
            <li>Providing services and products;</li>
            <li>Management and administration of the contractual relationship with our clients;</li>
            <li>Compliance with our legal obligations;</li>
            <li>
              Analyzing and improving our services and communications to you,
              including conducting customer surveys on the level of customer
              satisfaction with the company’s services and products;
            </li>
            <li>
              For any purpose related to and / or auxiliary to any of the above,
              or for any other purpose for which your personal data have been
              provided to us, in compliance with applicable law.
            </li>
          </ul>
          <p className="text-gray-400 leading-relaxed">
            Also, based on your consent, we may send you various communications
            through the channels you have approved to keep you informed about
            services, products, events, projects or other promotional events.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-semibold text-white">
            VI. How long do we keep your personal data?
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Blue Rock Financial Services has implemented technical and
            organizational measures to organize the process and specific criteria
            for keeping your personal data (including according to our archiving
            procedures).
          </p>
          <p className="text-gray-400 leading-relaxed">
            We will cease the processing of personal data when it is no longer
            reasonably necessary in the Permitted Purposes, or when you withdraw
            your consent (if applicable) and there are no legitimate and
            compelling reasons to continue processing by Blue Rock Financial
            Services (including Blue Rock Financial Services’ legal obligation
            to continue to store such data) and which prevails over your
            interests, rights and freedoms.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-semibold text-white">
            VII. The rights you are entitled to
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Subject to certain legal conditions, you have the following rights
            in connection with the processing of your personal data:
          </p>
          <ul className="list-disc list-inside text-gray-400 space-y-1">
            <li>The right to request a copy of the personal data about you that we hold;</li>
            <li>The right to rectification of any incorrect or incomplete personal data;</li>
            <li>The right to oppose or restrict our use of your personal data;</li>
            <li>The right to withdraw your consent for the processing of data processed on the basis of consent;</li>
            <li>The right to delete your personal data;</li>
            <li>The right to data portability;</li>
          </ul>
          <p className="text-gray-400 leading-relaxed">
            If you wish to exercise the rights mentioned above, please contact
            us using the following contact details:
          </p>
          <ul className="list-none text-gray-400 space-y-1">
            <li>Address: Romania, Bucharest, 35 Aurel Vlaicu Street, 4th Floor, Corp B, 020091</li>
            <li>Email: office@bluerock.ro</li>
            <li>Tel: +40 21 3000 455</li>
            <li>Fax: +40 21 3000 479</li>
          </ul>
          <p className="text-gray-400 leading-relaxed">
            In order to comply with the legal obligations of security and
            confidentiality of our data, when you exercise one of the rights you
            enjoy as a data subject, we may ask you to prove your identity by
            sending us a copy of an identification document or any other
            information necessary to verify that the request comes from the
            relevant data subject.
          </p>
          <p className="text-gray-400 leading-relaxed">
            We will consider any requests or complaints we receive and we will
            send you a response in compliance with the deadlines provided by
            law. If you are not satisfied with our answer or consider that the
            processing is done in violation of applicable law, you can file a
            complaint to the Romanian data supervisory authority: National
            Authority for Supervision of Personal Data Processing – based in Bd.
            Gheorghe Magheru no. 28-30, Bucharest, Romania.
          </p>
          <p className="text-gray-400 leading-relaxed">
            The most recent update of this Personal Data Processing Policy was
            made in May 2018. We reserve the right to periodically update and
            modify this Personal Data Processing Policy to reflect any changes
            in the way we process your personal data or any changes to legal
            requirements. In case of any such change, we will display on our
            website the modified version of the Personal Data Processing Policy
            and / or we will make it available to you in another way.
          </p>
        </div>
      </main>
    </div>
  );
}
