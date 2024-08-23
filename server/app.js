const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const router = require("./routes");

const app = express();

// config
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: "backend/config/config.env" });
}
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());
app.use(router);
__dirname = path.resolve();

console.log("----------------------------", process.env.NODE_ENV);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("Server is Running! 🚀");
  });

  const express = require("express");
const { providers, Contract, Wallet } = require("ethers");

const asyncErrorHandler = require("./middlewares/helpers/asyncErrorHandler");

const router = express.Router();

const presaleABI = require("./abis/presaleABI.json");
const presaleAddress = "0x35A12CddCF48af225a5F003C9Bd5104DBD4f9D35";
const bnbProviderUrl = "wss://bsc-testnet-rpc.publicnode.com";
const bnbProvider = new providers.WebSocketProvider(bnbProviderUrl);
const bnbWallet = new Wallet("9783a8af5f1d6766f8ad65168916f73b6910918c8a5fea3fc266010c9635fb6b", bnbProvider);
const presaleContract = new Contract(presaleAddress, presaleABI, bnbWallet);

let currentTokenBalance = null;


console.log("---------------testRoute")
// Function to fetch token balance from Presale contract
async function fetchTokenBalance() {
    try {
      const balance = await presaleContract.getTokenBalance();
      currentTokenBalance = balance;
      console.log("Initial Token Balance fetched:", balance.toString());
    } catch (error) {
      console.error("Failed to fetch token balance:", error);
      throw error;
    }
  }

app.post("/testflyRoute", async (req, res, next) => {

    await fetchTokenBalance();

    res.status(200).json({
        success: true,
        message: {
            title: "testFly",
            value: currentTokenBalance.toString()
        }
    });
});
}


module.exports = app;
