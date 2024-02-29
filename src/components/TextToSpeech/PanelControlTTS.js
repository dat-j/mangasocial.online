export default function PanelControlTTS({ isPlay, play, pause, stop }) {
    return (
      <>
        <button
          onClick={() => {
            if (isPlay) {
              pause();
            } else {
              play();
            }
          }}
        >
          {isPlay ? "pause" : "play"}
        </button>
  
        {isPlay && <button onClick={stop}>stop</button>}
      </>
    );
  }