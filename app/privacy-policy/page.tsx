export default function PrivacyPage() {
  return (
    <div className="px-44 py-10 flex flex-col gap-3 text-justify text-xs">
      <h1 className="text-3xl font-semibold">Privacy Policy</h1>
      <h2 className="text-xl font-semibold">Effective Date: 21/06/2023</h2>
      <h3 className="text-lg font-semibold">1. Introduction</h3>
      <p>
        Welcome to MadBoulder (&quot;we,&quot; &quot;us,&quot; or
        &quot;our&quot;). We are committed to protecting the privacy of our
        users (&quot;you&quot; or &quot;your&quot;). This Privacy Policy
        explains how we collect, use, disclose, and safeguard your personal
        information when you visit our website madboulder.com or use our
        services.
      </p>
      <p>
        By accessing or using our website and services, you acknowledge that you
        have read, understood, and agree to be bound by the terms of this
        Privacy Policy. If you do not agree with this policy, please do not use
        our website or services.
      </p>

      <h3 className="text-lg font-semibold">2. Information We Collect</h3>
      <p>
        We may collect certain personal information from you when you visit our
        website or use our services. The types of information we may collect
        include:
      </p>
      <ul className="list-disc list-inside">
        <li>Contact information (such as email address)</li>
        <li>Demographic information</li>
        <li>Log files, IP addresses, and device information</li>
        <li>Usage data and analytics</li>
        <li>Cookies and similar technologies</li>
        <li>Any other information you voluntarily provide to us</li>
      </ul>

      <h3 className="text-lg font-semibold">3. How We Use Your Information</h3>
      <p>
        We may use the information we collect from you for the following
        purposes:
      </p>
      <ul className="list-disc list-inside">
        <li>Provide, maintain, and improve our website and services</li>
        <li>Personalize your user experience</li>
        <li>Respond to your inquiries, comments, or feedback</li>
        <li>Send you administrative or promotional communications</li>
        <li>
          Analyze trends and gather demographic information for research
          purposes
        </li>
        <li>
          Prevent, detect, and investigate any illegal activities or violations
          of our terms of service
        </li>
      </ul>

      <h3 className="text-lg font-semibold">
        4. Disclosure of Your Information
      </h3>
      <p>
        We may disclose your personal information to third parties in certain
        circumstances, including:
      </p>
      <ul className="list-disc list-inside">
        <li>
          Service providers and business partners who assist us in operating our
          website and delivering our services
        </li>
        <li>
          Compliance with legal obligations or to protect our rights, safety, or
          property
        </li>
        <li>
          Business transfers or acquisitions, if we are involved in a merger,
          sale, or transfer of assets
        </li>
        <li>With your consent or at your direction</li>
      </ul>
      <p>
        Please note that we will never sell, rent o lease your personal
        information to a third party.
      </p>

      <h3 className="text-lg font-semibold">
        5. Cookies and Tracking Technologies
      </h3>
      <p>
        We use cookies and similar technologies to enhance your user experience,
        improve our website and services, and gather information about your
        usage. You have the option to control cookies through your browser
        settings. Please refer to our {""}
        <a href="/cookie-policy" className="text-blue-500 underline">
          Cookie Policy
        </a>{" "}
        for more information.
      </p>

      <h3 className="text-lg font-semibold">6. Third-Party Links</h3>
      <p>
        Our website may contain links to third-party websites or services that
        are not operated or controlled by us. Please be aware that we are not
        responsible for the privacy practices of such third parties. We
        encourage you to review the privacy policies of those third-party
        websites or services before providing any personal information.
      </p>

      <h4 className="text-base font-semibold">
        6.1. Participation in the Amazon Services LLC Associates Program
      </h4>
      <p>
        MadBoulder is a participant in the Amazon Services LLC Associates
        Program, an affiliate advertising program designed to provide a means
        for sites to earn advertising fees by advertising and linking to
        Amazon.com. For more information on how Amazon handles your personal
        information, please refer to their{" "}
        <a
          href="https://www.amazon.com/gp/help/customer/display.html?nodeId=201909010"
          className="text-blue-500 underline"
        >
          Privacy Notice
        </a>
        .
      </p>

      <h4 className="text-base font-semibold">6.2. MailerLite</h4>
      <p>
        We use MailerLite to manage our email marketing subscriber list and to
        send emails to our subscribers. MailerLite is a third-party provider,
        which may process your data using industry-standard technologies to help
        us monitor and improve our newsletter. MailerLite’s privacy policy is
        available{" "}
        <a
          href="https://www.mailerlite.com/legal/privacy-policy"
          className="text-blue-500 underline"
        >
          here
        </a>
        . You can unsubscribe from our newsletter by clicking on the unsubscribe
        link provided at the end of each newsletter.
      </p>

      <h3 className="text-lg font-semibold">7. Data Security</h3>
      <p>
        We implement reasonable security measures to protect your personal
        information from unauthorized access, disclosure, alteration, or
        destruction. However, please be aware that no method of transmission
        over the internet or electronic storage is completely secure, and we
        cannot guarantee absolute security.
      </p>

      <h3 className="text-lg font-semibold">8. Children&apos;s Privacy</h3>
      <p>
        Our website and services are not intended for individuals under the age
        of 18. We do not knowingly collect personal information from children.
        If you believe that we may have inadvertently collected personal
        information from a child, please contact us immediately.
      </p>

      <h3 className="text-lg font-semibold">
        9. Updates to This Privacy Policy
      </h3>
      <p>
        We reserve the right to update this Privacy Policy at any time. The
        updated version will be posted on our website, and the &quot;Effective
        Date&quot; at the top will reflect the date of the latest revision. We
        encourage you to review this Privacy Policy periodically.
      </p>

      <h3 className="text-lg font-semibold">10. Contact Us</h3>
      <p>
        If you have any questions, concerns, or requests regarding this Privacy
        Policy, please contact us{" "}
        <a href="/about" className="text-blue-500 underline">
          here
        </a>
        .
      </p>
      <br />
    </div>
  );
}
