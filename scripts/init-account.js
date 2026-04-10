#!/usr/bin/env node
"use strict";

const fs = require("fs");
const os = require("os");
const path = require("path");

const stateDir = process.env.CYBERBOSS_STATE_DIR || path.join(os.homedir(), ".cyberboss");
const accountsDir = path.join(stateDir, "accounts");

const account = {
  accountId: "1fbc37245248-im-bot",
  rawAccountId: "1fbc37245248@im.bot",
  token: "1fbc37245248@im.bot:0600009398890423694981a0a40a50a5d467c7",
  baseUrl: "https://ilinkai.weixin.qq.com",
  userId: "o9cq805tlUofi3p6yCcxzvq9e-pw@im.wechat",
  savedAt: "2026-04-10T10:22:41.721Z",
};

const filePath = path.join(accountsDir, `${account.accountId}.json`);

try {
  fs.mkdirSync(accountsDir, { recursive: true });
  fs.writeFileSync(filePath, JSON.stringify(account, null, 2), "utf8");
  try {
    fs.chmodSync(filePath, 0o600);
  } catch {
    // best effort
  }
  console.log(`Account file written: ${filePath}`);
} catch (err) {
  console.error(`Failed to write account file: ${err.message}`);
  process.exit(1);
}
