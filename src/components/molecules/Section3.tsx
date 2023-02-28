import Cards from "../atoms/Cards";

const Section3 = () => {
  const List = [
    {
      image: "/static/image/lihatjuga1.png",
      caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo luctus venenatis. Integer rhoncus iaculis quam, et iaculis odio sagittis consequat. In at enim justo. Ut in lacus a sem iaculis accumsan.",
    },
    {
      image: "/static/image/lihatjuga2.png",
      caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo luctus venenatis. Integer rhoncus iaculis quam, et iaculis odio sagittis consequat. In at enim justo. Ut in lacus a sem iaculis accumsan.",
    },
    {
      image: "/static/image/lihatjuga3.png",
      caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo luctus venenatis. Integer rhoncus iaculis quam, et iaculis odio sagittis consequat. In at enim justo. Ut in lacus a sem iaculis accumsan.",
    },
  ];

  return (
    <div>
      {List.map((e, i) => {
        return (
          <Cards key={i} image={e.image} caption={e.caption} desc={e.desc} />
        );
      })}
    </div>
  );
};

export default Section3;
