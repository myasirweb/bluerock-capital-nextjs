// app/terms-and-conditions/page.tsx (Next.js 13+ App Router)
"use client";
import React from "react";

export default function TermsAndConditions() {
  return (
    <section className="relative bg-slate-900 text-gray-300 font-sans py-16 px-6 md:px-16">
      <header
        className="relative py-20 text-center px-4 rounded-b-3xl shadow-lg bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/counter.jpg')" }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/60 rounded-b-3xl"></div>

        {/* Content */}
        <div className="relative z-10">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Terms &amp; Conditions
          </h1>
        </div>
      </header>
      <div className="max-w-5xl mx-auto space-y-10 mt-10">
        {/* Property Ownership */}
        <div className="space-y-4">
          <p>
            This site is the property of{" "}
            <strong>S.S.I.F. Blue Rock Financial Services S.A.</strong>
          </p>
          <p>
            S.S.I.F. Blue Rock Financial Services S.A. has the right to change
            at any time the information contained in or the structure of the
            website, without any prior notice. No information contained in the
            site shall be considered as an offer for selling products or
            delivering services. Information on the site shall not be
            interpreted as recommendations or investment advice. Blue Rock
            Financial Services cannot be held liable for any damages arising
            from accessing the site and the information contained herein.
          </p>
          <p>
            Reports and information on the site are the property of S.S.I.F.
            Blue Rock Financial Services S.A. Information and data contained in
            the reports are based on public information, that in our opinion are
            trustworthy, but we make no guarantees or representations as to
            their accuracy.
          </p>
          <p>
            The reports were prepared for informative purposes only and shall be
            interpreted neither as a recommendation or a solicitation or offer
            to purchase or sell securities nor as legal, fiscal, financial
            advice. Each potential investor should carry out its own assessment
            and not rely solely on the information stated here.
          </p>
          <p>
            SSIF Blue Rock Financial Services S.A. will not be held liable for
            any outcomes arising from investment decisions taken on the
            information contained in the reports. SSIF Blue Rock Financial
            Services S.A. or any affiliate may hold at any time securities
            presented in the reports.
          </p>
          <p>
            Reproduction, distribution, or publication of the information
            contained in the site by anyone, without prior written consent of
            SSIF Blue Rock Financial Services S.A. is prohibited.
          </p>
          <p>
            Changing of images and information is also prohibited. SSIF Blue
            Rock Financial Services S.A. holds all property rights with respect
            to the reports.
          </p>
          <p>
            You hereby consent to the terms and conditions when accessing the
            site.
          </p>
        </div>

        {/* Confidentiality */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">CONFIDENTIALITY</h2>
          <p>
            S.S.I.F. Blue Rock Financial Services SA processes the clients'
            personal data: personal ID code, number of the ID, address,
            telephone number, e-mail address manually or by electronic means, in
            order to open an investment account for trading and settlement as
            well as for the control of the activity. Some of this information
            may also be submitted to the capital market institutions or
            supervisory authorities.
          </p>
          <p>
            You have to provide personal data in order to open an investment
            account and to trade on the capital market. In case you refuse to
            provide the information, we are not able to open the account.
          </p>
          <p>
            According to Regulation no. 679 of April 27, 2016, you have the
            right to access, to interfere with the data and the right not to be
            subject to an individual decision. At the same time, you have the
            right to oppose the processing of your personal data and to request
            the deletion of the data. You are also recognized as having the
            right to appeal to justice.
          </p>
          <p className="mt-4">
            <strong>Financial Action Task Force (GAFI/F.A.T.F.)</strong>
            <br />
            <a
              href="https://www.fatf-gafi.org"
              className="text-blue-400 hover:underline"
            >
              www.fatf-gafi.org
            </a>
          </p>
          <p>
            <strong>MONEYVAL Committee</strong>
            <br />
            <a
              href="https://www.coe.int/moneyval"
              className="text-blue-400 hover:underline"
            >
              www.coe.int/moneyval
            </a>
          </p>
          <p>
            <strong>
              The National Office for Prevention and Fighting of Money
              Laundering
            </strong>
            <br />
            <a
              href="https://www.onpcsb.ro"
              className="text-blue-400 hover:underline"
            >
              www.onpcsb.ro
            </a>
          </p>
          <p>
            <strong>INTERNATIONAL SANCTIONS</strong>
            <br />
            <a
              href="http://asfromania.ro/index.php/international/sanctiuni-internationale"
              className="text-blue-400 hover:underline"
            >
              http://asfromania.ro/index.php/international/sanctiuni-internationale
            </a>
          </p>
          <p>
            <strong>PETITION PROCEDURE</strong>
            <br />
            Document
          </p>
        </div>

        {/* Order Execution Policy */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">
            ORDER EXECUTION POLICY
          </h2>
          <p>
            The Order execution policy takes into consideration three client
            categories, namely, retail clients, professional clients, and
            clients, eligible counterparties.
          </p>
          <p>
            The Order execution policy of the company regarding financial
            instruments focuses on the following:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              the achievement of the best possible results for clients, taking
              into consideration price, costs, speed and the likelihood of
              execution and settlement, size, nature of transaction or any other
              relevant order execution consideration;
            </li>
            <li>
              prompt, fair and expeditious execution of client orders with
              respect to other client orders or to the company's own orders;
            </li>
            <li>
              comparable execution of clients' orders depends on their reception
              time by the company;
            </li>
            <li>
              the observance of ethics and conduct standards in the relationship
              with clients;
            </li>
            <li>
              informing the client with respect to market conditions as well as
              other issuer-related information;
            </li>
          </ul>
          <p>
            The Order execution policy can be different, depending on the
            category the client belongs to. In case of retail clients the price
            and other costs can be decisive argument, as compared to
            professional clients, for which of higher importance may be the
            volume and nature of transaction, liquidity at the trading venue.
          </p>
          <p>
            As an exception, from the provisions mentioned above, transactions
            based on clients' clear and specific instructions are executed as
            such. In the event that the client sends a specific instruction,
            Blue Rock Financial Services has the obligation to execute the order
            according to that instruction.
          </p>
          <p>
            Client orders take precedence over the orders of the relevant
            persons and the orders on the company's own account, provided that
            market conditions allow for their execution, under the same time and
            price conditions. Blue Rock Financial Services is responsible for
            the manner in which orders are executed in compliance with the
            regulations in force. A refusal to execute an order, along with its
            motivation, shall be communicated to the client forthwith.
          </p>
          <p>
            Concerning a client's limit order in respect of the shares admitted
            to trading on a regulated market and which may not be executed
            immediately under the existing current market conditions, Blue Rock
            Financial Services shall, unless otherwise expressly stated by the
            client, take all necessary measures in order to facilitate the
            execution of that order in the most expeditious manner possible,
            making public the limit order in a way that is easily accessible to
            the other market participants by using the regulated market system,
            the alternative trading system or any other supervised system and
            ensuring the publicity, accessibility and quick execution of the
            order.
          </p>
          <p>
            If there is a conflict of interests, the company is obligated to
            clearly notify each client concerning the nature and source of the
            conflict of interests prior to the provision of financial investment
            services on its behalf. Client information shall comprise enough
            details, taking into consideration the type of client, in order to
            allow such client to make a decision with full knowledge of the case
            regarding the investment or related services in respect of which
            there is a conflict of interests.
          </p>
          <p>
            In the case of client order execution, Blue Rock Financial Services
            has the following obligations:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              to make sure that the orders executed on behalf of the clients are
              promptly and accurately registered and allocated;
            </li>
            <li>
              to execute comparable client orders promptly and successively,
              unless the order features or the prevailing market conditions make
              it unfeasible or the client interests otherwise require;
            </li>
            <li>
              to inform the retail client of any important situation that might
              affect the prompt execution of orders, as soon as it becomes aware
              of such situation;
            </li>
            <li>
              to warn the client if it considers that the financial instrument
              does not fit the investment profile established by the company
              based on the information received from the client.
            </li>
          </ul>
          <p>
            Blue Rock Financial Services may execute a client order or a
            transaction on own account together with another client's order,
            only if the following conditions are fulfilled:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              there has to be little likelihood that order and transaction
              aggregation is to the disadvantage of any of the clients whose
              orders are to be aggregated;
            </li>
            <li>
              each client whose order is to be aggregated has to be informed
              that aggregation might prove to its disadvantage in what concerns
              the respective order;
            </li>
            <li>
              an order allocation policy has to be set and actually implemented,
              stipulating sufficiently precise terms for an accurate allocation
              of the aggregated orders and transactions, including the manner in
              which the size and price of the orders shall determine the
              allocation and treatment of the partial execution.
            </li>
          </ul>
          <p>
            Client orders may be totally executed by means of one or several
            transactions, or partially, depending on the concrete market
            conditions available at the respective time (demand and supply) as
            well as on the liquidity of the respective issuer. A client order
            may be executed at different prices, according to the type of the
            order. The company may suspend the acceptance of orders if the
            access to the trading system is suspended. The client may cancel or
            change an order, provided that the order was not executed until the
            time when the change was entered into the trading system.
          </p>
          <p>
            In the relationship with the clients, the financial investment
            service agents that receive the trading orders shall introduce the
            clients to the facilities and terms of the orders and shall provide
            them with accurate information concerning the reference price of the
            current session, the current price, as well as the maximum and
            minimum prices admitted in the trading sessions.
          </p>
          <p>
            If transactions are executed for clients whose cash and securities
            are deposited with a custodian bank, they shall observe the specific
            procedure provided by the Bucharest Stock Exchange Code concerning
            the carrying out of transactions by settlement though an
            agent/custodian bank. The general rule consists in the receipt of
            the order settlement confirmation upon receipt of the order and not
            the receipt of the transaction settlement confirmation after the
            transaction has been operated in the system, so as to avoid the risk
            of a failed or deferred settlement in the system. Furthermore, an
            order shall not be accepted for execution if by that order the
            company would exceed the limit imposed by the requirements of
            capital/own funds adequacy, in the event that settlement is refused
            by the agent/custodian bank and a special buy-in transaction would
            be appropriate or required.
          </p>
          <p>
            The trading order comprises the information provided by the legal
            regulations in force. If the order does not comprise all of the
            information included in the order form, the agent may refuse to
            accept it. The transaction confirmation includes all the information
            provided by the legal regulations in force.
          </p>
          <p>
            Blue Rock Financial Services shall notify its clients with respect
            to any order execution change or any amendment of its order
            execution policy.
          </p>
        </div>

        {/* Policy Regarding Conflicts of Interest */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">
            Policy Regarding Conflicts of Interest
          </h2>
          <p>
            In order to prevent the apparition of conflicts of interests and to
            respect the confidentiality of the information obtained while
            providing various services, S.S.I.F. Blue Rock Financial Services
            S.A. identifies the conflict of interest situations and manages them
            according to its own policy and internal procedures, so that its
            customer's interests are not affected.
          </p>
          <p>
            Nevertheless, situations where conflicts of interests might appear
            between the Intermediary, relevant persons and a customer or between
            two customers, situations where the conflicts of interests cannot be
            avoided or managed according to internal independent policy. In this
            case, the Intermediary does not have to provide financial investment
            services as a counter party of the customer, or in the name of the
            customer to which it is, directly or indirectly, in a conflict of
            interests, taking into consideration including the interest which
            derive from transactions within the group he belongs to, unless it
            previously disclosed to the customer the nature and depth of the
            interest, in either written form or via telephone and only in the
            situation the customer agreed to close a transaction under the
            conditions presented. Customer information and his agreement have to
            be recorded by the company, included on magnetic support, if the
            communication is performed telephonically.
          </p>
          <p>
            Any additional information regarding S.S.I.F. Blue Rock Financial
            Services S.A. conflict interest policy will be made available to
            customers, any time, at its request on a durable media.
          </p>
        </div>

        {/* Implication Policy */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">
            Implication Policy
          </h2>
          <p>
            S.S.I.F. Blue Rock Financial Services does not exercise voting
            rights or any other rights regarding shares held in the portfolios
            of its clients and will not utilize any counsel voting rights. Both
            clients who manage their portfolios individually and clients who
            have discretionary accounts managed by S.S.I.F. Blue Rock Financial
            Services will represent and exercise all their rights individually.
          </p>
        </div>

        {/* Protection of Customers Assets */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">
            Protection of Customers Assets
          </h2>
          <p>
            S.S.I.F Blue Rock Financial Services S.A. holds a separate record of
            the activity performed on customer's behalf and on his own. The
            funds and financial instruments held in the name of each client are
            separately recorded by the ones which are held by the company in its
            own name and separately by other customers.
          </p>
          <p>
            Customers who have not updated their personal data through the
            documentation provided by SSIF Blue Rock Financial Services S.A. or
            they could not be contacted and had in custody S.S.I.F. Blue Rock
            Financial Services S.A. money funds and / or financial instruments
            are informed that the financial instruments have been transferred in
            section I of the Central Depository, and the money funds transferred
            to an "escrow" type account opened at the Romanian Commercial Bank.
            For any further information you can contact SSIF Blue Rock Financial
            Services S.A., the Central Depository or the Romanian Commercial
            Bank.
          </p>
          <p>
            Financial instruments of S.S.I.F. clients. Blue Rock Financial
            Services S.A in custody at other intermediaries/depositories are
            identified separately from the financial instruments that belong to
            S.S.I.F. and financial instruments belonging to that third party,
            through differently titled accounts in the third party's books.
          </p>
          <p>
            S.S.I.F. Blue Rock Financial Services S.A. it is treated by other
            intermediaries as a professional client and does not benefit from
            the protection that a retail client normally has.
          </p>
          <p>
            To minimize the risk of loss or diminution of the value of clients'
            assets or the rights related to those assets, S.S.I.F. Blue Rock
            Financial Services S.A. has concluded contracts with intermediaries
            that comply with European legislation regarding the protection of
            financial instruments and client funds.
          </p>
        </div>

        {/* Investors Compensation Fund */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">
            Investors Compensation Fund
          </h2>
          <p>
            Investor's Compensation Fund has as its exclusive main activity the
            collection of member's contribution and compensation of the
            investor's debts originating from the incapacity of a member to
            return the funds and/or financial instruments owned or belonging to
            investors, which are held and/or managed on their behalf while
            providing financial investment services, within the established
            thresholds.
          </p>
          <p>
            The compensation is provided by the Fund for the customers of a
            credit institution, member of the Fund, only for cash funds and
            financial instruments entrusted on the base of a financial
            investment services agreement.
          </p>
          <p>
            The Fund will compensate equally and without discrimination the
            investors within the limit of a maximum threshold representing the
            RON equivalent of 20.000EUR starting 1st of January 2012.
          </p>
          <p>
            The RON equivalent of the compensation threshold is calculated to
            the NBR's reference rate from the date when the situations mentioned
            at paragraph 47 from Law No. 297/2004 regarding capital market.
          </p>
          <p>
            Information regarding Investors Compensation Fund you can find at:{" "}
            <a
              href="http://www.fond-fci.ro/en/"
              className="text-blue-400 hover:underline"
            >
              http://www.fond-fci.ro/en/
            </a>
          </p>
        </div>

        {/* SAL FIN */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">SAL FIN</h2>
          <p>
            In accordance with FSA Regulation no. 4/2016 on the organization and
            functioning of the Alternative Dispute Resolution Entity in the
            financial non-banking (SAL-FIN) and GO no. 38/2015 on alternative
            dispute resolution between consumers and traders, we inform our
            customers about their right to appeal to alternative dispute
            resolution.
          </p>
          <p>
            Customers can address these cases to SAL-Fin – ADR entity in the
            financial non-banking institutions, whose contacts and additional
            information can be found at:{" "}
            <a
              href="http://www.salfin.ro"
              className="text-blue-400 hover:underline"
            >
              http://www.salfin.ro
            </a>
          </p>
        </div>

        {/* Trading */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">Trading</h2>
          <p>
            The purchase or sell order is personally served at the registered
            premises or by phone, the call being recorded for enforceability
            purposes, or by electronic mail or facsimile, provided that the
            client's written consent has been procured in respect of such means
            of communication.
          </p>
          <p>
            Transaction settlement occurs within 2 business days from the
            transaction date The settlement date is the time when the securities
            are exchanged for money. As concerns the transactions on foreign
            markets the transaction settlement period is stipulated under the
            relevant rules of the respective market.
          </p>
          <p>
            The payment of the equivalent value of the sold securities is made
            by bank transfer, within maximum 5 business days from transaction
            date. Most of the time, the client wants to keep the amount of money
            resulting from the sale of securities for future reinvestments, in
            the clients' account of the company. If the client wants to take the
            amount of money held in its investment account into possession, a
            request shall be addressed to the company in this respect.
          </p>
        </div>

        {/* Reporting */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">
            THE NATURE, FREQUENCY AND REPORTING PERIOD IN RESPECT TO SERVICES
            DELIVERED
          </h2>
          <p>
            Blue Rock Financial Services S.A. shall send the Client a
            confirmation of trading order execution as soon as possible but not
            later than the first business day following its execution,
            concerning the transactions carried out on the Romanian regulated
            market or ATS, or not later than the first business day following
            receipt of the transaction confirmation from the broker executing
            the transaction, concerning the transactions carried out on foreign
            capital markets. If the Client uses the services of a custodian, the
            Broker shall send a transaction confirmation both to the Client and
            to the custodian.
          </p>
          <p>
            Furthermore, the Client receives information regarding the portfolio
            of financial instruments and the available funds in the account by
            means of a reporting form made up of an account statement and an
            account position (Client's portfolio and the available funds in
            Client's account).
          </p>
          <p>
            The notice is made by any means of communication available to the
            parties, as per the agreement between the parties. Any notice,
            confirmation of transaction, transmission of account statement,
            securities or cash balance is deemed to have been completed at the
            time of its communication, either by an acknowledgment of receipt
            (signature) given at the premises or by the handing-in of a receipt
            in the case of letters with a return receipt requested, or at the
            moment of its transmission in case of facsimile transmissions,
            e-mail or when information is made available in case of trade via
            internet.
          </p>
          <p>
            The Broker shall make available to the Client, upon the latter's
            request and expense, all other relevant documents regarding the
            delivering of services, according to the contract to be concluded
            between the two parties.
          </p>
        </div>

        {/* Customer Communication Methods */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">
            CUSTOMER COMMUNICATION METHODS
          </h2>
          <p>
            The Client may communicate with the financial investment services
            agents at the company's headquarter located in Bucharest, and at its
            agency from Brasov. The Client may communicate with authorized
            agents through distance communication means: telephone, case in
            which the conversation will be recorded, if it refers to providing
            an order or an instruction or through e-mail or facsimile, only if
            the customer has previously agreed to use such means of
            communication.
          </p>
          <p>
            For each customer, the concrete mean of communication, from the
            Client and from the investment firm regarding the transmission of
            orders and instructions, as well as the confirmations, reports and
            other requests transmission will be specified in the Account Opening
            Form.
          </p>
          <p>
            The communications in the relation between client and S.S.I.F. Blue
            Rock Financial Services S.A., including transmission and receipt of
            clients' orders and instructions, can be performed, depending on
            client's choice, both in Romanian and English.
          </p>
        </div>

        {/* FATCA Information */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">
            FATCA INFORMATION
          </h2>
          <p>
            Based on Article 62 of the Law no.207 / 2015 regarding the Fiscal
            Procedure Code, financial institutions are required to declare their
            annual taxation to A.N.A.F. financial information relating to
            accounts opened and / or closed by taxpayer residents of states with
            which Romania is committed to international law which propagates the
            fair exchange of financial information
          </p>
          <p>Consider the following legal effects:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Law no.70 / 2016 on the ratification of the competent authorities
              for multilateral automatic exchange of information on financial
              accounts, signed in Berlin on 29 October 2014 published in the
              Official Gazette of Romania, Part I, no. 328 of April 28, 2016
            </li>
            <li>
              The agreement between Romania and the United States to improve
              international tax compliance and to implement FATCA, signed in
              Bucharest on May 28, 2015 ratified by Law no. 233/2015 published
              in the Official Gazette of Romania, Part I, no. 808 bis of 30
              October 2015
            </li>
          </ul>
          <p>We inform you of the following:</p>
          <p>
            - If you are resident taxpayer of a state with which Romania has
            pledged to change the financial information, you need to know the
            financial information of the accounts opened and / or closed in
            Romania. Below you may find a list of the information needed:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              name, address and TIN of the account holder and, where
              appropriate, of each beneficial owner (for foreign entities who
              the real beneficiary of a US citizen or resident);
            </li>
            <li>
              the total revenue generated by the assets held in the account,
              paid or credited during the calendar year.
            </li>
          </ul>
          <p>
            This information obtained by tax authorities within A.N.A.F. is used
            only in order to exchange information on taxpayers and residents of
            the states concerned to improve international tax compliance with
            the provisions of Article 11 of the Tax Procedure Code on tax
            secrecy.
          </p>
          <p>
            The first report should be created until the August 31, 2016 as
            Minister of Finance no. 1939 of 18 August 2016 published in the
            Official Gazette of Romania, Part I, no. 648 of August 24, 2016 and
            Law no. 207/2015 regarding the Fiscal Procedure Code.
          </p>
        </div>

        {/* CRS Information */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">CRS Information</h2>
          <p>
            Mandatory exchange of information in the common reporting standard
            (CRS)
          </p>
          <p>
            CRS – Common Reporting Standard is a global standard for the
            exchange of information, issued by the Economic Co-operation and
            Development (OCDE) and brought into force by Directive CE /
            2014/107/EU. This standard has been implemented in local legislation
            through fiscal procedure guidelines. CRS requirements apply to
            non-resident clients (individuals or legal entities controlled by
            non-residents) holding investments accounts opened with the S.S.I.F.
            The CRS requirements have been in force as of 1'st January 2016. The
            ways which clients are deemed reportable or not to A.N.A.F are as
            follows for individuals:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              The current address (domicile, residence or postal) is in another
              member state, other than Romania.
            </li>
            <li>
              Place of birth is in a different member state, other than Romania.
            </li>
            <li>
              One or more phone numbers are in a different member state other
              than Romania.
            </li>
            <li>
              A mandate or power of attorney provided comes from a member state
              other than Romania.
            </li>
            <li>
              Permanent instructions (on financial accounts other than deposit
              accounts) to transfer funds to an account managed in a member
              state
            </li>
          </ul>
          <p>For companies:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Residence in a member state other than Romania (place of
              registration, establishment or other address in a member state –
              correspondence address or place of work).
            </li>
            <li>
              The person / persons identified as ultimate beneficial owners of
              the company meet one of the above mentioned points.
            </li>
          </ul>
          <p>Information required to be reported to A.N.A.F:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Name, address, residence, fiscal identification numbers such as
              date and place of birth
            </li>
            <li>Personal account numbers</li>
            <li>
              Balance or the value of the account at the end of the relevant
              calendar year or the period of activity reported at that time (as
              is the case for accounts which have been closed)
            </li>
            <li>
              The total gross amount of dividends and the total gross amount of
              other income generated in connection with the assets held in the
              account, in each case paid or credited to the respective account,
              or in connection with the respective account during the calendar
              year or other appropriate reporting period.
            </li>
            <li>
              Total gross receivables from the sale or redemption of Financial
              Assets paid or credited to the account during the calendar year or
              other appropriate reporting period in connection with which the
              S.S.I.F. acted as custodian, broker, representative or any other
              agent of the account holder in all cases the above mentioned
              information will be expressed in the currency in which each sum is
              represented (separately).
            </li>
            <li>
              The balance/value of an account in the last day in a reporting
              period.
            </li>
          </ul>
          <p>
            Reporting the information to A.N.A.F. is done annually, according to
            the provisions of the Fiscal Procedure Code. for more information on
            CRS, please visit the OECD website (
            <a
              href="http://www.oecd.org/tax/automatic-exchange/common-reporting-standard/"
              className="text-blue-400 hover:underline"
            >
              http://www.oecd.org/tax/automatic-exchange/common-reporting-standard/
            </a>
            ) or contact your local tax authorities. The complete list of
            participating states can be found here:
          </p>
          <p>
            <a
              href="http://www.oecd.org/ctp/exchange-of-tax-information/MCAA-Signatories.pdf"
              className="text-blue-400 hover:underline"
            >
              http://www.oecd.org/ctp/exchange-of-tax-information/MCAA-Signatories.pdf
            </a>
          </p>
          <p>
            <a
              href="http://www.oecd.org/tax/automatic-exchange/crs-implementation-and-assistance/crs-byjurisdiction/#d.en.345489"
              className="text-blue-400 hover:underline"
            >
              http://www.oecd.org/tax/automatic-exchange/crs-implementation-and-assistance/crs-byjurisdiction/#d.en.345489
            </a>
            .
          </p>
          <p>You will find more details by visiting the links below:</p>
          <p>
            <a
              href="http://www.mfinante.ro/acordfatca.html?pagina=domenii"
              className="text-blue-400 hover:underline"
            >
              http://www.mfinante.ro/acordfatca.html?pagina=domenii
            </a>
          </p>
          <p>
            <a
              href="http://www.irs.gov/Businesses/Corporations/Foreign-Account-Tax-Compliance-Act-FATCA"
              className="text-blue-400 hover:underline"
            >
              http://www.irs.gov/Businesses/Corporations/Foreign-Account-Tax-Compliance-Act-FATCA
            </a>
          </p>
          <p>
            <a
              href="http://www.treasury.gov/resource-center/tax-policy/treaties/Pages/FATCA.aspx"
              className="text-blue-400 hover:underline"
            >
              http://www.treasury.gov/resource-center/tax-policy/treaties/Pages/FATCA.aspx
            </a>
          </p>
        </div>

        {/* Definitions And Abbreviations */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">
            Definitions And Abbreviations
          </h2>
          <p>
            <strong>F.S.A.</strong> means the Financial Surveillance Authority;
          </p>
          <p>
            <strong>S.S.I.F.</strong> means a Financial Investment Services
            Company authorized by the National Securities Commission;
          </p>
          <p>
            <strong>Financial Investment Services</strong> means the main and
            the ancillary services that may be provided by S.S.I.F. under the
            law and the F.S.A. regulations, as a broker authorized by the F.S.A.
          </p>
          <p>
            <strong>"Beneficial owner"</strong> represents the natural person
            who eventually owns or controls the client and/or the natural person
            on whose name or behalf a transaction or an operation is performed,
            directly or indirectly.
          </p>
          <p>The notion of beneficial ownership shall include at least:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              with respect to companies: the natural person or persons
              eventually owning or controlling a legal entity by owning,
              directly or indirectly, the entire block of shares or a sufficient
              number of the shares or voting rights to ensure their control,
              including bearer shares, where the owned or controlled legal
              entity is not a commercial company whose shares are traded on a
              regulated market and which is subject to publicity requirements in
              agreement with those regulated by European law or with
              internationally set standards. Such criterion is deemed to be met
              upon an ownership of at least 25% of the shares plus one share;
              the natural person or persons who exercise control in any other
              way over the administrative or management bodies of a legal
              person;
            </li>
            <li>
              with respect to legal entities other than those provided under
              letter a) or to other entities or legal arrangements that manage
              and distribute funds: the natural person who is the beneficiary of
              at least 25% of the assets of a legal person or entity or legal
              arrangement, provided that the future beneficiaries have already
              been identified; the group of persons in whose main interest a
              legal person or entity or legal arrangement is created or
              operates, provide that the natural persons that are the
              beneficiaries of the legal person or legal entity have not been
              identified yet; the natural person or persons who exercise control
              over at least 25% of the assets belonging to a legal person or
              entity or legal arrangement.
            </li>
          </ul>
          <p>
            <strong>"Contract"</strong> refers to this Contract, together with
            its annexes and subsequent addenda, as well as to other terms and
            conditions agreed between the CLIENT and the BROKER in writing in
            respect of this contract;
          </p>
          <p>
            <strong>"Client Account"</strong> – the account opened with the
            Broker on behalf of the Client, evidencing the holdings and the
            operations with financial instruments and cash operations thereof;
          </p>
          <p>
            <strong>"Securities"</strong>: Classes of Securities that can be
            traded on capital markets, except for payment instruments, scuh as:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              shares issued by commercial companies and other equivalent
              securities, negotiated on the capital market;
            </li>
            <li>
              bonds and other debt securities, including treasury bills with a
              maturity longer than 12 months, negotiable on the capital market;
            </li>
            <li>
              any other currently negotiated titles conferring the right of
              purchase with respect to those securities by subscription or
              exchange, resulting in a cash settlement, except for payment
              instruments;
            </li>
          </ul>
          <p>
            <strong>"Order"</strong> the instruction to purchase or sell a
            certain financial instrument;
          </p>
          <p>
            <strong>"Instructions"</strong> – represents all the instructions
            received by SSIF from the CLIENT, directly or through its attorney
            in fact;
          </p>
          <p>
            <strong>"Financial Instruments"</strong> – Represents instruments as
            covered by annex nr.1 section C through law nr. 126/2018
          </p>
          <p>
            <strong>"Derivative Financial Instruments"</strong> – Derivatives
            are financial instruments as defined in art. 2 line (1) pct. 30 of
            the EU regulation nr. 600/2014 – Derivatives contracts referring to
            products enumerated in art. 1 and in annex nr.1 parts I-XX and
            XXIV/1 in EU regulation nr. 1.308/2013 of the European Parliament
            and in the European Council on December 17 2013 regarding the common
            market of capital markets and the removal of past (CEE) regulations
            nr. 922/72, (CEE) nr. 234/79, (CE) nr. 1.037/2001 and (CE) nr.
            1.234/2007 of the Council, officially published by the European
            Union through series L, nr. 347/671 in December 20, 2017, commonly
            known as Regulation nr. 1.308/2013.
          </p>
          <p>
            <strong>"Central Depository"</strong> – an institution that provides
            services related to the depositing, registration, clearing and
            settlement of the transactions in financial instruments on the spot
            market, as well as any operations in respect thereof, as defined by
            art. 2 line (1) point. 1 from the EU regulation nr. 909/2014 of the
            European Union and Commission as at 23 July 2014 for the improvement
            of securities settlement within the European Union and the
            harmonizing of custody and modifications to the directive 98/26/CE
            and 2014/65/UE and UE regulation nr. 236/2012, with the following
            modifications of the European Union published as series L. nr. 256/1
            from 28 August 2014, named as UE regulation nr. 909/2014.
          </p>
          <p>
            <strong>"Clearing House"</strong> is an institution that provides
            participant risk management and also keeps a record of and provides
            daily clearing services, marking to market, settlement of the
            transactions in derivative financial instruments and liquidation of
            the open positions upon maturity.
          </p>
          <p>
            <strong>"Transaction"</strong> represents the execution by the
            broker, of transactions with financial instruments on the clients
            account and in the name of the intermediary and/or client, on a
            regulated market, or outside a regulated market, or on an
            alternative trading system, in Romania or abroad.
          </p>
          <p>
            <strong>“Qualified Investors”</strong> Individuals who as per F.S.A
            regulations:
          </p>
          <p>{"a) Can be recognized as professional clients"}</p>
          <p>
            {
              "b) Are treated by request as professional clients or are recognized as eligible counterparties, unless they have specifically requested to not be treated as professional clients"
            }
          </p>
          <p>
            <strong>“Professional clients”</strong> Professional client is a
            client who possesses the experience, knowledge and expertise to make
            its own investment decisions and properly assess the risks that it
            incurs. The following categories of clients are considered
            professionals for all financial services and activities as per law
            126/2018:
          </p>
          <p>
            {
              "a)  Entities which are required to be authorized or regulated to operate in the financial markets"
            }
          </p>
          <p>
            {
              "b) Large undertakings meeting two of the following size requirements on a company basis:"
            }
          </p>
          <p>– Balance sheet total: EUR 20.000.000</p>
          <p>– Net turnover: EUR 40.000.000</p>
          <p>– Own funds: EUR 2.000.000.</p>
          <p>
            {
              "c) National and regional governments, including public bodies that manage public debt at national or regional level Central Banks, international and supranational institutions such as the World Bank, the IMF, the ECB, the EIB and other similar international organizations."
            }
          </p>
          <p>
            {
              "d)  Other institutional investors whose main activity is to invest in financial instruments, including entities dedicated to the securitization of assets or other financing transactions."
            }
          </p>
          <p>
            <strong>“Eligible counterparties”</strong> are recognized as
            eligible counterparties investment firms, credit institutions,
            insurance companies, UCITS and their management companies, pension
            funds and their management companies, other financial institutions
            authorized and regulated in accordance with Union law. European or
            national law of another Member State, national governments and
            services / structures established under the national law of each
            state, including public bodies responsible for managing public debt
            at national level, central banks and supranational organizations.
          </p>
          <p>
            <strong>“Close Ties”</strong> EU regulation 596/2014
          </p>
          <p>
            {
              "a)  Husband/wife or significant either equal to a husband/wife that are in compliance with local legislation."
            }
          </p>
          <p>
            {
              "b) A child who is in care of another adult as per internal local legislation."
            }
          </p>
          <p>
            {
              "c) A family member who at the date of the transaction has taken residence for at least one year with the individual executing the transaction."
            }
          </p>
          <p>
            {
              "d) A legal entity, trust, partnership whose responsibilities are exercised by a person exercising management responsibilities or by a person referred to in point a), b) or c), who is directly or indirectly controlled by this person, which is shown to benefit the respective person whose economic interests are substantially equivalent to those of the respective person."
            }
          </p>
          <p>
            <strong>“Involved persons”</strong>
            {
              " a) persons who control or are controlled by an issuer or are under common control;"
            }
          </p>
          <p>
            {
              "b) persons who participate, directly or indirectly, in the conclusion of certain agreements with a view to obtaining or exercising voting rights in common, if the shares subject matter of the agreement may confer a controlling position;"
            }
          </p>
          <p>
            {
              "c) natural persons within the issuer company, assigned with management or control functions;"
            }
          </p>
          {/* Involved persons continued */}
          <p>
            <strong>“Involved persons”</strong>
            {" d)"} spouses, relatives and allied relatives up to the second
            degree of the natural persons mentioned under letters a) – c);
          </p>
          <p>
            {"e)"} persons who may appoint most of the board members within an
            issuer.
          </p>

          {/* Persons acting in concert */}
          <p>
            <strong>“Persons acting in concert”</strong> Individuals or entities
            who cooperate based on an accord either it be formal or informal,
            verbal or written to enact common policies in regards to an issuer,
            until evidence shows otherwise the following individuals are
            presumed to act in collusion:
          </p>
          <p>
            {"a)"} Persons who are controlled by other individuals within the
            same entity as well as persons who would be controlled by each other
            (board members, etc)
          </p>
          <p>
            {"b)"} The parent company together with its subsidiaries, any of the
            subsidiaries of the same parent company between each other, as well
            as any individual or any legal entity that is in a relationship
            similar to that between a parent company and a branch. Any
            subsidiary of a subsidiary is considered a subsidiary of the parent
            company.
          </p>
          <p>
            {"c)"} A company with its members of the board of directors or
            supervisory board, who the members have management or control
            attributes within it and with the controlling persons, as well as
            the individuals between them.
          </p>
          <p>
            {"d)"} The collective investment undertaking with the investment
            management company and with the parent company, as well as the
            collective investment undertakings managed by the same management
            company between them.
          </p>
          <p>
            {"e)"} Person funds with a management company who manages these
            funds and with any mother company if it may exist.
          </p>

          {/* Parent company */}
          <p>
            <strong>“Parent company”</strong> A company who controls one or more
            branches.
          </p>

          {/* Publicly exposed persons */}
          <p>
            <strong>“Publicly exposed persons”</strong> Are natural persons who
            hold or have held important positions related to the public.
          </p>
          <p>
            {"a)"} Heads of state, heads of government, ministers and deputy
            ministers or secretaries of state.
          </p>
          <p>
            {"b)"} Members of parliament or any other similar governmental body.
          </p>
          <p>{"c)"} Members of the governing bodies of political parties.</p>
          <p>
            {"d)"} Members of the supreme courts, of the constitutional courts
            or other high-level courts whose decisions can be appealed only by
            extraordinary means.
          </p>
          <p>
            {"e)"} Members of governing bodies of the central bank councils.
          </p>
          <p>
            {"f)"} Ambassadors who have been tasked with business and superior
            officers within the army.
          </p>
          <p>
            {"g)"} Members of the board of directors and of the supervisory
            board and persons holding management positions of companies where
            the main client is the state or state-owned companies.
          </p>
          <p>
            {"h)"} Directors, deputy directors and members of the board of
            directors or members of the governing bodies of an international
            organization.
          </p>
          <p>
            None of the above mentioned categories include individuals who
            occupy intermediary positions or inferior ones.
          </p>

          {/* Direct family */}
          <p>
            The direct members belonging to the family of the publicly exposed
            person are:
          </p>
          <p>{"a)"} Significant other of the person publicly exposed.</p>
          <p>
            {"b)"} Children of the publicly exposed individual or individuals
            whose children are in close relations with the publicly exposed.
          </p>
          <p>{"c)"} Parents.</p>

          {/* Close associates */}
          <p>
            Individuals known as close associates of publicly exposed
            individuals:
          </p>
          <p>
            {"a)"} Natural persons known as the beneficial owner of a company,
            of an entity without a legal personality or any other similar
            structures along with any other of the natural persons provided in
            Art. 3 par (2) of law 129/2019 or having any other close business
            relation with any such person.
          </p>
          <p>
            {"b)"} Natural persons who are the real beneficiaries of a legal
            person, of an entity without a legal personality or a legal
            framework similar to them, known as being established for the de
            facto benefit of one of the persons provided in Art. 3 par (2) of
            law 129/2019.
          </p>

          <p>
            <em>
              If differences in terminology appear, please refer to the Romanian
              version.
            </em>
          </p>
        </div>
      </div>
    </section>
  );
}
