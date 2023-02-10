const LeftSidebar = ({
  inter,
  handleSubmit,
  register,
  newState,
  newSelect,
}: {
  inter: any;
  handleSubmit: any;
  register: any;
  newState: any;
  newSelect: any;
}) => {
  return (
    <form
      style={{
        padding: "0px 10px",
        width: "400px",
        height: "100vh",
        position: "absolute",
        right: "0px",
        background: "#eee",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
      className={inter.className}
      onSubmit={handleSubmit((data: any) => console.log(data))}
    >
      <p>Configurations</p>
      <fieldset className="flex js col mt-10  gap-10">
        <label>Change Text</label>
        <textarea
          {...register("content")}
          className={inter.className}
          style={{ minHeight: "200px" }}
          defaultValue={newState[newSelect].text}
        />
      </fieldset>
      <fieldset className="flex js  col mt-10 gap-10">
        <label>Change Image URL </label>
        <input
          {...register("imageUrl")}
          className={inter.className}
          type="url"
          defaultValue={newState[newSelect].image}
        />
      </fieldset>
      <fieldset className="flex js  col mt-10 gap-10">
        <label>Font Size</label>
        <input
          {...register("fontSize")}
          className={inter.className}
          type="number"
          min="14"
          value="16"
        />
      </fieldset>
      <fieldset className="flex js  col mt-10 gap-10">
        <label>CTA Button URL</label>
        <input
          {...register("ctaUrl")}
          className={inter.className}
          type="url"
          value="https://coolhead.in"
        />
      </fieldset>
      <fieldset className="flex js  col  mt-10 gap-10">
        <label>CTA Button text</label>
        <input
          {...register("ctaButton")}
          className={inter.className}
          type="text"
          value="Read more"
        />
      </fieldset>
      <button className="btn" type="submit">
        Save
      </button>
      <button className="btn">Generate Code</button>
    </form>
  );
};

export default LeftSidebar;
