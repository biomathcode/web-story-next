import Footer from "@/component/Footer";
import InfoCarousel from "@/component/InfoCarousel";
import InfoCheckBox from "@/component/InfoCheckbox/InfoCheckbox";
import Head from "next/head";

function Monetization() {
  return (
    <div>
      <Head>
        <title>How to monetize web stories ?</title>
      </Head>
      <style jsx>
        {`
          h1 {
            font-weight: 600;
          }
        `}
      </style>
      <main className="flex center col jc gap-10 inter m-20">
        <article
          className="flex col gap-10 inter"
          style={{ maxWidth: "600px", margin: "20px", padding: "20px" }}
        >
          <h1>How to monetize web stories? </h1>
          <section className="flex col gap-10 ">
            <p
              style={{
                display: "flex",
                justifyContent: "flex-end",
                gap: "10px",
              }}
            >
              by{" "}
              <a
                href="http://twitter.com/biomathcode"
                target="_blank"
                rel="noreferrer"
              >
                Pratik Sharma
              </a>{" "}
            </p>

            <InfoCheckBox
              size={15}
              icon="success"
              title="For Monitisation"
              description="To enable ads on your webstories, add google adsense to your domain website. Web story should atleast have more than 7 story pages to be enabled for auto-ads."
            />
            <ul className="flex col gap-10">
              <li>Connect your site to google adsense</li>
              <li>
                Create display ad <br />
              </li>
              <InfoCarousel
                info={[
                  "STEP 1: Ads",
                  "STEP 2: By Ads Unit",
                  "STEP 3: Display ads ",
                  "STEP 4: Click on Create button,keep the ads ",
                ]}
              />
              <li>
                Copy the <code>data ad client</code> and{" "}
                <code>data ad slot</code> string.
              </li>
              <li>Add the info into the Monetize section of Editor</li>
            </ul>
          </section>
        </article>
        <Footer />
      </main>
    </div>
  );
}

export default Monetization;
