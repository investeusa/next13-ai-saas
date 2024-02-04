"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

const CRISP_ID = process.env.CRISP_ID?.toString();

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("77552ade-e505-403e-baca-8b1e9fe5523b");
  }, []);

  return null;
};
