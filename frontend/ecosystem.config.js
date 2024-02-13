require('dotenv').config();

const {
  DEPLOY_USER, DEPLOY_HOST, DEPLOY_PATH, DEPLOY_REF, DEPLOY_REPO = 'origin/master',
} = process.env;

module.exports = {
  apps: [{
    name: 'service',
    script: "./build/index.html",
  }],

  // Настройка деплоя
  deploy: {
    production: {
      user: DEPLOY_USER,
      host: DEPLOY_HOST,
      ref: DEPLOY_REF,
      repo: DEPLOY_REPO,
      path: DEPLOY_PATH,
      "post-deploy": "cd frontend && npm i && npm run build",
    },
  },
};