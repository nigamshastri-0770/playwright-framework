import { Server } from '@modelcontextprotocol/sdk/server/index.js';

const server = new Server(
  {
    name: 'playwright-mcp',
    version: '1.0.0'
  },
  {
    capabilities: {
      tools: {}
    }
  }
);

console.log('MCP Server Running');