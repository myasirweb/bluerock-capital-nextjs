"use client";
import React from "react";

export default function Cookies() {
  return (
    <div className="bg-slate-900 text-gray-300 font-sans min-h-screen">
      {/* Header */}
      <header
        className="relative py-20 text-center px-4 shadow-lg bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/counter.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/60"></div>
        <div className="relative z-10">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Cookies Policy
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 py-12 space-y-12">
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-white">1. Introduction</h2>
          <p className="text-gray-400 leading-relaxed">
            This website uses both its own and third-party cookies to provide
            visitors with a much better browsing experience and services tailored
            to everyone’s needs and interests.
          </p>
          <p className="text-gray-400 leading-relaxed">
            In accordance with the EU “e-Privacy” Directive, in force since May
            26, 2012 and with the provisions of Law no. 506 of November 17, 2004
            on the processing of personal data and the protection of privacy in
            the electronic communications sector, all website visitors are required
            to consent before sending cookies to their computers.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-white">2. What are cookies?</h2>
          <p className="text-gray-400 leading-relaxed">
            An “Internet Cookie” (also known as a “browser cookie”, “HTTP cookie”
            or simply “cookie”) is a small file, consisting of letters and numbers,
            that will be stored on your computer, mobile terminal or other equipment
            of a user from which the Internet is accessed. The cookie is installed
            by the request issued by a web server to a browser and is completely
            “passive” (does not contain software, viruses or spyware and can not
            access the information on the user’s hard drive).
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-white">
            3. For what purposes are cookies used through this website
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Our website installs cookies only to allow the improvement of the
            offered functions, so that the experience occasioned by visiting the
            site becomes more pleasant. We do not use cookies to collect, process,
            disseminate or record personal data.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Cookies play an important role in facilitating access to and delivery of
            multiple services that the user enjoys on the Internet, such as:
          </p>
          <ul className="list-disc list-inside text-gray-400 space-y-1">
            <li>Customize certain settings such as:</li>
            <li>– the language in which a site is viewed;</li>
            <li>– the currency in which certain prices or tariffs are expressed;</li>
            <li>– keeping the options for various products in the shopping cart;</li>
            <li>– accessing old preferences by using the “Forward” and “Back” button.</li>
            <li>Cookies provide site owners with feedback on how their sites are used by users;</li>
            <li>Allow multimedia or other applications from other sites to be included in a particular site;</li>
            <li>Improve the efficiency of online advertising.</li>
          </ul>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-white">
            4. What is the lifetime of cookies?
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Cookies are administered by webservers. The lifespan of a cookie can
            vary significantly. Some cookies are used exclusively for a single
            session (session cookies) and are no longer retained once the user has
            left the website, while other cookies are retained and reused each time
            the user returns (‘persistent cookies’). However, cookies can be deleted
            by a user at any time through browser settings.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-white">
            5. What are cookies placed by third parties?
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Certain sections of content on some sites may be provided through third
            parties/providers (eg news-box, a video or an advertisement). These
            third parties may place cookies through another website and they are
            called “third party cookies” because they are not placed by the owner of
            that website.
          </p>
          <p className="text-gray-400 leading-relaxed">
            These cookies may come from the following third parties: facebook.com,
            twitter.com, etc.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-white">
            6. What cookies are used through this website
          </h2>
          <p className="text-gray-400 leading-relaxed">
            A visit to the website may place cookies for the purposes of:
          </p>
          <ul className="list-disc list-inside text-gray-400 space-y-1">
            <li>Increase website performance;</li>
            <li>Visitor analysis;</li>
            <li>Geotargetting;</li>
            <li>User registration.</li>
          </ul>
          <p className="text-gray-400 leading-relaxed">
            On some pages, third parties may set their own anonymous cookies, in
            order to track the success of an application or to customize an
            application. Due to the use of the website, the website cannot access
            these cookies, just as third parties cannot access the cookies held by
            that website.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-white">
            7. What type of information is stored and accessed through cookies?
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Cookies store information in a small text file, which allows a website
            to recognize a browser. The web server will recognize the browser until
            the cookie expires or is deleted. The cookie stores important
            information that improves your Internet browsing experience.
          </p>
          <ul className="list-disc list-inside text-gray-400 space-y-1">
            <li>The settings of the language in which you want to access a site;</li>
            <li>Keeping a user logged in to the webmail account;</li>
            <li>Online banking security;</li>
            <li>Keeping products in the shopping cart.</li>
          </ul>
        </section>

        <section className="space-y-6">
          <h2 className="text-3xl font-semibold text-white">8. How can cookies be stopped?</h2>
          <p className="text-gray-400 leading-relaxed">
            If you prefer, you can block all cookies or just some of them or even
            remove cookies that have been installed on your terminal. But be aware
            that you may not be able to use certain functions. To enable this lock,
            you must change your browser privacy settings.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Disabling and refusing to receive cookies may make certain sites
            impractical or difficult to visit and use. Also, the refusal to accept
            cookies does not mean that the user will no longer receive / see online
            advertising. All modern browsers offer the ability to change cookie
            settings.
          </p>
          <p className="text-gray-400 leading-relaxed">
            These settings are usually found in the “Options”, “Settings” or
            “Preferences” menus (buttons) of the browser.
          </p>
        </section>
      </main>
    </div>
  );
}
