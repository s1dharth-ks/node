const crypto = require("crypto")
const result = crypto.createHash("sha256").update("test123").digest("hex")
console.log(result);

const token = crypto.randomBytes(10).toString("hex")

console.log(token);
