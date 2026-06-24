"use client";

import { create } from "zustand";

type LeadFormState = {
  open: boolean;
  preselectedPackage: "basic" | "standard" | "premium" | null;
  openForm: (pkg?: "basic" | "standard" | "premium" | null) => void;
  closeForm: () => void;
};

export const useLeadForm = create<LeadFormState>((set) => ({
  open: false,
  preselectedPackage: null,
  openForm: (pkg = null) => set({ open: true, preselectedPackage: pkg }),
  closeForm: () => set({ open: false, preselectedPackage: null }),
}));
