import { Link } from 'expo-router';
import React from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: #18181B;
  padding: 24px;
`;

const Title = styled.Text`
  font-size: 32px;
  color: #E4E4E7;
  margin-bottom: 24px;
  text-align: center;
`;

const PricingCard = styled.View`
  background-color: rgba(39, 39, 42, 0.8);
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 16px;
  border-width: 1px;
  border-color: rgba(63, 63, 70, 0.5);
`;

const PlanName = styled.Text`
  font-size: 24px;
  color: #E4E4E7;
  margin-bottom: 8px;
  font-weight: 600;
`;

const PlanPrice = styled.Text`
  font-size: 36px;
  color: #E4E4E7;
  margin-bottom: 16px;
`;

const PlanDescription = styled.Text`
  font-size: 16px;
  color: #A1A1AA;
  margin-bottom: 16px;
`;

const FeatureList = styled.View`
  margin-bottom: 24px;
`;

const FeatureItem = styled.Text`
  font-size: 16px;
  color: #A1A1AA;
  margin-bottom: 8px;
`;

const Button = styled.TouchableOpacity`
  background-color: #E4E4E7;
  padding: 16px;
  border-radius: 8px;
  align-items: center;
`;

const ButtonText = styled.Text`
  color: #18181B;
  font-size: 16px;
  font-weight: 600;
`;

export default function PricingScreen() {
  return (
    <ScrollView style={{ flex: 1 }}>
      <Container>
        <Title>Choose Your Plan</Title>
        
        <PricingCard>
          <PlanName>Starter</PlanName>
          <PlanPrice>$9/month</PlanPrice>
          <PlanDescription>Perfect for individual content creators</PlanDescription>
          <FeatureList>
            <FeatureItem>• Basic task management</FeatureItem>
            <FeatureItem>• Content calendar</FeatureItem>
            <FeatureItem>• 10 AI-generated ideas per month</FeatureItem>
          </FeatureList>
          <Link href="/signup" asChild>
            <Button>
              <ButtonText>Get Started</ButtonText>
            </Button>
          </Link>
        </PricingCard>

        <PricingCard>
          <PlanName>Professional</PlanName>
          <PlanPrice>$29/month</PlanPrice>
          <PlanDescription>For serious content creators</PlanDescription>
          <FeatureList>
            <FeatureItem>• Advanced task management</FeatureItem>
            <FeatureItem>• Content calendar with analytics</FeatureItem>
            <FeatureItem>• Unlimited AI-generated ideas</FeatureItem>
            <FeatureItem>• Priority support</FeatureItem>
          </FeatureList>
          <Link href="/signup" asChild>
            <Button>
              <ButtonText>Get Started</ButtonText>
            </Button>
          </Link>
        </PricingCard>
      </Container>
    </ScrollView>
  );
} 