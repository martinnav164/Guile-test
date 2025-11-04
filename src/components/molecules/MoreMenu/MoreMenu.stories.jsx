import React from "react";
import { MoreMenu } from "./MoreMenu";

const Phone = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path
      d="M6 2h4l1 5-3 2a16 16 0 007 7l2-3 5 1v4c0 1-1 2-2 2A18 18 0 014 4c0-1 1-2 2-2z"
      fill="currentColor"
    />
  </svg>
);
const Direction = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path
      d="M12 2l10 10-10 10L2 12 12 2zm0 5v6h6"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
  </svg>
);
const Refresh = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M20 12a8 8 0 10-2.34 5.66" stroke="currentColor" strokeWidth="2" />
    <path d="M20 7v5h-5" stroke="currentColor" strokeWidth="2" />
  </svg>
);
const Like = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path
      d="M14 9V5l-5 6v8h9l2-7V9h-6z"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);
const Check = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M20 6l-11 11-5-5" stroke="currentColor" strokeWidth="2" />
  </svg>
);
const Trash = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path
      d="M3 6h18M8 6l1-2h6l1 2m-1 0v14H7V6"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);
const Edit = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path
      d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25z"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

export default {
  title: "Molecules/MoreMenu",
  component: MoreMenu,
  parameters: {
    layout: "centered",
    backgrounds: { default: "dark", values: [{ name: "dark", value: "#000" }] },
  },
};

export const Barber_Open = () => (
  <MoreMenu
    openOnMount
    items={[
      { id: "call", icon: Phone, label: "call malik" },
      { id: "dir", icon: Direction, label: "get directions" },
    ]}
  />
);

export const Appointments_Open = () => (
  <MoreMenu
    openOnMount
    items={[
      { id: "reschedule", icon: Refresh, label: "reschedule" },
      { id: "review", icon: Like, label: "leave a review" },
      { id: "call", icon: Phone, label: "call malik" },
    ]}
  />
);

export const Wallet_Open = () => (
  <MoreMenu
    openOnMount
    items={[
      { id: "default", icon: Check, label: "set by default" },
      { id: "remove", icon: Trash, label: "remove" },
    ]}
  />
);

export const Address_Open_AlignedStart = () => (
  <MoreMenu
    align="start"
    openOnMount
    items={[
      { id: "edit", icon: Edit, label: "edit" },
      { id: "remove", icon: Trash, label: "remove" },
    ]}
  />
);
