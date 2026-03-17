import { useState, useMemo } from "react";
import "./styles.css";

export default function ProgressBar() {
  const [progress, setProgress] = useState(0);
  const isSmallProgress = progress < 50;

  const increase = () => {
    setProgress((prev) => {
      return Math.min(prev + 10, 100);
    });
  };

  const decrease = () => {
    setProgress((prev) => {
      return Math.max(prev + -10, 0);
    });
  };

  const reset = () => {
    setProgress(0);
  };

  const complete = () => {
    setProgress(100);
  };

  const color = useMemo(() => {
    progress < 30
      ? "red"
      : progress < 50
      ? "orange"
      : progress < 100
      ? "green"
      : "gray";
  }, []);

  return (
    <div className="progress-container">
      <h1>Progress Bar Component</h1>

      <div className="progress-wrapper">
        <div className="progress-bar-outer">
          <div
            className="progress-bar-inner"
            style={{ width: `${progress}%`, backgroundColor: color }}
          >
            {!isSmallProgress ? (
              <span className="progress-text">{progress}%</span>
            ) : null}
          </div>
        </div>
        {isSmallProgress ? (
          <span className="progress-label">{progress}%</span>
        ) : null}
      </div>

      <div className="controls">
        <button
          disabled={progress === 0}
          onClick={decrease}
          className="control-button decrease"
        >
          -10%
        </button>
        <button onClick={reset} className="control-button reset">
          Reset
        </button>
        <button onClick={complete} className="control-button complete">
          Complete
        </button>
        <button
          disabled={progress === 100}
          onClick={increase}
          className="control-button increase"
        >
          +10%
        </button>
      </div>
    </div>
  );
}
