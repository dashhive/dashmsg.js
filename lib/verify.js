"use strict";

let DV = exports;

let Message = require("@dashevo/dashcore-lib/lib/message.js");
//let Signature = require("@dashevo/dashcore-lib/lib/crypto/signature.js");

DV.verify = function (addr, str, sig) {
  let msg = new Message(str);
  let trust = msg.verify(addr, sig);

  //let sigbuf = Buffer.from(sigstr, 'base64');
  //let sig = Signature.fromCompact(sigbuf);

  return trust;
};
