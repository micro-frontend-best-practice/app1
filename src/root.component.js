import React, { useEffect } from "react";
import { publicApiFunction } from "@Amin/api";

export default function Root(props) {
  useEffect(() => {
    publicApiFunction();
  }, []);
  return <section>{props.name} is mounted!</section>;
}
