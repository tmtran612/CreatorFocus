import { Ionicons } from '@expo/vector-icons';
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

const FeatureCard = styled.View`
  background-color: rgba(39, 39, 42, 0.8);
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 16px;
  border-width: 1px;
  border-color: rgba(63, 63, 70, 0.5);
`;

const FeatureTitle = styled.Text`
  font-size: 20px;
  color: #E4E4E7;
  margin-bottom: 8px;
  font-weight: 600;
`;

const FeatureDescription = styled.Text`
  font-size: 16px;
  color: #A1A1AA;
  margin-bottom: 16px;
`;

const LearnMoreButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

const LearnMoreText = styled.Text`
  color: #60A5FA;
  font-size: 16px;
  margin-right: 8px;
`;

const IconContainer = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: rgba(96, 165, 250, 0.1);
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
`;

export default function FeaturesScreen() {
  return (
    <ScrollView style={{ flex: 1 }}>
      <Container>
        <Title>Our Features</Title>
        
        <FeatureCard>
          <IconContainer>
            <Ionicons name="checkbox" size={24} color="#60A5FA" />
          </IconContainer>
          <FeatureTitle>Smart Task Management</FeatureTitle>
          <FeatureDescription>
            Organize your work with daily todos, focus priorities, and monthly goals tailored for content creation.
          </FeatureDescription>
          <Link href="/(features)/tasks" asChild>
            <LearnMoreButton>
              <LearnMoreText>Learn more</LearnMoreText>
              <Ionicons name="arrow-forward" size={20} color="#60A5FA" />
            </LearnMoreButton>
          </Link>
        </FeatureCard>

        <FeatureCard>
          <IconContainer>
            <Ionicons name="calendar" size={24} color="#60A5FA" />
          </IconContainer>
          <FeatureTitle>Content Calendar</FeatureTitle>
          <FeatureDescription>
            Plan, schedule, and track your content across all platforms with our intuitive calendar system.
          </FeatureDescription>
          <Link href="/(features)/calendar" asChild>
            <LearnMoreButton>
              <LearnMoreText>Learn more</LearnMoreText>
              <Ionicons name="arrow-forward" size={20} color="#60A5FA" />
            </LearnMoreButton>
          </Link>
        </FeatureCard>

        <FeatureCard>
          <IconContainer>
            <Ionicons name="bulb" size={24} color="#60A5FA" />
          </IconContainer>
          <FeatureTitle>AI Idea Generator</FeatureTitle>
          <FeatureDescription>
            Never run out of content ideas with our AI-powered generator that understands your niche and audience.
          </FeatureDescription>
          <Link href="/(features)/ideas" asChild>
            <LearnMoreButton>
              <LearnMoreText>Learn more</LearnMoreText>
              <Ionicons name="arrow-forward" size={20} color="#60A5FA" />
            </LearnMoreButton>
          </Link>
        </FeatureCard>

        <FeatureCard>
          <IconContainer>
            <Ionicons name="stats-chart" size={24} color="#60A5FA" />
          </IconContainer>
          <FeatureTitle>Analytics Dashboard</FeatureTitle>
          <FeatureDescription>
            Track your productivity, content performance, and growth metrics all in one comprehensive dashboard.
          </FeatureDescription>
          <Link href="/(features)/analytics" asChild>
            <LearnMoreButton>
              <LearnMoreText>Learn more</LearnMoreText>
              <Ionicons name="arrow-forward" size={20} color="#60A5FA" />
            </LearnMoreButton>
          </Link>
        </FeatureCard>
      </Container>
    </ScrollView>
  );
} 