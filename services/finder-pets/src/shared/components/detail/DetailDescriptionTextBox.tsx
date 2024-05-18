import * as s from "./DetailStyle.css";

interface Props {
  text: string | undefined;
}

const DetailDescriptionTextBox = ({ text }: Props) => {
  return (
    <div>
      <p className={s.detailDescriptionTextBox}>{text}</p>
    </div>
  );
};

export default DetailDescriptionTextBox;
