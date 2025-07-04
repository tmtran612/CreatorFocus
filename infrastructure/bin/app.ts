import * as cdk from 'aws-cdk-lib';
import { ApiStack } from '../lib/api-stack';

const app = new cdk.App();
new ApiStack(app, 'CreatorFocusApi', {
  env: { 
    account: process.env.CDK_DEFAULT_ACCOUNT, 
    region: process.env.CDK_DEFAULT_REGION 
  }
}); 