"use client";
import { AppStore, makeStore } from "@/Redux/store";
import React, { PropsWithChildren, useRef } from "react";
import { Provider } from "react-redux";

export default function ReduxProvider({ children }: PropsWithChildren) {
  const storeRef = useRef<AppStore | null>(null);
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }
  return <Provider store={storeRef.current}>{children}</Provider>;
}
