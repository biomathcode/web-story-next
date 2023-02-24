import { AuthorInfo, PublisherInfo, SEO } from "@/component/SEO/index";

function Component() {
  return (
    <div className="flex center jc col gap-10">
      <SEO />
      <hr style={{ width: "400px" }} />
      <PublisherInfo />
      <hr style={{ width: "400px" }} />

      <AuthorInfo />
    </div>
  );
}

export default Component;
