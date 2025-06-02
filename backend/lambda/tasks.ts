import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

// Simple in-memory storage (will reset when Lambda cold starts)
const tasks: { id: string; text: string; completed: boolean }[] = [];

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  try {
    // GET /tasks - List all tasks
    if (event.httpMethod === 'GET') {
      return {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(tasks)
      };
    }

    // POST /tasks - Create a new task
    if (event.httpMethod === 'POST' && event.body) {
      const task = JSON.parse(event.body);
      
      if (!task.text) {
        return {
          statusCode: 400,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ message: 'Task text is required' })
        };
      }

      const newTask = {
        id: Date.now().toString(),
        text: task.text,
        completed: false
      };

      tasks.push(newTask);

      return {
        statusCode: 201,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTask)
      };
    }

    // Method not allowed
    return {
      statusCode: 405,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: 'Method not allowed' })
    };

  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: 'Internal server error' })
    };
  }
}; 