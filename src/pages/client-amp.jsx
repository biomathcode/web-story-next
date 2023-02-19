import { useEffect } from "react";
import useLocalStorage from "use-local-storage";

export const config = {
  amp: true,
};

const newData = [
  {
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",

    text: "   How to create Avatar Maker in Next JS and React ?",
  },
  {
    image:
      "https://images.unsplash.com/photo-1554595666-19ceabf46a84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    text: "This can be anything but this is this!!",
  },
  {
    image:
      "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    text: "This is John Cena",
  },
];

function ClientAmp({ info }) {
  const [data, setData] = useLocalStorage("state", []);

  console.log(info);

  console.log(data);
  useEffect(() => {
    const data = window.localStorage.getItem("state");
    console.log(data);
  }, []);
  return (
    data && (
      <>
        <amp-story
          standalone=""
          title="this is an amp story"
          publisher="Coolhead"
          publisher-logo-src="https://coolhead.in/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1621680626975%2FDf9DaCPLu.jpeg%3Fw%3D400%26h%3D400%26fit%3Dcrop%26crop%3Dfaces%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=828&q=75"
          poster-portrait-src="https://images.unsplash.com/photo-1500099817043-86d46000d58f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MDYxOTZ8MHwxfHNlYXJjaHwxfHxzb21ldGhpbmclMjBuZXclMjBhbmQlMjBncmVhdHxlbnwwfDF8fHwxNjc2NjUwNTk5&ixlib=rb-4.0.3&q=80&w=400"
        >
          {newData.map((el) => {
            return (
              <amp-story-page id="something new" key={el.image}>
                <amp-story-grid-layer template="fill">
                  <amp-img
                    animate-in="fly-in-top"
                    src={el.image}
                    width="720"
                    height="1280"
                    layout="responsive"
                  ></amp-img>
                </amp-story-grid-layer>
                <amp-story-grid-layer template="thirds">
                  <h1
                    animate-in="fly-in-top"
                    grid-area="lower-third"
                    animate-in-delay="0.4s"
                    style={{
                      color: "#fff",
                    }}
                  >
                    {el.text}
                  </h1>
                </amp-story-grid-layer>
              </amp-story-page>
            );
          })}
          {data?.map((el) => {
            return (
              <amp-story-page id={i} key={i}>
                <amp-story-grid-layer template="fill">
                  <amp-img
                    src={
                      el.image ||
                      "https://images.unsplash.com/photo-1500099817043-86d46000d58f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MDYxOTZ8MHwxfHNlYXJjaHwxfHxzb21ldGhpbmclMjBuZXclMjBhbmQlMjBncmVhdHxlbnwwfDF8fHwxNjc2NjUwNTk5&ixlib=rb-4.0.3&q=80&w=400"
                    }
                    width="360"
                    height="720"
                    layout="fill"
                    animate-in="fade-in"
                  ></amp-img>
                </amp-story-grid-layer>

                <amp-story-grid-layer template="fill">
                  <h1
                    animate-in="fade-in"
                    style={{
                      fontSize: el.fontSize,
                      background: el.background,
                      color: el.color,
                      position: "absolute",
                      marginTop: "50%",
                      top: "50%",
                      height: "fit-content",
                    }}
                  >
                    {el.text}
                  </h1>
                </amp-story-grid-layer>
              </amp-story-page>
            );
          })}
        </amp-story>
      </>
    )
  );
}

ClientAmp.getInitialProps = async (ctx) => {
  return { info: "this" };
};

export default ClientAmp;
