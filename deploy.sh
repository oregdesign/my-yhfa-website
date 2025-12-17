#!/bin/bash

# --- CONFIGURATION ---
# Your server's IP address or domain name
SERVER_IP="194.233.79.124"
# Your SSH username for the server
SERVER_USER="admin_wa"
# The name of your application for PM2
APP_NAME="yihfademo"
# The path to your app on the server
REMOTE_PATH="/home/${SERVER_USER}/web/yihfademo.maxyprime.com/next_app"
# Your local project directory (usually '.' for the current directory)
LOCAL_PATH="."

# --- SCRIPT LOGIC ---
echo "🚀 Starting deployment to ${SERVER_USER}@${SERVER_IP}..."

# Step 1: Sync files to the server using rsync
# -a: archive mode (preserves permissions, etc.)
# -v: verbose mode
# -z: compress file data during the transfer
# --delete: deletes files on the remote server that are not in your local project
# --exclude: excludes specific files/folders from being uploaded
echo "📦 Syncing files to the server..."
rsync -avz --delete \
  --exclude '.git' \
  --exclude 'node_modules' \
  --exclude '.next' \
  --exclude '.env.local' \
  --exclude 'deploy.sh' \
  -e "ssh" \
  ${LOCAL_PATH}/ ${SERVER_USER}@${SERVER_IP}:${REMOTE_PATH}

# Step 2: Execute commands on the remote server via SSH
echo "🔧 Installing dependencies and building the application on the server..."
ssh ${SERVER_USER}@${SERVER_IP} << EOF
  cd ${REMOTE_PATH}

  # Install dependencies
  npm install

  # Build the Next.js application for production
  npm run build

  # Restart or start the application with PM2
  # 'pm2 reload' is used for zero-downtime deployments.
  # If the app isn't running, it will start it.
  pm2 reload ${APP_NAME}

  echo "✅ Deployment complete on the server!"
EOF

echo "🎉 Deployment script finished successfully!"