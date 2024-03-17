export default function CookiePage() {
  return (
    <div className="px-44 py-10 flex flex-col gap-3 text-justify text-xs">
      <h1 className="text-3xl font-semibold">Cookie&apos;s policy </h1>
      <p>
        This Cookies Policy explains how we use cookies and similar technologies
        on our website. By using our website, you consent to the use of cookies
        as described in this policy.
      </p>

      <h2 className="text-xl font-semibold">What are Cookies?</h2>
      <p>
        Cookies are small text files that are placed on your device when you
        visit a website. They are widely used to enhance your browsing
        experience and provide information to website owners.
      </p>

      <h2 className="text-xl font-semibold">How We Use Cookies</h2>
      <p>We use cookies for various purposes, including:</p>
      <ul className="list-disc list-inside">
        <li>
          Essential Cookies: These cookies are necessary for the functioning of
          our website. They enable core functionality such as page navigation,
          access to secure areas, and session management.
        </li>
        <li>
          Functional Cookies: Functional cookies allow our website to remember
          choices you make and provide enhanced features. We use the cookie
          &quot;cookiePreferencesSet&quot; in order to know if the button of
          setting cookie preferences has been used and
          &quot;cookiePreferences&quot; to track which cookies have been
          selected.
        </li>
      </ul>

      <h2 className="text-xl font-semibold">Managing Cookies</h2>
      <p>
        You can control and manage cookies in various ways. Here are some tips
        to avoid cookies:
      </p>
      <ul className="list-disc list-inside">
        <li>
          Configure your web browser settings to block or prompt you before
          accepting cookies.
        </li>
        <li>Regularly delete cookies stored on your device.</li>
        <li>
          Use browser extensions or privacy tools that help manage and block
          cookies.
        </li>
        <li>
          Opt-out of targeted advertising by adjusting your preferences in
          advertising networks.
        </li>
      </ul>
      <p>
        Please note that disabling or deleting certain cookies may affect your
        browsing experience and limit the functionality of our website.
      </p>
      <p>
        If you want to change your choices regarding your personal information,
        you can use the button below:
      </p>
      <button className="rounded p-2 bg-slate-200 w-fit">
        Change Cookie Preferences
      </button>
      <br />

      <h2 className="text-xl font-semibold">Third-Party Cookies</h2>
      <p>
        We may also allow third-party service providers to place cookies on your
        device through our website. These providers may use cookies for their
        own purposes, such as analyzing website traffic or delivering targeted
        advertisements.
      </p>
      <p>These providers are:</p>
      <ul className="list-disc list-inside flex flex-col gap-2">
        <li>
          CloudFlare:
          <p className="pl-4 py-1">
            For information about how Cloudflare uses cookies, please refer to
            Cloudflare&apos;s{" "}
            <a
              aria-label="Check out Cloudflare's Cookie Policy"
              href="https://www.cloudflare.com/en-gb/cookie-policy/"
              className="text-blue-500 underline"
            >
              cookie policy
            </a>
            .
          </p>
        </li>
        <li>
          Google Analytics:
          <p className="pl-4 py-1">
            We use Google Analytics to carry out statistical analysis of page
            use, page interactions and paths through the Website to evaluate and
            develop our Website. This is known as &apos;digital analytics&apos;.
            We may also record certain information that customers provide during
            a Website purchase or other process.
          </p>
          <p className="pl-4 py-1">
            This information allows us to understand individual behaviours and
            needs more accurately. For more information on how Google uses the
            data collected via this service, see{" "}
            <a
              aria-label="Check out Google's Cookie Policy"
              href="http://www.google.com/policies/privacy/partners/"
              className="text-blue-500 underline"
            >
              here
            </a>
            .
          </p>
          <p className="pl-4 py-1">
            To opt out of being tracked via Google Analytics, you can also use
            Google&apos;s opt-out browser add-on{" "}
            <a
              aria-label="Use Google's opt-out add-on"
              href="https://tools.google.com/dlpage/gaoptout"
              className="text-blue-500 underline"
            >
              here
            </a>
            .
          </p>
        </li>
        <li>
          Hotjar:
          <p className="pl-4 py-1">
            We use Hotjar in order to better understand our users&apos; needs
            and to optimize this service and experience. Hotjar is a technology
            service that helps us better understand our users&apos; experience
            (e.g. how much time they spend on which pages, which links they
            choose to click, what users do and don&apos;t like, etc.) and this
            enables us to build and maintain our service with user feedback.
            Hotjar uses cookies and other technologies to collect data on our
            users&apos; behavior and their devices. This includes a
            device&apos;s IP address (processed during your session and stored
            in a de-identified form), device screen size, device type (unique
            device identifiers), browser information, geographic location
            (country only), and the preferred language used to display our
            website. Hotjar stores this information on our behalf in a
            pseudonymized user profile. Hotjar is contractually forbidden to
            sell any of the data collected on our behalf.{" "}
          </p>
          <p className="pl-4 py-1">
            For further details, please see the &apos;about Hotjar&apos; section
            of{" "}
            <a
              aria-label="Check out Hotjar's Cookie Policy"
              href="https://help.hotjar.com/hc/en-us/sections/115003204947"
              className="text-blue-500 underline"
            >
              Hotjar&apos;s support site
            </a>
            .
          </p>
        </li>
        <li>
          MailerLite:
          <p className="pl-4 py-1">
            For information about how MailerLite uses cookies, please refer to
            MailerLite&apos;s{" "}
            <a
              aria-label="Check out MailerLite's Cookie Policy"
              href="https://www.mailerlite.com/legal/cookie-policy"
              className="text-blue-500 underline"
            >
              cookie policy
            </a>
            .
          </p>
        </li>
        <li>
          YouTube:
          <p className="pl-4 py-1">
            We use YouTube cookies to embed videos on our web site. YouTube
            inserts these cookies for keeping tracking of visitors, user
            preferences and collecting statistics about views. They can&apos;t
            be used to identify you.
          </p>
          <p className="pl-4 py-1">
            For information about how YouTube uses cookies, please refer to
            Google&apos;s{" "}
            <a
              aria-label="Check out Googles's Privacy Policy"
              href="https://policies.google.com/privacy"
              className="text-blue-500 underline"
            >
              cookie policy
            </a>
            .
          </p>
        </li>
      </ul>

      <h2 className="text-xl font-semibold">Updates to this Policy</h2>
      <p>
        We may update this Cookies Policy from time to time to reflect changes
        in our practices or legal requirements. Any updates will be posted on
        this page, and we encourage you to review this policy periodically.
      </p>

      <h2 className="text-xl font-semibold">Contact Us</h2>
      <p>
        If you have any questions or concerns about our use of cookies, please
        contact us using the contact information provided on our website.
      </p>
    </div>
  );
}
