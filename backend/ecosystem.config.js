module.exports = {
  apps: [{
    name: 'qas',
    script: './dist/server.js',
    instances: 'max',               // uses all available cores (8 in your case)
    autorestart: true,
    watch: false,
    max_memory_restart: '20G',       // restart if memory exceeds 1GB per process
    restart_delay: 5000,
    max_restarts: 10,
    env: {
      NODE_ENV: 'production',
    },
    log_date_format: 'YYYY-MM-DD HH:mm:ss',
  }]
};
