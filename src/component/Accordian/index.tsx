import React, { ForwardedRef } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import classNames from "classnames";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import styles from "./styles.module.css";

type headerType = {
  title: string;
  description: string;
};

const AccordianContainer = ({ header }: { header: headerType[] }) => (
  <Accordion.Root className={styles.AccordionRoot} type="multiple">
    {header.map((el) => (
      <Accordion.Item
        className={styles.AccordionItem}
        key={el.title}
        value={el.title}
      >
        <AccordionTrigger>{el.title}</AccordionTrigger>
        <Accordion.Content className={styles.AccordionContent}>
          <div className={styles.AccordionContentText}>{el.description}</div>
        </Accordion.Content>
      </Accordion.Item>
    ))}
  </Accordion.Root>
);

const AccordionTrigger = React.forwardRef(
  ({ children, className, ...props }: any, forwardedRef: any) => (
    <Accordion.Header
      className={classNames(styles.AccordionHeader, "flex js ")}
    >
      <Accordion.Trigger
        className={classNames(styles.AccordionTrigger, className)}
        {...props}
        ref={forwardedRef}
      >
        {children}
        <ChevronDownIcon className={styles.AccordionChevron} aria-hidden />
      </Accordion.Trigger>
    </Accordion.Header>
  )
);

const AccordionContent = React.forwardRef(
  ({ children, className, ...props }: any, forwardedRef: any) => (
    <Accordion.Content
      className={classNames(styles.AccordionContent, className)}
      {...props}
      ref={forwardedRef}
    >
      <div className={styles.AccordionContentText}>{children}</div>
    </Accordion.Content>
  )
);

export default AccordianContainer;

AccordionTrigger.displayName = "AccordionTrigger";
AccordionContent.displayName = "AccordionContent";
