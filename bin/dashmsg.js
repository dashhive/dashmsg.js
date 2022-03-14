#!/usr/bin/env node

"use strict";

//require("dotenv").config({ path: ".env" });
//require("dotenv").config({ path: ".env.secret" });

let Dashmsg = require("../dashmsg.js");

let PrivateKey = require("@dashevo/dashcore-lib/lib/privatekey.js");

async function main() {
  let cmd = process.argv[2];
  if (!Dashmsg[cmd]) {
    console.error("Usage:");
    console.error("    dashmsg sign <privkey> <msg>");
    console.error("    dashmsg verify <addr> <msg> <sig>");
    process.exit(1);
    return;
  }

  if ("verify" === cmd) {
    let addr = process.argv[3];
    let msg = process.argv[4];
    let sig = process.argv[5];

    if (52 === addr.length) {
      let priv = PrivateKey.fromWIF(addr);
      addr = priv.toAddress();
      //let pub = priv.publicKey;
    }

    //console.log("addr", addr);
    //console.log("addr", addr.toString());
    let trust = Dashmsg.verify(addr, msg, sig);
    if (trust) {
      console.info(`Verified: true`);
      return;
    }

    console.error("Error: Invalid Signature");
    process.exit(1);
    return;
  }

  if ("sign" === cmd) {
    let wif = process.argv[3];
    let msg = process.argv[4];

    if (52 !== wif.length) {
      console.error("Error: Invalid WIF / Private Key");
      process.exit(1);
      return;
    }

    let sig = Dashmsg.sign(wif, msg);
    console.info(`Signature: ${sig}`);
    return;
  }

  console.error(
    "Error: Sanity Fail: unexpected command should have been handled already"
  );
}

main().catch(function (err) {
  console.error("Fail:");
  console.error(err.stack || err);
});
