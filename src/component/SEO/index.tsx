import { useForm } from "react-hook-form";
import useLocalStorage from "use-local-storage";

function SEO() {
  const [seo, setSeo] = useLocalStorage("seo", {});

  const { handleSubmit, register } = useForm();
  return (
    <form
      onSubmit={handleSubmit((data) => {
        console.log(data);
      })}
    >
      <fieldset>
        <label>Title</label>
        <input />
      </fieldset>
      <fieldset>
        <label>description</label>
        <input />
      </fieldset>
    </form>
  );
}

export default SEO;

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
    datePublished: datePublished,
    dateModified: dateModified,
    isAccessibleForFree: "http://schema.org/True",
  };
};
