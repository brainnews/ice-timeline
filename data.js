/**
 * ICE Training Deficiencies Timeline Data
 * Compiled from government reports, court documents, and investigative journalism
 */

const timelineData = {
    events: [
        {
            id: 1,
            date: "2002-2003",
            year: 2002,
            category: "policy",
            title: `First 287(g) Agreements Signed with Florida and Alabama`,
            excerpt: `INS signs first agreements deputizing state law enforcement to enforce federal immigration law, establishing four-week training requirement.`,
            content: `<p>In the aftermath of the September 11 attacks, the Immigration and Naturalization Service (INS) signed the first 287(g) agreements with the Florida Department of Law Enforcement (2002) and Alabama State Police (2003), establishing a new model for local immigration enforcement.</p>
                <p><strong>Key developments:</strong></p>
                <ul>
                    <li>Florida became the first state to sign a 287(g) agreement in 2002, creating seven Regional Domestic Security Task Forces</li>
                    <li>In 2003, ICE provided a basic block of instruction in immigration law and procedures to 654 Alabama State Troopers across 16 classes in seven locations</li>
                    <li>Officers were required to complete a four-week Immigration Authority Delegation Program (IADP) at FLETC in Charleston, South Carolina</li>
                </ul>
                <p>The 287(g) program would expand rapidly: six agreements signed in 2005-2006, 24 in 2007, and 30 in 2008. The training requirements and oversight mechanisms established in these early agreements would later be scrutinized by government watchdogs.</p>`,
            source: `American Immigration Council / Congressional Testimony`,
            sourceUrl: "https://www.govinfo.gov/content/pkg/CHRG-109hhrg28332/html/CHRG-109hhrg28332.htm",
            media: {
                type: "image",
                src: "images/287g-appropriations-bill-2002.png",
                alt: `Excerpt from the Homeland Security and the Fiscal Year 2002 Supplemental Appropriations Bill. April 30th, 2002.`,
                caption: `Excerpt from the Homeland Security and the Fiscal Year 2002 Supplemental Appropriations Bill. April 30th, 2002.`
            }
        },
        {
            id: 2,
            date: `March 1, 2003`,
            year: 2003,
            category: "policy",
            title: `ICE Created Under Department of Homeland Security`,
            excerpt: `U.S. Immigration and Customs Enforcement established, inheriting training programs from the dissolved Immigration and Naturalization Service (INS).`,
            content: `<p>In the wake of the September 11 attacks, the Homeland Security Act of 2002 dissolved the Immigration and Naturalization Service (under the Justice Department) and the U.S. Customs Service (under the Treasury Department), transferring most of their functions to three new agencies within the newly created Department of Homeland Security.</p>
                <p><strong>The reorganization created:</strong></p>
                <ul>
                    <li>U.S. Immigration and Customs Enforcement (ICE)</li>
                    <li>U.S. Customs and Border Protection (CBP)</li>
                    <li>U.S. Citizenship and Immigration Services (USCIS)</li>
                </ul>
                <p>ICE inherited training programs and personnel from the legacy INS enforcement division. The new agency would be responsible for developing standardized training curricula for immigration enforcement officers through the Federal Law Enforcement Training Centers (FLETC).</p>
                <p>This represented the largest government reorganization since the creation of the Department of Defense in the 1940s.</p>`,
            source: `DHS / ICE History`,
            sourceUrl: "https://www.ice.gov/features/history",
            media: {
                type: "image",
                src: "images/homeland-security-act-signing.jpeg",
                alt: `President George W. Bush signs the Homeland Security Act of 2002`,
                caption: `President George W. Bush signs the Homeland Security Act on November 25, 2002, creating the Department of Homeland Security and ICE.`
            }
        },
        {
            id: 3,
            date: `June 25, 2004`,
            year: 2004,
            category: "policy",
            title: `DHS Establishes First Use of Deadly Force Policy`,
            excerpt: `Department of Homeland Security issues foundational policy on use of deadly force that would govern ICE training for nearly two decades.`,
            content: `<p>The Department of Homeland Security issued its first "Use of Deadly Force Policy," establishing the framework that would govern ICE agent training on lethal force for years to come.</p>
                <p><strong>Key policy elements:</strong></p>
                <ul>
                    <li>Officers authorized to use deadly force when there are "reasonable grounds to believe that such force is necessary to protect the officer or other persons from imminent danger"</li>
                    <li>Established the "objectively reasonable" standard for evaluating use of force</li>
                    <li>Created the Use of Force Continuum as an instructional model</li>
                </ul>
                <p class="warning-highlight">Investigative reporting later revealed that training materials from 2006-2011 contained no de-escalation guidance and taught that deadly force "can be initiated immediately."</p>
                <p>This policy framework would remain largely unchanged until 2023, when an Executive Order mandated updates including de-escalation training requirements.</p>`,
            source: `American Immigration Lawyers Association (AILA) / Congressional Memorandum`,
            sourceUrl: "https://www.aila.org/library/dhs-use-of-deadly-force-policy",
            media: {
                type: "image",
                src: "images/dhs-use-of-deadly-force-statement.png",
                alt: `An except from the DHS Use of Deadly Force Policy, issued in 2004.`,
                caption: `Except from the DHS Use of Deadly Force Policy, issued in 2004.`
            }
        },
        {
            id: 4,
            date: "2007",
            year: 2007,
            category: "policy",
            title: `ICE Training Academy Established at FLETC Charleston`,
            excerpt: `ICE consolidates training operations at dedicated academy in Charleston, South Carolina, establishing centralized curriculum for deportation officers.`,
            content: `<p>The Immigration and Customs Enforcement Training Academy was established at the Federal Law Enforcement Training Centers (FLETC) site in Charleston, South Carolina, marking a shift toward centralized, standardized training.</p>
                <p><strong>Training program structure:</strong></p>
                <ul>
                    <li>Deportation Officers: 16-20 week Basic Immigration Enforcement Training Program (BIETP)</li>
                    <li>Mandatory 25-day Spanish language course</li>
                    <li>287(g) officers: Four-week Immigration Authority Delegation Program</li>
                    <li>HSI Special Agents: 12-week Criminal Investigator Training Program plus 15-week specialized training</li>
                </ul>
                <p>The centralized academy model was designed to ensure consistent training standards across the agency.</p>
                <p class="warning-highlight">However, a 2018 OIG alert would later warn that ICE was considering reverting to decentralized training "without adequate assessment" of risks.</p>`,
            source: `fletc.gov / FLETC`,
            sourceUrl: "https://www.fletc.gov/about",
            media: {
                type: "image",
                src: "images/FLETC.webp",
                alt: `FLETC Training Academy in Charleston, South Carolina.`,
                caption: `FLETC Training Academy in Charleston, South Carolina. Image: CEA Engineering.`
            }
        },
        {
            id: 5,
            date: `January 2009`,
            year: 2009,
            category: "watchdog",
            title: `GAO Finds Weak Controls Over 287(g) Training and Supervision`,
            excerpt: `Government Accountability Office reports ICE lacks adequate controls to govern 287(g) program, with unclear supervisory responsibilities for trained officers.`,
            content: `<p>The Government Accountability Office released report GAO-09-109, "Immigration Enforcement: Better Controls Needed over Program Authorizing State and Local Enforcement of Federal Immigration Laws," documenting significant oversight gaps in the 287(g) program.</p>
                <p><strong>Key findings:</strong></p>
                <ul class="warning-highlight">
                    <li>ICE had not designed adequate controls to govern 287(g) program implementation</li>
                    <li>The ICE officer responsible for supervising participating agencies' officers may not have a supervisory designation within ICE</li>
                    <li>Supervision activities specific to the 287(g) program were not contained in position descriptions, making supervisory responsibilities unclear</li>
                    <li>GAO compared ICE controls against Standards for Internal Control in the Federal Government and found deficiencies</li>
                </ul>
                <p>The report examined memorandums of agreement between ICE and 29 program participants and found systematic gaps in how trained officers were being supervised and monitored.</p>`,
            source: `GAO Report GAO-09-109`,
            sourceUrl: "https://www.gao.gov/products/gao-09-109",
            media: {
                type: "image",
                src: "images/gao-09-109.png",
                alt: `Excerpt from GAO Report GAO-09-109`,
                caption: `Excerpt from GAO Report GAO-09-109.`
            }
        },
        {
            id: 6,
            date: `March 2010`,
            year: 2010,
            category: "watchdog",
            title: `OIG Finds 287(g) Civil Rights Training Inadequate`,
            excerpt: `Inspector General report finds ICE failed to comply with 287(g) agreements, civil rights training was inadequate, and program was poorly supervised.`,
            content: `<p>The DHS Office of Inspector General released report OIG-10-63, "The Performance of 287(g) Agreements," delivering a comprehensive critique of the program's training and oversight failures.</p>
                <p><strong>Critical findings:</strong></p>
                <ul class="warning-highlight">
                    <li>ICE and its local law enforcement partners had not complied with the terms of their 287(g) agreements</li>
                    <li>The civil rights law training given to 287(g) participants was inadequate</li>
                    <li>Standards by which deputized officers were evaluated contradicted the stated objectives of the program</li>
                    <li>The program was poorly supervised by ICE</li>
                    <li>Additional oversight was necessary</li>
                </ul>
                <p class="warning-highlight">The report also documented how one agency improperly engaged in "random street operations" to target minor offenses—activities explicitly prohibited under 287(g) guidelines.</p>
                <p>The ACLU noted the report gave "official backing to years of criticism" and included "extensive commentary on 287(g)'s vulnerability to civil rights abuses such as racial profiling."</p>`,
            source: `DHS OIG Report OIG-10-63`,
            sourceUrl: "https://www.oig.dhs.gov/sites/default/files/assets/Mgmt/OIG_10-63_Mar10.pdf",
            mediaType: "document",
            mediaPlaceholder: `OIG Report Document`
        },
        {
            id: 7,
            date: `December 2012`,
            year: 2012,
            category: "policy",
            title: `Obama Administration Ends 287(g) Task Force Model`,
            excerpt: `Following DOJ findings of civil rights violations including racial profiling, the 287(g) Task Force Model is discontinued; last agreements expire.`,
            content: `<p>The Obama Administration announced it would discontinue the 287(g) Task Force Model and Hybrid Model following Department of Justice investigations that found participating agencies had engaged in illegal racial profiling and civil rights violations.</p>
                <p><strong>Key developments:</strong></p>
                <ul class="warning-highlight">
                    <li>DOJ investigation found Maricopa County (Sheriff Joe Arpaio) deputies routinely conducted "sweeps" in Latino neighborhoods</li>
                    <li>Latino drivers in certain parts of Maricopa County were up to nine times more likely to be stopped than non-Latino drivers</li>
                    <li>ICE terminated Maricopa County's 287(g) agreement following the investigation</li>
                    <li>Last Task Force Model agreements expired December 31, 2012</li>
                </ul>
                <p>An ICE policy memo stated other enforcement programs were "a more efficient use of resources for focusing on priority cases." The number of participating agencies declined from 72 in 2011 to 35 by the end of the Obama Administration.</p>
                <p>The Task Force Model would remain dormant until its revival in January 2025, though the more limited Jail Enforcement Model—which only allows status checks on individuals already in custody—continued operating and was the subject of subsequent OIG oversight reports.</p>`,
            source: `American Immigration Council`,
            sourceUrl: "https://www.americanimmigrationcouncil.org/fact-sheet/287g-program-immigration/",
            mediaType: "document",
            mediaPlaceholder: `Policy Document`
        },
        {
            id: 8,
            date: `January 2018`,
            year: 2018,
            category: "watchdog",
            title: `DHS Inspector General Issues Alert on Decentralized Training`,
            excerpt: `OIG warns that ICE proposed reverting to decentralized training 'without adequate assessment' of the potential risks.`,
            content: `<p class="warning-highlight">The Department of Homeland Security Office of Inspector General issued an alert (OIG-18-42) warning that ICE had proposed reverting to a decentralized training model without properly assessing the potential risks and consequences.</p>
                <p>The alert raised concerns that moving away from centralized, standardized training could create inconsistencies in how agents are prepared for field work and potentially compromise the quality of instruction.</p>
                <p>This early warning would prove prescient as subsequent reports documented the consequences of inadequate training oversight.</p>`,
            source: `DHS OIG Alert OIG-18-42`,
            sourceUrl: "https://www.oig.dhs.gov/sites/default/files/assets/Mga/2018/oig-18-42-jan18.pdf",
            mediaType: "document",
            mediaPlaceholder: `OIG Alert Document`
        },
        {
            id: 9,
            date: `September 2018`,
            year: 2018,
            category: "watchdog",
            title: `OIG Finds ICE Not Monitoring 287(g) Officer Training Completion`,
            excerpt: `Inspector General report reveals ICE failed to track whether local officers completed required training under the 287(g) program.`,
            content: `<p>The DHS Office of Inspector General released report OIG-18-77, revealing significant oversight failures in the 287(g) Jail Enforcement Model, which deputizes local law enforcement to check immigration status of individuals already in custody.</p>
                <p class="warning-highlight">The investigation found that ICE was not properly monitoring whether participating officers completed all required training before exercising their immigration enforcement authorities.</p>
                <p class="warning-highlight">This lack of oversight meant that officers could potentially be making arrest and detention decisions without the necessary legal and procedural training, increasing the risk of civil rights violations and improper enforcement actions.</p>`,
            source: `DHS OIG Report OIG-18-77`,
            sourceUrl: "https://www.oig.dhs.gov/sites/default/files/assets/2018-09/OIG-18-77-Sep18.pdf",
            mediaType: "document",
            mediaPlaceholder: `OIG Report Document`
        },
        {
            id: 10,
            date: `November 2018`,
            year: 2018,
            category: "watchdog",
            title: `OIG Warns Training Challenges Create 'Safety Risk'`,
            excerpt: `Inspector General report explicitly warns that training deficiencies could leave 'trainees less prepared for their assigned field environment, potentially increasing safety risk.'`,
            content: `<p>In one of the most explicit warnings about ICE training deficiencies, the DHS Office of Inspector General released report OIG-19-07, directly connecting inadequate training to safety risks for both agents and the public.</p>
                <p class="warning-highlight"><strong>The report stated that training challenges could leave "trainees less prepared for their assigned field environment, potentially increasing safety risk."</strong></p>
                <p>The findings documented systemic issues with training infrastructure, instructor availability, and curriculum adequacy. The OIG recommended comprehensive reforms to ensure agents received proper preparation before deployment.</p>
                <p class="warning-highlight">This warning would go largely unheeded, as subsequent years saw training programs shortened rather than strengthened.</p>`,
            source: `DHS OIG Report OIG-19-07`,
            sourceUrl: "https://www.oig.dhs.gov/sites/default/files/assets/2018-11/OIG-19-07-Nov18.pdf",
            mediaType: "document",
            mediaPlaceholder: `OIG Report Document`
        },
        {
            id: 11,
            date: `July 2021`,
            year: 2021,
            category: "watchdog",
            title: `GAO Finds Training Materials Contradict Policy on U.S. Citizens`,
            excerpt: `Government Accountability Office reveals ICE training materials contradict official policy on handling potential U.S. citizens; documents 674 potential citizens arrested, 70 removed.`,
            content: `<p>The Government Accountability Office released report GAO-21-487, revealing a disturbing disconnect between ICE's official policies and its actual training materials regarding the treatment of potential U.S. citizens.</p>
                <p><strong>Key findings included:</strong></p>
                <ul class="warning-highlight">
                    <li>674 potential U.S. citizens were arrested by ICE</li>
                    <li>70 potential U.S. citizens were actually removed from the country</li>
                    <li>Training materials contained guidance that contradicted official policy on verifying citizenship claims</li>
                </ul>
                <p class="warning-highlight">The report highlighted how inadequate and inconsistent training could lead to the wrongful detention and deportation of American citizens—one of the most severe consequences possible in immigration enforcement.</p>`,
            source: `GAO Report GAO-21-487`,
            sourceUrl: "https://www.gao.gov/assets/gao-21-487.pdf",
            mediaType: "document",
            mediaPlaceholder: `GAO Report Document`
        },
        {
            id: 12,
            date: `August 2024`,
            year: 2024,
            category: "investigation",
            title: `Investigation Reveals Training Documents Lack De-escalation Guidance`,
            excerpt: `Joint investigation finds ICE training materials contain no de-escalation instruction; quiz answer states deadly force 'can be initiated immediately.'`,
            content: `<p>A joint investigation by Business Insider, The Trace, and Type Investigations obtained hundreds of pages of ICE training materials spanning 2006-2011, revealing significant gaps in use-of-force instruction.</p>
                <p><strong>Critical findings:</strong></p>
                <ul class="warning-highlight">
                    <li>Training documents contained no guidance on de-escalating dangerous situations</li>
                    <li>One training quiz asked: "Which steps must an officer take before initiating deadly force?" The correct answer provided was: <strong>"None, deadly force can be initiated immediately."</strong></li>
                    <li>Materials emphasized "quick, decisive" force deployment over force avoidance</li>
                    <li>Training taught agents how to justify their actions in court, with one lesson stating that "objective reasonableness is the law; not policy"</li>
                </ul>
                <p class="warning-highlight">The investigation documented 23 deaths by ICE officers from 2015-2021.</p>
                <p>ICE disputed the findings, claiming officers receive de-escalation training.</p>`,
            source: `Type Investigations / Business Insider / The Trace`,
            sourceUrl: "https://www.typeinvestigations.org/investigation/2024/08/12/ice-agents-training-use-of-force/",
            mediaType: "document",
            mediaPlaceholder: `Investigation Report`
        },
        {
            id: 13,
            date: `August 2025`,
            year: 2025,
            category: "policy",
            title: `Training Cut from 5 Months to 47 Days Amid Hiring Surge`,
            excerpt: `The Atlantic reports ICE training reduced from approximately 5 months to just 47 days as agency rushes to meet hiring targets.`,
            content: `<p>As the administration pushed for aggressive deportation targets, ICE dramatically shortened its training program to expedite the deployment of new agents.</p>
                <p><strong>The timeline of cuts:</strong></p>
                <ul class="warning-highlight">
                    <li>Original training duration: approximately 5 months (20-21 weeks)</li>
                    <li>First reduction: 47 days</li>
                    <li>Further reduction: 42 days</li>
                </ul>
                <p>The accelerated training came as ICE offered $50,000 signing bonuses and waived age limits for applicants, prioritizing quantity of hires over quality of preparation.</p>
                <p class="warning-highlight">By comparison, FBI training remains at 20 weeks and state police academies average 21 weeks—roughly three times the new ICE training duration.</p>`,
            source: `The Atlantic`,
            sourceUrl: "https://www.theatlantic.com/",
            mediaType: "image",
            mediaPlaceholder: `Training Duration Comparison Chart`
        },
        {
            id: 14,
            date: `October 2025`,
            year: 2025,
            category: "incident",
            title: `NBC News: Over 200 Recruits Dismissed for Vetting Failures`,
            excerpt: `Investigation reveals ICE placed recruits into training before completing vetting; dismissed over 200 for failed drug tests, criminal histories, or disqualifying backgrounds.`,
            content: `<p class="warning-highlight">NBC News obtained internal ICE data revealing that the agency had placed new recruits into training programs before completing mandatory vetting procedures—a shortcut that exposed serious screening gaps.</p>
                <p><strong>Key revelations:</strong></p>
                <ul class="warning-highlight">
                    <li>Over 200 recruits dismissed since the hiring surge began in summer 2025</li>
                    <li>Approximately 10 recruits dismissed specifically for criminal charges, drug test failures, or safety concerns that should have been caught beforehand</li>
                    <li>The majority failed physical or academic standards</li>
                    <li>ICE's HR office, overwhelmed with 150,000+ applicants, rushed clearances to meet the goal of hiring 10,000 agents by year's end</li>
                </ul>
                <p class="warning-highlight">One official raised the concerning question: "What about the ones who don't admit it?"—referring to potentially undiscovered disqualifying issues among those who passed screening.</p>`,
            source: `NBC News`,
            sourceUrl: "https://www.nbcnews.com/politics/immigration/new-ice-recruits-showed-training-full-vetting-rcna238739",
            media: {
                type: "image",
                src: "images/ice-recruits-nbc-2025.jpg",
                alt: `ICE recruits in training, October 2025.`,
                caption: `ICE recruits in training. (NBC News, October 2025)`
            }
        },
        {
            id: 15,
            date: `October 2025`,
            year: 2025,
            category: "court",
            title: `Federal Judge: ICE Use of Force 'Shocks the Conscience'`,
            excerpt: `In Chicago Headline Club v. Noem, judge finds ICE agents receive 'very little training on crowd control tactics' and use of force 'shocks the conscience.'`,
            content: `<p>In a significant federal court ruling in Chicago Headline Club v. Noem, a judge issued findings that directly connected ICE's training deficiencies to unconstitutional conduct.</p>
                <p><strong>The court found:</strong></p>
                <ul class="warning-highlight">
                    <li>ICE's use of force against journalists and protesters "shocks the conscience"—a legal standard indicating conduct so egregious it violates due process</li>
                    <li>Testimony revealed that most ICE agents receive "very little training on crowd control tactics"</li>
                    <li>Agents were unprepared to handle situations involving media and public gatherings</li>
                </ul>
                <p class="warning-highlight">The ruling provided judicial confirmation of what government watchdogs had been warning about for years: inadequate training was resulting in constitutional violations.</p>`,
            source: `Federal Court Opinion`,
            sourceUrl: "https://cst.brightspotcdn.com/49/34/daecfb4d4b86971a884bd736a564/ellisopinion.pdf",
            mediaType: "document",
            mediaPlaceholder: `Court Opinion Document`
        },
        {
            id: 16,
            date: `January 2026`,
            year: 2026,
            category: "policy",
            title: `287(g) Training Slashed from 4 Weeks In-Person to 40 Hours Online`,
            excerpt: `National Immigration Forum reports the 287(g) program training reduced from a four-week in-person program to just 40 hours of online coursework.`,
            content: `<p>The National Immigration Forum documented a dramatic reduction in training requirements for the revived 287(g) Task Force Model, which authorizes local law enforcement to perform federal immigration enforcement during routine patrols and community encounters.</p>
                <p><strong>Training changes:</strong></p>
                <ul class="warning-highlight">
                    <li>Previous requirement: Four weeks of in-person training at the Federal Law Enforcement Training Center</li>
                    <li>New requirement: 40-hour online course covering scope of authority, immigration law, and civil rights</li>
                </ul>
                <p>As of September 2025, the program had expanded dramatically with 8,501 Task Force Officers trained and over 2,000 additional officers in training across 40 states—all with significantly less preparation than previous models required.</p>
                <p class="warning-highlight">The DHS Office of Inspector General had previously raised concerns in 2010 that civil rights law training for 287(g) participants was inadequate even under the longer training model.</p>`,
            source: `National Immigration Forum`,
            sourceUrl: "https://forumtogether.org/article/explainer-training-under-the-revived-287g-task-force-model/",
            mediaType: "image",
            mediaPlaceholder: `287(g) Program Statistics`
        },
        {
            id: 17,
            date: `January 9, 2026`,
            year: 2026,
            category: "investigation",
            title: `Former DHS Official: Training Cuts Create Agents 'Without Time to Have Judgment'`,
            excerpt: `Juliette Kayyem, former DHS Assistant Secretary, tells NPR that compressed training produces agents lacking judgment for complex field situations.`,
            content: `<p>In an NPR interview, Juliette Kayyem, former DHS Assistant Secretary for Intergovernmental Affairs, provided expert analysis of how training cuts affect agent preparedness.</p>
                <blockquote class="warning-highlight">"Training has been reduced from about 16 weeks to about six, six and a half weeks."</blockquote>
                <p><strong>Kayyem emphasized that compressed training creates agents who are:</strong></p>
                <ul class="warning-highlight">
                    <li>Insufficiently trained for the complexity of their duties</li>
                    <li>Lacking adequate time to develop judgment</li>
                    <li>Deployed on vaguely defined missions driven by political priorities</li>
                </ul>
                <p>She noted that the vagueness of deployment objectives—ranging from crime response to traffic stops—makes proper training impossible without specific operational context.</p>
                <p>Kayyem also emphasized that DHS 2023 policy requires officers to use force only when "no reasonably effective, safe and feasible alternative appears to exist," a standard that requires extensive training to implement properly.</p>`,
            source: "NPR",
            sourceUrl: "https://www.npr.org/2026/01/09/nx-s1-5671120/homeland-security-expert-talks-about-ices-truncated-training-after-hiring-blitz",
            mediaType: "audio",
            mediaPlaceholder: `NPR Interview Audio`
        },
        {
            id: 18,
            date: `January 2026`,
            year: 2026,
            category: "incident",
            title: `AI Tool Error Sends ~200 Recruits to Field Without Proper Training`,
            excerpt: `NBC News reveals an AI malfunction misclassified recruits, sending approximately 200 to field offices without completing required 8-week academy training.`,
            content: `<p>NBC News reported that an artificial intelligence tool used by ICE to categorize new recruits malfunctioned, resulting in hundreds of improperly trained agents being deployed to field offices.</p>
                <p><strong>What happened:</strong></p>
                <ul class="warning-highlight">
                    <li>ICE used AI to sort applicants into either a 4-week online program (for experienced law enforcement) or an 8-week in-person academy (for non-law enforcement backgrounds)</li>
                    <li>The AI flagged anyone with "officer" in their resume—including "compliance officers" and those who merely aspired to work for ICE—as qualified law enforcement officers</li>
                    <li>Approximately 200 hires were affected by this error</li>
                </ul>
                <p class="warning-highlight">One official noted that "a bunch of the people who were LEOs weren't LEOs," meaning many lacked any actual law enforcement experience but received abbreviated training designed for experienced officers.</p>
                <p>The error was discovered in mid-fall, and ICE subsequently implemented manual resume reviews to correct the problem.</p>`,
            source: `NBC News`,
            sourceUrl: "https://www.nbcnews.com/politics/immigration/ice-error-meant-recruits-sent-field-offices-proper-training-sources-sa-rcna254054"
        },
        {
            id: 19,
            date: `January 2026`,
            year: 2026,
            category: "investigation",
            title: `ProPublica Documents 40+ Cases of Banned Chokeholds by ICE Agents`,
            excerpt: `Investigation reveals over 40 incidents of immigration agents using life-threatening neck restraints on immigrants, citizens, and protesters—techniques banned by DHS policy.`,
            content: `<p>ProPublica conducted an extensive investigation documenting widespread use of prohibited restraint techniques by immigration agents, directly contradicting official policy and training standards.</p>
                <p><strong>Key findings:</strong></p>
                <ul class="warning-highlight">
                    <li>Over 40 documented incidents of agents using life-threatening neck restraints during the past year</li>
                    <li>Nearly 20 cases involved prohibited chokeholds and carotid restraints that DHS policy restricts to situations where deadly force is authorized</li>
                    <li>About two dozen additional cases showed officers kneeling on restrained individuals' necks or backs</li>
                </ul>
                <p><strong>Specific cases documented:</strong></p>
                <ul class="warning-highlight">
                    <li><strong>Houston:</strong> An agent choked 16-year-old U.S. citizen Arnoldo Bazan during his father's arrest, causing neck welts and requiring hospitalization</li>
                    <li><strong>Massachusetts:</strong> Carlos Sebastian Zapata Rivera was subjected to a carotid hold while his 1-year-old daughter watched; he convulsed and appeared to lose consciousness</li>
                    <li><strong>Los Angeles:</strong> Multiple incidents of masked officers using chokeholds on citizens</li>
                </ul>
                <p class="warning-highlight">Eight former law enforcement officials who reviewed the footage expressed alarm. Despite documented policy violations, DHS has not disclosed whether any agents faced discipline.</p>`,
            source: "ProPublica",
            sourceUrl: "https://www.propublica.org/article/videos-ice-dhs-immigration-agents-using-chokeholds-citizens",
            mediaType: "video",
            mediaPlaceholder: `ProPublica Investigation Video`
        },
        {
            id: 20,
            date: `January 2026`,
            year: 2026,
            category: "incident",
            title: `Whistleblower: New Hires Told to Ignore Written Training on Warrantless Entry`,
            excerpt: `Senate letter reveals whistleblower complaint that new ICE hires were verbally instructed to follow guidance contradicting their written training materials on warrantless home entry.`,
            content: `<p>A whistleblower complaint transmitted to the Senate Homeland Security Committee revealed a troubling disconnect between official training materials and verbal instructions given to new ICE agents.</p>
                <p><strong>The complaint alleged:</strong></p>
                <ul class="warning-highlight">
                    <li>New ICE hires were verbally told to follow guidance that contradicted their written training materials</li>
                    <li>The contradictions specifically concerned protocols for warrantless home entry—a constitutionally sensitive area</li>
                    <li>Agents were effectively being trained to disregard Fourth Amendment protections taught in their official curriculum</li>
                </ul>
                <p>Senator Blumenthal transmitted the complaint to the Federal Law Enforcement Training Centers (FLETC), requesting an investigation into the alleged training contradictions.</p>
                <p class="warning-highlight">The complaint suggests a systematic effort to circumvent constitutional training, raising serious concerns about the legal exposure of both agents and the agency.</p>`,
            source: `Senate Homeland Security Committee`,
            sourceUrl: "https://www.hsgac.senate.gov/wp-content/uploads/2026-01-21-Letter-from-Blumenthal-to-FLETC.pdf"
        },
        {
            id: 21,
            date: `January 2026`,
            year: 2026,
            category: "court",
            title: `ACLU Files Lawsuit Over Inaccessible 287(g) Training Materials`,
            excerpt: `ACLU lawsuit reveals 287(g) officers 'cannot print out training materials' and must rely on memory when making enforcement decisions.`,
            content: `<p>The ACLU of New Hampshire filed a FOIA lawsuit seeking 287(g) training documents from ICE, highlighting significant transparency concerns about how deputized local officers are prepared for immigration enforcement.</p>
                <p><strong>The lawsuit revealed:</strong></p>
                <ul class="warning-highlight">
                    <li>287(g) officers reportedly cannot print out their training materials</li>
                    <li>Officers must rely on memory when making enforcement decisions in the field</li>
                    <li>The public has no access to information about how these officers are trained</li>
                </ul>
                <p>The ACLU argued that "the public has a right to know" how officers deputized to enforce federal immigration law are being trained, particularly given documented cases of concerning arrests under the program in New Hampshire.</p>
                <p class="warning-highlight">The inability to reference training materials in the field could lead to errors in complex legal situations where constitutional rights are at stake.</p>`,
            source: `ACLU of New Hampshire`,
            sourceUrl: "https://www.aclu-nh.org/press-releases/aclu-nh-files-foia-lawsuit-seeking-nh-287g-training-documents-from-ice/",
            mediaType: "document",
            mediaPlaceholder: `ACLU Lawsuit Filing`
        },
        {
            id: 22,
            date: `January 2026`,
            year: 2026,
            category: "investigation",
            title: `Former Acting ICE Director: 'Lowered Standards Dramatically Increase Risks'`,
            excerpt: `John Sandweg warns that shortened training combined with lowered hiring standards 'increase dramatically the risks' of dangerous incidents.`,
            content: `<p>John Sandweg, former acting director of ICE, provided stark warnings about the consequences of combining lowered hiring standards with shortened training programs.</p>
                <blockquote class="warning-highlight">"When you're putting officers on the street where you have lowered the standards and you have shortened the training, you increase dramatically the risks of incidents like this."</blockquote>
                <p><strong>Sandweg identified several compounding risk factors:</strong></p>
                <ul class="warning-highlight">
                    <li>Lowered hiring standards allowing less qualified candidates</li>
                    <li>Dramatically shortened training periods</li>
                    <li>A "supercharged environment" created by the administration's mass deportation mandate</li>
                    <li>Pressure that intensifies operational tactics and raises tensions</li>
                </ul>
                <p>Sandweg emphasized the importance of agent experience level, questioning whether agents involved in recent incidents were among the newly hired personnel with abbreviated training.</p>`,
            source: `PBS NewsHour`,
            sourceUrl: "https://www.pbs.org/newshour/show/ex-ice-chief-calls-dhs-rush-to-judgement-after-minneapolis-shooting-irresponsible",
            mediaType: "video",
            mediaPlaceholder: `PBS NewsHour Interview`
        },
        {
            id: 23,
            date: `January 2026`,
            year: 2026,
            category: "investigation",
            title: `25-Year DHS Veteran: 'Blatant Disregard for Training' in Minneapolis Shooting`,
            excerpt: `Retired ICE agent Eric Balliet analyzes video of fatal shooting, identifying multiple tactical failures and lack of de-escalation.`,
            content: `<p>Eric Balliet, a 25-year DHS veteran and retired ICE agent, conducted a detailed analysis of video from the fatal Minneapolis shooting of Renee Good, identifying multiple departures from proper federal law enforcement protocols.</p>
                <p><strong>Balliet identified three major tactical concerns:</strong></p>
                <ul class="warning-highlight">
                    <li><strong>No officer identification:</strong> "I don't hear anybody saying like, 'Hey, police!'"</li>
                    <li><strong>Dangerous officer positioning:</strong> Standing directly in front of the vehicle was "almost inducing a shooting if that person decides to flee" and offered no tactical advantage</li>
                    <li><strong>Misreading the situation:</strong> Analysis of the steering wheel angle suggested Good was attempting to maneuver around officers rather than toward them</li>
                </ul>
                <p class="warning-highlight">Balliet emphasized that proper law enforcement requires managing surrounding tension and focusing on objectives, concluding that what he observed "isn't policing and law enforcement as I practiced it for 25 years."</p>
                <p>His analysis disputes the DHS narrative that officers acted in legitimate self-defense.</p>`,
            source: `CBS Minnesota`,
            sourceUrl: "https://www.cbsnews.com/minnesota/news/ice-shooting-minneapolis-retired-agent-video-analysis/",
            mediaType: "video",
            mediaPlaceholder: `CBS Minnesota Analysis Video`
        },
        {
            id: 24,
            date: "2024-2026",
            year: 2025,
            category: "investigation",
            title: `Physicians for Human Rights: 44% of Detainee Deaths Linked to Staffing Issues`,
            excerpt: `Medical human rights organization finds that 44% of 52 detainee deaths examined showed 'serious staffing issues, including improper training.'`,
            content: `<p>Physicians for Human Rights conducted a comprehensive review of deaths in U.S. immigration detention facilities, finding a disturbing pattern connecting fatalities to staffing and training deficiencies.</p>
                <p><strong>Key findings:</strong></p>
                <ul class="warning-highlight">
                    <li>Of 52 detainee deaths examined, 44% showed evidence of serious staffing issues</li>
                    <li>Improper training was identified as a contributing factor in multiple deaths</li>
                    <li>Failures included delayed medical response, missed warning signs, and inadequate emergency protocols</li>
                </ul>
                <p class="warning-highlight">The report titled "Deadly Failures: Preventable Deaths in U.S. Immigration Detention" documented how training deficiencies extend beyond enforcement operations to detention facility management, with fatal consequences.</p>
                <p>The findings suggest that training failures across ICE operations create compounding risks—from initial encounters through detention.</p>`,
            source: `Physicians for Human Rights`,
            sourceUrl: "https://phr.org/our-work/resources/deadly-failures-preventable-deaths-in-u-s-immigration-detention/",
            mediaType: "document",
            mediaPlaceholder: `PHR Report Document`
        },
        {
            id: 25,
            date: `January 14, 2026`,
            year: 2026,
            category: "incident",
            title: `ICE Agent Shoots Venezuelan Man in North Minneapolis; Government Account Contradicted by Video`,
            excerpt: `An ICE agent shot Julio Cesar Sosa-Celis in the leg during a north Minneapolis arrest operation. The Trump administration initially characterized the two Venezuelan men involved as violent attackers, but surveillance footage and dropped charges later contradicted the official account.`,
            content: `<p>On January 14, 2026, an ICE agent shot Julio Cesar Sosa-Celis in the right thigh during an arrest operation in north Minneapolis. The Department of Homeland Security immediately branded Sosa-Celis and two other Venezuelan men as 'attempted murderers,' claiming they beat the ICE agent with brooms and a shovel.</p><p class="warning-highlight">The Justice Department subsequently dropped all charges against Sosa-Celis and his cousin Alfredo Aljorna in February, citing 'newly available evidence materially inconsistent with the allegations.' ICE's acting director acknowledged that two agents on the scene appeared to have made 'untruthful statements' in sworn testimony and placed them on administrative leave pending criminal investigation.</p><ul><li>City of Minneapolis surveillance footage released April 6, 2026, showed a struggle lasting approximately 12 seconds — contradicting the agents' sworn account of a 3-minute struggle.</li><li>The video does not show the men striking the officer with a shovel or broomstick; a shovel is visible on the ground for the duration of the encounter.</li><li>The federal government shifted its own narrative between a January 15 DHS press release and a January 16 DOJ charging document, with the later filing acknowledging agents had originally misidentified the driver.</li><li>The U.S. Attorney's Office stated the case was dismissed with prejudice, meaning charges cannot be refiled.</li></ul><blockquote>Acting ICE Director Todd Lyons: 'Lying under oath is a serious federal offense. The U.S. Attorney's Office is actively investigating these false statements.'</blockquote>`,
            source: `CNN / NPR / Sahan Journal`,
            sourceUrl: "https://www.cnn.com/2026/04/06/us/minneapolis-shooting-ice-video-immigrant"
        },
        {
            id: 26,
            date: `January 30, 2026`,
            year: 2026,
            category: "incident",
            title: `Medical Examiner Rules ICE Detainee Death at Fort Bliss a Homicide`,
            excerpt: `The El Paso County medical examiner ruled that Geraldo Lunas Campos, 55, died of 'asphyxia due to neck and torso compression' while being restrained by guards at ICE's Camp East Montana facility — classifying his death as a homicide. ICE had previously described his death as 'medical distress.'`,
            content: `<p>Geraldo Lunas Campos, 55, a Cuban national, died on January 3, 2026, at the Camp East Montana ICE detention facility at Fort Bliss in El Paso, Texas. On January 30, the final autopsy report — obtained by NBC News via a FOIA request — classified the death as a homicide.</p><p class="warning-highlight">The medical examiner found the cause of death to be "asphyxia due to neck and torso compression," noting that Lunas Campos "was witnessed to become unresponsive while being physically restrained by law enforcement." ICE's original January 9 press release had described his death as resulting from "medical distress" with no mention of physical restraint.</p><ul><li>Fellow detainees testified they heard Lunas Campos pleading for medication before guards tackled him; one witness said a guard told him, "Shut up, or we're going to make you faint."</li><li>Lunas Campos was one of three detainees to die at Camp East Montana, a tent facility at Fort Bliss opened in August 2025 with capacity for up to 5,000 people, in less than six weeks.</li><li>The Texas Civil Rights Project stated the homicide ruling "completely dispels the government's claim that this was a suicide."</li><li>ICE maintained the death was under active investigation and said it "takes seriously the health and safety of all those detained in our custody."</li><li>A wrongful-death lawsuit filed by Lunas Campos's family was ongoing as of March 2026.</li></ul>`,
            source: `NBC News`,
            sourceUrl: "https://www.nbcnews.com/news/us-news/lunas-campos-ice-detainee-homicide-autopsy-rcna256566",
            media: {
                type: "image",
                src: "images/2026-05-04-medical-examiner-rules-ice-detainee-death-at-fort.jpg",
                alt: `Medical Examiner Rules ICE Detainee Death at Fort Bliss a Homicide`,
                caption: `NBC News — January 30, 2026`
            }
        },
        {
            id: 27,
            date: `January 23, 2026`,
            year: 2026,
            category: "investigation",
            title: `Stateline/WSJ Investigation: Pattern of Conflicting DHS Accounts Across 17 Shooting Incidents`,
            excerpt: `Stateline documented a pattern in which DHS repeatedly claimed self-defense in use-of-force incidents while video and witness accounts contradicted official narratives. A Wall Street Journal investigation separately found 13 incidents since July 2025 in which immigration agents fired at or into civilian vehicles.`,
            content: `<p>A Stateline investigation published January 23, 2026, documented a systemic pattern of DHS providing public accounts of use-of-force incidents that were later contradicted by video footage, eyewitness testimony, or official revisions.</p><ul><li class="warning-highlight">Since July 2025, at least 17 open-fire incidents involved federal immigration agents, per data from The Trace.</li><li class="warning-highlight">A Wall Street Journal visual investigation found 13 incidents in that period in which immigration agents fired at or into civilian vehicles.</li><li>In a December 2025 Glen Burnie, Maryland, shooting, DHS revised its account after local police contradicted its initial version — one injured man was already in custody inside an ICE vehicle when he was shot.</li><li>In August 2025, DHS justified a San Bernardino, CA, family vehicle shooting as self-defense; surveillance footage did not show agents being struck by the vehicle.</li><li>DHS did not respond to multiple requests for comment from Stateline on the discrepancies.</li></ul><blockquote class="warning-highlight">'A growing pattern of aggressive tactics and conflicting evidence has raised serious questions about how federal immigration agents use lethal and less-lethal force, and how DHS officials describe the incidents to the public.'</blockquote>`,
            source: "Stateline",
            sourceUrl: "https://stateline.org/2026/01/23/footage-documents-at-odds-with-dhs-accounts-of-immigration-enforcement-incidents/",
            media: {
                type: "image",
                src: "images/2026-05-11-statelinewsj-investigation-pattern-of-conflicting.jpg",
                alt: `Stateline/WSJ Investigation: Pattern of Conflicting DHS Accounts Across 17 Shooting Incidents`,
                caption: `Stateline — January 23, 2026`
            }
        },
        {
            id: 28,
            date: `January 29, 2026`,
            year: 2026,
            category: "investigation",
            title: `CNN Analysis: CBP Agents' Deadly Escalation Reflects 'Dangers of Flooding Cities With Ill-Equipped Officers'`,
            excerpt: `CNN's analysis of the Alex Pretti shooting, reviewed by use-of-force experts, concluded that the fatal escalation likely stemmed from lack of training or a failure to follow it, citing the dangers of deploying immigration officers in urban protest environments without adequate preparation.`,
            content: `<p>CNN's detailed video analysis of the January 24 shooting of Alex Pretti found that two CBP officers were the primary drivers of escalation, pepper-spraying and striking Pretti before drawing weapons and firing at him even after he was on the ground.</p><p class="warning-highlight">Law enforcement experts who reviewed the footage for CNN said the officers' use of deadly force 'likely stemmed from lack of training or a failure by the agents to follow it during the heated encounter.'</p><ul><li>Former FLETC instructor Marc Brown noted: 'The key is the hands — if the hands are occupied on the ground, the weapon is a concern, but not necessarily a problem or threat.'</li><li>Retired police captain Ashley Heiberger observed: 'If you take people who are not trained or experienced in a particular function, and have them do that without supervision, you shouldn't be surprised when it doesn't go well.'</li><li class="warning-highlight">The conduct illustrated, experts said, 'the dangers of flooding American cities with officers ill-equipped to deal with protesters in urban environments.'</li><li>White House Deputy Chief of Staff Stephen Miller acknowledged the administration was 'evaluating why the CBP team may not have been following that protocol.'</li></ul>`,
            source: "CNN",
            sourceUrl: "https://www.cnn.com/2026/01/29/us/immigration-agents-shooting-alex-pretti-invs",
            mediaType: "video",
            mediaPlaceholder: `CNN visual analysis of multi-angle footage showing the sequence of escalating force leading to Pretti's death`
        },
        {
            id: 29,
            date: `February 27, 2026`,
            year: 2026,
            category: "investigation",
            title: `CNN Analysis: ICE Deportation Officers Among Least Trained Federal Law Enforcement Agents`,
            excerpt: `A CNN review of training requirements across the 30 largest sworn federal officer roles found that ICE deportation officers — whose training was cut from roughly 100 days to 42 days — receive less training than almost any other federal agents, including those who investigate odometer fraud and protect fisheries.`,
            content: `<p>A February 27, 2026 CNN analysis reviewed academy training requirements for approximately 30 sworn officer roles across the 20 largest federal law enforcement agencies. The investigation found that only U.S. Court probation officers and federal prison guards require fewer training days than ICE deportation officers.</p><p class="warning-highlight">ICE deportation officers were previously required to complete approximately 20 weeks (roughly 100 days) of training before assuming field duties. Under the Trump administration's surge hiring program, that was cut to 42 days — less than half. By contrast, IRS criminal investigators, Secret Service police officers, and Capitol Police officers receive more than double the training. Even law enforcement officers at the National Oceanic and Atmospheric Administration (who guard fisheries) and Bureau of Engraving and Printing police complete longer programs than ICE deportation officers.</p><ul><li>Former FLETC trainer Marc Brown told CNN: "They're not being adequately trained for what they're being tasked with. Some of the mistakes you would make in training, now you're making them in the field."</li><li>Whistleblower Ryan Schwank, whose congressional testimony was published the same day, said: "ICE made the program shorter, and they removed so many essential parts that what remains is a dangerous husk"</li><li>ICE did not address CNN's specific analysis but said training was streamlined "without sacrificing basic subject matter content"</li><li>CNN reported that training documents provided to Congress by the whistleblower did not reflect ICE's claim of extended 12-hour training days</li></ul>`,
            source: "CNN",
            sourceUrl: "https://www.cnn.com/2026/02/27/us/ice-deportation-officers-training-agents-invs",
            mediaType: "document",
            mediaPlaceholder: `Comparative chart of training days required across 30 federal law enforcement officer roles, showing ICE near the bottom`
        },
        {
            id: 30,
            date: `February 23, 2026`,
            year: 2026,
            category: "investigation",
            title: `ICE Whistleblower Schwank Testifies: Training Is 'Deficient, Defective, and Broken'`,
            excerpt: `Former ICE academy instructor Ryan Schwank testified publicly before a congressional forum that ICE cut 250 hours of training from its recruit program, removed 16 hours of firearms training, eliminated a dozen practical exams, and secretly instructed new agents to enter homes without judicial warrants — directly contradicting sworn testimony by ICE's acting director.`,
            content: `<p>On February 23, 2026, Ryan Schwank — a former ICE attorney who resigned from the agency on February 13 after serving as a legal instructor at the FLETC academy in Glynco, Georgia — testified publicly at a congressional forum co-hosted by Sen. Richard Blumenthal (D-CT) and Rep. Robert Garcia (D-CA).</p><p class="warning-highlight">Schwank testified that the ICE Basic Immigration Enforcement Training Program is "now deficient, defective, and broken" and accused DHS of lying to Congress about training content. Internal documents released by Sen. Blumenthal showed that between July 2025 and February 2026, training dropped from 72 to 42 days, with new recruits receiving approximately 250 fewer hours of instruction. Removed or drastically reduced content included: 16 hours of firearms training; use-of-force simulation training; criminal vs. removal proceedings; U.S. Government Structure; and constitutional rights of protesters (cut from 2 hours to approximately 10 minutes). Over a dozen practical exams were also eliminated.</p><p class="warning-highlight">Schwank further testified that on his first day at the academy, a supervisor handed him a classified memo signed by Acting ICE Director Todd Lyons authorizing warrantless home entries, told him to train agents on it, and instructed him not to document that training — directly contradicting Lyons's sworn congressional testimony that the memo had been widely distributed. "ICE is teaching cadets to violate the Constitution," Schwank said, "and they were attempting to cloak it in secrecy."</p><ul><li>As of January 29, 2026, 803 new officers had already graduated under the stripped-down program</li><li>A second whistleblower corroborated Schwank's account, and American Oversight obtained ICE training records that mirrored his testimony</li><li>The documents directly contradicted Acting Director Lyons's prior congressional testimony that no content had been cut</li></ul><blockquote>"Without reform, ICE will graduate thousands of new officers who do not know their constitutional duty, do not know the limits of their authority, and do not have the training to recognize an unlawful order." — Ryan Schwank</blockquote>`,
            source: `CBS News / CNN / Sen. Blumenthal's Office`,
            sourceUrl: "https://www.cbsnews.com/news/ice-whistleblower-new-recruits-receiving-defective-training/",
            mediaType: "document",
            mediaPlaceholder: `Side-by-side comparison of the July 2025 and February 2026 ICE training syllabi showing eliminated courses and exams`
        },
        {
            id: 31,
            date: `February 13, 2026`,
            year: 2026,
            category: "incident",
            title: `DHS Admits Two ICE Agents Lied Under Oath in Minneapolis Shooting Case`,
            excerpt: `Acting ICE Director Todd Lyons acknowledged that two officers involved in the January 14 shooting of Julio Sosa-Celis appeared to have made 'untruthful statements' in sworn testimony. The Justice Department dropped all assault charges against Sosa-Celis and his cousin with prejudice.`,
            content: `<p>On February 13, 2026, Acting ICE Director Todd Lyons issued a rare public statement acknowledging that two ICE officers had apparently lied under oath about the January 14 shooting of Venezuelan immigrant Julio Cesar Sosa-Celis in north Minneapolis. The statement came as the U.S. Attorney's Office moved to drop all charges against Sosa-Celis and his cousin Alfredo Aljorna.</p><p class="warning-highlight">A joint review by ICE and the Department of Justice of video evidence revealed that sworn testimony provided by two separate officers contained 'untruthful statements.' Both officers were immediately placed on administrative leave. The charges were dismissed with prejudice, meaning they cannot be refiled. The U.S. Attorney's Office stated the case involved 'newly discovered evidence materially inconsistent with the allegations.'</p><ul><li>ICE's acting director acknowledged that lying under oath is a federal offense and that the U.S. Attorney's Office was actively investigating.</li><li>The acknowledgment came one day after Lyons told Congress that ICE had conducted 37 investigations into officers' use of force over the past year.</li><li>The Trump administration had simultaneously announced the end of Operation Metro Surge, which led to more than 4,000 arrests and the deaths of two U.S. citizens.</li><li>City of Minneapolis surveillance video released in April 2026 further confirmed the agents' account was false, showing the struggle lasted approximately 12 seconds rather than the claimed 3 minutes.</li></ul>`,
            source: `NPR / ABC News`,
            sourceUrl: "https://www.npr.org/2026/02/13/nx-s1-5713947/immigration-agents-lie-minnesota"
        },
        {
            id: 32,
            date: `February 3, 2026`,
            year: 2026,
            category: "investigation",
            title: `CS Monitor: Dozens of Excessive Force Tort Claims Filed Against ICE Since Mid-2025`,
            excerpt: `A Christian Science Monitor review of over a dozen federal tort claims, filed between June and December 2025, documented a pattern of injuries — including bruises, lacerations, and head injuries — suffered by people during ICE and Border Patrol encounters, raising questions about agent accountability under sovereign immunity.`,
            content: `<p>A February 2026 investigation by The Christian Science Monitor reviewed more than a dozen Federal Tort Claims Act (FTCA) filings against ICE and CBP, submitted between June and December 2025, in which claimants described being physically assaulted or detained without cause during immigration enforcement operations.</p><p class="warning-highlight">Claimants described leaving encounters with bruises, lacerations, and head injuries. Nearly a dozen alleged they were tackled or thrown to the ground, and multiple claimants said officers pushed their knees into detainees' faces, necks, or backs. One man said agents pepper sprayed him before repeatedly punching him in the face and head.</p><ul><li>The article documented that the surge in urban immigration operations had made encounters between civilians and federal law enforcement more common, and that these complaints were not isolated incidents but part of a documented pattern.</li><li>The federal government and its employees are generally shielded by sovereign immunity from being sued for official acts — a protection that does not apply to state and local law enforcement — limiting legal recourse for victims.</li><li>Attorneys noted that "all of this really highlights the lack of federal accountability" for constitutional violations by immigration agents.</li><li>ICE and DHS did not respond to requests for comment for the article.</li></ul>`,
            source: `The Christian Science Monitor`,
            sourceUrl: "https://www.csmonitor.com/USA/Justice/2026/0203/homeland-security-excessive-force-ice-immigration",
            media: {
                type: "image",
                src: "images/2026-05-04-cs-monitor-dozens-of-excessive-force-tort-claims-f.jpg",
                alt: `CS Monitor: Dozens of Excessive Force Tort Claims Filed Against ICE Since Mid-2025`,
                caption: `The Christian Science Monitor — February 3, 2026`
            }
        },
        {
            id: 33,
            date: `February 20, 2026`,
            year: 2026,
            category: "incident",
            title: `ICE Concealed Killing of U.S. Citizen Ruben Ray Martinez for Nearly 11 Months`,
            excerpt: `American Oversight obtained internal FOIA records revealing that an ICE agent fatally shot 23-year-old U.S. citizen Ruben Ray Martinez in Texas in March 2025 — the first known ICE killing of a U.S. citizen in Trump's second term. ICE's involvement was not publicly disclosed for nearly 11 months.`,
            content: `<p>On March 15, 2025, federal immigration agents fatally shot Ruben Ray Martinez, 23, a U.S. citizen from San Antonio, on South Padre Island, Texas, while assisting local police with traffic control. The incident was reported locally but ICE's involvement was concealed.</p><p class="warning-highlight">American Oversight obtained internal records through FOIA that confirmed ICE's role. DHS did not publicly acknowledge its involvement until February 2026 — nearly 11 months after the shooting — making Martinez the first publicly known U.S. citizen killed by immigration agents during Trump's second term.</p><ul><li>DHS claimed Martinez 'intentionally ran over' an agent; body camera footage later obtained by CBS News appeared to contradict this account, showing the car was barely moving and no agent was in front of the vehicle when shots were fired.</li><li>A witness in Martinez's vehicle, Joshua Orta, stated in a sworn affidavit that Martinez 'did not hit anyone' and was shot at point-blank range 'without warning.'</li><li>A Texas grand jury declined to indict the agent in February 2026. Orta died in an unrelated car crash days after the grand jury decision.</li><li class="warning-highlight">Congressional Democrats called the delay an '8-month cover-up' and demanded a full investigation into both the shooting and the failure to disclose ICE's role.</li></ul>`,
            source: `American Oversight / Newsweek`,
            sourceUrl: "https://americanoversight.org/lawmakers-call-for-investigation-after-records-reveal-undisclosed-ice-shooting-death-of-u-s-citizen/",
            media: {
                type: "image",
                src: "images/2026-05-11-ice-concealed-killing-of-us-citizen-ruben-ray-mart.png",
                alt: `ICE Concealed Killing of U.S. Citizen Ruben Ray Martinez for Nearly 11 Months`,
                caption: `American Oversight / Newsweek — February 20, 2026`
            }
        },
        {
            id: 34,
            date: `February 18, 2026`,
            year: 2026,
            category: "watchdog",
            title: `DHS Funding Lapse Forces OIG to Pause 85% of ICE Oversight Audits`,
            excerpt: `A partial government shutdown caused DHS OIG to pause approximately 85% of its audits and inspections, halting at least seven active probes into ICE conduct including investigations into excessive force accountability, detention standards compliance, and CBP domestic operations.`,
            content: `<p>A partial government shutdown that began in February 2026 forced the DHS Office of Inspector General to suspend the vast majority of its active oversight work, including multiple reviews directly relevant to escalating use-of-force concerns.</p><p class="warning-highlight">Probes that were suspended included: investigations into whether ICE investigates allegations of excessive force and holds personnel accountable; unannounced inspections of ICE detention facilities to assess compliance with detention standards; and a review of whether CBP agents are conducting domestic U.S. operations in accordance with DHS policies and federal law.</p><ul><li>The OIG confirmed in a public statement that 'most of OIG's audits, inspections, and similar reviews are paused during the lapse in appropriations.'</li><li>Only criminal investigations and a small number of disaster-relief-related audits continued.</li><li>DHS OIG's own website later acknowledged that 'DHS OIG suffered a lapse in appropriation for approximately 60% of FY 2026.'</li><li>The suspension came precisely as incidents of ICE use of force were under intense public and congressional scrutiny following the deaths of Renée Good and Alex Pretti.</li></ul>`,
            source: `Fox News Digital / DHS OIG`,
            sourceUrl: "https://www.foxnews.com/politics/democrats-dhs-shutdown-halts-ice-oversight-demanded",
            media: {
                type: "image",
                src: "images/2026-06-08-dhs-funding-lapse-forces-oig-to-pause-85-of-ice-ov.jpg",
                alt: `DHS Funding Lapse Forces OIG to Pause 85% of ICE Oversight Audits`,
                caption: `Fox News Digital / DHS OIG — February 18, 2026`
            }
        },
        {
            id: 35,
            date: `March 10, 2026`,
            year: 2026,
            category: "investigation",
            title: `CNN: ICE and CBP Agents Routinely Violated Less-Lethal Weapons Policies Against Protesters`,
            excerpt: `A CNN analysis of more than two dozen videos found federal agents systematically violated both their own agency rules and local policing standards when using pepper balls, rubber bullets, and tear gas against protesters — with experts attributing the pattern to inadequate training and a culture that encourages aggression.`,
            content: `<p>On March 10, 2026, CNN published an investigation based on a review of more than 20 videos of federal agents using chemical sprays or projectile munitions against protesters in cities including Minneapolis, Chicago, and Portland. All videos appeared to violate either CBP/ICE policies or local policing standards.</p><p class="warning-highlight">Documented violations included: deploying chemical weapons near children; firing less-lethal munitions at protesters' heads and faces from close range; using pepper spray on restrained individuals already under agents' control; and deploying crowd-control munitions without warning or a dispersal order — all violations of CBP and ICE's own policies. Former CBP Commissioner Gil Kerlikowske stated: "They have violated every protocol on less-lethal (weapons) and crowd control. Not making an announcement to disperse, body-slamming people to the ground...they're supposed to de-escalate, and they don't."</p><ul><li>Experts attributed the widespread misuse to a lack of specific policies and training for urban policing, combined with encouragement from administration officials to aggressively confront protesters</li><li>Injuries documented included lost eyesight, broken bones, and serious breathing complications</li><li>A criminologist stated the pattern shows agents are "poorly trained, poorly supervised" and that agency leadership has condoned the conduct</li><li>The Hennepin County Attorney's criminal investigation, announced March 2, included many of the incidents documented by CNN</li></ul>`,
            source: "CNN",
            sourceUrl: "https://www.cnn.com/2026/03/10/us/ice-federal-agents-less-lethal-weapons",
            mediaType: "video",
            mediaPlaceholder: `Video compilation of federal agents deploying less-lethal munitions against protesters in violation of their own agency policies`
        },
        {
            id: 36,
            date: `March 9, 2026`,
            year: 2026,
            category: "court",
            title: `Federal Judge Issues Injunction Finding DHS Has 'Unwritten Policy' of Excessive Force on Protesters`,
            excerpt: `U.S. District Court Judge Michael Simon issued a preliminary injunction restricting federal agents' use of tear gas and less-lethal weapons at the Portland ICE facility, finding that DHS had what amounted to 'an unwritten policy of using excessive force against nonviolent peaceful protestors.'`,
            content: `<p>On March 9, 2026, U.S. District Court Judge Michael Simon issued a preliminary injunction sharply limiting when Homeland Security officers could use tear gas, rubber bullets, pepper balls, and other crowd control weapons against protesters outside the ICE building in Portland, Oregon. The case was brought by the ACLU of Oregon on behalf of protesters and journalists.</p><p class="warning-highlight">In his written ruling, Judge Simon found that Homeland Security had what amounted to an unwritten policy of using excessive force against nonviolent peaceful protesters, for the purpose of chilling constitutional rights to free speech and press. He cited video evidence showing 'DHS officers spraying OC Spray directly into the faces of peaceful and nonviolent protesters engaged in, at most, passive resistance.'</p><ul><li>The injunction prohibited use of chemical or projectile munitions unless a target 'poses an imminent threat of physical harm to a law enforcement officer or other person.'</li><li>Agents were barred from deploying munitions at the head, neck, or torso unless deadly force was legally justified.</li><li>A second federal judge, Amy Baggio, issued a parallel injunction based on a separate case brought by residents of a low-income apartment building across the street from the ICE facility, whose tenants reported sleeping in gas masks.</li><li>The Ninth Circuit temporarily paused both injunctions on March 25, 2026, on a 2-1 vote, pending expedited appeal arguments heard on April 7, 2026.</li></ul><blockquote>Judge Simon: 'Defendants' conduct — physically harming protestors and journalists without prior dispersal warnings — is objectively chilling.'</blockquote>`,
            source: `OPB / Fox News / Oregon Capital Chronicle`,
            sourceUrl: "https://www.opb.org/article/2026/03/09/federal-judge-limits-crowd-control-devices-portland-ice-building/",
            mediaType: "document",
            mediaPlaceholder: `Court order text with highlighted finding of 'unwritten policy' of excessive force; video stills submitted as evidence`
        },
        {
            id: 37,
            date: `March 7, 2026`,
            year: 2026,
            category: "investigation",
            title: `CBS News Bodycam Video Contradicts ICE Account of Martinez Shooting; Car Was Barely Moving`,
            excerpt: `CBS News obtained police body camera footage of the March 2025 ICE shooting of U.S. citizen Ruben Ray Martinez, showing his car was barely moving when he was shot and no agent appeared to be in front of the vehicle — directly contradicting DHS's claim that the agent fired defensively after being run over.`,
            content: `<p>CBS News obtained police body camera footage of the March 15, 2025, fatal shooting of Ruben Ray Martinez and published its analysis on March 7, 2026.</p><p class="warning-highlight">The footage showed Martinez being shot three times at close range through his vehicle window. Attorneys for his family said the video confirms 'Ruben's car was barely moving when he was shot,' that 'nobody was on the hood of his car,' and that 'nobody was in front of his car when he was shot' — all contradicting DHS's public account.</p><ul><li>After being shot, Martinez was pulled from his vehicle, thrown face-down, and handcuffed. Medical care was not provided until after he was handcuffed.</li><li>DHS's acting ICE director Todd Lyons defended the outcome: 'We stand by the grand jury's unanimous decision that found no criminality.'</li><li class="warning-highlight">The footage raised further questions about accountability mechanisms when ICE agents use deadly force with no body camera requirement for deportation officers.</li></ul>`,
            source: `CBS News`,
            sourceUrl: "https://www.cbsnews.com/news/bodycam-video-ice-fatal-shooting-ruben-ray-martinez-texas/",
            media: {
                type: "image",
                src: "images/2026-05-11-cbs-news-bodycam-video-contradicts-ice-account-of.jpg",
                alt: `CBS News Bodycam Video Contradicts ICE Account of Martinez Shooting; Car Was Barely Moving`,
                caption: `CBS News — March 7, 2026`
            }
        },
        {
            id: 38,
            date: `March 26, 2026`,
            year: 2026,
            category: "court",
            title: `DOJ Admits ICE Courthouse Arrest Policy Was Based on Erroneous Legal Memo`,
            excerpt: `In a filing before a New York federal judge, DOJ attorneys conceded that a 2025 ICE memo — repeatedly cited in court to justify courthouse arrests — did not actually apply to immigration courts, undermining the legal basis for hundreds of civil arrests at immigration hearings.`,
            content: `<p>On March 26, 2026, Department of Justice attorneys filed a letter with U.S. District Judge P. Kevin Castel of the Southern District of New York admitting that a 2025 ICE guidance memo, which the government had repeatedly cited in litigation to defend courthouse arrests, <strong>did not apply to immigration courts</strong>.</p><ul><li class="warning-highlight">The May 2025 ICE memo stated agents could conduct <em>'civil immigration enforcement actions in or near courthouses'</em> when they had credible information a target would be present — but DOJ acknowledged the memo explicitly excluded immigration courts from its scope.</li><li>The admission came in a lawsuit brought by African Communities Together and The Door, two New York City immigrant advocacy organizations that challenged ICE courthouse arrest operations at 26 Federal Plaza and other Manhattan immigration courts.</li><li>Judge Castel had been presiding over extensive litigation about courthouse arrests since dramatic scenes of masked ICE agents arresting immigrants during routine hearings were broadcast nationally starting in early 2026.</li></ul><p class="warning-highlight">The DOJ's concession that it had relied on <em>erroneous information</em> in defending the courthouse arrest policy raised additional questions about whether ICE officers deployed to immigration courts had received legally accurate guidance about their arrest authority — a training and supervision failure with direct constitutional implications.</p>`,
            source: "NPR",
            sourceUrl: "https://www.npr.org/2026/03/26/nx-s1-5762691/doj-admits-ice-courthouse-arrests-relied-on-erroneous-information",
            mediaType: "document",
            mediaPlaceholder: `DOJ letter to Judge Castel and court filings acknowledging the erroneous legal memo`
        },
        {
            id: 39,
            date: `April 6, 2026`,
            year: 2026,
            category: "investigation",
            title: `New Video Proves ICE Account of Minneapolis Shooting Was False; Charges Had Already Been Dropped`,
            excerpt: `City of Minneapolis surveillance footage released April 6 showed the chain of events in the January 14 shooting of Julio Sosa-Celis, directly contradicting the DHS narrative and confirming what video evidence and dropped charges had already suggested: ICE agents fabricated their sworn accounts.`,
            content: `<p>On April 6, 2026, the City of Minneapolis released nine minutes of traffic-camera footage capturing the January 14, 2026, incident in which an ICE agent shot Julio Cesar Sosa-Celis. The video directly contradicted the account ICE officers gave under oath and that DHS had publicly promoted.</p><p class="warning-highlight">The footage showed a struggle lasting approximately 12 seconds — not the 3 minutes agents claimed. It also showed that the shovel Sosa-Celis was alleged to have used as a weapon was dropped before any struggle began and remained visible on the snowy ground for the entire encounter. The Justice Department had already dropped charges in February after acknowledging 'newly available evidence materially inconsistent with the allegations,' and ICE had placed two agents on administrative leave for making false sworn statements.</p><ul><li>The video showed federal agents following Aljorna as he drove and then tackled him outside his home. Sosa-Celis appears to be trying to help his cousin before the agent fires.</li><li>DHS's initial January 15 press release misidentified Sosa-Celis as the driver; the January 16 DOJ charging document quietly corrected this, acknowledging agents had mistaken Aljorna for an unrelated Latino man.</li><li>ICE spokesperson told CNN the two officers who made false statements 'could potentially face termination or criminal prosecution.'</li><li>Minneapolis Mayor Frey said: 'The video makes it crystal clear that, just like in other situations during Operation Metro Surge, the federal government's account of what happened simply does not match the facts.'</li></ul>`,
            source: `CNN / Sahan Journal / Minnesota Reformer`,
            sourceUrl: "https://minnesotareformer.com/2026/04/06/newly-released-surveillance-footage-of-jan-14-ice-shooting-contradicts-agents-account/",
            mediaType: "video",
            mediaPlaceholder: `Minneapolis traffic camera footage showing the 12-second struggle and shovel on the ground before shooting`
        },
        {
            id: 40,
            date: `April 14, 2026`,
            year: 2026,
            category: "investigation",
            title: `ProPublica/FRONTLINE 'Caught in the Crackdown': 300+ Protest Arrests Fall Apart; Agents Lacked Training for Crowd Operations`,
            excerpt: `A joint ProPublica and FRONTLINE documentary and investigation found that federal immigration agents arrested more than 300 U.S. citizen protesters and bystanders, with over a third of cases dismissed or lost — repeatedly because officer statements were debunked by video evidence. Former DOJ attorney Christy Lopez said agents' conduct was 'on par with the worst protest policing' she had ever seen, attributing failures to inadequate training.`,
            content: `<p>On April 14, 2026, ProPublica and FRONTLINE released a joint investigation — 'Caught in the Crackdown' — documenting the conduct of federal immigration agents during immigration sweeps from Los Angeles to Chicago to Minneapolis, with particular focus on the mass arrest of protesters.</p><ul><li class="warning-highlight">Reporters identified more than 300 protesters and bystanders who were arrested by federal agents during immigration sweeps and accused of crimes such as assaulting or interfering with law enforcement. In more than a third of documented cases, prosecutors dismissed charges, refused to file, or lost at trial — often because arresting officers' accounts were contradicted by video footage.</li><li class="warning-highlight">Body-camera footage showed Border Patrol Commander Gregory Bovino instructing agents: 'Arrest as many people that touch you as you want to. Those are the general orders, all the way to the top.' Legal expert Jared Fishman, former DOJ Civil Rights Division prosecutor, said the data reflected 'a pattern and practice of illegal arrests.'</li><li class="warning-highlight">Former DOJ attorney Christy Lopez, who spent years investigating law enforcement misconduct, said of the agents' crowd conduct: 'The agents, they don't know how to operate in these situations,' adding their behavior was 'on par with the worst protest policing and just law enforcement that I've seen from any department, even in their worst days.'</li><li>Agents routinely shot pepper balls or tear gas at protesters in ways that experts said violated their own policies, causing severe injuries in several cities. The investigation documented agents operating outside the scope of any immigration enforcement mandate when arresting protest observers.</li></ul><p>The documentary reinforced concerns about systematic training deficiencies in deploying immigration enforcement agents in large-scale urban crowd environments — a role for which neither ICE nor CBP personnel receive specialized preparation.</p>`,
            source: `ProPublica / FRONTLINE`,
            sourceUrl: "https://www.propublica.org/article/caught-in-crackdown-ice-cbp-doj-trump-arrests-convictions",
            mediaType: "video",
            mediaPlaceholder: `FRONTLINE documentary 'Caught in the Crackdown' examining protest arrests and agent conduct from LA to Minneapolis`
        },
        {
            id: 41,
            date: `April 2, 2026`,
            year: 2026,
            category: "court",
            title: `ACLU Lawsuit Challenges Secret ICE 'Home Entry Memo'; Trainers Told to Ignore Written Materials`,
            excerpt: `Six Minnesota residents, represented by the ACLU and Protect Democracy, filed a federal lawsuit challenging a secret DHS memo authorizing ICE agents to enter homes without judicial warrants. The complaint cited congressional testimony that FLETC instructors were verbally directing new agents to follow the memo and disregard written training materials.`,
            content: `<p>On April 2, 2026, six Minnesota residents filed a federal lawsuit in D.C. district court challenging a secret May 2025 DHS directive — dubbed the "Home Entry Memo" or "Lyons Memo" — that authorized ICE agents to use administrative (non-judicial) warrants to forcibly enter and search homes.</p><p class="warning-highlight">The lawsuit cited congressional testimony by whistleblower Ryan Schwank, a former ICE attorney, that Federal Law Enforcement Training Center instructors were now directed to verbally train all new ICE agents to follow the Home Entry Memo — while explicitly instructing them to disregard the written course materials, which stated the opposite. No written record of these instructions was kept.</p><ul><li>The plaintiffs included Garrison and Teyana Gibson, whose north Minneapolis home was raided by masked agents using a battering ram on January 11, 2026, while their 11-year-old daughter, niece, and sister-in-law were inside.</li><li>The lawsuit described the policy as a "flagrantly unconstitutional" departure from decades of ICE training that agents must obtain judicial warrants before entering homes.</li><li>The complaint alleged the memo was "conducted under a veil of secrecy" — agents were shown the memo but prohibited from taking notes or keeping a copy.</li><li>A separate federal judge had already ruled in January 2026 that agents violated the Fourth Amendment in the Gibson raid specifically.</li><li>Incoming DHS Secretary Markwayne Mullin testified at his confirmation hearing that he would review the policy and ensure it was consistent with the Constitution, though advocates said no formal reversal had been issued at the time of filing.</li></ul>`,
            source: `Courthouse News Service`,
            sourceUrl: "https://courthousenews.com/minnesotans-sue-feds-over-warrantless-ice-raids/",
            media: {
                type: "image",
                src: "images/2026-05-04-aclu-lawsuit-challenges-secret-ice-home-entry-memo.jpg",
                alt: `Law enforcement officers stand amid tear gas at the scene of a reported shooting Wednesday, Jan. 14, 2026, in Minneapolis. (AP Photo/Adam Gray)`,
                caption: `Courthouse News Service — April 2, 2026`
            }
        },
        {
            id: 42,
            date: `April 21, 2026`,
            year: 2026,
            category: "incident",
            title: `ICE Custody Deaths Reach 17 in 2026 — Averaging One Per Week, Highest in Two Decades`,
            excerpt: `By April 21, 2026, at least 17 people had died in ICE detention in 2026, averaging roughly one death per week — the highest rate in over two decades. Advocates linked the surge to rapidly expanded detention capacity, medical neglect, and inadequate staffing in hastily opened facilities.`,
            content: `<p>As of April 21, 2026, at least 17 people had died in ICE custody in 2026, according to ICE's own disclosures — a pace of approximately one death per week. This comes on the heels of 2025, which saw 33 total in-custody deaths, the highest recorded total in more than two decades.</p><p class="warning-highlight">Advocacy director Setareh Ghandehari of the Detention Watch Network stated: "I have never seen anything like this, where I'm seeing ICE reporting out at least one death per week." She noted that people were "reaching the point of emergency for issues that could easily be dealt with if proper medical care was given."</p><ul><li>The ACLU documented that at least 40 people have died in immigration detention since President Trump returned to office in January 2025, with at least one death classified as a homicide (Geraldo Lunas Campos, Fort Bliss).</li><li>Recent deaths have been reported at Fort Bliss (Camp East Montana), the Florence Correctional Center, and the Adelanto ICE Processing Center — facilities with documented medical failures, tuberculosis outbreaks, and overcrowding.</li><li>ICE released delayed detainee death reports for four January deaths after NBC News reported the agency had missed a 90-day Congressional reporting deadline, raising further transparency concerns.</li><li>As of early April 2026, ICE was detaining more than 60,000 immigrants — significantly higher than pre-Trump levels — in a rapidly expanded detention network that includes converted warehouses and tent facilities.</li></ul>`,
            source: `Democracy Now!`,
            sourceUrl: "https://www.democracynow.org/2026/4/21/ice_custody_deaths_ghandehari_detention_watch",
            media: {
                type: "image",
                src: "images/2026-05-04-ice-custody-deaths-reach-17-in-2026-averaging-one.jpg",
                alt: `ICE Custody Deaths Reach 17 in 2026 — Averaging One Per Week, Highest in Two Decades`,
                caption: `Democracy Now! — April 21, 2026`
            }
        },
        {
            id: 43,
            date: `April 22, 2026`,
            year: 2026,
            category: "incident",
            title: `Colorado Charges CBP Agent with Assault for Banned Chokehold on Protester`,
            excerpt: `Colorado prosecutors charged CBP officer Nicholas Rice with third-degree assault and criminal mischief after video showed him placing a 57-year-old protester in a chokehold and throwing her down an embankment outside an ICE facility in Durango — a tactic banned under Colorado law since 2020.`,
            content: `<p>A Colorado district attorney announced charges on April 22, 2026, against U.S. Customs and Border Protection officer Nicholas Rice following a state-level investigation initiated at the request of the Durango Police Department chief.</p><ul><li class="warning-highlight">Multiple bystander videos captured a masked federal agent placing Franci Stagi, a 57-year-old retired hypnotherapist, in a chokehold during an October 2025 protest outside the Durango ICE facility. Stagi said the agent grabbed her by the hair and threw her down an embankment.</li><li class="warning-highlight">Chokeholds have been banned or severely restricted under Colorado law since George Floyd's death in 2020. DHS policy also prohibits carotid chokeholds except when deadly force is authorized — a threshold not present here.</li><li>Rice was charged with third-degree assault (misdemeanor, up to one year in jail) and criminal mischief for allegedly damaging Stagi's cellphone. Court documents did not use the word "chokehold" in describing the assault charge.</li><li>The Colorado Bureau of Investigations launched its own probe at Durango Police Chief Brice Current's request — described as "an unusual if not unprecedented" step for a municipal department to request a state investigation of a federal officer.</li></ul><blockquote>"She hopes the prosecution sends a message that immigration officers can't tackle people indiscriminately and use excessive force," PBS NewsHour reported.</blockquote><p class="warning-highlight">The charges, coming days after the Minnesota charges against Agent Morgan, signaled a growing wave of state-level efforts to hold federal immigration agents criminally accountable — a legal terrain the Justice Department has openly contested, warning such actions violate the Supremacy Clause.</p>`,
            source: `Colorado Sun`,
            sourceUrl: "https://coloradosun.com/2026/04/22/ice-agent-arrest-durango-assault-charge/",
            media: {
                type: "image",
                src: "images/2026-05-18-colorado-charges-cbp-agent-with-assault-for-banned.jpg",
                alt: `Colorado Charges CBP Agent with Assault for Banned Chokehold on Protester`,
                caption: `Colorado Sun — April 22, 2026`
            }
        },
        {
            id: 44,
            date: `April 16, 2026`,
            year: 2026,
            category: "incident",
            title: `Minnesota Charges ICE Agent Morgan with Felony Assault for Gun-Pointing Road Incident`,
            excerpt: `Hennepin County prosecutors charged ICE agent Gregory Donnell Morgan Jr. with two felony counts of second-degree assault for allegedly pointing his service weapon at two civilians from an unmarked SUV during a highway road-rage incident in February 2026 — the first criminal charge against a federal immigration agent during Operation Metro Surge.`,
            content: `<p>On April 16, 2026, Hennepin County Attorney Mary Moriarty announced felony assault charges against ICE Enforcement and Removal Operations agent Gregory Donnell Morgan Jr., 35, of Temple Hills, Maryland. A nationwide arrest warrant was issued.</p><ul><li class="warning-highlight">On February 5, 2026 — during Operation Metro Surge — Morgan was driving an unmarked, unlit rental SUV illegally on the shoulder of Highway 62 near Minneapolis. When a white Cadillac briefly moved to impede his passage, Morgan pulled alongside and pointed his service weapon at both occupants.</li><li class="warning-highlight">The victims were unaware they were interacting with a federal agent; Morgan's vehicle had no markings, sirens, or lights. Morgan's supervisor later confirmed the incident was never reported up the chain of command.</li><li>Moriarty said: <em>"There is no such thing as absolute immunity for federal agents who violate the law in the state of Minnesota."</em> She described it as likely the first on-duty criminal charge against a federal immigration officer nationwide.</li><li>The Justice Department had previously warned state and local officials that arresting federal agents performing their duties would be "illegal and futile."</li></ul><blockquote>"There was nothing that they did that justified what Mr. Morgan did," Moriarty told reporters.</blockquote><p class="warning-highlight">Legal experts noted the case could establish a national precedent for state prosecution of federal immigration agents, particularly where agents act outside their identifiable law-enforcement role — and could pressure DHS to end the practice of deploying masked, unmarked agents.</p>`,
            source: "NPR",
            sourceUrl: "https://www.npr.org/2026/04/16/nx-s1-5787958/minnesota-charged-ice-officer-assault-immigration-surge",
            mediaType: "document",
            mediaPlaceholder: `Hennepin County criminal complaint and arrest warrant for Gregory Donnell Morgan Jr.`
        },
        {
            id: 45,
            date: `April 30, 2026`,
            year: 2026,
            category: "watchdog",
            title: `Illinois Accountability Commission: 'Illegal and Violent Conduct' in Operation Midway Blitz Final Report`,
            excerpt: `The Illinois Accountability Commission — the first state body in U.S. history to independently investigate federal immigration enforcement misconduct — issued a 204-page final report documenting unconstitutional use of force, warrantless arrests, and systematic deception by ICE and CBP during Operation Midway Blitz, and referred specific agents for criminal prosecution.`,
            content: `<p>On April 30, 2026, Illinois Governor JB Pritzker's Illinois Accountability Commission — created by executive order in October 2025 — released its 204-page final report following months of investigation that included 16 formal inquiries, over 60 witness interviews, and review of nearly 100 hours of body-camera footage.</p><p class="warning-highlight">The report's central findings:</p><ul><li class="warning-highlight">Federal immigration agents engaged in "dangerous high-speed vehicular pursuits, extreme physical force, indiscriminate use of chemical agents, shootings, beatings, and other violent acts, amounting to unconstitutional uses of force."</li><li class="warning-highlight">Officials from ICE, CBP, DHS, and the White House "routinely lied to the public about the motivations and outcomes of Operation Midway Blitz and concealed and distorted key facts."</li><li class="warning-highlight">Federal agents conducted "discriminatory stops and unlawful warrantless arrests, creating widespread fear throughout the Chicago metropolitan area."</li><li class="warning-highlight">High-level White House, DHS, and other federal officials "enabled and encouraged misconduct" by urging agents to "go hard," defending incidents of use of force, and "lifting safeguards."</li></ul><p>The Commission sent referral letters to relevant law enforcement agencies recommending criminal and civil prosecution where it found reasonable cause that agents violated agency policy, state or federal criminal law, or individual human rights. The report recommended prohibiting roving patrols, ending warrantless arrests, halting paramilitary tactics, and requiring body-worn cameras for all agents.</p><blockquote class="warning-highlight">"The evidence led straight up to the White House. It started from the top with executive orders, went straight through federal agencies, and came all the way down to the streets of the city of Chicago." — Commission Vice Chair Patricia Brown Holmes</blockquote>`,
            source: `Capitol News Illinois / WTTW Chicago`,
            sourceUrl: "https://capitolnewsillinois.com/news/accountability-commission-refers-federal-agents-for-investigation-possible-prosecution-for-conduct-last-fall/",
            media: {
                type: "image",
                src: "images/2026-05-25-illinois-accountability-commission-illegal-and-vio.jpg",
                alt: `Illinois Accountability Commission: 'Illegal and Violent Conduct' in Operation Midway Blitz Final Report`,
                caption: `Capitol News Illinois / WTTW Chicago — April 30, 2026`
            }
        },
        {
            id: 46,
            date: `May 7, 2026`,
            year: 2026,
            category: "court",
            title: `D.C. Federal Judge Blocks ICE 'Lyons Memo' Arrest Standard, Citing Flawed Guidance Pushed to New Officers`,
            excerpt: `U.S. District Judge Beryl A. Howell of D.C. ordered ICE not to rely on a January 2026 memo by acting director Todd Lyons that had stripped community ties from the probable cause analysis for warrantless arrests — a memo that whistleblowers said was used to train new ICE officers and contradicted existing written training materials.`,
            content: `<p>On May 7, 2026, Judge Beryl A. Howell of the U.S. District Court for the District of Columbia granted plaintiffs' motion and ordered that federal agents could not rely on the 'Lyons memo' — a five-page January 2026 memo from acting ICE Director Todd Lyons — when conducting civil immigration arrests without a warrant in the District.</p><p class="warning-highlight">The ACLU and plaintiffs had presented evidence of dozens of arrests in which agents made no effort to assess community ties, and a supplemental brief showed that new ICE officers were being trained to follow the Lyons memo's guidance instead of written training materials that actually contradicted it.</p><blockquote class="warning-highlight">'The Lyons memo stripped community ties out of the probable cause analysis entirely, narrowed the meaning of escape risk past the breaking point, and handed agents a green light to arrest D.C. residents on sight.' — National Immigration Project attorney Yulie Landan</blockquote><ul><li>The ruling built on a preliminary injunction already in place and comprehensively rejected what advocates described as ICE's 'arrest first, ask questions later' policy in D.C.</li><li>The court found that 'ICE leadership took a federal statute and wrote a memo telling officers to ignore most of it.'</li><li class="warning-highlight">The Lyons memo had been in use nationally — not just in D.C. — raising questions about whether officers across the country were trained on legally deficient arrest standards.</li></ul>`,
            source: `ACLU of D.C.`,
            sourceUrl: "https://www.acludc.org/press-releases/federal-court-requires-trump-comply-warrantless-arrests/",
            media: {
                type: "image",
                src: "images/2026-05-11-dc-federal-judge-blocks-ice-lyons-memo-arrest-stan.png",
                alt: `D.C. Federal Judge Blocks ICE 'Lyons Memo' Arrest Standard, Citing Flawed Guidance Pushed to New Officers`,
                caption: `ACLU of D.C. — May 7, 2026`
            }
        },
        {
            id: 47,
            date: `May 5, 2026`,
            year: 2026,
            category: "court",
            title: `Rhode Island Federal Judge Orders Disciplinary Investigation After ICE Attorneys Concealed Murder Warrant`,
            excerpt: `U.S. District Judge Melissa DuBose referred ICE attorneys to the full court for a disciplinary investigation after discovering that federal immigration officials had instructed lawyers to withhold from the court an outstanding murder warrant for a detainee — a case that exposed another layer of ICE misconduct and non-transparency.`,
            content: `<p>On May 5, 2026, U.S. District Court Judge Melissa DuBose in Rhode Island announced she was referring the matter of ICE's conduct to the full court for review by a magistrate judge or special master after finding that federal immigration officials had instructed attorneys to withhold information about a 2023 Dominican Republic homicide arrest warrant for a detainee.</p><p class="warning-highlight">The judge had previously released the detainee, Bryan Rafael Gomez, on a habeas petition — unaware of the outstanding warrant because ICE officials had deliberately concealed it from the court. DuBose cited the Trump administration's 'lack of candor' as warranting formal disciplinary inquiry.</p><ul><li>DHS had publicly attacked Judge DuBose as an 'activist judge' for releasing Gomez, even though it was ICE that withheld the information that would have kept him detained.</li><li>DHS later admitted to the court that it had not disclosed the murder warrant — contradicting its own public messaging that blamed the judge.</li><li class="warning-highlight">The case is part of a broader pattern in which ICE has been found to have misled federal courts — including the February 2026 admission that two ICE agents lied under oath in the Minneapolis shooting case.</li><li>ICE subsequently failed to re-detain Gomez by the court's deadline, and as of May 8, 2026, the agency reported it could not locate him.</li></ul>`,
            source: `Rhode Island Current`,
            sourceUrl: "https://rhodeislandcurrent.com/2026/05/05/ri-federal-judge-orders-investigation-after-ice-failed-to-disclose-mans-murder-warrant/",
            media: {
                type: "image",
                src: "images/2026-05-11-rhode-island-federal-judge-orders-disciplinary-inv.jpg",
                alt: `Rhode Island Federal Judge Orders Disciplinary Investigation After ICE Attorneys Concealed Murder Warrant`,
                caption: `Rhode Island Current — May 5, 2026`
            }
        },
        {
            id: 48,
            date: `May 1, 2026`,
            year: 2026,
            category: "court",
            title: `Trump-Appointed Federal Judge (EDNY): ICE Arrest Practices Are 'Perversion of Customary Law Enforcement'`,
            excerpt: `U.S. District Judge Gary Brown, a Trump appointee in the Eastern District of New York, ruled that testimony from three ICE agents about Long Island arrests demonstrated that 'arrest and detention practices deployed by ICE constitute a perversion of customary law enforcement practices in America.' He ordered ICE to file a plan ensuring future lawful enforcement.`,
            content: `<p>In a ruling published in March 2026 and reported publicly in May 2026, U.S. District Judge Gary Brown — appointed to the Eastern District of New York by President Trump during his first term — delivered a withering assessment of ICE training following testimony from three federal agents about arrests they made on Long Island.</p><blockquote class="warning-highlight">'Collectively, the officers' testimony illustrates that arrest and detention practices deployed by ICE constitute a perversion of customary law enforcement practices in America.' — Judge Gary Brown, EDNY</blockquote><p class="warning-highlight">Former ICE whistleblower Schwank, commenting on the ruling, said: 'If they don't know they can't do something, then they're more likely to do it. And if these officers don't know things like who is or is not amenable to an arrest, that's a strong indicator that they don't know what the limits are on their arrest authority.'</p><ul><li>Brown ordered the government to file a response within 21 days 'identifying the steps that will be taken to ensure that future ICE enforcement actions within the Eastern District of New York shall be conducted in a lawful manner.'</li><li>One of the arrested individuals had Special Immigrant Juvenile status and deferred action — suggesting agents were unaware of categories of individuals protected from removal.</li><li>A former ICE trainer who reviewed the testimony told Spectrum News NY1: 'They needed a refresher class. Had they had that, it may have changed how this went down.'</li></ul>`,
            source: `Spectrum News NY1`,
            sourceUrl: "https://spectrumlocalnews.com/nys/central-ny/news/2026/05/01/ny1-exclusive--former-ice-trainer-says-local-agents-need-more-training-when-testifying-in-arrests",
            media: {
                type: "image",
                src: "images/2026-05-11-trump-appointed-federal-judge-edny-ice-arrest-prac.jpg",
                alt: `Trump-Appointed Federal Judge (EDNY): ICE Arrest Practices Are 'Perversion of Customary Law Enforcement'`,
                caption: `Spectrum News NY1 — May 1, 2026`
            }
        },
        {
            id: 49,
            date: `May 2, 2026`,
            year: 2026,
            category: "incident",
            title: `CBS News: ICE Reports 18th Detainee Death in 4 Months, on Track for All-Time High`,
            excerpt: `ICE reported its 18th detainee death of 2026 after a 33-year-old Cuban man was found unresponsive at the Stewart Detention Center in Georgia, putting the agency on pace to surpass both the prior-year record and the all-time high set in 2004.`,
            content: `<p>On approximately May 2, 2026, ICE notified Congress and issued a public statement reporting the death of Denny Adan Gonzalez, 33, a Cuban national who was found unresponsive in his cell at the privately-operated Stewart Detention Center in Lumpkin, Georgia. The agency described the suspected cause as suicide and said its investigation was ongoing.</p><ul><li class="warning-highlight">The death was the 18th in ICE detention in the first four months of 2026, compared to 31 for all of 2025 — itself a two-decade high — and the all-time record of 32 set in 2004.</li><li class="warning-highlight">A CBS News analysis found that 2025 had the highest death rate — 5.6 per 10,000 detainees — since the COVID-19 pandemic year of 2020.</li><li>At the time, ICE held approximately 60,000 detainees — higher than under any prior administration — down from a peak of more than 70,000 earlier in 2026.</li><li>Deaths in 2026 included an Afghan refugee who had worked with U.S. military forces and a Mexican teenager.</li><li class="warning-highlight">Reports throughout the year documented overcrowding, inadequate medical care, and insufficient food at numerous facilities, with DHS and its contractors declining to release medical staffing data to lawmakers, investigators, or the press.</li></ul>`,
            source: `CBS News`,
            sourceUrl: "https://www.cbsnews.com/news/ice-detainee-deaths-2026/",
            media: {
                type: "image",
                src: "images/2026-05-25-cbs-news-ice-reports-18th-detainee-death-in-4-mont.jpg",
                alt: `CBS News: ICE Reports 18th Detainee Death in 4 Months, on Track for All-Time High`,
                caption: `CBS News — May 2, 2026`
            }
        },
        {
            id: 50,
            date: `May 15, 2026`,
            year: 2026,
            category: "investigation",
            title: `CNN Investigation: Medical Understaffing and DHS Policy Drive Record ICE Detention Deaths`,
            excerpt: `A CNN investigation reviewing autopsies, court records, and interviews found that deaths linked to substandard care and understaffing in ICE facilities have become systemic, with medical staff counts at some facilities failing to rise even as detainee populations surged above planned capacity.`,
            content: `<p>On May 15, 2026, CNN published a major investigation finding that nearly 50 people had died in ICE detention since January 2025, with 2026 on track to surpass all prior records. CNN reviewed autopsy reports, court records, and interviews with detainees and experts, identifying more than a dozen deaths that better care could potentially have prevented.</p><p class="warning-highlight">Key findings:</p><ul><li class="warning-highlight">Deadly outcomes in more than a dozen cases could be linked, in part, to "substandard treatment by at-times understaffed medical teams dealing with escalating detainee populations."</li><li class="warning-highlight">Even as Trump administration policies swelled detainee populations above planned capacity limits at some facilities, medical staffing numbers did not rise in some key ICE detention centers.</li><li class="warning-highlight">At the Adelanto ICE Processing Center in California, which held more than 2,000 detainees in July 2025, fewer physicians and advanced practitioners worked there than in February 2021, when it held fewer than 100 detainees.</li><li class="warning-highlight">A California attorney general's report shared exclusively with CNN found "crisis-level health care understaffing" at another detention facility, with medical staff routinely failing to conduct required health screenings.</li><li class="warning-highlight">DHS and the two largest private contractors, GEO Group and CoreCivic, declined CNN's requests for medical staffing figures.</li></ul><p>CNN obtained county medical examiner reports for the vast majority of deaths since early 2025 with assistance from the Project on Government Oversight (POGO) and the American University Investigative Reporting Workshop.</p>`,
            source: "CNN",
            sourceUrl: "https://www.cnn.com/2026/05/15/us/ice-immigration-detention-centers-medical-care-deaths-invs-vis",
            mediaType: "video",
            mediaPlaceholder: `CNN video report following family of Jose Ramos, who died at Adelanto ICE Processing Facility`
        },
        {
            id: 51,
            date: `May 12, 2026`,
            year: 2026,
            category: "court",
            title: `Colorado Federal Judge Orders ICE to Retrain All Arresting Officers Within 45 Days`,
            excerpt: `Senior U.S. District Judge R. Brooke Jackson issued a 60-page enforcement order finding that Colorado ICE officers 'materially violated' his preliminary injunction by continuing unlawful warrantless arrests, and ordered the agency to develop new compliance training within two weeks and complete agent retraining within 45 days.`,
            content: `<p>On May 12, 2026, Senior U.S. District Judge R. Brooke Jackson in Denver issued a 60-page enforcement order finding that ICE had demonstrated "material noncompliance" with his November 2025 preliminary injunction barring warrantless arrests in Colorado without a probable-cause flight-risk determination.</p><p class="warning-highlight">Key findings and orders:</p><ul><li class="warning-highlight">At hearings earlier in 2026, Colorado ICE officers and supervisors testified that they "didn't really read their emails, they didn't really understand all of the rules in making warrantless arrests, and that generally they were unaware of what was required of them."</li><li class="warning-highlight">The Denver ICE field office assistant director testified that the office had hired "dozens of new officers recently" and was making 15–25 arrests per day even as training hours had been cut.</li><li class="warning-highlight">Jackson found ICE's efforts to train agents on the preliminary injunction "have been insufficient" and that deportation officers have "an inadequate understanding of their obligations."</li><li>ICE must develop a compliant training program within two weeks and train every officer authorized to make warrantless arrests in Colorado within 45 days; officers not trained within that window are prohibited from making warrantless arrests.</li><li>Any ICE agents hired after May 12, 2026 cannot make warrantless arrests until completing the required training.</li><li>ICE must monthly provide plaintiffs' counsel with a list of trained officers, all training materials, and a list of people arrested without a warrant.</li></ul><blockquote class="warning-highlight">"The court made clear that ICE is not above the law and cannot continue to violate the law." — Tim Macdonald, Legal Director, ACLU of Colorado</blockquote>`,
            source: `The Colorado Sun / CPR News / ACLU of Colorado`,
            sourceUrl: "https://coloradosun.com/2026/05/12/ice-must-retrain-arresting-officers-in-colorado-federal-judge-rules/",
            mediaType: "document",
            mediaPlaceholder: `60-page court order and footage of federal courthouse in Denver`
        },
        {
            id: 52,
            date: `May 18, 2026`,
            year: 2026,
            category: "incident",
            title: `Minnesota Prosecutors Charge ICE Agent Christian Castro with Assault and Filing False Report`,
            excerpt: `Hennepin County prosecutors charged ICE agent Christian Castro, 52, with four felony counts of second-degree assault and one count of falsely reporting a crime in connection with the January 14, 2026 shooting of Venezuelan immigrant Julio Cesar Sosa-Celis — making Castro the second ICE agent charged by Minnesota officials since Operation Metro Surge.`,
            content: `<p>On May 18, 2026, Hennepin County Attorney Mary Moriarty announced that ICE agent Christian J. Castro, 52, had been charged with four felony counts of second-degree assault with a dangerous weapon and one misdemeanor count of falsely reporting a crime in connection with the January 14, 2026 shooting of Julio Cesar Sosa-Celis in north Minneapolis.</p><p class="warning-highlight">Key facts of the case:</p><ul><li class="warning-highlight">The false-reporting charge stems from Castro's sworn account that Sosa-Celis and Alfredo Aljorna had attacked him with a broom handle and snow shovel before he fired. Federal prosecutors later dropped all assault charges against Sosa-Celis and Aljorna after determining the evidence was "materially inconsistent with the allegations."</li><li class="warning-highlight">ICE itself opened a criminal probe in February 2026 into whether two officers — including Castro — had lied under oath about the shooting.</li><li>Castro is the second ICE agent to be charged by Minnesota prosecutors; the first was Gregory Donnell Morgan Jr., charged in April 2026 for allegedly brandishing his service weapon at two civilians in an off-duty road rage incident.</li><li class="warning-highlight">Moriarty noted that state investigations into the fatal shootings of Renee Good and Alex Pretti remained active, but that federal non-cooperation, including denial of access to evidence, had significantly hindered progress.</li></ul><blockquote class="warning-highlight">"Mr. Castro is an ICE agent, but his federal badge does not make him immune from state charges for his criminal conduct in Minnesota." — Hennepin County Attorney Mary Moriarty</blockquote>`,
            source: `US News / Reuters / Government Executive`,
            sourceUrl: "https://www.usnews.com/news/world/articles/2026-05-18/minnesota-officials-charge-ice-agent-in-shooting-of-venezuelan-immigrant",
            mediaType: "document",
            mediaPlaceholder: `Press conference footage and charging documents showing criminal complaint against ICE agent Christian Castro`
        },
        {
            id: 53,
            date: `May 12, 2026`,
            year: 2026,
            category: "court",
            title: `Federal Judge Orders ICE to Retrain All Colorado Arresting Officers Within Two Weeks`,
            excerpt: `U.S. District Judge R. Brooke Jackson issued a 60-page ruling finding that ICE agents in Colorado were violating his prior court order by conducting warrantless arrests without proper flight-risk assessments. He ordered mandatory retraining of all ICE arresting officers in the state.`,
            content: `<p>On May 12, 2026, Senior U.S. District Judge R. Brooke Jackson in Denver issued a 60-page ruling ordering ICE to develop mandatory training for all officers conducting arrests in Colorado within two weeks. The ruling found agents had been violating his prior injunction.</p><p class="warning-highlight">At a March 2026 hearing, ICE agents admitted they had not been trained on how to comply with the judge's earlier order. Jackson's ruling found agents were conducting warrantless arrests without completing required flight-risk assessments and without proper documentation — including grabbing individuals simply because they were speaking Spanish near other suspected immigrants.</p><ul><li>Every ICE officer conducting arrests in Colorado would be required to complete training on the court's order within a specified timeframe.</li><li>ICE was also ordered to improve documentation of warrantless arrests and turn over more records to defense attorneys.</li><li>The court ordered ICE to pay plaintiffs' legal fees.</li><li>Jackson said he was not trying to 'parse' the law, but rather 'just trying to get ICE to follow their own rules.'</li><li>The case originated with plaintiffs including a 19-year-old Utah college student who had been arrested by ICE without a warrant in a traffic stop.</li></ul><blockquote>"Federal immigration agents are violating a court order limiting how they can arrest people." — Colorado Sun</blockquote>`,
            source: `Colorado Public Radio / Colorado Sun`,
            sourceUrl: "https://www.cpr.org/2026/05/12/immigration-ice-judge-orders-more-training-warrentless-arrests/",
            mediaType: "document",
            mediaPlaceholder: `60-page court ruling ordering ICE retraining of Colorado arresting officers`
        },
        {
            id: 54,
            date: `May 18, 2026`,
            year: 2026,
            category: "incident",
            title: `ICE Agent Christian Castro Criminally Charged and Arrested for Minneapolis Shooting`,
            excerpt: `Hennepin County prosecutors charged ICE agent Christian Castro with four counts of second-degree assault and one count of falsely reporting a crime in connection with the January 14 shooting of Venezuelan immigrant Julio Sosa-Celis. City surveillance video disproved Castro's account that he was attacked with a shovel.`,
            content: `<p>On May 18, 2026, Hennepin County Attorney Mary Moriarty announced criminal charges against ICE agent Christian Castro in connection with the January 14, 2026 shooting of Julio Sosa-Celis at his Minneapolis home. Castro was charged with four counts of second-degree assault and one count of falsely reporting a crime. A nationwide arrest warrant was issued; he was arrested in Texas on May 29.</p><p class="warning-highlight">City surveillance video showed the entire nine-minute incident and directly contradicted Castro's account to supervisors that Sosa-Celis and his cousin attacked him with a broom and shovel for three minutes. The video showed the shovel was dropped immediately, no one struck Castro, and the struggle lasted approximately 12 seconds before Castro fired one shot through the front door of the home, striking Sosa-Celis in the leg. Four adults and two children were inside at the time of the shooting.</p><ul><li>ICE agents deployed tear gas after the shooting, entered the home without a warrant, and detained all four adults. Paramedics were not allowed to treat Sosa-Celis for nearly an hour.</li><li>DHS called Castro's state arrest 'unlawful' and 'a political stunt,' insisting the matter belonged in federal court.</li><li>Castro is one of at least two federal immigration officers charged with state crimes stemming from the Minneapolis crackdown.</li><li>Minnesota AG Keith Ellison stated: 'Nobody is above the law, including agents of the federal government.'</li></ul>`,
            source: `CNN / Washington Post / MPR News`,
            sourceUrl: "https://www.cnn.com/2026/05/18/us/ice-agent-charged-minneapolis-shooting",
            mediaType: "image",
            mediaPlaceholder: `Booking photo of ICE agent Christian Castro and Hennepin County press conference announcing charges`
        },
        {
            id: 55,
            date: `May 2026`,
            year: 2026,
            category: "watchdog",
            title: `OIG Unannounced Inspection Finds Violations at ICE Washington Field Office, Chantilly VA`,
            excerpt: `The DHS Office of Inspector General released report OIG-26-07 following an unannounced inspection of the ICE Washington Field Office holding facility in Chantilly, Virginia — a non-detention office that had been used to hold dozens of migrants for days under overcrowded conditions since 2025.`,
            content: `<p>The DHS Office of Inspector General published report <strong>OIG-26-07</strong> in May 2026 documenting an unannounced inspection of the ICE Washington Field Office holding facility in Chantilly, Virginia.</p><p>The Chantilly facility — an office-park-style processing center with no beds — had drawn intense scrutiny since August 2025, when attorneys and advocates reported:</p><ul><li class="warning-highlight">Up to 80–100 detainees held in a single room for seven or more days at a time, well beyond the three-day limit.</li><li class="warning-highlight">Detainees denied access to attorneys and, in some cases, medical care and basic hygiene for multiple days.</li><li class="warning-highlight">One meal per day — a single burrito — provided to some detainees.</li></ul><p>The OIG inspection report (OIG-26-07) represents the federal watchdog's formal written findings on conditions at the facility. The report was issued during a period when the OIG had acknowledged a lapse in appropriations covering approximately 60% of FY 2026, potentially delaying routine oversight reporting. The inspection follows a pattern of OIG unannounced inspections at ICE holding facilities that have repeatedly documented overcrowding and standards violations during the surge in immigration enforcement operations.</p>`,
            source: `DHS Office of Inspector General`,
            sourceUrl: "https://www.oig.dhs.gov/sites/default/files/assets/2026-06/OIG-26-07-May26.pdf",
            mediaType: "document",
            mediaPlaceholder: `OIG-26-07 report cover page showing inspection findings for Chantilly holding facility`
        },
        {
            id: 56,
            date: `June 3, 2026`,
            year: 2026,
            category: "policy",
            title: `DHS Secretary Mullin Announces ICE Training Restored to 72 Days Starting July 1`,
            excerpt: `DHS Secretary Markwayne Mullin told Congress on June 3, 2026 that ICE would restore officer training from 42 days back to the standard 72-day program beginning July 1, 2026, reversing a Noem-era decision that had drawn bipartisan criticism and multiple whistleblower disclosures.`,
            content: `<p>On June 3, 2026, DHS Secretary Markwayne Mullin testified before the House Committee on Homeland Security and announced that ICE would restore its standard 72-day training program for new officers beginning July 1, 2026, reversing the accelerated 42-day program implemented under former Secretary Kristi Noem.</p><p>Mullin acknowledged the curriculum had to be rewritten and stated: 'All training starting July 1st will be back up to the regular standards.'</p><p class="warning-highlight">The announcement came amid sustained bipartisan congressional pressure and multiple whistleblower disclosures showing training had dropped from 72 to 42 days and that multiple use-of-force courses had been removed. A CBS News analysis of internal documents obtained by whistleblowers showed that within seven months, training dropped from 72 to 42 days, with numerous use-of-force courses eliminated. The documents also appeared to directly contradict sworn testimony to Congress by then-Acting ICE Director Todd Lyons, who denied cuts had been made.</p><ul><li>Whistleblower Ryan Schwank had testified in February 2026 that the truncated program was 'deficient, defective, and broken.'</li><li>Mullin simultaneously announced cancellation of most pending contracts initiated under Noem, following an internal watchdog review.</li><li>The secretary did not acknowledge or explain why the training had been shortened in the first place.</li><li>DHS OIG confirmed it had multiple active investigations still open, though Mullin said he had not been briefed on their details.</li></ul>`,
            source: `Spectrum News / Reuters / Washington Times`,
            sourceUrl: "https://spectrumlocalnews.com/us/snplus/politics/2026/06/04/homeland-security-secretary-mark-wayne-mullin-says-ice-will-increase-new-officer-training-next-monthhomela",
            media: {
                type: "image",
                src: "images/2026-06-08-dhs-secretary-mullin-announces-ice-training-restor.jpg",
                alt: `DHS Secretary Mullin Announces ICE Training Restored to 72 Days Starting July 1`,
                caption: `Spectrum News / Reuters / Washington Times — June 3, 2026`
            }
        },
        {
            id: 57,
            date: `June 2, 2026`,
            year: 2026,
            category: "watchdog",
            title: `DHS OIG Report: Winn Correctional Found Banned Chokeholds, Medical Failures`,
            excerpt: `A DHS Office of Inspector General report from an unannounced March 2025 inspection of Winn Correctional Center in Louisiana found violations of use-of-force policies — including an officer who applied a banned chokehold on a detainee and another who stabbed a detainee's thumb with a pen — along with serious medical record failures and unsanitary conditions. The report was published just two days before a second detainee death at the same facility in 2026.`,
            content: `<p>On June 2, 2026, DHS OIG published report OIG-26-08, the result of an unannounced inspection of Winn Correctional Center in Winnfield, Louisiana, conducted from March 4–6, 2025. At the time of inspection, the facility held 1,576 male detainees at its contractual maximum.</p><ul><li class="warning-highlight">The inspection found violations of use-of-force policies, including an officer who put a detainee in a banned chokehold and a second officer who stabbed a detainee's thumb with a pen after the detainee refused to comply with an order.</li><li class="warning-highlight">Medical staff failed to keep updated treatment documents and laboratory testing records, which OIG warned could "negatively impact detainee health care and safety."</li><li>Environmental deficiencies included water leaking through vents in the kitchen, holes and exposed insulation in the intake building, and food stored in freezers above required temperatures.</li><li>The report was published just two days before Mamuka Artmeladze, a 43-year-old Georgian national with no criminal record, was found unresponsive and died at the same facility on June 4, 2026.</li></ul><p>A DHS spokesperson responded by claiming the report demonstrated the facility's compliance with detention standards, despite the documented excessive-force incidents and medical failures.</p>`,
            source: `Washington Times / Associated Press`,
            sourceUrl: "https://www.washingtontimes.com/news/2026/jun/8/ice-facility-louisiana-reports-second-detainee-death-less-2-months/",
            mediaType: "document",
            mediaPlaceholder: `DHS OIG inspection report OIG-26-08 cover page and aerial photo of Winn Correctional Center`
        },
        {
            id: 58,
            date: `June 5, 2026`,
            year: 2026,
            category: "policy",
            title: `ICE Eliminates Rule Requiring Reporting of Detainee Deaths After Release`,
            excerpt: `Acting ICE Director David Venturella issued an internal memo ending the agency's requirement to report deaths occurring within 30 days of a detainee's release from custody — reversing a 2021 transparency safeguard designed to prevent ICE from avoiding accountability by discharging critically ill detainees just before death. Health experts warned the change creates a critical oversight blind spot as in-custody deaths hit a two-decade high.`,
            content: `<p>On June 4–5, 2026, Acting ICE Director David Venturella issued an internal memo and confirmed in public statements that ICE was eliminating its requirement to report deaths occurring within 30 days of a detainee's release from custody.</p><ul><li class="warning-highlight">The change reversed a 2021 policy specifically designed to stop ICE from shedding accountability for critically ill detainees by discharging them just before death.</li><li class="warning-highlight">Critics warned the new policy would allow ICE to release imminently dying detainees without investigation and remove a key mechanism for Congress, watchdogs, medical experts, and attorneys to identify failures in detention medical care.</li><li>The rollback came as ICE had already logged 18 fatalities in the first five months of 2026, putting the year on pace to set an all-time record for in-custody deaths.</li><li>Dr. Homer Venters, former chief medical officer of the New York City jail system, stated: "Tracking deaths immediately after custody is a standard approach that allows health systems in jails, prisons and immigration detention to learn about gaps in care."</li></ul><p>An ACLU senior policy counsel noted that even before this change, ICE death reports lacked specific cause-of-death information and centered on the detainee's criminal history rather than medical circumstances.</p>`,
            source: `NBC News / Associated Press`,
            sourceUrl: "https://www.nbcnews.com/news/us-news/ice-will-no-longer-report-deaths-detainees-recently-released-custody-rcna348719",
            media: {
                type: "image",
                src: "images/2026-06-15-ice-eliminates-rule-requiring-reporting-of-detaine.jpg",
                alt: `ICE Eliminates Rule Requiring Reporting of Detainee Deaths After Release`,
                caption: `NBC News / Associated Press — June 5, 2026`
            }
        },
        {
            id: 59,
            date: `June 25, 2026`,
            year: 2026,
            category: "watchdog",
            title: `DHS OIG Launches New Reviews of ICE Detainee Deaths and Use of Force in Facilities`,
            excerpt: `The DHS Inspector General announced two new oversight reviews: one examining systemic factors contributing to ICE detainee deaths from October 2021 through March 2026, and a second evaluating whether detention facilities comply with use-of-force standards — prompted in part by documented violations including a prohibited chokehold.`,
            content: `<p>The DHS Office of Inspector General announced on approximately June 25, 2026 the launch of two new oversight reviews focused on ICE detention, prompted by the record-high death rate and documented use-of-force violations in detention facilities.</p><ul><li>The first review will examine "whether systemic factors, policies, or processes contributed to detainee deaths" in ICE custody from October 1, 2021 through March 31, 2026. The OIG letter to acting ICE Director Venturella cited the increase in detainee deaths each year since 2022.</li><li class="warning-highlight">The second review will evaluate the use of force against ICE detainees in detention facilities to determine whether facilities comply with applicable use-of-force standards and policies.</li><li class="warning-highlight">The new use-of-force review follows a recent DHS OIG report that described two violations of use of force at a Louisiana detention facility: a prohibited chokehold and a guard's use of a pen to stab a detainee who would not close a cell door.</li><li>As of the announcement, there had been 20 deaths in ICE detention in 2026 and 33 in all of 2025 — a dramatic increase from 11 in 2024.</li><li>DHS disputed the figures, with a spokesperson stating "there has been NO spike in deaths" and DHS Secretary Mullin claiming ICE detainees were less likely to die than people in an Illinois state prison.</li></ul><p class="warning-highlight">The OIG noted that its appropriations had lapsed for approximately 60% of FY2026, causing delays in oversight work. The announcement follows DHS's concurrent elimination of the 30-day post-release death reporting requirement, which critics say will further impair the OIG's ability to assess the full scope of detention mortality.</p>`,
            source: `NBC News`,
            sourceUrl: "https://www.nbcnews.com/politics/immigration/dhs-watchdog-announces-new-ice-reviews-rcna351729",
            media: {
                type: "image",
                src: "images/2026-06-29-dhs-oig-launches-new-reviews-of-ice-detainee-death.jpg",
                alt: `DHS OIG Launches New Reviews of ICE Detainee Deaths and Use of Force in Facilities`,
                caption: `NBC News — June 25, 2026`
            }
        },
        {
            id: 60,
            date: `June 25, 2026`,
            year: 2026,
            category: "watchdog",
            title: `HRW/PHR Report: 52 ICE Custody Deaths in 500 Days; Mortality Rate Highest in 20 Years`,
            excerpt: `A joint report by Human Rights Watch and Physicians for Human Rights found that 52 people died in ICE custody in the first 500 days of Trump's second term — a mortality rate more than double the prior administration's, nearly four times the Biden rate, and higher than during the COVID-19 pandemic.`,
            content: `<p>On June 25, 2026, Human Rights Watch and Physicians for Human Rights jointly released "Dying in Detention: Rising Deaths in an Expanding US Immigration Detention System," a 73-page report documenting a mortality crisis in ICE custody.</p><ul><li class="warning-highlight">52 people died in ICE custody between January 20, 2025 and June 4, 2026 — a mortality rate at its highest level in over a decade, more than double that of Trump's first term and nearly four times that of the Biden administration.</li><li class="warning-highlight">Deaths increased at a rate disproportionate to the growth in detained population: the detained population grew 77% (from ~40,000 to ~71,000), but the mortality rate rose 140%.</li><li class="warning-highlight">Seven people died by apparent suicide from January 20, 2025 to January 19, 2026, compared to just one reported death by suicide in all of 2024. PHR found that the government may be failing to adequately respond to suicide risk.</li><li>PHR found that in all 39 cases reviewed from the first year of the administration, the government failed to publicly provide sufficient medical information to support a definitive clinical assessment of the death.</li><li class="warning-highlight">The report states: "ICE so severely limits the information it provides to Congress, families, and the public that oversight is nearly impossible," according to PHR co-author Dr. Katherine Peeler of Harvard Medical School.</li><li>The increase in the mortality rate comes as the Trump administration gutted internal oversight mechanisms while subjecting record numbers of immigrants to mandatory detention in conditions described as inhuman and degrading.</li></ul><p>The report called on Congress to establish new independent oversight mechanisms with real enforcement authority, including mandatory independent investigations of every in-custody death and public disclosure of all death reviews and autopsy reports.</p>`,
            source: `Human Rights Watch / Physicians for Human Rights`,
            sourceUrl: "https://www.hrw.org/report/2026/06/25/dying-in-detention/rising-deaths-in-an-expanding-us-immigration-detention-system",
            media: {
                type: "image",
                src: "images/2026-06-29-hrwphr-report-52-ice-custody-deaths-in-500-days-mo.jpg",
                alt: `Detainees stand by a window inside the federal immigration center at Delaney Hall`,
                caption: `Human Rights Watch / Physicians for Human Rights — June 25, 2026`
            }
        },
        {
            id: 61,
            date: `June 10, 2026`,
            year: 2026,
            category: "policy",
            title: `ICE Scraps 42-Day Training, Mandates Supplemental Program for Officers Already in Field`,
            excerpt: `An internal ICE memo obtained by CBS News revealed the agency extended new-officer training to approximately 71 days and ordered all officers who graduated under the shortened 42-day program to complete a new 'Advanced Field Officer Training Program,' conceding months of inadequate preparation.`,
            content: `<p>On June 10, 2026, CBS News reported on an internal ICE memo confirming that the agency had scrapped its controversial 42-day training program and extended the curriculum to approximately 71 days for new classes starting in July at the Federal Law Enforcement Training Center in Georgia.</p><ul><li class="warning-highlight">Officers who had already graduated under the shortened 42-day process were ordered to complete additional "follow-on" instruction called the Advanced Field Officer Training Program. The memo did not specify the length or content of this supplemental training.</li><li>The changes follow months of bipartisan concern and a February 2026 whistleblower complaint by former ICE instructor Ryan Schwank, who testified to Congress that the training program was "deficient, defective, and broken."</li><li>The revamp was previewed by newly installed DHS Secretary Markwayne Mullin, who told the Senate Appropriations Committee on June 2 that training would be modified to include crowd control.</li><li>The shortened 42-day training had been adopted under former DHS Secretary Kristi Noem as ICE rushed to onboard 10,000 new deportation agents. DHS confirmed to CBS News that the prior training had been cut from 72 to 42 days within a 7-month span.</li></ul><p class="warning-highlight">The move was widely interpreted as an implicit acknowledgment that the administration's rapid hiring surge had deployed inadequately trained officers into the field, contributing to the pattern of use-of-force incidents and constitutional violations documented throughout early 2026.</p>`,
            source: `CBS News`,
            sourceUrl: "https://www.cbsnews.com/news/ice-training-new-hires-backlash/",
            media: {
                type: "image",
                src: "images/2026-06-29-ice-scraps-42-day-training-mandates-supplemental-p.jpg",
                alt: `ICE Scraps 42-Day Training, Mandates Supplemental Program for Officers Already in Field`,
                caption: `CBS News — June 10, 2026`
            }
        },
        {
            id: 62,
            date: `June 25, 2026`,
            year: 2026,
            category: "watchdog",
            title: `OIG Reports Use-of-Force Violations at Louisiana ICE Facility Including Prohibited Chokehold`,
            excerpt: `A DHS Inspector General report on the Winn Correctional Center in Louisiana found documented use-of-force violations at the ICE detention facility, including a prohibited chokehold and a guard's use of a pen to stab a detainee — findings that directly prompted the OIG to announce a broader national use-of-force review.`,
            content: `<p>The DHS Office of Inspector General released a report (OIG-26-08) documenting findings from an inspection of ICE operations at the Winn Correctional Center in Winnfield, Louisiana, including multiple use-of-force violations.</p><ul><li class="warning-highlight">The OIG report documented a prohibited chokehold applied by detention staff against a detainee — a technique explicitly banned under ICE detention standards.</li><li class="warning-highlight">The report also described a guard using a pen to stab a detainee who would not close a cell door — a clear violation of use-of-force policy and a potential assault.</li><li>The findings directly prompted the DHS Inspector General to announce a broader national review of use-of-force compliance across all ICE detention facilities.</li><li>The Winn Correctional Center had also recorded a detainee death in June 2026: Mamuka Artmeladze, a 43-year-old Georgian national, was found unresponsive at the facility and died on June 4.</li></ul><p class="warning-highlight">The OIG noted that its funding lapsed for approximately 60% of FY2026, delaying routine and regular reporting. The use-of-force violations documented at Winn are consistent with a nationwide pattern identified by ProPublica, the ACLU, and congressional investigators since early 2026.</p>`,
            source: `DHS Office of Inspector General`,
            sourceUrl: "https://www.oig.dhs.gov/sites/default/files/assets/2026-06/OIG-26-08-Jun26.pdf",
            mediaType: "document",
            mediaPlaceholder: `DHS OIG report cover page for the Winn Correctional Center inspection findings (OIG-26-08)`
        },
        {
            id: 63,
            date: `June 18, 2026`,
            year: 2026,
            category: "investigation",
            title: `HRW '180-Page Manufactured Crisis' Report: Operation Metro Surge Caused Human Rights Crisis`,
            excerpt: `Human Rights Watch released a comprehensive 180-page report documenting how Operation Metro Surge in Minnesota caused widespread human rights violations, including two unlawful killings, racial profiling, and hundreds of unjustified arrests — with over 75% of detainees having no criminal history.`,
            content: `<p>On June 18, 2026, Human Rights Watch released "'A Manufactured Crisis': Minnesota Communities Terrorized by the Federal Government," a 180-page report documenting the human rights impact of the Trump administration's Operation Metro Surge, the largest interior deployment of immigration agents in U.S. history.</p><ul><li class="warning-highlight">HRW documented that federal officers unlawfully killed two people — U.S. citizens Renee Good and Alex Pretti — injured others, and made hundreds of unlawful arrests during the December 2025–March 2026 operation.</li><li class="warning-highlight">Of roughly 4,000 immigrants detained during the operation, over 75% had no criminal history, contradicting the administration's repeated claims that agents were targeting the "worst of the worst."</li><li class="warning-highlight">In January alone, the arrest rate for those without prior removal orders dropped to 19% — down from 37–39% under the Biden administration — consistent with testimony that agents stopped people based on race, ethnicity, and spoken language.</li><li>Of 532 habeas corpus cases resolved through the courts between December and mid-May, 466 resulted in orders for release, indicating the vast majority of arrests were legally unjustified.</li><li>HRW interviewed 136 people including immigrants, lawyers, healthcare providers, educators, and current and former government officials. Researchers analyzed 52 confirmed videos and photos, sworn declarations, judicial decisions, and government data.</li><li>The report found that untrained ICE officers used sticky notes to designate which cells held U.S. citizens versus immigrant detainees, according to National Lawyers Guild observers.</li></ul><p class="warning-highlight">HRW called for federal leaders to be investigated for creating a human rights crisis and urged Congress to overhaul DHS oversight mechanisms, ban racial profiling, and prohibit agents from wearing face coverings during operations.</p>`,
            source: `Human Rights Watch`,
            sourceUrl: "https://www.hrw.org/report/2026/06/18/a-manufactured-crisis/minnesota-communities-terrorized-by-the-federal-government",
            media: {
                type: "image",
                src: "images/2026-06-29-hrw-180-page-manufactured-crisis-report-operation.jpg",
                alt: `A protester sits on the street with his arms up in front of federal agents and Minneapolis Police`,
                caption: `Human Rights Watch — June 18, 2026`
            }
        },
        {
            id: 64,
            date: `July 9, 2026`,
            year: 2026,
            category: "incident",
            title: `Harris County ME Rules Houston ICE Shooting a Homicide; DHS Admits Wrong Man Killed`,
            excerpt: `The Harris County Medical Examiner ruled Lorenzo Salgado Araujo's death a homicide, listing cause of death as a penetrating gunshot wound to the torso. DHS separately acknowledged that Salgado Araujo had not been the intended target of the enforcement operation.`,
            content: `<p>Two days after the July 7, 2026 shooting, the Harris County Medical Examiner's Office ruled the manner of death of Lorenzo Salgado Araujo a homicide, with the cause listed as a "penetrating gunshot wound of the torso." The medical examiner's finding is a manner-of-death classification, not a legal or criminal verdict.</p><p class="warning-highlight">DHS officials subsequently confirmed to Congress and the press that Salgado Araujo was not the intended target of the operation. The ICE agents had been surveilling an address looking for two Guatemalan nationals and stopped Salgado Araujo's van because an occupant "resembled the target." Witnesses inside the van directly disputed the federal account that Salgado Araujo rammed officers. No body cameras were present, leaving no official video record of the shooting itself.</p><ul><li>Harris County District Attorney Sean Teare opened a parallel review and asked the public for photos, video, and eyewitness accounts.</li><li>Houston Mayor John Whitmire and several city council members called for a transparent federal investigation.</li><li>Former Vice President Kamala Harris and other elected officials called for an immediate, independent investigation.</li><li>Harris County Judge Lina Hidalgo stated: "This is an agency with a recent history of inexplicable arrests, extrajudicial violence, and blatant attempts at coverups."</li><li>LULAC noted that in prior cases — including the killing of Renee Good in Minneapolis — ICE had similarly claimed drivers tried to ram agents, only for video to contradict that account.</li></ul>`,
            source: `KPRC Click2Houston / ABC News / Newsweek`,
            sourceUrl: "https://www.click2houston.com/news/local/2026/07/09/harris-county-medical-examiner-rules-death-of-lorenzo-salgado-araujo-a-homicide/",
            media: {
                type: "image",
                src: "images/2026-07-13-harris-county-me-rules-houston-ice-shooting-a-homi.jpg",
                alt: `Harris County ME Rules Houston ICE Shooting a Homicide; DHS Admits Wrong Man Killed`,
                caption: `KPRC Click2Houston / ABC News / Newsweek — July 9, 2026`
            }
        },
        {
            id: 65,
            date: `July 6, 2026`,
            year: 2026,
            category: "watchdog",
            title: `NIPNLG: At Least 21 ICE Custody Deaths in First Half of 2026, On Pace to Break Annual Record`,
            excerpt: `The National Immigration Project of the National Lawyers Guild documented at least 21 deaths in ICE custody as of July 6, 2026 — approaching the full-year total of 33 recorded in 2025, which had itself been the highest in more than two decades. Advocacy organizations warned the 2026 death toll was on track to far exceed that record.`,
            content: `<p>As of July 6, 2026, the National Immigration Project of the National Lawyers Guild (NIPNLG) documented at least 21 people who had reportedly died in ICE custody in the first six months of 2026 alone. The 2025 full-year total had been 33 — the highest in more than two decades — and advocacy organizations warned that 2026 was on pace to dramatically surpass that record.</p><p class="warning-highlight">Deaths in 2026 spanned facilities across multiple states, including Camp East Montana at Fort Bliss (where one death was ruled a homicide by asphyxia), the Adelanto ICE Processing Center in California, the Glades County Detention Center in Florida, and others. Medical neglect — including denied inhalers, untreated infections, and delayed emergency care — was cited by advocates and medical experts as a contributing factor in numerous cases. The Human Rights Watch/Physicians for Human Rights report published June 25 found that the 2026 mortality rate was nearly four times that of the Biden administration and higher than during the COVID-19 pandemic.</p><ul><li>Deaths documented in 2026 include individuals from Mexico, Cuba, Honduras, Cambodia, Nicaragua, Georgia (country), Vietnam, Iran, Haiti, Afghanistan, and Guatemala.</li><li>The youngest victim was 19-year-old Royer Pérez Jiménez of Mexico, who died at the Glades County Detention Center in March 2026.</li><li>Detention Watch Network advocacy director Setareh Ghandehari stated: "I have never seen anything like this, where I'm seeing ICE reporting out at least one death per week."</li><li>The deaths occurred amid ICE detention populations that had reached a record high of over 71,000 people earlier in 2026.</li></ul>`,
            source: `National Immigration Project (NIPNLG)`,
            sourceUrl: "https://nipnlg.org/news/mourning-those-who-have-died-ice-custody",
            mediaType: "document",
            mediaPlaceholder: `NIPNLG tracking list of 2026 ICE custody deaths with facility locations, ages, and countries of origin; bar chart comparing annual death totals since 2004`
        },
        {
            id: 66,
            date: `July 16, 2026`,
            year: 2026,
            category: "investigation",
            title: `ACLU Report: ICE Used Force in Nearly One-Third of 1,200+ Documented Operations`,
            excerpt: `A new ACLU report analyzing over 1,200 immigration enforcement operations across eight states found that force — including chokeholds, vehicle ramming, and chemical weapons — was used or threatened in nearly one-third of documented encounters, with researchers warning that use of force has become a 'default tool' for ICE officers.`,
            content: `<p>Released July 16, 2026, in the aftermath of two ICE-involved killings in less than a week, a new American Civil Liberties Union report analyzed more than <strong>1,200 immigration enforcement operations</strong> involving ICE agents or law enforcement working with ICE across eight states, covering the period from January 2025 through the end of 2025.</p><p class="warning-highlight">Researchers found that nearly <strong>one-third of all documented incidents involved the use of force or the threat of force</strong>. They recorded immigration agents pushing, tackling, or pinning people to the ground more than 400 times, and documented officers using weapons — including chemical irritants, rubber bullets, and tasers — approximately as often. Researchers also documented dozens of instances where officers used potentially deadly tactics that many police agencies restrict or prohibit outright, including pressing a knee into a person's neck and using chokeholds.</p><ul><li>Researchers documented dozens of instances where officers rammed other vehicles, boxed them in, and smashed vehicle windows.</li><li>ACLU Director of Policy Naureen Shah stated: "You're seeing the threat of using force and actually using it become the default tool for immigration enforcement agents."</li><li>The ACLU documented hundreds of incidents involving children, U.S. citizens, protesters, bystanders, and journalists.</li><li>Law Professor Seth Stoughton (University of South Carolina) called it "a little embarrassing" that this data was being gathered by the ACLU rather than by DHS itself.</li><li>ICE and DHS did not respond to questions about the report's findings.</li></ul>`,
            source: `NPR / ACLU`,
            sourceUrl: "https://www.npr.org/2026/07/16/nx-s1-5891834/ice-use-of-force-aclu-report",
            mediaType: "document",
            mediaPlaceholder: `ACLU report cover page and charts showing frequency and type of force used across 1,200+ ICE enforcement operations`
        },
        {
            id: 67,
            date: `July 13, 2026`,
            year: 2026,
            category: "incident",
            title: `ICE Agent Fatally Shoots Johan Sebastián Durán Guerrero in Biddeford, Maine; No Body Cameras Present`,
            excerpt: `An ICE agent shot and killed Johan Sebastián Durán Guerrero, a 25-year-old Colombian father, during an enforcement operation in Biddeford, Maine. Guerrero was not the intended target of the warrant. Agents involved were not wearing body cameras, and DHS waited nearly 12 hours before issuing a vague public statement.`,
            content: `<p>On July 13, 2026, around 7:00 a.m., ICE agents conducting surveillance at the last known address of a deportation target in Biddeford, Maine, encountered Johan Sebastián Durán Guerrero, 25, a Colombian father of a 3-year-old child who was authorized to work in the United States and held a Social Security number.</p><p class="warning-highlight">Sen. Angus King's office confirmed that Guerrero was <strong>NOT the target of the arrest warrant</strong>. DHS broke nearly 12 hours of silence with a statement saying an officer fired "fearing for public safety" — a rationale legal experts called insufficient to justify deadly force. No agents were wearing body cameras, leaving no video record of the shooting from officers' perspective. A witness told ABC News he heard Guerrero say, "I tried to stop."</p><ul><li>Maine's Attorney General launched a state investigation; the FBI and DHS OIG also opened investigations.</li><li>Maine Sens. Collins and King wrote to DHS Inspector General Joseph Cuffari requesting investigation of whether use-of-force policies were followed and what evidence exists.</li><li>Biddeford Mayor Liam LaFountain stated: "The fact that ICE is swimming in billions of taxpayer dollars and can't perform a basic function like properly equipping its people is a severe indictment."</li><li>Sen. Collins called on DHS to "cease all non-urgent vehicle stops" pending investigation.</li><li>Advocacy groups noted Guerrero left behind a wife and 3-year-old daughter, who witnessed the aftermath of the shooting.</li></ul>`,
            source: `NBC News / ABC News / CNN`,
            sourceUrl: "https://www.nbcnews.com/news/us-news/biddeford-maine-ice-investigation-fatal-shooting-rcna587279",
            media: {
                type: "image",
                src: "images/2026-07-20-ice-agent-fatally-shoots-johan-sebastin-durn-guerr.jpg",
                alt: `ICE Agent Fatally Shoots Johan Sebastián Durán Guerrero in Biddeford, Maine; No Body Cameras Present`,
                caption: `NBC News / ABC News / CNN — July 13, 2026`
            }
        },
        {
            id: 68,
            date: `July 14–15, 2026`,
            year: 2026,
            category: "policy",
            title: `ICE Vehicle Stop Pause Issued, Then Reversed Within 24 Hours by Trump`,
            excerpt: `Following two fatal ICE vehicle-stop shootings in one week, DHS Secretary Mullin issued a nationwide directive pausing most ICE vehicle stops pending new training. President Trump reversed the pause within 24 hours, calling traffic stops one of ICE's most important enforcement tools.`,
            content: `<p>On July 14, 2026, Homeland Security Secretary Markwayne Mullin directed ICE agents nationwide to immediately suspend most vehicle stops following the fatal shootings of Lorenzo Salgado Araujo in Houston (July 7) and Johan Sebastián Durán Guerrero in Biddeford, Maine (July 13) — both men having been killed in traffic stops and neither the intended target of enforcement operations.</p><p class="warning-highlight">An internal ICE email reviewed by ABC News directed: "All personnel are instructed to prioritize other existing operational methods, outside of vehicle stops, to conduct immigration enforcement activities." Multiple sources confirmed the pause was intended to be temporary while ICE officers received new training on vehicle-stop tactics. However, neither Mullin nor border czar Tom Homan alerted President Trump before imposing the pause. Trump became furious upon seeing news coverage and ordered the pause reversed early on July 15, posting on Truth Social that the stop was "one of ICE's most important and effective Crime Fighting tools."</p><ul><li>Border Czar Homan characterized the halt as a "short pause" to review whether training could be improved.</li><li>Former acting ICE Director Sarah Saldaña called the pause "a very practical thing to do until the agency can get its officers more properly trained."</li><li>CNN reported that within DHS, officials privately shared concerns that ten firearm-discharge incidents in 2026 could derail public confidence.</li><li>DHS announced ICE would institute additional training on crowd control, high-risk vehicle stops, medical care, and a live-fire cover course.</li></ul>`,
            source: `NPR / ABC News / CNN`,
            sourceUrl: "https://www.npr.org/2026/07/14/nx-s1-5893456/ice-vehicle-biddeford-houston",
            mediaType: "document",
            mediaPlaceholder: `Internal ICE email to deportation officers announcing the immediate pause on vehicle stops, reviewed by ABC News`
        }
    ],

    sources: [
        {
            type: `Government Document`,
            name: `ICE History and Formation (March 2003)`,
            url: "https://www.ice.gov/features/history"
        },
        {
            type: `Congressional Document`,
            name: `287(g) Program Congressional Hearing (2005)`,
            url: "https://www.govinfo.gov/content/pkg/CHRG-109hhrg28332/html/CHRG-109hhrg28332.htm"
        },
        {
            type: `Government Policy`,
            name: `DHS Use of Force Policy (June 2004)`,
            url: "https://www.dhs.gov/sites/default/files/publications/mgmt/law-enforcement/mgmt-dir_044-05-department-policy-on-the-use-of-force.pdf"
        },
        {
            type: `Training Information`,
            name: `FLETC ICE Training Academy`,
            url: "https://www.fletc.gov/us-immigration-and-customs-enforcement-training-academy"
        },
        {
            type: `Government Report`,
            name: `GAO Report GAO-09-109: 287(g) Controls (January 2009)`,
            url: "https://www.gao.gov/products/gao-09-109"
        },
        {
            type: `Government Report`,
            name: `DHS OIG Report OIG-10-63: 287(g) Performance (March 2010)`,
            url: "https://www.oig.dhs.gov/sites/default/files/assets/Mgmt/OIG_10-63_Mar10.pdf"
        },
        {
            type: `Policy Analysis`,
            name: `American Immigration Council: 287(g) Program Overview`,
            url: "https://www.americanimmigrationcouncil.org/fact-sheet/287g-program-immigration/"
        },
        {
            type: `Government Report`,
            name: `DHS OIG Alert OIG-18-42 (January 2018)`,
            url: "https://www.oig.dhs.gov/sites/default/files/assets/Mga/2018/oig-18-42-jan18.pdf"
        },
        {
            type: `Government Report`,
            name: `DHS OIG Report OIG-18-77 (September 2018)`,
            url: "https://www.oig.dhs.gov/sites/default/files/assets/2018-09/OIG-18-77-Sep18.pdf"
        },
        {
            type: `Government Report`,
            name: `DHS OIG Report OIG-19-07 (November 2018)`,
            url: "https://www.oig.dhs.gov/sites/default/files/assets/2018-11/OIG-19-07-Nov18.pdf"
        },
        {
            type: `Government Report`,
            name: `GAO Report GAO-21-487 (July 2021)`,
            url: "https://www.gao.gov/assets/gao-21-487.pdf"
        },
        {
            type: `Investigative Journalism`,
            name: `Type Investigations: ICE Training on Use of Force (August 2024)`,
            url: "https://www.typeinvestigations.org/investigation/2024/08/12/ice-agents-training-use-of-force/"
        },
        {
            type: `News Report`,
            name: `NBC News: ICE Vetting Failures (October 2025)`,
            url: "https://www.nbcnews.com/politics/immigration/new-ice-recruits-showed-training-full-vetting-rcna238739"
        },
        {
            type: `News Report`,
            name: `NBC News: AI Tool Malfunction (January 2026)`,
            url: "https://www.nbcnews.com/politics/immigration/ice-error-meant-recruits-sent-field-offices-proper-training-sources-sa-rcna254054"
        },
        {
            type: `Court Document`,
            name: `Chicago Headline Club v. Noem Opinion (October 2025)`,
            url: "https://cst.brightspotcdn.com/49/34/daecfb4d4b86971a884bd736a564/ellisopinion.pdf"
        },
        {
            type: `News Report`,
            name: `NPR: Homeland Security Expert on Training Cuts (January 2026)`,
            url: "https://www.npr.org/2026/01/09/nx-s1-5671120/homeland-security-expert-talks-about-ices-truncated-training-after-hiring-blitz"
        },
        {
            type: `Investigative Journalism`,
            name: `ProPublica: ICE Agents Using Chokeholds (January 2026)`,
            url: "https://www.propublica.org/article/videos-ice-dhs-immigration-agents-using-chokeholds-citizens"
        },
        {
            type: `Congressional Document`,
            name: `Senator Blumenthal Letter to FLETC (January 2026)`,
            url: "https://www.hsgac.senate.gov/wp-content/uploads/2026-01-21-Letter-from-Blumenthal-to-FLETC.pdf"
        },
        {
            type: `Policy Analysis`,
            name: `National Immigration Forum: 287(g) Training Explainer`,
            url: "https://forumtogether.org/article/explainer-training-under-the-revived-287g-task-force-model/"
        },
        {
            type: `News Report`,
            name: `PBS NewsHour: Former ICE Director Interview (January 2026)`,
            url: "https://www.pbs.org/newshour/show/ex-ice-chief-calls-dhs-rush-to-judgement-after-minneapolis-shooting-irresponsible"
        },
        {
            type: `News Report`,
            name: `CBS Minnesota: Retired Agent Video Analysis (January 2026)`,
            url: "https://www.cbsnews.com/minnesota/news/ice-shooting-minneapolis-retired-agent-video-analysis/"
        },
        {
            type: `Medical Report`,
            name: `Physicians for Human Rights: Deadly Failures Report`,
            url: "https://phr.org/our-work/resources/deadly-failures-preventable-deaths-in-u-s-immigration-detention/"
        },
        {
            type: `Legal Filing`,
            name: `ACLU-NH FOIA Lawsuit (January 2026)`,
            url: "https://www.aclu-nh.org/press-releases/aclu-nh-files-foia-lawsuit-seeking-nh-287g-training-documents-from-ice/"
        },
        {
            type: `Investigative Journalism`,
            name: `CNN: CNN Analysis: ICE Deportation Officers Among Least Trained F`,
            url: "https://www.cnn.com/2026/02/27/us/ice-deportation-officers-training-agents-invs"
        },
        {
            type: `Investigative Journalism`,
            name: `CNN: CNN: ICE and CBP Agents Routinely Violated Less-Lethal Weapo`,
            url: "https://www.cnn.com/2026/03/10/us/ice-federal-agents-less-lethal-weapons"
        },
        {
            type: `Investigative Journalism`,
            name: `CBS News / CNN / Sen. Blumenthal's Office: ICE Whistleblower Schwank Testifies: Training Is 'Deficient,`,
            url: "https://www.cbsnews.com/news/ice-whistleblower-new-recruits-receiving-defective-training/"
        },
        {
            type: `News Report`,
            name: `NPR / ABC News: DHS Admits Two ICE Agents Lied Under Oath in Minneapolis Sho`,
            url: "https://www.npr.org/2026/02/13/nx-s1-5713947/immigration-agents-lie-minnesota"
        },
        {
            type: `Court Document`,
            name: `OPB / Fox News / Oregon Capital Chronicle: Federal Judge Issues Injunction Finding DHS Has 'Unwritten P`,
            url: "https://www.opb.org/article/2026/03/09/federal-judge-limits-crowd-control-devices-portland-ice-building/"
        },
        {
            type: `News Report`,
            name: `CNN / NPR / Sahan Journal: ICE Agent Shoots Venezuelan Man in North Minneapolis; Govern`,
            url: "https://www.cnn.com/2026/04/06/us/minneapolis-shooting-ice-video-immigrant"
        },
        {
            type: `Investigative Journalism`,
            name: `CNN / Sahan Journal / Minnesota Reformer: New Video Proves ICE Account of Minneapolis Shooting Was Fal`,
            url: "https://minnesotareformer.com/2026/04/06/newly-released-surveillance-footage-of-jan-14-ice-shooting-contradicts-agents-account/"
        },
        {
            type: `Investigative Journalism`,
            name: `ProPublica / FRONTLINE: ProPublica/FRONTLINE 'Caught in the Crackdown': 300+ Protest`,
            url: "https://www.propublica.org/article/caught-in-crackdown-ice-cbp-doj-trump-arrests-convictions"
        },
        {
            type: `Court Document`,
            name: `Courthouse News Service: ACLU Lawsuit Challenges Secret ICE 'Home Entry Memo'; Traine`,
            url: "https://courthousenews.com/minnesotans-sue-feds-over-warrantless-ice-raids/"
        },
        {
            type: `Investigative Journalism`,
            name: `The Christian Science Monitor: CS Monitor: Dozens of Excessive Force Tort Claims Filed Agai`,
            url: "https://www.csmonitor.com/USA/Justice/2026/0203/homeland-security-excessive-force-ice-immigration"
        },
        {
            type: `News Report`,
            name: `Democracy Now!: ICE Custody Deaths Reach 17 in 2026 — Averaging One Per Week`,
            url: "https://www.democracynow.org/2026/4/21/ice_custody_deaths_ghandehari_detention_watch"
        },
        {
            type: `News Report`,
            name: `NBC News: Medical Examiner Rules ICE Detainee Death at Fort Bliss a Ho`,
            url: "https://www.nbcnews.com/news/us-news/lunas-campos-ice-detainee-homicide-autopsy-rcna256566"
        },
        {
            type: `Investigative Journalism`,
            name: `CBS News: CBS News Bodycam Video Contradicts ICE Account of Martinez S`,
            url: "https://www.cbsnews.com/news/bodycam-video-ice-fatal-shooting-ruben-ray-martinez-texas/"
        },
        {
            type: `Court Document`,
            name: `ACLU of D.C.: D.C. Federal Judge Blocks ICE 'Lyons Memo' Arrest Standard, `,
            url: "https://www.acludc.org/press-releases/federal-court-requires-trump-comply-warrantless-arrests/"
        },
        {
            type: `News Report`,
            name: `American Oversight / Newsweek: ICE Concealed Killing of U.S. Citizen Ruben Ray Martinez for`,
            url: "https://americanoversight.org/lawmakers-call-for-investigation-after-records-reveal-undisclosed-ice-shooting-death-of-u-s-citizen/"
        },
        {
            type: `Court Document`,
            name: `Rhode Island Current: Rhode Island Federal Judge Orders Disciplinary Investigation`,
            url: "https://rhodeislandcurrent.com/2026/05/05/ri-federal-judge-orders-investigation-after-ice-failed-to-disclose-mans-murder-warrant/"
        },
        {
            type: `Investigative Journalism`,
            name: `Stateline: Stateline/WSJ Investigation: Pattern of Conflicting DHS Acco`,
            url: "https://stateline.org/2026/01/23/footage-documents-at-odds-with-dhs-accounts-of-immigration-enforcement-incidents/"
        },
        {
            type: `Court Document`,
            name: `Spectrum News NY1: Trump-Appointed Federal Judge (EDNY): ICE Arrest Practices A`,
            url: "https://spectrumlocalnews.com/nys/central-ny/news/2026/05/01/ny1-exclusive--former-ice-trainer-says-local-agents-need-more-training-when-testifying-in-arrests"
        },
        {
            type: `Investigative Journalism`,
            name: `CNN: CNN Analysis: CBP Agents' Deadly Escalation Reflects 'Danger`,
            url: "https://www.cnn.com/2026/01/29/us/immigration-agents-shooting-alex-pretti-invs"
        },
        {
            type: `News Report`,
            name: `Colorado Sun: Colorado Charges CBP Agent with Assault for Banned Chokehold`,
            url: "https://coloradosun.com/2026/04/22/ice-agent-arrest-durango-assault-charge/"
        },
        {
            type: `News Report`,
            name: `NPR: Minnesota Charges ICE Agent Morgan with Felony Assault for G`,
            url: "https://www.npr.org/2026/04/16/nx-s1-5787958/minnesota-charged-ice-officer-assault-immigration-surge"
        },
        {
            type: `News Report`,
            name: `CBS News: CBS News: ICE Reports 18th Detainee Death in 4 Months, on Tr`,
            url: "https://www.cbsnews.com/news/ice-detainee-deaths-2026/"
        },
        {
            type: `Investigative Journalism`,
            name: `CNN: CNN Investigation: Medical Understaffing and DHS Policy Driv`,
            url: "https://www.cnn.com/2026/05/15/us/ice-immigration-detention-centers-medical-care-deaths-invs-vis"
        },
        {
            type: `Court Document`,
            name: `The Colorado Sun / CPR News / ACLU of Colorado: Colorado Federal Judge Orders ICE to Retrain All Arresting O`,
            url: "https://coloradosun.com/2026/05/12/ice-must-retrain-arresting-officers-in-colorado-federal-judge-rules/"
        },
        {
            type: `Government Report`,
            name: `Capitol News Illinois / WTTW Chicago: Illinois Accountability Commission: 'Illegal and Violent Con`,
            url: "https://capitolnewsillinois.com/news/accountability-commission-refers-federal-agents-for-investigation-possible-prosecution-for-conduct-last-fall/"
        },
        {
            type: `News Report`,
            name: `US News / Reuters / Government Executive: Minnesota Prosecutors Charge ICE Agent Christian Castro with`,
            url: "https://www.usnews.com/news/world/articles/2026-05-18/minnesota-officials-charge-ice-agent-in-shooting-of-venezuelan-immigrant"
        },
        {
            type: `News Report`,
            name: `Spectrum News / Reuters / Washington Times: DHS Secretary Mullin Announces ICE Training Restored to 72 D`,
            url: "https://spectrumlocalnews.com/us/snplus/politics/2026/06/04/homeland-security-secretary-mark-wayne-mullin-says-ice-will-increase-new-officer-training-next-monthhomela"
        },
        {
            type: `Government Report`,
            name: `Fox News Digital / DHS OIG: DHS Funding Lapse Forces OIG to Pause 85% of ICE Oversight A`,
            url: "https://www.foxnews.com/politics/democrats-dhs-shutdown-halts-ice-oversight-demanded"
        },
        {
            type: `Court Document`,
            name: `Colorado Public Radio / Colorado Sun: Federal Judge Orders ICE to Retrain All Colorado Arresting O`,
            url: "https://www.cpr.org/2026/05/12/immigration-ice-judge-orders-more-training-warrentless-arrests/"
        },
        {
            type: `News Report`,
            name: `CNN / Washington Post / MPR News: ICE Agent Christian Castro Criminally Charged and Arrested f`,
            url: "https://www.cnn.com/2026/05/18/us/ice-agent-charged-minneapolis-shooting"
        },
        {
            type: `Government Report`,
            name: `Washington Times / Associated Press: DHS OIG Report: Winn Correctional Found Banned Chokeholds, M`,
            url: "https://www.washingtontimes.com/news/2026/jun/8/ice-facility-louisiana-reports-second-detainee-death-less-2-months/"
        },
        {
            type: `News Report`,
            name: `NBC News / Associated Press: ICE Eliminates Rule Requiring Reporting of Detainee Deaths A`,
            url: "https://www.nbcnews.com/news/us-news/ice-will-no-longer-report-deaths-detainees-recently-released-custody-rcna348719"
        },
        {
            type: `Government Report`,
            name: `DHS Office of Inspector General: OIG Unannounced Inspection Finds Violations at ICE Washingto`,
            url: "https://www.oig.dhs.gov/sites/default/files/assets/2026-06/OIG-26-07-May26.pdf"
        },
        {
            type: `Government Report`,
            name: `NBC News: DHS OIG Launches New Reviews of ICE Detainee Deaths and Use `,
            url: "https://www.nbcnews.com/politics/immigration/dhs-watchdog-announces-new-ice-reviews-rcna351729"
        },
        {
            type: `Government Report`,
            name: `Human Rights Watch / Physicians for Human Rights: HRW/PHR Report: 52 ICE Custody Deaths in 500 Days; Mortality`,
            url: "https://www.hrw.org/report/2026/06/25/dying-in-detention/rising-deaths-in-an-expanding-us-immigration-detention-system"
        },
        {
            type: `News Report`,
            name: `CBS News: ICE Scraps 42-Day Training, Mandates Supplemental Program fo`,
            url: "https://www.cbsnews.com/news/ice-training-new-hires-backlash/"
        },
        {
            type: `Government Report`,
            name: `DHS Office of Inspector General: OIG Reports Use-of-Force Violations at Louisiana ICE Facilit`,
            url: "https://www.oig.dhs.gov/sites/default/files/assets/2026-06/OIG-26-08-Jun26.pdf"
        },
        {
            type: `Court Document`,
            name: `NPR: DOJ Admits ICE Courthouse Arrest Policy Was Based on Erroneo`,
            url: "https://www.npr.org/2026/03/26/nx-s1-5762691/doj-admits-ice-courthouse-arrests-relied-on-erroneous-information"
        },
        {
            type: `Investigative Journalism`,
            name: `Human Rights Watch: HRW '180-Page Manufactured Crisis' Report: Operation Metro S`,
            url: "https://www.hrw.org/report/2026/06/18/a-manufactured-crisis/minnesota-communities-terrorized-by-the-federal-government"
        },
        {
            type: `News Report`,
            name: `KPRC Click2Houston / ABC News / Newsweek: Harris County ME Rules Houston ICE Shooting a Homicide; DHS `,
            url: "https://www.click2houston.com/news/local/2026/07/09/harris-county-medical-examiner-rules-death-of-lorenzo-salgado-araujo-a-homicide/"
        },
        {
            type: `Government Report`,
            name: `National Immigration Project (NIPNLG): NIPNLG: At Least 21 ICE Custody Deaths in First Half of 2026`,
            url: "https://nipnlg.org/news/mourning-those-who-have-died-ice-custody"
        },
        {
            type: `Investigative Journalism`,
            name: `NPR / ACLU: ACLU Report: ICE Used Force in Nearly One-Third of 1,200+ Do`,
            url: "https://www.npr.org/2026/07/16/nx-s1-5891834/ice-use-of-force-aclu-report"
        },
        {
            type: `News Report`,
            name: `NBC News / ABC News / CNN: ICE Agent Fatally Shoots Johan Sebastián Durán Guerrero in B`,
            url: "https://www.nbcnews.com/news/us-news/biddeford-maine-ice-investigation-fatal-shooting-rcna587279"
        },
        {
            type: `News Report`,
            name: `NPR / ABC News / CNN: ICE Vehicle Stop Pause Issued, Then Reversed Within 24 Hours`,
            url: "https://www.npr.org/2026/07/14/nx-s1-5893456/ice-vehicle-biddeford-houston"
        }
    ],

    categories: {
        watchdog: {
            label: `Watchdog Reports`,
            color: "#1e40af"
        },
        court: {
            label: `Court Cases`,
            color: "#7c2d12"
        },
        investigation: {
            label: "Investigations",
            color: "#4338ca"
        },
        incident: {
            label: "Incidents",
            color: "#991b1b"
        },
        policy: {
            label: `Policy Changes`,
            color: "#166534"
        }
    }
};
