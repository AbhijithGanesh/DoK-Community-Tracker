import { Heatmap } from "contribution-heatmap";

type ChartProps = {
  squares: number;
  size: string;
  gap: string;
  count: Array<number>;
};

let ChartContainer = ({
  squares,
  size,
  gap,
  count,
}: ChartProps): JSX.Element => {
  return (
    <>
      <section className="w-min">
        <Heatmap
          colour={["#ebedf0", "#c6e48b", "#40c463", "#30a14e", "#216e39"]}
          squareNumber={squares}
          count={count}
          squareSize={size}
          squareGap={gap}
        />
      </section>
    </>
  );
};

export default ChartContainer;
