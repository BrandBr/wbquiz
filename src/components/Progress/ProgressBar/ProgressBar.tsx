import css from "./ProgressBar.module.css";

type ProgressBarProps = {
  text: string;
  percent: number; // 100 max
};

export const ProgressBar = ({ text, percent }: ProgressBarProps) => {
  console.log(`linear-gradient(90deg, #deb457 ${percent}, #e2e2e2 0%)`);
  return (
    <div
      className={css.bar}
      style={{
        backgroundImage: `linear-gradient(90deg, #deb457 ${
          percent - 5
        }%, #e2e2e2 0%)`,
      }}
    >
      <div className={css.text}>{text}</div>
    </div>
  );
};
