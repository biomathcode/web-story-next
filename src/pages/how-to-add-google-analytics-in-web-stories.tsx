import CodeBlock from "@/component/Codeblock";
import Footer from "@/component/Footer";
import { AMP_ANALYTICS } from "@/lib";

function Blog() {
  return (
    <main className="flex center col jc gap-10 inter m-20">
      <article className="flex ">
        <section
          className="flex col gap-10 mt-10"
          style={{
            maxWidth: "600px",
            minWidth: "240px",
            padding: "20px",
          }}
        >
          <h1> How to add google analytics in web Stories ?</h1>
          <CodeBlock language="html" code={AMP_ANALYTICS("#G-tag")} />
        </section>
      </article>
      <Footer />
    </main>
  );
}

export default Blog;
