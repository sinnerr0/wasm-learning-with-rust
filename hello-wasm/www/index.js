import init, { greet } from "./hello_wasm.js";

init().then(() => {
  greet();
});
