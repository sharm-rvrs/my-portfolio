import { useEffect, useState } from "react";

const NAME = "SHARMAINE";
const TYPING_SPEED = 260;
const DELETING_SPEED = 200;
const PAUSE_AFTER_TYPING = 2200;

export default function TypingLogo() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursor, setCursor] = useState(true);

  // cursor blink
  useEffect(() => {
    const blink = setInterval(() => {
      setCursor((c) => !c);
    }, 500);
    return () => clearInterval(blink);
  }, []);

  // typing loop
  useEffect(() => {
    let timeout;

    if (!isDeleting && text.length < NAME.length) {
      timeout = setTimeout(() => {
        setText(NAME.slice(0, text.length + 1));
      }, TYPING_SPEED);
    } else if (!isDeleting && text.length === NAME.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, PAUSE_AFTER_TYPING);
    } else if (isDeleting && text.length > 0) {
      timeout = setTimeout(() => {
        setText(NAME.slice(0, text.length - 1));
      }, DELETING_SPEED);
    } else if (isDeleting && text.length === 0) {
      setIsDeleting(false);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting]);

  return (
    <span className="typing-logo">
      {text}
      <span className="cursor">{cursor ? "|" : " "}</span>
    </span>
  );
}
