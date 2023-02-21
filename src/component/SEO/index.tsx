import { useForm } from "react-hook-form";
import useLocalStorage from "use-local-storage";
import InfoCarousel from "../InfoCarousel";

function SEO() {
  const [seo, setSeo] = useLocalStorage("seo", {
    title: "",
    description: "",
    image: "",
  });

  const { handleSubmit, register } = useForm();
  const info = [
    "Title and description are very important for better page ranking",
    "Add an social media thumbnail so that people get a preview when they share your page link",
  ];
  return (
    <form
      onSubmit={handleSubmit((data) => {
        setSeo({
          title: data.title,
          description: data.description,
          image: data.image,
        });
        console.log(seo);
      })}
    >
      <InfoCarousel info={info} />
      <fieldset>
        <label>Title</label>
        <input
          defaultValue={seo.title}
          {...register("title")}
          type="text"
          required
          placeholder="Seo title"
        />
      </fieldset>
      <fieldset>
        <label>Description</label>
        <input
          defaultValue={seo.description}
          {...register("description")}
          required
          type="text"
          placeholder="description of your page "
        />
      </fieldset>
      <fieldset>
        <label>Social Link Thumbnail</label>
        <input
          defaultValue={seo.image}
          {...register("image")}
          required
          type="url"
          placeholder="social media link Thumbnai "
        />
      </fieldset>
      <button className="btn flex " type="submit">
        Submit
      </button>
    </form>
  );
}

export { SEO, PublisherInfo, AuthorInfo };

const PublisherInfo = () => {
  const { handleSubmit, register } = useForm();

  const [publisher, setPublisher] = useLocalStorage<any>("publisher", {
    websiteUrl: "",
    websiteName: "",
    websiteLogo: "",
  });

  const data = [
    {
      label: "Website",
      type: "url",
      value: "websiteUrl",
    },
    {
      label: "Website name",
      type: "string",
      value: "websiteName",
    },
    {
      label: "Website Logo",
      type: "url",
      value: "websiteLogo",
    },
  ];
  return (
    <form
      onSubmit={handleSubmit((data) => {
        setPublisher(data);
      })}
    >
      {data.map((el) => {
        return (
          <fieldset key={el.value}>
            <label>{el.label}</label>
            <input
              defaultValue={publisher[el.value]}
              {...register(el.value)}
              type={el.type}
            />
          </fieldset>
        );
      })}
    </form>
  );
};

const AuthorInfo = () => {
  return (
    <form>
      <fieldset>
        <label>Author name</label>
        <input name="authorName" />
      </fieldset>
      <fieldset>
        <label>Author Image URL</label>
        <input />
      </fieldset>
    </form>
  );
};

{
  /* <meta property="og:title" content="Social Title for Cool Page" />
<meta
  property="og:description"
  content="And a social description for our cool page"
/>
<meta
  property="og:image"
  content="https://example.com/images/cool-page.jpg"
/> */
}

type schemaType = {
  link: string;
  title: string;
  description: string;
  authorName: string;
  authorUrl: string;
  image: string;
  datePublished: string;
  dateModified: string;
};

const schema = ({
  link,
  title,
  description,
  authorName,
  authorUrl,
  image,
  datePublished,
  dateModified,
}: schemaType) => {
  return {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    mainEntityOfPage: link,
    headline: title,
    description: description,
    author: {
      "@type": "Person",
      name: authorName,
      // The full URL must be provided, including the website's domain.
      url: authorUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "Coolhead",
      url: "https://coolhead.in",
      logo: "",
    },
    image: {
      "@type": "ImageObject",
      url: image,
    },
    datePublished: Date.now(),
    dateModified: Date.now(),
    isAccessibleForFree: "http://schema.org/True",
  };
};
