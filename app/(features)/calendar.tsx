import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
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

const CalendarGrid = styled.View`
  margin-bottom: 32px;
`;

const WeekRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const DayCell = styled.TouchableOpacity<{ isSelected?: boolean }>`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.isSelected ? '#71717A' : 'transparent'};
`;

const DayText = styled.Text<{ isToday?: boolean }>`
  color: ${props => props.isToday ? '#10B981' : '#E4E4E7'};
  font-size: 16px;
`;

const ContentCard = styled.View`
  background-color: rgba(39, 39, 42, 0.8);
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 12px;
  border-width: 1px;
  border-color: rgba(63, 63, 70, 0.5);
`;

const ContentTitle = styled.Text`
  color: #E4E4E7;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
`;

const ContentDetails = styled.Text`
  color: #A1A1AA;
  font-size: 14px;
`;

const AddButton = styled.TouchableOpacity`
  background-color: rgba(63, 63, 70, 0.5);
  border-radius: 8px;
  padding: 12px;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  margin-top: 16px;
`;

const AddButtonText = styled.Text`
  color: #E4E4E7;
  font-size: 16px;
  margin-left: 8px;
`;

const PlatformTag = styled.View`
  background-color: #2563EB;
  border-radius: 4px;
  padding: 4px 8px;
  margin-right: 8px;
`;

const PlatformText = styled.Text`
  color: #FFFFFF;
  font-size: 12px;
`;

const TagContainer = styled.View`
  flex-direction: row;
  margin-bottom: 8px;
`;

interface ContentItem {
  id: string;
  title: string;
  platform: string;
  time: string;
}

export default function CalendarScreen() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [contentItems] = useState<ContentItem[]>([
    { id: '1', title: 'Weekly Tech Review', platform: 'YouTube', time: '2:00 PM' },
    { id: '2', title: 'Product Launch Post', platform: 'Instagram', time: '4:00 PM' },
    { id: '3', title: 'Tech Tips Thread', platform: 'Twitter', time: '6:00 PM' },
  ]);

  const renderWeek = () => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const today = new Date();

    return (
      <WeekRow>
        {days.map((day, index) => (
          <DayCell 
            key={day}
            isSelected={selectedDate.getDay() === index}
            onPress={() => {
              const newDate = new Date();
              newDate.setDate(today.getDate() - today.getDay() + index);
              setSelectedDate(newDate);
            }}
          >
            <DayText isToday={today.getDay() === index}>{day}</DayText>
          </DayCell>
        ))}
      </WeekRow>
    );
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      <Container>
        <Title>Content Calendar</Title>

        <CalendarGrid>
          {renderWeek()}
        </CalendarGrid>

        <View>
          {contentItems.map(item => (
            <ContentCard key={item.id}>
              <TagContainer>
                <PlatformTag>
                  <PlatformText>{item.platform}</PlatformText>
                </PlatformTag>
              </TagContainer>
              <ContentTitle>{item.title}</ContentTitle>
              <ContentDetails>{item.time}</ContentDetails>
            </ContentCard>
          ))}
        </View>

        <AddButton>
          <Ionicons name="add" size={24} color="#E4E4E7" />
          <AddButtonText>Schedule Content</AddButtonText>
        </AddButton>
      </Container>
    </ScrollView>
  );
} 