"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("04e3669b-0fa4-461b-80e9-76b816af1eed");
  }, []);

  return null;
};