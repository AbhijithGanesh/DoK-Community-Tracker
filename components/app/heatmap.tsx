import { Heatmap } from "contribution-heatmap";

let ChartContainer = (): JSX.Element => {
  return (
    <>
      <section className="w-min">
        <Heatmap
          colour={["#ebedf0", "#c6e48b", "#40c463", "#30a14e", "#216e39"]}
          squareNumber={5}
          count={[1,2,23,4,5]}
        />
      </section>
    </>
  );
};

export default ChartContainer;
