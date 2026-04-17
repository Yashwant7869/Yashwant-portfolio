import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const siteUrl = "https://www.yashwantsingh.me";

const paperData = {
  title:
    "Real-Time Smart Library Automation System Using RFID and Web-Based Resource Management",
  author: "Yashwant Singh Gour, Sagar Pandey, Om Siddharth Gautam, Princy Thakur",
  publicationDate: "2026",
  pdfUrl: "https://zenodo.org/records/19592032/files/A_Real_Time_Smart_Library_Automation_System_Using_RFID_and_Web_Based_Resource_Management.pdf?download=1",
  doiUrl: "https://doi.org/10.5281/zenodo.19592032",
  abstract:
    "Traditional library systems continue to rely heavily on manual workflows for book circulation, seat allocation, and user monitoring, which leads to delays, human errors, and poor visibility of resource usage. RFID-based automation has been widely adopted in library environments to improve circulation efficiency, inventory control, and access management, while IoT enabled reservation systems extend these capabilities to study space monitoring and occupancy validation [1]-[5]. However, many existing systems remain fragmented, addressing either book circulation or seat booking without providing an integrated operational framework. This paper presents a real-time smart library automation system that combines RFID technology with a web-based resource management platform to support automated user check-in and check-out, self-service book issue and return, and intelligent seat reservation with automatic expiry. The proposed system uses RFID-enabled identity cards, NodeMCU based reader stations, a Node.js and Express backend, MongoDB as the primary document database, and a React frontend for students and administrators. Each transaction is validated through authenticated backend APIs, ensuring secure and consistent state transitions. The system also records user sessions, tracks seat occupancy, and automatically releases unused reservations to prevent ghost bookings. Simulation-based evaluation indicates that the architecture reduces transaction latency and manual workload while improving transparency, fairness, and utilization in academic library operations. The proposed framework therefore provides a practical and scalable foundation for Library 4.0-style automation in higher education settings.",
  keywords: [
    "RFID",
    "smart library",
    "IoT",
    "MongoDB",
    "NoSQL",
    "seat reservation",
    "library automation",
    "NodeMCU",
    "Node.js",
    "React",
    "real-time system",
  ],
  citationText:
    "Gour, Y. S. (2026). Real-Time Smart Library Automation System Using RFID and Web-Based Resource Management. Zenodo. https://doi.org/10.5281/zenodo.19592032",
};

const ResearchPaper = () => {
  const metaDescription =
    "Research paper on a real-time smart library automation system using RFID, NodeMCU, Node.js, MongoDB, and React for book circulation and seat reservation management.";

  return (
    <>
      <Helmet>
        <title>{`${paperData.title} | Research Paper`}</title>
        <meta name="description" content={metaDescription} />

        <meta name="citation_title" content={paperData.title} />
        <meta name="citation_author" content={paperData.author} />
        <meta name="citation_publication_date" content={paperData.publicationDate} />
        <meta name="citation_pdf_url" content={paperData.pdfUrl} />
        <meta name="citation_doi" content={paperData.doiUrl} />

        <link rel="canonical" href={`${siteUrl}/research-paper`} />
        <meta property="og:url" content={`${siteUrl}/research-paper`} />
        <meta property="og:title" content={paperData.title} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="article" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ScholarlyArticle",
            headline: paperData.title,
            author: paperData.author,
            datePublished: paperData.publicationDate,
            description: metaDescription,
            url: `${siteUrl}/research-paper`,
            sameAs: [paperData.doiUrl, paperData.pdfUrl],
            keywords: paperData.keywords.join(", "),
          })}
        </script>
      </Helmet>

      <main className="min-h-screen bg-slate-950 text-slate-100 px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-4xl">
          <header className="mb-8">
            <Link
              to="/"
              className="inline-flex items-center rounded-full border border-cyan-400/40 px-4 py-1.5 text-sm font-medium text-cyan-300 transition hover:border-cyan-300 hover:text-cyan-200"
            >
              Back to Portfolio
            </Link>

            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300/80">
              Research Publication
            </p>
            <h1 className="mt-3 text-balance text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              {paperData.title}
            </h1>
            <p className="mt-4 text-base text-slate-300 sm:text-lg">
              <span className="font-semibold text-slate-100">Author:</span> {paperData.author}
            </p>
            <p className="mt-1 text-base text-slate-300 sm:text-lg">
              <span className="font-semibold text-slate-100">Publication Year:</span>{" "}
              {paperData.publicationDate}
            </p>
          </header>

          <article className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-2xl shadow-cyan-900/20 backdrop-blur sm:p-8">
            <section aria-labelledby="abstract-heading" className="mb-8">
              <h2 id="abstract-heading" className="text-2xl font-semibold text-white">
                Abstract
              </h2>
              <p className="mt-4 leading-8 text-slate-200">{paperData.abstract}</p>
            </section>

            <section aria-labelledby="keywords-heading" className="mb-8">
              <h2 id="keywords-heading" className="text-2xl font-semibold text-white">
                Keywords
              </h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {paperData.keywords.map((keyword) => (
                  <span
                    key={keyword}
                    className="rounded-full border border-cyan-300/30 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-100"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </section>

            <section aria-label="Paper links" className="mb-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={paperData.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-cyan-300 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
              >
                Download PDF
              </a>
              <a
                href={paperData.doiUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg border border-cyan-300/50 px-5 py-3 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200 hover:text-white focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
              >
                View DOI
              </a>
            </section>

            <section aria-labelledby="citation-heading">
              <h2 id="citation-heading" className="text-2xl font-semibold text-white">
                How to Cite
              </h2>
              <div className="mt-4 rounded-xl border border-slate-700 bg-slate-950/80 p-4">
                <p className="text-sm leading-7 text-slate-200">{paperData.citationText}</p>
              </div>
            </section>
          </article>
        </div>
      </main>
    </>
  );
};

export default ResearchPaper;
