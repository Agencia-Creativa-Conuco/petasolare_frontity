module.exports = {
  apps: [
    {
      name: "petasolare.com",
      script: "yarn",
      args: "serve",
      cwd: __dirname,
      env: {
        NODE_ENV: "production",
        PORT: 3004,
      }
    }
  ]
};
