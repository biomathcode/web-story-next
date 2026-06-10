import {
  ChatBubbleIcon,
  Cross2Icon,
  RocketIcon,
} from "@radix-ui/react-icons";
import * as Popover from "@radix-ui/react-popover";
import Link from "next/link";
import { useState } from "react";
import { Joyride, STATUS, type EventData, type Step } from "react-joyride";

const tourSteps: Step[] = [
  {
    target: "#username",
    content:
      "Paste an article URL here. The tool will pull content that you can turn into a Web Story.",
    skipBeacon: true,
  },
  {
    target: "#search",
    content: "Fetch the article content and images into the editor.",
  },
  {
    target: ".rightSidebar",
    content:
      "This side panel holds your source content, Unsplash search, templates, and SEO learning links.",
  },
  {
    target: "#unsplash-tab-trigger",
    content:
      "Use Unsplash to find vertical images that can become story backgrounds.",
  },
  {
    target: "#template-tab-trigger",
    content:
      "Templates help you start from a structured story layout instead of a blank page.",
  },
  {
    target: ".viewEditor",
    content:
      "This is the story canvas. Drag content here, preview slides, and play animations.",
  },
  {
    target: "#animation",
    content: "Preview the selected slide animation before publishing.",
  },
  {
    target: ".leftSidebar",
    content:
      "Use this panel to edit text, colors, overlays, animations, and call-to-action settings.",
  },
  {
    target: "#style-tab-trigger",
    content:
      "Styles control slide text, contrast, position, spacing, and backgrounds.",
  },
  {
    target: "#animation-tab-trigger",
    content: "Animation controls let you tune how text and images enter a slide.",
  },
  {
    target: "#cta-tab-trigger",
    content:
      "Add a CTA when the Web Story should send readers back to the full article or offer.",
  },
  {
    target: "#Settings",
    content: "Add analytics and monetization settings before export.",
  },
  {
    target: "#Publish",
    content:
      "Add author, publisher, and SEO metadata here, then generate the final story code.",
  },
  {
    target: ".learn-more-card",
    content:
      "Each tab now includes related SEO guides so users can learn while they build.",
  },
];

function OnBoarding() {
  const [open, setOpen] = useState(false);
  const [runTour, setRunTour] = useState(false);

  const focusSourceInput = () => {
    setOpen(false);
    document.getElementById("username")?.focus();
  };

  const startTour = () => {
    setOpen(false);
    setRunTour(true);
  };

  const handleTourEvent = ({ status }: EventData) => {
    if (status === STATUS.FINISHED || status === STATUS.SKIPPED) {
      setRunTour(false);
    }
  };

  return (
    <>
      <Joyride
        continuous
        onEvent={handleTourEvent}
        options={{
          primaryColor: "var(--brand)",
          showProgress: true,
          zIndex: 10000,
        }}
        run={runTour}
        scrollToFirstStep
        steps={tourSteps}
      />
      <Popover.Root open={open} onOpenChange={setOpen}>
        <Popover.Trigger asChild>
          <button className="btn flex gap-10 fs-12" type="button">
            <ChatBubbleIcon />
            Tour Guide
          </button>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content className="onboarding-popover" sideOffset={8}>
            <div className="onboarding-card-head">
              <span className="new-badge">New</span>
              <Popover.Close className="icon-button" aria-label="Close">
                <Cross2Icon />
              </Popover.Close>
            </div>
            <h2>Create a story faster</h2>
            <p>
              Pull article content into the left panel, drag text or images onto
              the canvas, then publish AMP-ready markup with SEO metadata.
            </p>
            <div className="onboarding-actions">
              <button
                className="btn flex center gap-10 fs-12"
                onClick={startTour}
                type="button"
              >
                <ChatBubbleIcon />
                Start tour
              </button>
              <button
                className="btn subtle flex center gap-10 fs-12"
                onClick={focusSourceInput}
                type="button"
              >
                <RocketIcon />
                Add source
              </button>
            </div>
            <Link className="onboarding-link" href="/learn" target="_blank">
              Open the guide
            </Link>
            <Popover.Arrow className="PopoverArrow" />
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </>
  );
}

export default OnBoarding;
