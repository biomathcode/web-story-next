import InfoCarousel from "@/component/InfoCarousel";
import { AuthorInfo, PublisherInfo, SEO } from "@/component/SEO/index";

function Component() {
  const info = [
    "This is the first info",
    "this is the second info",
    "this is the third info",
  ];
  return (
    <div className="flex center jc col gap-10" style={{ width: "100vw" }}>
      <div className="flex col gap-10 p-10">
        <SEO />
        <PublisherInfo />
        <AuthorInfo />
      </div>
    </div>
  );
}

export default Component;
