import { slugify } from "@/lib";

import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

function Schema({ schema, setSchema }) {
  const { handleSubmit, register } = useForm();

  return (
    <>
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
        <fieldset className="flex gap-10 col  js">
          <div className="flex col ">
            <label className="fs-14">Title</label>
            <p className="label">
              Required for creating structured data and title in the head tag
            </p>
          </div>
          <input
            defaultValue={schema.title}
            {...register("title")}
            type="text"
            className="inter"
            required
            placeholder="Seo title"
          />
        </fieldset>
        <fieldset className="flex gap-10 col  js">
          <div className="flex col">
            <label className="fs-14">Description</label>
            <p className="label">
              Required for creating structured data and description meta tag
            </p>
          </div>
          <textarea
            defaultValue={schema.description}
            {...register("description")}
            required
            className="inter"
            placeholder="description of your page "
          />
        </fieldset>
        <fieldset className="flex gap-10 col  js">
          <div className="flex col">
            <label className="fs-14">Social Link Thumbnail</label>
            <p className="label">
              Used for link preview on social media. size : 1200 x 630
            </p>
          </div>

          <input
            defaultValue={schema.image}
            {...register("image")}
            className="inter"
            required
            type="url"
            placeholder="social media link Thumbnai "
          />
        </fieldset>
        <div className="flex" style={{ justifyContent: "flex-end" }}>
          <button
            aria-label="submit"
            id="submit"
            className="btn flex fs-12"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

const PublisherInfo = ({ publisher, setPublisher }) => {
  const { handleSubmit, register } = useForm();

  const data = [
    {
      label: "Website URL",
      type: "url",
      value: "websiteUrl",
      description: "Used to create canonical link for webstory.",
      learnmore:
        "https://amp.dev/documentation/components/stories/amp-story#required-markup-for-amp-story",
    },
    {
      label: "Website name",
      type: "string",
      value: "websiteName",
      description: "The name of the Web Story publisher.",
      learnmore: "",
    },
    {
      label: "Website Logo",
      type: "url",
      value: "websiteLogo",
      description:
        "A URL to the Web Story publisher's logo image. The logo image should be larger than or equal to 96x96px and maintain a 1:1 aspect ratio.",
      learnmore:
        "https://amp.dev/documentation/guides-and-tutorials/optimize-and-measure/discovery_web_stories",
    },
  ];
  return (
    <form
      onSubmit={handleSubmit((data: any) => {
        setPublisher(data);
        toast.success("Publisher info updated");
      })}
      className="flex col gap-10"
      style={{
        maxWidth: "500px",
      }}
    >
      {data.map((el) => {
        return (
          <fieldset className="flex gap-10 col  js" key={el.value}>
            <div className="flex col">
              <label className="fs-14">{el.label}</label>
              <p className="label">
                {el?.description} {"  "}
                <a target="_blank" href={el?.learnmore} rel="noreferrer">
                  Learn more
                </a>
              </p>
            </div>
            <input
              className="w-100 inter"
              defaultValue={publisher[el.value]}
              {...register(el.value, {
                required: true,
              })}
              type={el.type}
            />
          </fieldset>
        );
      })}
      <div className="flex" style={{ justifyContent: "flex-end" }}>
        <button
          aria-label="submit"
          id="submit"
          type="submit"
          className="btn fs-12 m-y "
        >
          Submit
        </button>
      </div>
    </form>
  );
};

const Analytics = ({ analytics, setAnalytics }) => {
  const { handleSubmit, register } = useForm();

  return (
    <form
      onSubmit={handleSubmit((data: any) => {
        setAnalytics(data);
        toast.success("Analytics info updated!!");
      })}
      className="mt-10"
    >
      <fieldset className="flex  col gap-10 js">
        <label className="fs-14">Google Analytics G-tag</label>
        <input
          placeholder="GA-124"
          required
          type="text"
          className="inter"
          {...register("gtag", {
            required: true,
          })}
          defaultValue={analytics.gtag}
        />
      </fieldset>
      <div className="flex" style={{ justifyContent: "flex-end" }}>
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

const Monetize = ({ monetize, setMonetize }) => {
  const { handleSubmit, register } = useForm();

  return (
    <form
      className="flex col  gap-10 w-100  mt-10"
      onSubmit={handleSubmit((data: any) => {
        setMonetize(data);
        toast.success("Monetization info updated");
      })}
    >
      <fieldset className="flex  col gap-10 js">
        <label className="fs-14">Data ad client</label>
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
      <fieldset className="flex  col gap-10 js">
        <label className="fs-14">Data ad Slot</label>
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

const AuthorInfo = ({ author, setAuthor }) => {
  const { handleSubmit, register } = useForm();
  // const [author, setAuthor] = useLocalStorage<any>(AUTHOR, {
  //   authorName: "",
  //   authorUrl: "",
  //   authorImage: "",
  // });
  return (
    <form
      className="flex col gap-10"
      onSubmit={handleSubmit((data) => {
        setAuthor(data), toast.success("Author info updated");
      })}
    >
      <fieldset className="flex gap-10  col js inter">
        <div className="flex col  ">
          <label
            aria-label="Author Name"
            htmlFor="authorName"
            className="fs-14"
          >
            Author name
          </label>
          <div className="label">
            Used for structed data to give creative credit to author.{" "}
          </div>
        </div>
        <input
          id="authorName"
          required
          type="text"
          className="inter"
          defaultValue={author.authorName}
          {...register("authorName", {
            required: true,
          })}
        />
      </fieldset>
      <fieldset className="flex gap-10 col js">
        <div className="flex col ">
          <label className="fs-14"> Author Image URL</label>
          <p className="label">Image Profile Picture of the Author</p>
        </div>
        <input
          required
          type="url"
          className="inter"
          defaultValue={author.authorImage}
          {...register("authorImage", {
            required: true,
          })}
        />
      </fieldset>
      <fieldset className="flex gap-10 col js">
        <div className="flex col">
          <label className="fs-14">Author Website</label>
          <p className="label">author website url, used for structured data</p>
        </div>
        <input
          required
          type="url"
          className="inter"
          defaultValue={author.authorUrl}
          {...register("authorUrl", {
            required: true,
          })}
        />
      </fieldset>
      <div className="flex" style={{ justifyContent: "flex-end" }}>
        <button
          aria-label="submit"
          id="submit"
          type="submit"
          className="btn fs-12 m-x"
        >
          Submit
        </button>
      </div>
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
