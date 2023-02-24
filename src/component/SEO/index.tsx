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
      className="flex col gap-10 "
    >
      <fieldset className="flex gap-10 center js">
        <label className="label">Title</label>
        <input
          defaultValue={seo.title}
          {...register("title")}
          type="text"
          required
          placeholder="Seo title"
        />
      </fieldset>
      <fieldset className="flex gap-10 center js">
        <label className="label">Description</label>
        <input
          defaultValue={seo.description}
          {...register("description")}
          required
          type="text"
          placeholder="description of your page "
        />
      </fieldset>
      <fieldset className="flex gap-10 center js">
        <label className="label">Social Link Thumbnail</label>
        <input
          defaultValue={seo.image}
          {...register("image")}
          required
          type="url"
          placeholder="social media link Thumbnai "
        />
      </fieldset>
      <button className="btn flex fs-12" type="submit">
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
    >
      {data.map((el) => {
        return (
          <fieldset className="flex gap-10 center js" key={el.value}>
            <label className="label">{el.label}</label>
            <input
              defaultValue={publisher[el.value]}
              {...register(el.value)}
              type={el.type}
            />
          </fieldset>
        );
      })}
      <button type="submit" className="btn fs-12 m-y ">
        Submit
      </button>
    </form>
  );
};

const Analytics = () => {
  const { handleSubmit, register } = useForm();
  const [analytics, setAnalytics] = useLocalStorage<any>("analytics", {
    gtag: "",
  });
  return (
    <form onSubmit={handleSubmit((data) => setAnalytics(data))}>
      <fieldset className="flex center gap-10 js">
        <label className="label">Google Analytics G-tag</label>
        <input
          required
          type="text"
          {...register("gtag")}
          defaultValue={analytics.gtag}
        />
      </fieldset>
      <button type="submit" className="btn fs-12 ">
        Submit
      </button>
    </form>
  );
};

const AuthorInfo = () => {
  const { handleSubmit, register } = useForm();
  const [author, setAuthor] = useLocalStorage<any>("authorinfo", {
    authorName: "",
    authorUrl: "",
    authorImage: "",
  });
  return (
    <form
      className="flex col gap-10"
      onSubmit={handleSubmit((data) => setAuthor(data))}
    >
      <fieldset className="flex gap-10 center js">
        <label className="label">Author name</label>
        <input
          required
          type="text"
          defaultValue={author.authorName}
          {...register("authorName")}
        />
      </fieldset>
      <fieldset className="flex gap-10 center js">
        <label className="label"> Author Image URL</label>
        <input
          required
          type="url"
          defaultValue={author.authorImage}
          {...register("authorImage")}
        />
      </fieldset>
      <fieldset className="flex gap-10 center js">
        <label className="label">Author Website</label>
        <input
          required
          type="url"
          defaultValue={author.authorUrl}
          {...register("authorUrl")}
        />
      </fieldset>
      <button type="submit" className="btn fs-12 m-x">
        Submit
      </button>
    </form>
  );
};

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
