import InfoCarousel from "@/component/InfoCarousel";
import MultiStep from "@/component/MultiStep";
import { AuthorInfo, PublisherInfo, SEO } from "@/component/SEO/index";

function Component() {
  return (
    <div className="flex center jc col gap-10" style={{ width: "100vw" }}>
      <MultiStep />
    </div>
  );
}

export default Component;
