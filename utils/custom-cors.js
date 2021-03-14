const corsSettings = (req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", process.env.CORS_ORIGIN);
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Expose-Headers", "Content-Length");
    res.setHeader("Access-Control-Allow-Methods", process.env.CORS_ALLOW_METHODS);
    res.setHeader("Access-Control-Allow-Headers", process.env.CORS_ALLOW_HEADERS);
    next();
}

module.exports = corsSettings;