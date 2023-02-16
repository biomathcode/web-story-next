import React, { ForwardedRef } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import classNames from "classnames";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import styles from "./styles.module.css";

const AccordianContainer = () => (
  <Accordion.Root className={styles.AccordionRoot} type="multiple">
    <Accordion.Item className={styles.AccordionItem} value="item-3">
      <AccordionTrigger>Can it be animated?</AccordionTrigger>
      <Accordion.Content className={styles.AccordionContent}>
        <div className={styles.AccordionContentText}>
          Yes! You can animate the Accordion with CSS or JavaScript.
        </div>
      </Accordion.Content>
    </Accordion.Item>
    <Accordion.Item className={styles.AccordionItem} value="item-2">
      <AccordionTrigger>Can it be animated?</AccordionTrigger>
      <Accordion.Content className={styles.AccordionContent}>
        <div className={styles.AccordionContentText}>
          Yes! You can animate the Accordion with CSS or JavaScript.
        </div>
      </Accordion.Content>
    </Accordion.Item>
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
