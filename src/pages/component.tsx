import InfoCarousel from "@/component/InfoCarousel";

function Component() {
  const info = [
    "This is the first info",
    "this is the second info",
    "this is the third info",
  ];
  return (
    <div>
      <InfoCarousel info={info} />
    </div>
  );
}

export default Component;
