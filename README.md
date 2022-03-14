# dashmsg.js

Sign and Verify messages via Private, Collateral or Voting key

This is the "diet" version for Node.js.

## CLI Usage

**NOTE**: The full version of [`dashmsg`](https://webinstall.dev/dashmsg) CLI
(written in Go), is available at <https://webinstall.dev/dashmsg>.

```bash
npm install -g dashmsg
```

### Magic Sign

```bash
dashmsg sign <privkey> <msg>
```

```bash
dashmsg sign \
    'XDLdq5H32tZ2vRvKuRipg4dZtUtNGuE7Q31d3gDTNpdTDbCLqzXB' \
    'dte2022-akerdemelidis|estoever|ctafti'
```

```txt
Signature: IFf+WJzpLv8nPM40tYlWpspCh3NWnyXKmGers3v0PBmdDCylj1KS65Fe4X1AmK0Xx3C1MJ4sKI5rtNuXzsLkJdo=
```

### Magic Verify

```bash
dashmsg verify <addr> <msg> <sig>
```

```bash
dashmsg verify \
    'XmVctZGpQt68ws9YVD6RAT4yfcZFrLZKDW' \
    'dte2022-akerdemelidis|estoever|ctafti' \
    'IFf+WJzpLv8nPM40tYlWpspCh3NWnyXKmGers3v0PBmdDCylj1KS65Fe4X1AmK0Xx3C1MJ4sKI5rtNuXzsLkJdo='
```

```txt
Verified: true
```

## API Usage

**NOTE**: The full version of the
[`dashmsg`](https://pkg.go.dev/github.com/dashhive/dashmsg) API (written in Go),
is available at <https://pkg.go.dev/github.com/dashhive/dashmsg>.

```js
let Dashmsg = require("dashmsg");
```

```js
// addr - base58check payment address
// msg - plain utf-8 text
// sig = base64 signature, beginning with magic "i" byte
let verified = Dashmsg.verify(addr, msg, sig);
```

```js
// wif - private key encoded as base58check (WIF)
// msg - plain utf-8 text
let signature = Dashmsg.sign(wif, msg);
```
