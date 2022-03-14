"use strict";

let DS = exports;

let Message = require("@dashevo/dashcore-lib/lib/message.js");
let PrivateKey = require("@dashevo/dashcore-lib/lib/privatekey.js");

DS.sign = function (wif, str) {
  let priv = PrivateKey.fromWIF(wif);
  //console.info("PrivateKey:", priv.toString());
  //console.info("WIF:", priv.toWIF());
  //console.info("PublicKey:", priv.publicKey.toString());
  //console.info("PubKeyHash:", priv.toAddress().toString());

  let msg = new Message(str);

  let sig = msg.sign(priv); //.toCompact();
  //let sighex = Buffer.from(sig.toString(), "base64").toString("hex");
  //console.info("Signature:");
  //console.info(sighex.length, sighex.length / 2, sighex);
  //console.info(sig.toString().length, sig);

  return sig.toString();
};
