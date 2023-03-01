import {
  BackpackIcon,
  ColorWheelIcon,
  FileIcon,
  FontSizeIcon,
  GearIcon,
  LineHeightIcon,
  PlusCircledIcon,
  SpaceBetweenHorizontallyIcon,
  SpaceBetweenVerticallyIcon,
  TextAlignBottomIcon,
  TextIcon,
} from "@radix-ui/react-icons";
import * as Tabs from "@radix-ui/react-tabs";

import { AnimationOptions } from "@/lib";
import Model from "./Model/Model";
import { authorType, publisherType, seoType, state } from "@/pages/index";

import Toggle from "./Toggle/Toggle";
import ColorComponent from "./ColorComponent";

import FullModel from "./FullModel";
import { AuthorInfo, PublisherInfo, Schema } from "./SEO";
import Component from "@/component/AnalyticView";
import MonetiseComponent from "@/component/MonetizeView";
import FormBox from "./FormBox";
import SliderComponent from "./SliderComponent";
import classname from "classnames";
import useLocalStorage from "use-local-storage";
import { AUTHOR, PUBLISHER, SCHEMA } from "@/lib/constants";
import InputComponent from "./InputComponent";
import Alert from "./Alert";
import { nanoid } from "nanoid";

const LeftSidebar = ({
  inter,
  newState,
  newSelect,
  setNewState,
}: {
  inter: any;
  newState: state[];
  newSelect: any;
  setNewState: any;
}) => {
  function handleChange(e: any) {
    console.log(e);
    const state = newState.map((el: any, i: any) => {
      const newObject: any = {
        text: {
          ...el,
          text: e.target.value,
        },
        textAlign: {
          ...el,
          textAlign: e.target.value,
        },
        color: {
          ...el,
          color: e.target.value,
        },
        highlight: {
          ...el,
          highlight: e.target.value === "Box" ? "box" : "mark",
        },
        background: {
          ...el,
          background: e.target.value,
        },
        fontSize: {
          ...el,
          fontSize: e.target.value,
        },
        cta: {
          ...el,
          cta: e.target.value,
        },
        url: {
          ...el,
          url: e.target.value,
        },
        ctaText: {
          ...el,
          ctaText: e.target.value,
        },
        lineHeight: {
          ...el,
          lineHeight: e.target.value,
        },
        textPosition: {
          ...el,
          textPosition: e.target.value,
        },
        paddingX: {
          ...el,
          paddingX: e.target.value,
        },
        paddingY: {
          ...el,
          paddingY: e.target.value,
        },
        textAnimation: {
          ...el,
          textAnimation: e.target.value,
        },
        imageAnimation: {
          ...el,
          imageAnimation: e.target.value,
        },
        overlay: {
          ...el,
          overlay: e.target.value,
        },
      };

      return i === newSelect ? newObject[e.target.name] : el;
    });

    console.log("new state", state);

    setNewState(state);
  }

  const [template, setTemplate] = useLocalStorage("template", [
    {
      name: "",
      id: nanoid(),
      paddingX: 10,
      paddingY: 10,
      fontSize: 24,
      textPosition: 36,
      textAlign: "center",
      color: "",
      lineHeight: 28,
      background: "",
      highlight: "box",
      cta: false,
      url: "",
      ctaText: "",
      textAnimation: "drop",
      imageAnimation: "drop",
      overlay: true,
    },
  ]);

  const [author, setAuthor] = useLocalStorage<authorType>(AUTHOR, {
    authorName: "",
    authorUrl: "",
    authorImage: "",
  });

  const [publisher, setPublisher] = useLocalStorage<publisherType>(PUBLISHER, {
    websiteUrl: "",
    websiteName: "",
    websiteLogo: "",
  });

  const [schema, setSchema] = useLocalStorage<seoType>(SCHEMA, {
    title: "",
    description: "",
    image: "",
  });

  const createNewTemplate = ({
    name,
    fontSize,
    lineHeight,
    textPosition,
    textAlign,
    color,
    background,
    highlight,
    textAnimation,
    imageAnimation,
    overlay,
    cta,
    url,
    ctaText,
    paddingX,
    paddingY,
  }) => {
    setTemplate([
      ...template,
      {
        name: name,
        id: nanoid(),
        fontSize,
        lineHeight,
        textPosition,
        textAlign,
        color,
        background,
        highlight,
        textAnimation,
        imageAnimation,
        overlay,
        cta,
        url,
        ctaText,
        paddingX,
        paddingY,
      },
    ]);
  };

  const isEmpty = (object) =>
    Object.values(object).every((x) => x === null || x === "");

  const isValid = !isEmpty(author) && !isEmpty(schema) && !isEmpty(publisher);

  return (
    <div
      className="flex col  js"
      style={{
        height: "80vh",
        justifyContent: "space-between",
        background: "#eee",
      }}
    >
      <Tabs.Root
        className="TabsRoot"
        defaultValue="tab1"
        style={{ width: "100%" }}
      >
        <Tabs.List className="TabsList scroll" aria-label="Manage your account">
          <Tabs.Trigger className="TabsTrigger" value="tab1">
            Styles
          </Tabs.Trigger>
          <Tabs.Trigger className="TabsTrigger" value="tab2">
            Animation
          </Tabs.Trigger>
          <Tabs.Trigger className="TabsTrigger" value="tab3">
            CTA
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content
          className="scroll"
          value="tab3"
          style={{
            padding: "10px 10px",
            margin: "0px px",

            width: "100%",
            maxHeight: "calc(90vh - 150px ) ",

            right: "0px",
            background: "#eee",

            gap: "10px",
            fontSize: "14px",
          }}
        >
          <Toggle
            key={"Cta"}
            infoText="You can only add one CTA per page"
            label="Call to Action"
            name="cta"
            onChange={handleChange}
            value={newState[newSelect]?.cta === true ? "true" : "false"}
          />

          <div>
            {newState[newSelect]?.cta ? (
              <>
                <fieldset className="flex js  col mt-10 gap-10">
                  <label htmlFor="url" className="label">
                    CTA Button URL
                  </label>

                  <input
                    id="url"
                    aria-label="CTA button url "
                    onChange={(e) => handleChange(e)}
                    name="url"
                    className={inter.className}
                    type="url"
                    value={newState[newSelect]?.url}
                  />
                </fieldset>
                <fieldset className="flex js  col  mt-10 gap-10">
                  <label htmlFor="ctaText" className="label">
                    CTA Button text
                  </label>
                  <input
                    id="ctaText"
                    aria-label="CTA button text"
                    onChange={(e) => handleChange(e)}
                    name="ctaText"
                    className={inter.className}
                    type="text"
                    value={newState[newSelect]?.ctaText}
                  />
                </fieldset>
              </>
            ) : null}
          </div>
        </Tabs.Content>
        <Tabs.Content
          style={{
            padding: "10px 10px",
            margin: "0px px",
            overflow: "scroll",

            width: "100%",
            maxHeight: "calc(90vh - 150px ) ",

            right: "0px",
            background: "#eee",
            display: "flex",
            flexDirection: "column",

            gap: "10px",
            fontSize: "14px",
          }}
          value="tab2"
          className="scroll"
        >
          <fieldset className="flex js  col  mt-10 gap-10">
            <label htmlFor="textAnimation" className="label">
              Text Animation
            </label>
            <select
              id="textAnimation"
              aria-label="text animation"
              name="textAnimation"
              value={newState[newSelect]?.textAnimation}
              onChange={(e) => handleChange(e)}
            >
              {AnimationOptions.map((el) => (
                <option value={el.value} key={el.value}>
                  {el.label}
                </option>
              ))}
            </select>
          </fieldset>
          <fieldset className="flex js  col  mt-10 gap-10">
            <label htmlFor="imageAnimation" className="label">
              Image Animation
            </label>
            <select
              id="imageAnimation"
              aria-label="image animation"
              name="imageAnimation"
              value={newState[newSelect]?.imageAnimation}
              onChange={(e) => handleChange(e)}
            >
              {AnimationOptions.map((el) => (
                <option value={el.value} key={el.value}>
                  {el.label}
                </option>
              ))}
            </select>
          </fieldset>
        </Tabs.Content>

        <Tabs.Content
          style={{
            paddingBottom: "30px",

            width: "100%",

            maxHeight: "calc(90vh - 150px ) ",

            right: "0px",
            background: "#eee",
            display: "flex",
            flexDirection: "column",
            padding: "10px",

            gap: "10px",
            fontSize: "14px",
          }}
          className={classname(inter.className, "scroll")}
          value="tab1"
        >
          <div className="flex gap-10 col">
            <fieldset className="flex js col mt-10  gap-10">
              <label
                htmlFor="text"
                aria-label="Change Text"
                className="label flex gap-10 center"
              >
                Change Text
                <TextIcon />
              </label>

              <textarea
                id="text"
                name="text"
                className={inter.className}
                style={{ minHeight: "70px" }}
                value={newState[newSelect]?.text}
                onChange={(e) => handleChange(e)}
              />
            </fieldset>

            <fieldset className="flex js center">
              <label htmlFor="color" className="label flex gap-10 center">
                Text Color
                <ColorWheelIcon />
              </label>
              <ColorComponent
                colorValue={newState[newSelect]?.color}
                setColorValue={handleChange}
                name="color"
              />
            </fieldset>
            <fieldset className="flex js center">
              <label htmlFor="background" className="label flex gap-10 center">
                Background
                <ColorWheelIcon />
              </label>
              <ColorComponent
                colorValue={newState[newSelect]?.background}
                setColorValue={handleChange}
                name="background"
              />
            </fieldset>
            <fieldset className="flex js center">
              <label
                aria-label="textAlign"
                htmlFor="textAlign"
                className="label flex gap-10 center"
              >
                Text Align
                <TextAlignBottomIcon />
              </label>
              <select
                id="textAlign"
                name="textAlign"
                onChange={(e) => handleChange(e)}
                value={newState[newSelect]?.textAlign}
              >
                <option>left</option>

                <option>center</option>
                <option>right</option>
              </select>
            </fieldset>
            <fieldset className="flex js center">
              <label htmlFor="highlight" className="label">
                Text Highlight
              </label>
              <select
                aria-label="highlight"
                id="highlight"
                name="highlight"
                onChange={(e) => handleChange(e)}
                value={
                  newState[newSelect]?.highlight === "box" ? "Box" : "Marked"
                }
              >
                <option>Box </option>
                <option>Marked</option>
              </select>
            </fieldset>

            <Toggle
              key="Overlay"
              infoText="Overlay will have a transparent gray gradient from top to bottom. This will increase contrast between the image and text "
              label="Overlay"
              name="overlay"
              onChange={handleChange}
              value={newState[newSelect]?.overlay === true ? "true" : "false"}
            />

            <fieldset className="flex js  center mt-10 gap-10">
              <label
                htmlFor="fontSize"
                aria-label="font Size"
                className="label flex center gap-10"
              >
                Font Size
                {/* <FontSizeIcon /> */}
              </label>
              <InputComponent
                name="fontSize"
                label="fontSize"
                onchange={handleChange}
                type="number"
                value={String(newState[newSelect]?.fontSize)}
                icon={<FontSizeIcon />}
              />
            </fieldset>
            <fieldset className="flex js  center mt-10 gap-10">
              <label
                aria-label="Line height"
                htmlFor="lineHeight"
                className="label flex center gap-10"
              >
                Line height
                {/* <LineHeightIcon /> */}
              </label>
              <InputComponent
                name="lineHeight"
                label="lineHeight"
                onchange={handleChange}
                type="number"
                value={String(newState[newSelect]?.lineHeight)}
                icon={<LineHeightIcon />}
              />
              {/* <input
                id="lineHeight"
                onChange={(e) => handleChange(e)}
                name="lineHeight"
                className={inter.className}
                type="number"
                min="1"
                max="100"
                value={newState[newSelect]?.lineHeight}
              /> */}
            </fieldset>

            <fieldset className="flex js center">
              <label
                htmlFor="textPosition"
                className="label flex gap-10 center"
              >
                Text Position
              </label>
              <InputComponent
                name="textPosition"
                label="textPosition"
                onchange={handleChange}
                type="number"
                value={String(newState[newSelect]?.textPosition)}
                icon={<TextIcon />}
              />

              {/* <input
                id="textPosition"
                onChange={(e) => handleChange(e)}
                className={inter.className}
                name="textPosition"
                type="number"
                min="0"
                max="100"
                value={newState[newSelect]?.textPosition}
              /> */}
            </fieldset>

            <fieldset className="flex js center">
              <label htmlFor="paddingX" className="label flex gap-10 center">
                Padding Horizontal
              </label>
              <InputComponent
                name="paddingX"
                label="paddingX"
                onchange={handleChange}
                type="number"
                value={String(newState[newSelect]?.paddingX)}
                icon={<SpaceBetweenHorizontallyIcon />}
              />
            </fieldset>

            <fieldset className="flex js center">
              <label htmlFor="paddingY" className="label flex gap-10 center">
                Padding Vertical
              </label>

              <InputComponent
                name="paddingY"
                label="paddingY"
                onchange={handleChange}
                type="number"
                value={String(newState[newSelect]?.paddingY)}
                icon={<SpaceBetweenVerticallyIcon />}
              />
            </fieldset>

            {/* <SliderComponent
              value={newState[newSelect].fontSize}
              onChange={handleChange}
              name="slider"
              label="slider"
            /> */}
          </div>
        </Tabs.Content>
      </Tabs.Root>
      <div className="flex jc col   p-10 gap-10 center">
        {/* Analytics, Monetisation */}
        <Alert
          icon={<PlusCircledIcon />}
          triggerName="Make Template"
          action={(e) =>
            createNewTemplate({
              ...newState[newSelect],
              name: "new Template",
            })
          }
          actionName="createTemplate"
          title="Give your template a name"
          description="Give your font setting a name, it will help your remember it"
        />
        <div className="flex gap-10">
          <FullModel triggerName="Settings" icon={<GearIcon />}>
            <div className="flex col gap-10 center">
              <Component />
              <MonetiseComponent />
            </div>
          </FullModel>

          <FullModel triggerName="Publish" icon={<BackpackIcon />}>
            <FormBox isValid={!isEmpty(author)} title="Author Information">
              <AuthorInfo author={author} setAuthor={setAuthor} />
            </FormBox>
            <FormBox
              isValid={!isEmpty(publisher)}
              title="Publication Information"
            >
              <PublisherInfo
                publisher={publisher}
                setPublisher={setPublisher}
              />
            </FormBox>
            <FormBox isValid={!isEmpty(schema)} title="Structured Data ">
              <Schema schema={schema} setSchema={setSchema} />
            </FormBox>

            <div className="flex" style={{ justifyContent: "center" }}>
              <Model isValid={isValid} />
            </div>
          </FullModel>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default LeftSidebar;
