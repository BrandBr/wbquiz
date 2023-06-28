import css from "./ProgressBar.module.css";

type ProgressBarProps = {
  text: string;
  percent: number; // 100 max
  isVo?: boolean;
};

export const ProgressBar = ({
  text,
  percent,
  isVo = false,
}: ProgressBarProps) => {
  return (
    <div
      className={isVo ? css.barVo : css.bar}
      style={{
        backgroundImage: `linear-gradient(90deg, ${
          isVo ? "#ff690c" : "#deb457"
        } ${percent - 5}%, #e2e2e2 0%)`,
      }}
    >
      <div className={isVo ? css.textVo : css.text}>{text}</div>
    </div>
  );
};
