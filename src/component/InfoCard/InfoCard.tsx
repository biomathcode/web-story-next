import * as HoverCard from "@radix-ui/react-hover-card";
import { InfoCircledIcon } from "@radix-ui/react-icons";

import styles from "./InfoCard.module.css";

type InfoCardType = {
  text: string;
};

function InfoCard({ text }: InfoCardType) {
  return (
    <HoverCard.Root openDelay={0} closeDelay={0}>
      <HoverCard.Trigger asChild>
        {/* <a
          className={styles.ImageTrigger}
          href="https://twitter.com/radix_ui"
          target="_blank"
          rel="noreferrer noopener"
        > */}
        <InfoCircledIcon className={styles.Image} fontSize={50} />

        {/* <img
            className="Image normal"
            src="https://pbs.twimg.com/profile_images/1337055608613253126/r_eiMp2H_400x400.png"
            alt="Radix UI"
          /> */}
        {/* </a> */}
      </HoverCard.Trigger>
      <HoverCard.Portal>
        <HoverCard.Content className={styles.HoverCardContent} sideOffset={5}>
          <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 15 }}>
              <div className={styles.Text}>{text}</div>
            </div>
          </div>

          <HoverCard.Arrow className={styles.HoverCardArrow} />
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  );
}

export default InfoCard;
