import supabase, { supbaseDATABASE } from "../lib/supabase";

export default function simple({ story }) {
  console.log(story);
  return (
    <div>
      <h1>Pratik Sharma</h1>
      <p>{JSON.stringify(story)}</p>
    </div>
  );
}
export async function getServerSideProps(context) {
  const { data: story, error } = await supabase
    .from("story")
    .select("*")
    .order("created_at", { ascending: false });

  if (story) {
    console.log(story);
  }
  if (error) throw error;

  return {
    props: { story }, // will be passed to the page component as props
  };
}
