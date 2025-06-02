import { Ionicons } from '@expo/vector-icons';
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
`;

const StatGrid = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 -8px;
  margin-bottom: 32px;
`;

const StatCard = styled.View`
  background-color: rgba(39, 39, 42, 0.8);
  border-radius: 12px;
  padding: 20px;
  margin: 8px;
  border-width: 1px;
  border-color: rgba(63, 63, 70, 0.5);
  width: 45%;
`;

const StatValue = styled.Text`
  color: #E4E4E7;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const StatLabel = styled.Text`
  color: #A1A1AA;
  font-size: 14px;
`;

const ChartCard = styled.View`
  background-color: rgba(39, 39, 42, 0.8);
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 16px;
  border-width: 1px;
  border-color: rgba(63, 63, 70, 0.5);
`;

const ChartTitle = styled.Text`
  color: #E4E4E7;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 16px;
`;

const ChartPlaceholder = styled.View`
  height: 200px;
  background-color: rgba(63, 63, 70, 0.3);
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

const PlaceholderText = styled.Text`
  color: #A1A1AA;
  font-size: 14px;
`;

const MetricRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-bottom-width: 1px;
  border-bottom-color: rgba(63, 63, 70, 0.5);
`;

const MetricLabel = styled.Text`
  color: #E4E4E7;
  font-size: 16px;
`;

const MetricValue = styled.Text`
  color: #10B981;
  font-size: 16px;
  font-weight: 600;
`;

export default function AnalyticsScreen() {
  return (
    <ScrollView style={{ flex: 1 }}>
      <Container>
        <Title>Analytics Dashboard</Title>

        <StatGrid>
          <StatCard>
            <StatValue>1.2K</StatValue>
            <StatLabel>Total Subscribers</StatLabel>
          </StatCard>
          <StatCard>
            <StatValue>45</StatValue>
            <StatLabel>Posts This Month</StatLabel>
          </StatCard>
          <StatCard>
            <StatValue>89%</StatValue>
            <StatLabel>Engagement Rate</StatLabel>
          </StatCard>
          <StatCard>
            <StatValue>23K</StatValue>
            <StatLabel>Total Views</StatLabel>
          </StatCard>
        </StatGrid>

        <ChartCard>
          <ChartTitle>Growth Trends</ChartTitle>
          <ChartPlaceholder>
            <Ionicons name="stats-chart" size={32} color="#A1A1AA" />
            <PlaceholderText>Chart visualization coming soon</PlaceholderText>
          </ChartPlaceholder>
        </ChartCard>

        <ChartCard>
          <ChartTitle>Platform Performance</ChartTitle>
          <MetricRow>
            <MetricLabel>YouTube</MetricLabel>
            <MetricValue>+12.5%</MetricValue>
          </MetricRow>
          <MetricRow>
            <MetricLabel>Instagram</MetricLabel>
            <MetricValue>+8.3%</MetricValue>
          </MetricRow>
          <MetricRow>
            <MetricLabel>Twitter</MetricLabel>
            <MetricValue>+15.7%</MetricValue>
          </MetricRow>
          <MetricRow style={{ borderBottomWidth: 0 }}>
            <MetricLabel>LinkedIn</MetricLabel>
            <MetricValue>+5.2%</MetricValue>
          </MetricRow>
        </ChartCard>
      </Container>
    </ScrollView>
  );
} 