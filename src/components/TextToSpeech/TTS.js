import "./App.css";
import { useEffect, useMemo, useRef, useState } from "react";
import { markTheWords, useTextToSpeech } from "react-speech-highlight";
import PanelControlTTS from "./PanelControlTTS";

export default function TTS(props) {
  const {text} = props;
  const textEl = useRef();
  const lang = "en-US";

  const { controlHL, statusHL, prepareHL, spokenHL } = useTextToSpeech({
    disableSentenceHL: false,
    disableWordHL: false,
    autoScroll: false,
    lang: lang,
  });

  const textHL = useMemo(() => markTheWords(text), [text]);

  return (
    <>
      <div ref={textEl}>
        <div
          dangerouslySetInnerHTML={{
            __html: textHL,
          }}
        ></div>
      </div>

      <PanelControlTTS
        isPlay={statusHL == "play" || statusHL == "calibration"}
        play={() => {
          if (statusHL == "pause") {
            controlHL.resume();
          } else {
            controlHL.play(
              textEl.current
            );
          }
        }}
        pause={controlHL.pause}
        stop={controlHL.stop}
      />
    </>
  );
}