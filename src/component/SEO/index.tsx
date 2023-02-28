import { slugify } from "@/lib";
import {
  ANALYTICS,
  AUTHOR,
  MONETIZE,
  PUBLISHER,
  SCHEMA,
} from "@/lib/constants";
import { analyticsType, monetizeType, publisherType, seoType } from "@/pages";

import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import useLocalStorage from "use-local-storage";

function Schema() {
  const [schema, setSchema] = useLocalStorage<seoType>(SCHEMA, {
    title: "",
    description: "",
    image: "",
  });

  const { handleSubmit, register } = useForm();

  return (
    <form
      onSubmit={handleSubmit((data) => {
        setSchema({
          title: data.title,
          description: data.description,
          image: data.image,
        });
        toast.success("seo info updated");
      })}
      className="flex col gap-10 "
    >
      <fieldset className="flex gap-10 center js">
        <label className="label">Title</label>
        <input
          defaultValue={schema.title}
          {...register("title")}
          type="text"
          required
          placeholder="Seo title"
        />
      </fieldset>
      <fieldset className="flex gap-10 center js">
        <label className="label">Description</label>
        <input
          defaultValue={schema.description}
          {...register("description")}
          required
          placeholder="description of your page "
        />
      </fieldset>
      <fieldset className="flex gap-10 center js">
        <label className="label">Social Link Thumbnail</label>
        <input
          defaultValue={schema.image}
          {...register("image")}
          required
          type="url"
          placeholder="social media link Thumbnai "
        />
      </fieldset>
      <button
        aria-label="submit"
        id="submit"
        className="btn flex fs-12"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}

const PublisherInfo = () => {
  const { handleSubmit, register } = useForm();

  const [publisher, setPublisher] = useLocalStorage<publisherType>(PUBLISHER, {
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
      onSubmit={handleSubmit((data: any) => {
        setPublisher(data);
        toast.success("Publisher info updated");
      })}
      className="flex col gap-10"
    >
      {data.map((el) => {
        return (
          <fieldset className="flex gap-10 center js" key={el.value}>
            <label className="label">{el.label}</label>
            <input
              defaultValue={publisher[el.value]}
              {...register(el.value, {
                required: true,
              })}
              type={el.type}
            />
          </fieldset>
        );
      })}
      <button
        aria-label="submit"
        id="submit"
        type="submit"
        className="btn fs-12 m-y "
      >
        Submit
      </button>
    </form>
  );
};

const Analytics = () => {
  const { handleSubmit, register } = useForm();
  const [analytics, setAnalytics] = useLocalStorage<analyticsType>(ANALYTICS, {
    gtag: "",
  });
  return (
    <form
      onSubmit={handleSubmit((data: any) => {
        setAnalytics(data);
        toast.success("Analytics info updated!!");
      })}
    >
      <fieldset className="flex center gap-10 js">
        <label className="">Google Analytics G-tag</label>
        <input
          placeholder="GA-124"
          required
          type="text"
          {...register("gtag", {
            required: true,
          })}
          defaultValue={analytics.gtag}
        />
      </fieldset>
      <button
        aria-label="submit"
        id="submit"
        type="submit"
        className="btn fs-12 mt-10 "
      >
        Submit
      </button>
    </form>
  );
};

const Monetize = () => {
  const { handleSubmit, register } = useForm();
  const [monetize, setMonetize] = useLocalStorage<monetizeType>(MONETIZE, {
    client: "",
    slot: "",
  });
  return (
    <form
      className="flex col gap-10"
      onSubmit={handleSubmit((data: any) => {
        setMonetize(data);
        toast.success("Monetization info updated");
      })}
    >
      <fieldset className="flex center gap-10 js">
        <label className="">Data ad client</label>
        <input
          placeholder="ca-pub-7971530223412"
          required
          type="text"
          {...register("client", {
            required: true,
          })}
          defaultValue={monetize.client}
        />
      </fieldset>
      <fieldset className="flex center gap-10 js">
        <label className="">Data ad Slot</label>
        <input
          placeholder="21342392052"
          required
          type="text"
          {...register("slot", {
            required: true,
          })}
          defaultValue={monetize.slot}
        />
      </fieldset>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <button
          aria-label="submit"
          id="submit"
          type="submit"
          className="btn fs-12 mt-10 "
        >
          Submit
        </button>
      </div>
    </form>
  );
};

const AuthorInfo = () => {
  const { handleSubmit, register } = useForm();
  const [author, setAuthor] = useLocalStorage<any>(AUTHOR, {
    authorName: "",
    authorUrl: "",
    authorImage: "",
  });
  return (
    <form
      className="flex col gap-10"
      onSubmit={handleSubmit((data) => {
        setAuthor(data), toast.success("Author info updated");
      })}
    >
      <fieldset className="flex gap-10 center js">
        <label className="label">Author name</label>
        <input
          required
          type="text"
          defaultValue={author.authorName}
          {...register("authorName", {
            required: true,
          })}
        />
      </fieldset>
      <fieldset className="flex gap-10 center js">
        <label className="label"> Author Image URL</label>
        <input
          required
          type="url"
          defaultValue={author.authorImage}
          {...register("authorImage", {
            required: true,
          })}
        />
      </fieldset>
      <fieldset className="flex gap-10 center js">
        <label className="label">Author Website</label>
        <input
          required
          type="url"
          defaultValue={author.authorUrl}
          {...register("authorUrl", {
            required: true,
          })}
        />
      </fieldset>
      <button
        aria-label="submit"
        id="submit"
        type="submit"
        className="btn fs-12 m-x"
      >
        Submit
      </button>
    </form>
  );
};

type schemaType = {
  link?: string;
  title: string;
  description: string;
  authorName: string;
  authorUrl: string;
  image: string;
  publisherName: string;
  publisherWebsite: string;
};

const StructuredData = ({
  link,
  title,
  description,
  image,
  authorName,
  authorUrl,
  publisherName,
  publisherWebsite,
}: schemaType) => {
  const elink = slugify(link || title);
  return {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    mainEntityOfPage: elink,
    headline: title,
    description: description,
    author: {
      "@type": "Person",
      name: authorName,

      url: authorUrl,
    },
    publisher: {
      "@type": "Organization",
      name: publisherName,
      url: publisherWebsite,
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

export {
  Schema,
  PublisherInfo,
  AuthorInfo,
  StructuredData,
  Analytics,
  Monetize,
};
