import { CellOptions } from "../types";

interface Props {
  type: CellOptions;
}

const Cell = ({ type }: Props) => {
  return <div className={`cell ${type} `}></div>;
};

export default Cell;
