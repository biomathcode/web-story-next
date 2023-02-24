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
      })}
      className="flex col gap-10 "
      style={{
        width: "400px",
      }}
    >
      <InfoCarousel info={info} />
      <fieldset className="flex gap-10 js center">
        <label>Title</label>
        <input
          defaultValue={seo.title}
          {...register("title")}
          type="text"
          required
          placeholder="Seo title"
        />
      </fieldset>
      <fieldset className="flex gap-10 js center">
        <label>Description</label>
        <textarea
          defaultValue={seo.description}
          {...register("description")}
          required
          placeholder="description of your page "
        />
      </fieldset>
      <fieldset className="flex gap-10 js center">
        <label>Social Link Thumbnail</label>
        <input
          defaultValue={seo.image}
          {...register("image")}
          required
          type="url"
          placeholder="social media link Thumbnai "
        />
      </fieldset>
      <button className="btn flex fs-12  " type="submit">
        Submit
      </button>
    </form>
  );
}

export { SEO, PublisherInfo, AuthorInfo, structuredData };

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
      className="flex col gap-10"
      style={{
        width: "400px",
      }}
    >
      {data.map((el) => {
        return (
          <fieldset key={el.value} className="flex gap-10 js center">
            <label>{el.label}</label>
            <input
              defaultValue={publisher[el.value]}
              {...register(el.value)}
              type={el.type}
            />
          </fieldset>
        );
      })}
      <button className="btn flex fs-12  " type="submit">
        Submit
      </button>
    </form>
  );
};

const AuthorInfo = () => {
  const { handleSubmit, register } = useForm();

  const [author, setAuthor] = useLocalStorage<any>("authorInfo", {
    authorName: "",
    authorUrl: "",
    authorImage: "",
  });
  return (
    <form
      onSubmit={handleSubmit((data) => {
        setAuthor(data);
      })}
      className="flex col gap-10 mt-10"
      style={{
        width: "400px",
      }}
    >
      <fieldset className="flex gap-10 js center">
        <label>Author name</label>
        <input
          type="text"
          defaultValue={author.authorName}
          {...register("authorName")}
        />
      </fieldset>
      <fieldset className="flex gap-10 js center">
        <label>Author Image URL</label>
        <input
          type="url"
          defaultValue={author.authorImage}
          {...register("authorImage")}
        />
      </fieldset>
      <fieldset className="flex gap-10 js center">
        <label>Author Website</label>
        <input
          type="url"
          defaultValue={author.authorUrl}
          {...register("authorUrl")}
        />
      </fieldset>
      <button className="btn flex fs-12 " type="submit">
        Submit
      </button>
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

const structuredData = ({
  link,
  title,
  description,
  authorName,
  authorUrl,
  image,
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

      url: authorUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "Coolhead",
      url: "https://coolhead.in",
    },
    image: {
      "@type": "ImageObject",
      url: image,
    },
    datePublished: new Date().toISOString(),
    dateModified: new Date().toISOString(),
    isAccessibleForFree: "http://schema.org/True",
  };
};

const d = new Date();

d.toISOString();
