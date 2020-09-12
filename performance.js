const { execSync } = require("child_process");
const { performance } = require("perf_hooks");

function perf(command) {
  const values = [];
  let begin, end, time, stdout, seconds;
  [...Array(12)].forEach(() => {
    begin = performance.now();
    stdout = execSync(command).toString();
    end = performance.now();
    time = end - begin;
    seconds = Math.round(time / 100) / 10;
    console.log(seconds + "s");
    values.push(seconds);
  });
  console.log(
    command,
    JSON.stringify(values),
    Math.round((values.reduce((a, b) => a + b, 0) / values.length) * 100) / 100
  );
}

perf("expo.cmd build:web --no-pwa");
perf(
  "esbuild.cmd --bundle ./node_modules/expo/AppEntry.js --outfile=./web/bundle.js --resolve-extensions=.web.tsx,.web.ts,.web.jsx,.web.js,.tsx,.ts,.jsx,.js --loader:.js=jsx --loader:.png=file --loader:.ttf=file --tsconfig=tsconfig.json --define:process.env.APP_MANIFEST='{}' --define:__DEV__=false --define:process.env.NODE_ENV=\"'production'\" --minify --sourcemap --define:global=window"
);

//'C://Users//Dalci//AppData//Roaming//npm//node_modules//esbuild//esbuild --version'

//[12111.940299987793,12273.487399995327,12457.810400009155,12470.923699975014,12499.16890001297,12265.664699971676,12307.561699986458,12313.122500002384,12664.979600012302,13435.077600002289,12897.981500029564,12432.313000023365] 12510.835941667357
//[759.2710000276566,834.3446999788284,770.9039999842644,784.4722999930382,718.3296999931335,836.1107000112534,742.0357999801636,715.146899998188,694.4622000455856,717.2189999818802,688.8216999769211,731.6640999913216] 749.3985083301862

//[1.9,1.1,1,1,0.9,0.9,0.9,0.8,0.8,0.8] 1
//[17.7,10.3,10.2,10,10,10.1,9.9,10.5,10.4,10.4] 11

//[26.5,9.9,9.9,10,9.9,10,10,9.9,9.9,10,10,9.9] 11.33
//[0.8,0.9,0.9,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8,0.8] 0.82

//[10.3,10.3,9.9,10,10,10.2,9.9,10,9.9,10,10.1,9.9] 10.04
//[0.8,0.9,0.8,0.8,0.9,0.9,0.9,0.9,0.9,0.9,0.9,0.8] 0.87
