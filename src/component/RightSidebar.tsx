import Droppable from "./Droppable";
import * as Tabs from "@radix-ui/react-tabs";

import UnsplashContainer from "./Unsplash";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import { useTasks } from "@/context/data";
import { CalendarPlaceHolder } from "./Icons";
import {
  FileTextIcon,
  RocketIcon,
} from "@radix-ui/react-icons";
import LearnMoreLinks from "./LearnMoreLinks";
import { editorLearnLinks } from "@/lib/seoResources";

const EmptyContentOnboarding = () => {
  const focusSourceInput = () => {
    document.getElementById("username")?.focus();
  };

  return (
    <div className="side-onboarding">
      <div className="feature-hint">
        <div className="feature-hint-icon">
          <FileTextIcon />
        </div>
        <div>
          <span className="new-badge">Start here</span>
          <h2>Start with a draft</h2>
          <p>
            Paste an article URL, then drag extracted text and images into the
            story canvas.
          </p>
        </div>
      </div>
      <button className="onboarding-step-card" type="button" onClick={focusSourceInput}>
        <FileTextIcon />
        <span>
          <b>Add article source</b>
          <small>Paste a page URL to extract text and images.</small>
        </span>
      </button>
      <div className="onboarding-step-card muted">
        <RocketIcon />
        <span>
          <b>Publish markup</b>
          <small>Open Publish after adding author and SEO details.</small>
        </span>
      </div>
    </div>
  );
};

const TemplateComponent = () => {
  const getData = useTasks();

  return (
    <div className="flex col gap-10 scroll" style={{ overflow: "auto" }}>
      {getData.map((el) => (
        <Droppable
          data={el}
          type="template"
          href={"Lorem ipsum"}
          key={el.id}
          id={el.id}
        />
      ))}
      {getData.length === 0 && (
        <div className="flex col gap-10 center">
          {" "}
          <CalendarPlaceHolder /> <p className="label">No templates found</p>
        </div>
      )}
    </div>
  );
};

const RightSidebar = ({ content }: { content: any }) => {
  return (
    <Tabs.Root
      className="TabsRoot rightSidebar"
      defaultValue="tab1"
      style={{ overflow: "auto", width: "100%" }}
    >
      <Tabs.List className="TabsList scroll" aria-label="Manage your account">
        <Tabs.Trigger className="TabsTrigger" id="content-tab-trigger" value="tab1">
          Content
        </Tabs.Trigger>
        <Tabs.Trigger
          className="TabsTrigger"
          id="unsplash-tab-trigger"
          value="tab2"
        >
          Unsplash
        </Tabs.Trigger>
        <Tabs.Trigger
          className="TabsTrigger"
          id="template-tab-trigger"
          value="tab3"
        >
          Template
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content
        value="tab3"
        className="scroll"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          maxHeight: "calc(100vh - 150px ) ",

          overflow: "scroll",

          // maxWidth: "300px",

          minWidth: "150px",
          padding: "10px 20px",
        }}
      >
        <TemplateComponent />
        <LearnMoreLinks links={editorLearnLinks.template} />
      </Tabs.Content>
      <Tabs.Content
        className="unsplash-tab"
        value="tab2"
      >
        <ScrollArea.Root className="unsplash-scroll-root">
          <ScrollArea.Viewport className="unsplash-scroll-viewport">
            <UnsplashContainer />
            <LearnMoreLinks links={editorLearnLinks.unsplash} />
          </ScrollArea.Viewport>
        </ScrollArea.Root>
      </Tabs.Content>
      <Tabs.Content
        value="tab1"
        className="scroll"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          maxHeight: "calc(100vh - 150px ) ",

          overflow: "scroll",

          // maxWidth: "300px",

          minWidth: "150px",
          padding: "10px 20px",
        }}
      >
        {content.length > 0
          ? content.map((el: any, i: any) => {
              // three types content, code, image
              if (el?.raw?.match(/!\[(.*)\]\((.+)\)/g) && el?.type !== "list") {
                return (
                  <Droppable
                    data={el}
                    type="image"
                    href={el?.tokens[0]?.href || el.tokens[1]?.href}
                    key={i}
                    id={i}
                  />
                );
              } else {
                return (
                  el?.text?.length > 3 && (
                    <Droppable
                      data={el}
                      type="text"
                      href={el.text}
                      key={i}
                      id={i}
                    />
                  )
                );
              }
            })
          : null}
        {content.length === 0 && <EmptyContentOnboarding />}
        <LearnMoreLinks links={editorLearnLinks.content} />
      </Tabs.Content>
    </Tabs.Root>
  );
};

export default RightSidebar;
