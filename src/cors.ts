const whitelist = ['https://app.example.com'];
app.use(cors({ origin: whitelist, credentials: true }));
