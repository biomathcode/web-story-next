import Head from "next/head";
import { useAmp } from "next/amp";

export const config = {
  amp: true,
};

const image = [
  "https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2825&q=80",
  "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  "https://images.unsplash.com/photo-1536148935331-408321065b18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  "https://images.unsplash.com/photo-1596003906949-67221c37965c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  "https://images.unsplash.com/photo-1509966756634-9c23dd6e6815?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1076&q=80",
  "https://images.unsplash.com/photo-1554595666-19ceabf46a84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
];

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

export default function IndexPage() {
  const isAmp = useAmp();
  return (
    <>
      <Head>
        <title>new AMP Page ?</title>
        <meta name="title" content="how to create new AMP Page? " />
        <meta
          name="description"
          content="Learn to create AMP page in this visual story"
        />
        <meta property="og:type" content="website" />

        <meta
          property="og:description"
          content="Learn to create AMP page in this visual story"
        />
        <meta
          property="og:url"
          content="https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2825&q=80"
        />

        <link rel="canonical" href="http://www.coolhead.in/new-amp"></link>
      </Head>

      <amp-story
        standalone=""
        title="How to create Avatar Maker in Next JS and React"
        publisher="Coolhead.in"
        publisher-logo-src="https://coolhead.in/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1621680626975%2FDf9DaCPLu.jpeg%3Fw%3D400%26h%3D400%26fit%3Dcrop%26crop%3Dfaces%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=828&q=75"
        poster-portrait-src="https://coolhead.in/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Funsplash%2Ft0Bv0OBQuTg%2Fupload%2Fv1658429127724%2FIOh4hOqD9.jpeg%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=3840&q=75"
        poster-square-src="https://coolhead.in/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Funsplash%2Ft0Bv0OBQuTg%2Fupload%2Fv1658429127724%2FIOh4hOqD9.jpeg%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=3840&q=75"
        poster-landscape-src="https://coolhead.in/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Funsplash%2Ft0Bv0OBQuTg%2Fupload%2Fv1658429127724%2FIOh4hOqD9.jpeg%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=3840&q=75"
      >
        {newData.map((el, i) => {
          return (
            <amp-story-page id={i} key={el.image}>
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
                <div
                  animate-in="fly-in-top"
                  grid-area="lower-third"
                  animate-in-delay="0.4s"
                  style={{
                    color: "#fff",
                  }}
                >
                  {el.text}
                </div>
              </amp-story-grid-layer>
            </amp-story-page>
          );
        })}
      </amp-story>
    </>
  );
}

function getStaticProps() {}
