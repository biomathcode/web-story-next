import SeoArticlePage from "@/component/SeoArticlePage";
import { seoArticles } from "@/lib/seoResources";

export default function CreateGoogleWebStoriesNoLogin() {
  return (
    <SeoArticlePage article={seoArticles["create-google-web-stories-no-login"]} />
  );
}
