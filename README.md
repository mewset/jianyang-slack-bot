# Jian Yang Slack Bot 🏢

A Slack bot that randomly sends quotes from Jian Yang (Silicon Valley) to your Slack channel.

## Features

- 🕐 **Automatic quotes**: Sends random Jian Yang quotes every 2 hours
- 💬 **Slash command**: Use `/jianyang` for instant quotes
- 🤖 **Mentions**: Mention the bot to get a quote
- 🔍 **Keyword trigger**: Messages containing "jian yang" trigger quotes

## Setup

### 1. Create a Slack App

1. Go to [Slack API](https://api.slack.com/apps) and create a new app
2. Choose "From scratch" and select your workspace
3. In **Basic Information**, copy the **Signing Secret**

### 2. Configure Bot Token Scopes

Go to **OAuth & Permissions** and add these scopes:
- `app_mentions:read`
- `channels:read`
- `chat:write`
- `commands`
- `groups:read`
- `im:read`
- `mpim:read`

### 3. Enable Socket Mode

1. Go to **Socket Mode** and enable it
2. Create an app-level token with `connections:write` scope
3. Copy the **App Token**

### 4. Install App & Get Bot Token

1. Go to **OAuth & Permissions** and install the app to your workspace
2. Copy the **Bot User OAuth Token**

### 5. Create Slash Command (Optional)

Go to **Slash Commands** and create:
- Command: `/jianyang`
- Request URL: (not needed for socket mode)
- Description: "Get a random Jian Yang quote"

### 6. Configure Environment

1. Clone this repository
2. Copy `.env.example` to `.env`
3. Fill in your tokens:

```bash
cp .env.example .env
# Edit .env with your tokens
```

### 7. Install & Run

```bash
npm install
npm start
```

## Usage

- **Automatic**: The bot posts quotes/GIFs every 2 hours (20% chance for GIFs)
- **Command**: Type `/jianyang` in any channel (80% quotes, 20% GIFs)
- **GIF Command**: Type `/jianyang gif` to always get a GIF
- **Mention**: `@JianYang` to get a quote or GIF
- **Keyword**: Say "jian yang" in a message

## Development

```bash
npm run dev  # Run with nodemon for auto-restart
```

## Configuration

- `SLACK_CHANNEL_ID`: Channel where automatic quotes are posted (default: general)
- Modify quote frequency in `index.js` (currently every 2 hours)

---

*"I'm not Chinese, I'm from Singapore." - Jian Yang*