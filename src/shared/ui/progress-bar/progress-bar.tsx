import React from "react";
import "./progress-bar.scss";

interface IProgressBarProps {
  value: number;
  children: React.ReactNode;
  onClick?: () => void;
}

export const ProgressBar: React.FC<IProgressBarProps> = ({
  value,
  children,
  onClick,
}) => {
  const styleBar = {
    width: `${value}%`,
    background: value > 30 ? (value > 70 ? "#52B670" : "#5767A7") : "#488799",
  };
  return (
    <div className="progress-bar">
      <span className="bar">
        <span className="progress" style={styleBar}>
          <div className="data-progress">{children}</div>
        </span>
      </span>
    </div>
  );
};
