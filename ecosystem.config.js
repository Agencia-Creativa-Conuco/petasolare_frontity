module.exports = {
  apps: [
    {
      name: "petasolare.com",
      script: "yarn",
      args: "serve --port 3004",
      cwd: __dirname,
      env: {
        NODE_ENV: "production",
        PORT: 3004,
      }
    }
  ]
};
