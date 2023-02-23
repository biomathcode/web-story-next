import InfoCheckBox from "@/component/InfoCheckbox/InfoCheckbox";

function Learn() {
  return (
    <>
      <div className="flex center col jc gap-10">
        <article className="flex col gap-10">
          <h1>Learn about Amp web stories Search Engine Optimisation or SEO</h1>
          <p>by Pratik Sharma</p>
          {/* 
          <InfoCheckBox
            size={18}
            icon="success"
            title="For Monitisation"
            description="To enable ads on your webstories, add google adsense to your domain website. Web story should atleast have more than 7 story pages to be enable for auto-ads"
          /> */}
          <ul className="flex col gap-10">
            <li>Add Structued data to your webstories.</li>
            <li>
              Make sure there is enought contract between the text and the
              background image.
            </li>
            <li>Text should be similar to tweets- short and informative</li>
            <li>
              Add meta data - title, description, og:image, og:title,
              og:description - to get better link preview on social media
            </li>
            <li></li>
          </ul>
        </article>
      </div>
    </>
  );
}

export default Learn;
