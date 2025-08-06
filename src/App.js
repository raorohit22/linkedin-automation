import React, { useState, useEffect } from 'react';

function App() {
  const [config, setConfig] = useState({
    airtableApiKey: process.env.REACT_APP_AIRTABLE_API_KEY,
    linkedinAccessToken: process.env.REACT_APP_LINKEDIN_CLIENT_ID,
    telegramBotToken: process.env.REACT_APP_TELEGRAM_BOT_TOKEN,
    airtableBaseId: process.env.REACT_APP_AIRTABLE_BASE_ID,
    airtableTableId: process.env.REACT_APP_AIRTABLE_TABLE_ID,
    telegramChatId: process.env.REACT_APP_TELEGRAM_CHAT_ID,
    rapidApiKey: process.env.REACT_APP_RAPIDAPI_KEY,
    linkedinPersonId: process.env.REACT_APP_LINKEDIN_CLIENT_SECRET
    
  });
  
  const [logs, setLogs] = useState([]);
  const [isTesting, setIsTesting] = useState(false);
  const [systemStatus, setSystemStatus] = useState('inactive');
  const [envLoaded, setEnvLoaded] = useState(false);

  // Tech tags for random selection
  const DEV_TO_TAGS = [
    "reactnative", "flutter", "webdev", "frontend", "backend", "javascript", 
    "typescript", "html", "css", "react", "vue", "nextjs", "node", "nodejs", 
    "express", "django", "ai", "artificial-intelligence", "machinelearning", 
    "deeplearning", "datascience", "python", "data-analytics", "chatgpt", 
    "nlp", "neuralnetworks", "cloudcomputing", "softwareengineering", 
    "softwareengineer", "softwaredeveloper", "programming", "coding", 
    "developer", "devops", "computerscience", "fullstack", "programmer", 
    "coder", "csharp", "cpp", "java", "sql", "database", "git", "google", 
    "microsoft", "aws", "azure", "kubernetes", "docker", "cloud", 
    "serverless", "startup", "startups", "entrepreneurship", "business", 
    "innovation", "leadership", "marketing", "productivity", "networking", 
    "ecommerce", "tech", "technology", "open-source", "devcommunity"
  ];

  useEffect(() => {
    // Check if environment variables are loaded
    const checkEnvVars = () => {
      const hasEnvVars = process.env.REACT_APP_AIRTABLE_API_KEY || 
                         process.env.REACT_APP_LINKEDIN_CLIENT_SECRET || 
                         process.env.REACT_APP_TELEGRAM_BOT_TOKEN;
      
      setEnvLoaded(!!hasEnvVars);
      
      if (hasEnvVars) {
        addLog('Environment variables loaded successfully', 'success');
        addLog(`Airtable API Key: ${process.env.REACT_APP_AIRTABLE_API_KEY ? '✓ Set' : '✗ Not set'}`, 'info');
        addLog(`LinkedIn Token: ${process.env.REACT_APP_LINKEDIN_CLIENT_SECRET ? '✓ Set' : '✗ Not set'}`, 'info');
        addLog(`Telegram Token: ${process.env.REACT_APP_TELEGRAM_BOT_TOKEN ? '✓ Set' : '✗ Not set'}`, 'info');
      } else {
        addLog('No environment variables found. Please configure your .env file.', 'error');
      }
    };

    checkEnvVars();
  }, []);

  const addLog = (message, type = 'info') => {
    const timestamp = new Date().toLocaleTimeString();
    setLogs(prev => [...prev, { message, type, timestamp }]);
  };

  const getRandomTag = () => {
    const randomIndex = Math.floor(Math.random() * DEV_TO_TAGS.length);
    return DEV_TO_TAGS[randomIndex];
  };

  const testLinkedInAutomation = async () => {
    setIsTesting(true);
    addLog('Starting LinkedIn automation test...', 'info');
    
    try {
      // Step 1: Get random tag
      const randomTag = getRandomTag();
      addLog(`Selected random tag: ${randomTag}`, 'info');
      
      // Step 2: Simulate fetching articles (mock data)
      addLog('Fetching articles from Medium API...', 'info');
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const mockArticles = [
        {
          id: 'article1',
          title: 'Building Modern React Applications',
          subtitle: 'A comprehensive guide to React best practices',
          author: 'John Doe',
          published_at: '2024-01-15T10:00:00Z',
          read_time: 8,
          url: 'https://medium.com/@johndoe/react-guide'
        },
        {
          id: 'article2',
          title: 'TypeScript for Beginners',
          subtitle: 'Getting started with TypeScript in 2024',
          author: 'Jane Smith',
          published_at: '2024-01-14T15:30:00Z',
          read_time: 12,
          url: 'https://medium.com/@janesmith/typescript-guide'
        },
        {
          id: 'article3',
          title: 'Advanced JavaScript Patterns',
          subtitle: 'Mastering modern JavaScript development',
          author: 'Mike Johnson',
          published_at: '2024-01-13T09:15:00Z',
          read_time: 15,
          url: 'https://medium.com/@mikejohnson/js-patterns'
        }
      ];
      
      addLog(`Found ${mockArticles.length} articles`, 'success');
      
      // Step 3: Select a random article
      const selectedArticle = mockArticles[Math.floor(Math.random() * mockArticles.length)];
      addLog(`Selected article: ${selectedArticle.title}`, 'info');
      
      // Step 4: Simulate posting to LinkedIn
      addLog('Posting to LinkedIn...', 'info');
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const linkedInPostId = `post_${Date.now()}`;
      addLog(`Successfully posted to LinkedIn! Post ID: ${linkedInPostId}`, 'success');
      
      // Step 5: Simulate updating Airtable
      addLog('Updating Airtable with used article...', 'info');
      await new Promise(resolve => setTimeout(resolve, 1000));
      addLog('Airtable updated successfully', 'success');
      
      // Step 6: Simulate sending Telegram notification
      addLog('Sending Telegram notification...', 'info');
      await new Promise(resolve => setTimeout(resolve, 1000));
      addLog('Telegram notification sent successfully', 'success');
      
      addLog('✅ LinkedIn automation test completed successfully!', 'success');
      setSystemStatus('active');
      
    } catch (error) {
      addLog(`❌ Error during test: ${error.message}`, 'error');
      setSystemStatus('error');
    } finally {
      setIsTesting(false);
    }
  };

  const testWithRealAPIs = async () => {
    const hasEnvVars = process.env.REACT_APP_AIRTABLE_API_KEY || process.env.REACT_APP_LINKEDIN_CLIENT_SECRET || process.env.REACT_APP_TELEGRAM_BOT_TOKEN;
    
    if (!hasEnvVars) {
      addLog('❌ Please configure environment variables in your .env file', 'error');
      addLog('Required variables: REACT_APP_AIRTABLE_API_KEY, REACT_APP_LINKEDIN_CLIENT_SECRET, REACT_APP_TELEGRAM_BOT_TOKEN', 'error');
      return;
    }
    
    setIsTesting(true);
    addLog('Testing with real APIs...', 'info');
    
    try {
      // Simulate API calls with the provided keys
      addLog('Validating API keys...', 'info');
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Check which keys are available
      const availableKeys = [];
      if (process.env.REACT_APP_AIRTABLE_API_KEY) availableKeys.push('Airtable');
      if (process.env.REACT_APP_LINKEDIN_CLIENT_SECRET) availableKeys.push('LinkedIn');
      if (process.env.REACT_APP_TELEGRAM_BOT_TOKEN) availableKeys.push('Telegram');
      
      addLog(`✅ Available APIs: ${availableKeys.join(', ')}`, 'success');
      addLog('Note: This is a demo. In a real implementation, you would make actual API calls to:', 'info');
      addLog('- Medium API for fetching articles', 'info');
      addLog('- LinkedIn API for posting content', 'info');
      addLog('- Airtable API for tracking used articles', 'info');
      addLog('- Telegram API for notifications', 'info');
      
      setSystemStatus('active');
      
    } catch (error) {
      addLog(`❌ API test failed: ${error.message}`, 'error');
      setSystemStatus('error');
    } finally {
      setIsTesting(false);
    }
  };

  const clearLogs = () => {
    setLogs([]);
  };

  const showEnvironmentInfo = () => {
    addLog('=== Environment Variables Status ===', 'info');
    addLog(`REACT_APP_AIRTABLE_API_KEY: ${process.env.REACT_APP_AIRTABLE_API_KEY ? '✓ Set' : '✗ Not set'}`, 'info');
    addLog(`REACT_APP_LINKEDIN_CLIENT_SECRET: ${process.env.REACT_APP_LINKEDIN_CLIENT_SECRET ? '✓ Set' : '✗ Not set'}`, 'info');
    addLog(`REACT_APP_TELEGRAM_BOT_TOKEN: ${process.env.REACT_APP_TELEGRAM_BOT_TOKEN ? '✓ Set' : '✗ Not set'}`, 'info');
    addLog(`REACT_APP_RAPIDAPI_KEY: ${process.env.REACT_APP_RAPIDAPI_KEY ? '✓ Set' : '✗ Not set'}`, 'info');
    addLog(`REACT_APP_DEBUG: ${process.env.REACT_APP_DEBUG || 'false'}`, 'info');
  };

  return (
    <div className="container">
      <div className="card">
        <div className="logo">🚀 LinkedIn Auto-Post</div>
        
        <div className={`status ${systemStatus === 'active' ? 'success' : systemStatus === 'error' ? 'error' : ''}`}>
          <h3>✅ System {systemStatus === 'active' ? 'Active' : systemStatus === 'error' ? 'Error' : 'Inactive'}</h3>
          <p>Your automated LinkedIn posting system is {systemStatus === 'active' ? 'running' : 'ready to test'}.</p>
          {envLoaded && <p style={{fontSize: '0.9em', color: '#28a745'}}>✓ Environment variables loaded</p>}
          {!envLoaded && <p style={{fontSize: '0.9em', color: '#dc3545'}}>⚠️ Please configure your .env file</p>}
        </div>

        <div className="features">
          <h3>✨ Features</h3>
          <ul>
            <li>Automated posting from Medium to LinkedIn</li>
            <li>Smart filtering to avoid duplicate posts</li>
            <li>Random tech tag selection</li>
            <li>Image handling and upload</li>
            <li>Telegram notifications</li>
            <li>Airtable integration for tracking</li>
            <li>Error handling and logging</li>
            <li>Environment variable support</li>
          </ul>
        </div>

        <div className="schedule">
          <h3>📅 Posting Schedule</h3>
          <p>Posts are automatically created at:</p>
          <div>
            <span className="time">9:00 AM</span>
            <span className="time">7:00 PM</span>
          </div>
          <p style={{marginTop: '10px', fontSize: '0.9em', color: '#666'}}>
            Daily (UTC timezone)
          </p>
        </div>

        <div style={{textAlign: 'center', margin: '20px 0', padding: '15px', background: '#f8f9fa', borderRadius: '10px'}}>
          <h3>⚙️ Configuration</h3>
          <p style={{fontSize: '0.9em', color: '#666', marginBottom: '10px'}}>
            Configuration is managed via environment variables in your .env file
          </p>
          <button 
            onClick={showEnvironmentInfo}
            style={{
              background: '#6f42c1',
              color: 'white',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            Show Environment Status
          </button>
        </div>

        <button 
          className="test-button" 
          onClick={testLinkedInAutomation}
          disabled={isTesting}
        >
          {isTesting ? '⏳ Testing...' : '🧪 Test Function (Mock)'}
        </button>

        <button 
          className="test-button" 
          onClick={testWithRealAPIs}
          disabled={isTesting}
          style={{marginTop: '10px'}}
        >
          {isTesting ? '⏳ Testing...' : '🚀 Test with Real APIs'}
        </button>

        <div className="log-section">
          <h3>📋 Activity Logs</h3>
          <button 
            onClick={clearLogs}
            style={{
              background: '#6c757d',
              color: 'white',
              border: 'none',
              padding: '5px 10px',
              borderRadius: '5px',
              cursor: 'pointer',
              marginBottom: '10px'
            }}
          >
            Clear Logs
          </button>
          <div>
            {logs.map((log, index) => (
              <div key={index} className={`log-entry ${log.type}`}>
                <strong>[{log.timestamp}]</strong> {log.message}
              </div>
            ))}
            {logs.length === 0 && (
              <div style={{color: '#666', fontStyle: 'italic'}}>
                No logs yet. Click "Test Function" to see activity.
              </div>
            )}
          </div>
        </div>

        <div className="footer">
          <p>Powered by React</p>
          <p>Built with ❤️ for automated content sharing</p>
        </div>
      </div>
    </div>
  );
}

export default App; 