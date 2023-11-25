// @ts-expect-error
import rsdws from "react-server-dom-webpack/server";
const { renderToPipeableStream } = rsdws;
import { App } from "./app/App.tsx";

renderToPipeableStream(<App />).pipe(process.stdout);