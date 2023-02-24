import Head from "next/head";

function Monetization() {
  return (
    <div>
      <Head>
        <title>How to monetize web stories ?</title>
      </Head>
      <div className="flex center col jc gap-10 inter p-20 m-20">
        <div
          className="flex col gap-10 inter"
          style={{ maxWidth: "600px", margin: "20px", padding: "20px" }}
        >
          <h1>How to monetize web stories? </h1>
          <ul>
            <li>Connect your site to google adsense</li>
            <li>Create display ad</li>
            <li>Add the info into the Monetise section of editor</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Monetization;
