import InfoCarousel from "@/component/InfoCarousel";
import { AuthorInfo, PublisherInfo, SEO } from "@/component/SEO/index";

function Component() {
  const info = [
    "This is the first info",
    "this is the second info",
    "this is the third info",
  ];
  return (
    <div>
      <InfoCarousel info={info} />
      <SEO />
      <PublisherInfo />
      <AuthorInfo />
    </div>
  );
}

export default Component;
