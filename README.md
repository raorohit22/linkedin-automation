# LinkedIn Auto-Post System (React)

A React-based LinkedIn automation system that demonstrates automated posting from Medium articles to LinkedIn. This is a frontend-only implementation that simulates the automation workflow.

## Features

- **Interactive UI**: Modern React interface with real-time logging
- **Mock Automation**: Simulates the complete LinkedIn automation workflow
- **Configuration Management**: Import/export configuration settings
- **Real-time Logging**: Live activity logs with different message types
- **Responsive Design**: Works on desktop and mobile devices
- **API Key Management**: Secure input fields for API credentials
- **Environment Variables**: Support for .env file configuration

## Demo Features

- **Random Tag Selection**: Automatically selects from 50+ tech tags
- **Article Fetching**: Simulates fetching articles from Medium API
- **LinkedIn Posting**: Demonstrates posting workflow to LinkedIn
- **Airtable Integration**: Shows tracking of used articles
- **Telegram Notifications**: Simulates notification system
- **Error Handling**: Comprehensive error logging and display

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd linkedin-automation
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables (optional):
```bash
# Copy the example environment file
cp env.example .env

# Edit .env with your actual API keys
```

4. Start the development server:
```bash
npm start
```

5. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Environment Variables

The app supports environment variables for secure API key management. Create a `.env` file in the root directory:

```bash
# Airtable Configuration
REACT_APP_AIRTABLE_API_KEY=your_airtable_api_key_here
REACT_APP_AIRTABLE_BASE_ID=appzoQTNh3p9RaYMK
REACT_APP_AIRTABLE_TABLE_ID=tbljZMIenzInH7C0t

# LinkedIn Configuration
REACT_APP_LINKEDIN_ACCESS_TOKEN=your_linkedin_access_token_here
REACT_APP_LINKEDIN_PERSON_ID=onbW2WIwhS

# Telegram Configuration
REACT_APP_TELEGRAM_BOT_TOKEN=your_telegram_bot_token_here
REACT_APP_TELEGRAM_CHAT_ID=7085311717

# RapidAPI Configuration (Medium API)
REACT_APP_RAPIDAPI_KEY=5f0eb985b5mshc11973f4c989e92p1f2f7ajsn1c2c1107bbdb

# Optional: Debug mode
REACT_APP_DEBUG=false
```

### Environment Variable Features

- **Automatic Detection**: The app automatically detects if environment variables are set
- **Fallback to Manual Input**: If env vars aren't set, you can still configure via the UI
- **Visual Indicators**: Shows which keys are set via environment variables
- **Security**: Environment variables are more secure than hardcoded values

## Usage

### Testing the System

1. **Mock Test**: Click "Test Function (Mock)" to run a simulated automation workflow
2. **Real API Test**: Configure your API keys and click "Test with Real APIs"
3. **Environment Info**: Click "Show Env Info" to see environment variable status

### Configuration

The app includes input fields for:
- **Airtable API Key**: For tracking used articles
- **LinkedIn Access Token**: For posting to LinkedIn
- **Telegram Bot Token**: For notifications

**Note**: If environment variables are set, the input fields will be disabled and show "Using environment variable"

### Import/Export Configuration

- **Export**: Save your current configuration to a JSON file
- **Import**: Load a previously exported configuration file

## Project Structure

```
├── src/
│   ├── App.js              # Main React component
│   ├── index.js            # React entry point
│   └── index.css           # Global styles
├── public/
│   └── index.html          # HTML template
├── package.json            # Dependencies and scripts
├── env.example             # Environment variables template
└── README.md              # This file
```

## Available Scripts

- `npm start`: Runs the app in development mode
- `npm run build`: Builds the app for production
- `npm test`: Launches the test runner
- `npm run eject`: Ejects from Create React App (one-way operation)

## Technology Stack

- **React 18**: Modern React with hooks
- **CSS3**: Custom styling with gradients and animations
- **JavaScript ES6+**: Modern JavaScript features
- **Create React App**: Development environment

## Features in Detail

### Mock Automation Workflow

1. **Tag Selection**: Randomly selects from 50+ tech tags
2. **Article Discovery**: Simulates finding articles on Medium
3. **Content Selection**: Picks a random unused article
4. **LinkedIn Posting**: Simulates posting to LinkedIn
5. **Tracking Update**: Updates Airtable with used article
6. **Notification**: Sends Telegram notification

### Real-time Logging

- **Info**: Blue logs for general information
- **Success**: Green logs for successful operations
- **Error**: Red logs for errors and failures

### Configuration Management

- Secure password fields for API keys
- Import/export functionality
- Environment variable support
- Persistent configuration state

## Customization

### Adding New Tags

Edit the `DEV_TO_TAGS` array in `src/App.js`:

```javascript
const DEV_TO_TAGS = [
  "your-new-tag",
  // ... existing tags
];
```

### Modifying Mock Data

Update the `mockArticles` array in the `testLinkedInAutomation` function:

```javascript
const mockArticles = [
  {
    id: 'your-article-id',
    title: 'Your Article Title',
    // ... other properties
  }
];
```

### Styling

Modify `src/index.css` to customize the appearance:

```css
.logo {
  /* Custom logo styling */
}

.test-button {
  /* Custom button styling */
}
```

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Development

### Adding Real API Integration

To integrate with real APIs, you would need to:

1. Set up a backend server (Node.js/Express)
2. Implement actual API calls to:
   - Medium API for article fetching
   - LinkedIn API for posting
   - Airtable API for tracking
   - Telegram API for notifications

3. Replace mock functions with real API calls

### Environment Variables Best Practices

1. **Never commit .env files**: Add `.env` to your `.gitignore`
2. **Use REACT_APP_ prefix**: All environment variables must start with `REACT_APP_`
3. **Restart after changes**: Restart the development server after changing environment variables
4. **Production deployment**: Set environment variables in your hosting platform

### Security Notes

- Environment variables are embedded in the build, so they're visible in the client-side code
- For truly sensitive data, use a backend server
- Never expose API keys in client-side code for production applications

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - see LICENSE file for details.

## Support

For questions or issues:
1. Check the browser console for errors
2. Verify all dependencies are installed
3. Ensure you're using a supported browser version
4. Check that environment variables are properly set (if using them)

---

**Note**: This is a demonstration application. For production use, you would need to implement actual API integrations and proper security measures. 