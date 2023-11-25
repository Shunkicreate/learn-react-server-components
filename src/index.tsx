import rsdws from "react-server-dom-webpack/server";
const { renderToPipeableStream } = rsdws;
import { App } from "./app/App.tsx";
import React from "react";

renderToPipeableStream(<App />).pipe(process.stdout);