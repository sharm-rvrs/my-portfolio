import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot } from "lucide-react";

const SUGGESTIONS = [
  "What's your tech stack?",
  "Tell me about your projects",
  "Are you available for hire?",
  "What's your experience?",
];

const GREETING = {
  role: "assistant",
  content:
    "Hi! I'm Sharmaine's AI assistant. Ask me anything about her background, projects, or skills.",
};

function TypingDots() {
  return (
    <div style={{ display: "flex", gap: 4, alignItems: "center", padding: "12px 14px" }}>
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          style={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: "var(--muted2)",
            display: "inline-block",
            animation: `chatDot 1.2s ${i * 0.2}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

function Message({ msg }) {
  const isUser = msg.role === "user";
  return (
    <div
      style={{
        display: "flex",
        justifyContent: isUser ? "flex-end" : "flex-start",
        marginBottom: 10,
      }}
    >
      {!isUser && (
        <div
          style={{
            width: 26,
            height: 26,
            borderRadius: "50%",
            background: "var(--accent-light)",
            border: "1px solid rgba(200,149,90,0.25)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            marginRight: 8,
            marginTop: 2,
          }}
        >
          <Bot size={13} color="var(--accent)" />
        </div>
      )}
      <div
        style={{
          maxWidth: "78%",
          padding: "10px 13px",
          borderRadius: isUser ? "14px 14px 4px 14px" : "14px 14px 14px 4px",
          background: isUser ? "var(--accent)" : "var(--surface2)",
          color: isUser ? "var(--bg)" : "var(--text)",
          fontSize: 13,
          lineHeight: 1.65,
          fontWeight: isUser ? 500 : 300,
          border: isUser ? "none" : "1px solid var(--border)",
          whiteSpace: "pre-wrap",
          wordBreak: "break-word",
        }}
      >
        {msg.content}
      </div>
    </div>
  );
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([GREETING]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (open) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open, messages]);

  const send = async (text) => {
    const content = (text ?? input).trim();
    if (!content || loading) return;

    setShowSuggestions(false);
    const userMsg = { role: "user", content };
    const next = [...messages, userMsg];
    setMessages(next);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      const data = await res.json();
      setMessages([
        ...next,
        {
          role: "assistant",
          content: data.reply ?? "Sorry, I couldn't get a response right now.",
        },
      ]);
    } catch {
      setMessages([
        ...next,
        {
          role: "assistant",
          content: "Couldn't connect right now — please try again in a moment.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  return (
    <>
      <style>{`
        @keyframes chatDot {
          0%, 80%, 100% { opacity: 0.25; transform: scale(0.8); }
          40% { opacity: 1; transform: scale(1); }
        }
        @keyframes chatSlideUp {
          from { opacity: 0; transform: translateY(16px) scale(0.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .chat-panel { animation: chatSlideUp 0.22s ease; }
        .chat-send:hover { background: rgba(200,149,90,0.85) !important; }
        .chat-fab:hover { transform: scale(1.08); box-shadow: 0 8px 28px rgba(200,149,90,0.45) !important; }
        .chat-suggestion:hover { border-color: var(--accent) !important; color: var(--accent) !important; }
      `}</style>

      {/* Chat panel */}
      {open && (
        <div
          className="chat-panel"
          style={{
            position: "fixed",
            bottom: 90,
            right: 24,
            width: 360,
            maxWidth: "calc(100vw - 32px)",
            height: 500,
            maxHeight: "calc(100vh - 120px)",
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: 20,
            boxShadow: "0 24px 72px rgba(0,0,0,0.55)",
            display: "flex",
            flexDirection: "column",
            zIndex: 1000,
            overflow: "hidden",
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: "14px 18px",
              borderBottom: "1px solid var(--border)",
              display: "flex",
              alignItems: "center",
              gap: 10,
              background: "var(--surface)",
              flexShrink: 0,
            }}
          >
            <div
              style={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                background: "var(--accent-light)",
                border: "1px solid rgba(200,149,90,0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Bot size={16} color="var(--accent)" />
            </div>
            <div style={{ flex: 1 }}>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  color: "var(--text)",
                  fontWeight: 500,
                  lineHeight: 1.2,
                }}
              >
                Ask about Sharmaine
              </p>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  color: "var(--muted2)",
                  display: "flex",
                  alignItems: "center",
                  gap: 5,
                  marginTop: 2,
                }}
              >
                <span
                  style={{
                    width: 5,
                    height: 5,
                    borderRadius: "50%",
                    background: "#22c55e",
                    display: "inline-block",
                  }}
                />
                online
              </p>
            </div>
            <button
              onClick={() => setOpen(false)}
              style={{
                width: 28,
                height: 28,
                borderRadius: "50%",
                background: "var(--surface2)",
                border: "1px solid var(--border)",
                color: "var(--muted)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--accent)";
                e.currentTarget.style.color = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
                e.currentTarget.style.color = "var(--muted)";
              }}
            >
              <X size={13} />
            </button>
          </div>

          {/* Messages */}
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "16px 14px 8px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {messages.map((msg, i) => (
              <Message key={i} msg={msg} />
            ))}
            {loading && (
              <div style={{ display: "flex", alignItems: "flex-start", marginBottom: 10 }}>
                <div
                  style={{
                    width: 26,
                    height: 26,
                    borderRadius: "50%",
                    background: "var(--accent-light)",
                    border: "1px solid rgba(200,149,90,0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    marginRight: 8,
                    marginTop: 2,
                  }}
                >
                  <Bot size={13} color="var(--accent)" />
                </div>
                <div
                  style={{
                    background: "var(--surface2)",
                    border: "1px solid var(--border)",
                    borderRadius: "14px 14px 14px 4px",
                  }}
                >
                  <TypingDots />
                </div>
              </div>
            )}

            {/* Suggestion chips */}
            {showSuggestions && messages.length <= 1 && !loading && (
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 7,
                  marginTop: 6,
                  paddingLeft: 34,
                }}
              >
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    className="chat-suggestion"
                    onClick={() => send(s)}
                    style={{
                      padding: "5px 11px",
                      borderRadius: "var(--radius-pill)",
                      background: "transparent",
                      border: "1px solid var(--border)",
                      color: "var(--muted)",
                      fontFamily: "var(--font-mono)",
                      fontSize: 11,
                      cursor: "pointer",
                      transition: "all 0.18s",
                    }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div
            style={{
              padding: "12px 14px",
              borderTop: "1px solid var(--border)",
              display: "flex",
              gap: 8,
              alignItems: "flex-end",
              flexShrink: 0,
              background: "var(--surface)",
            }}
          >
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Ask me anything..."
              rows={1}
              style={{
                flex: 1,
                background: "var(--surface2)",
                border: "1px solid var(--border)",
                borderRadius: 12,
                padding: "10px 13px",
                color: "var(--text)",
                fontSize: 13,
                fontFamily: "var(--font-body)",
                resize: "none",
                outline: "none",
                lineHeight: 1.5,
                maxHeight: 96,
                overflowY: "auto",
                transition: "border-color 0.2s",
              }}
              onFocus={(e) => (e.target.style.borderColor = "rgba(200,149,90,0.4)")}
              onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
            />
            <button
              className="chat-send"
              onClick={() => send()}
              disabled={!input.trim() || loading}
              style={{
                width: 38,
                height: 38,
                borderRadius: "50%",
                background:
                  !input.trim() || loading ? "var(--surface2)" : "var(--accent)",
                border: "none",
                cursor: !input.trim() || loading ? "default" : "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                transition: "all 0.2s",
                opacity: !input.trim() || loading ? 0.5 : 1,
              }}
            >
              <Send
                size={15}
                color={!input.trim() || loading ? "var(--muted)" : "var(--bg)"}
              />
            </button>
          </div>
        </div>
      )}

      {/* FAB */}
      <button
        className="chat-fab"
        onClick={() => setOpen((o) => !o)}
        aria-label="Open chat"
        style={{
          position: "fixed",
          bottom: 24,
          right: 24,
          width: 54,
          height: 54,
          borderRadius: "50%",
          background: open ? "var(--surface2)" : "var(--accent)",
          border: open ? "1px solid var(--border)" : "none",
          boxShadow: open
            ? "none"
            : "0 6px 22px rgba(200,149,90,0.35)",
          color: open ? "var(--muted)" : "var(--bg)",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1001,
          transition: "all 0.22s ease",
        }}
      >
        {open ? <X size={20} /> : <MessageCircle size={22} />}
      </button>
    </>
  );
}
