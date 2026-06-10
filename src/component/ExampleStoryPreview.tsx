import { ExampleStory } from "@/lib/exampleStories";

function ExampleStoryPreview({ story }: { story: ExampleStory }) {
  return (
    <div className="example-phone" aria-label={`${story.title} preview`}>
      {story.slides.map((slide, index) => (
        <article
          className="example-slide"
          key={`${story.slug}-${index}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          {slide.overlay ? <div className="example-slide-overlay" /> : null}
          <p
            style={{
              top: `${slide.textPosition}%`,
              color: slide.color,
              fontSize: `${Math.max(18, slide.fontSize * 0.72)}px`,
              lineHeight: `${Math.max(22, slide.lineHeight * 0.72)}px`,
              textAlign: slide.textAlign as any,
            }}
          >
            <span
              style={{
                background:
                  slide.highlight === "box" || slide.highlight === "mark"
                    ? slide.background
                    : "transparent",
                padding: `${Math.max(6, slide.paddingY * 0.55)}px ${Math.max(
                  8,
                  slide.paddingX * 0.55
                )}px`,
              }}
            >
              {slide.text}
            </span>
          </p>
          {slide.cta ? (
            <a
              className="example-slide-cta"
              href={slide.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {slide.ctaText}
            </a>
          ) : null}
        </article>
      ))}
    </div>
  );
}

export default ExampleStoryPreview;
