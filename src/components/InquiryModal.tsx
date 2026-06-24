"use client";

import { useState, useEffect, useRef } from "react";

interface InquiryModalProps {
  open: boolean;
  mode: "inquiry" | "video";
  onClose: () => void;
}

export default function InquiryModal({
  open,
  mode,
  onClose,
}: InquiryModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (open) closeRef.current?.focus();
  }, [open]);

  useEffect(() => {
    if (!open) setSubmitted(false);
  }, [open]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  const isVideo = mode === "video";

  return (
    <div
      className={`modal${open ? " open" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="inquiryTitle"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal-box">
        <button
          className="modal-close"
          ref={closeRef}
          aria-label="Close enquiry form"
          onClick={onClose}
        >
          ×
        </button>
        <p className="eyebrow">
          {isVideo ? "Brand film" : "Private appointments"}
        </p>
        <h2 className="display" id="inquiryTitle">
          {isVideo ? "Aurelia in motion." : "Begin your enquiry."}
        </h2>
        <p>
          {isVideo
            ? "This prototype uses a cinematic still instead of an embedded brand film."
            : "Share your details and an Aurelia advisor will arrange a private conversation."}
        </p>
        {!isVideo && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            <div className="form-grid">
              <input required aria-label="Full name" placeholder="Full name" />
              <input
                required
                type="email"
                aria-label="Email address"
                placeholder="Email address"
              />
              <input aria-label="Phone number" placeholder="Phone number" />
              <select aria-label="Area of interest">
                <option>Area of interest</option>
                <option>Arca Valley</option>
                <option>Future collections</option>
                <option>Investment consultation</option>
              </select>
              <input
                className="full"
                aria-label="Message"
                placeholder="Tell us what you are looking for"
              />
            </div>
            <button className="submit-btn" type="submit" disabled={submitted}>
              {submitted
                ? "Thank you — enquiry received"
                : "Send private enquiry"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
