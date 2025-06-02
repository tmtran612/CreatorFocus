import * as cdk from 'aws-cdk-lib';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as nodejs from 'aws-cdk-lib/aws-lambda-nodejs';
import { Construct } from 'constructs';

export class ApiStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Create a simple Lambda function
    const tasksFunction = new nodejs.NodejsFunction(this, 'TasksFunction', {
      entry: '../backend/lambda/tasks.ts',
      handler: 'handler',
      runtime: lambda.Runtime.NODEJS_18_X,
      bundling: {
        minify: true,
        sourceMap: true,
        target: 'node18',
        esbuildArgs: {
          '--packages=bundle': ''
        }
      }
    });

    // Create API Gateway
    const api = new apigateway.RestApi(this, 'TasksApi', {
      restApiName: 'Tasks API',
      defaultCorsPreflightOptions: {
        allowOrigins: apigateway.Cors.ALL_ORIGINS,
        allowMethods: apigateway.Cors.ALL_METHODS,
        allowHeaders: ['Content-Type', 'Authorization']
      }
    });

    // Add /tasks endpoint
    const tasks = api.root.addResource('tasks');
    const tasksIntegration = new apigateway.LambdaIntegration(tasksFunction);
    tasks.addMethod('GET', tasksIntegration);
    tasks.addMethod('POST', tasksIntegration);

    // Output the API URL
    new cdk.CfnOutput(this, 'ApiEndpoint', {
      value: api.url,
      description: 'API Gateway endpoint URL'
    });
  }
} 