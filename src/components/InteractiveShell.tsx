"use client";

import { useState, useEffect, useCallback, type ReactNode } from "react";
import Header from "./Header";
import MobileMenu from "./MobileMenu";
import InquiryModal from "./InquiryModal";

type ModalMode = "inquiry" | "video";

export default function InteractiveShell({
  children,
}: {
  children: ReactNode;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<ModalMode>("inquiry");

  const openInquiry = useCallback(() => {
    setModalMode("inquiry");
    setModalOpen(true);
  }, []);

  const openVideo = useCallback(() => {
    setModalMode("video");
    setModalOpen(true);
  }, []);

  const closeModal = useCallback(() => setModalOpen(false), []);
  const toggleMenu = useCallback(() => setMenuOpen((prev) => !prev), []);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    document.body.style.overflow = menuOpen || modalOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen, modalOpen]);

  return (
    <>
      <Header
        menuOpen={menuOpen}
        onToggleMenu={toggleMenu}
        onOpenInquiry={openInquiry}
      />
      <MobileMenu open={menuOpen} onClose={closeMenu} />
      {children}
      <InquiryModal open={modalOpen} mode={modalMode} onClose={closeModal} />
    </>
  );
}
