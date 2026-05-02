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
            id: 27,
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
            id: 28,
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
            id: 29,
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
            id: 30,
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
            id: 31,
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
            id: 32,
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
