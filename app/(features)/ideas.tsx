import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
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

const Input = styled.TextInput`
  background-color: rgba(24, 24, 27, 0.8);
  border-radius: 8px;
  padding: 12px;
  color: #E4E4E7;
  margin-bottom: 16px;
  border-width: 1px;
  border-color: rgba(63, 63, 70, 0.5);
  height: 100px;
  text-align-vertical: top;
`;

const GenerateButton = styled.TouchableOpacity`
  background-color: #2563EB;
  border-radius: 8px;
  padding: 16px;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 32px;
`;

const ButtonText = styled.Text`
  color: #FFFFFF;
  font-size: 16px;
  font-weight: 600;
  margin-left: 8px;
`;

const IdeaCard = styled.View`
  background-color: rgba(39, 39, 42, 0.8);
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 16px;
  border-width: 1px;
  border-color: rgba(63, 63, 70, 0.5);
`;

const IdeaTitle = styled.Text`
  color: #E4E4E7;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
`;

const IdeaDescription = styled.Text`
  color: #A1A1AA;
  font-size: 16px;
  line-height: 24px;
`;

const TagContainer = styled.View`
  flex-direction: row;
  margin-bottom: 12px;
`;

const Tag = styled.View`
  background-color: rgba(37, 99, 235, 0.2);
  border-radius: 4px;
  padding: 4px 8px;
  margin-right: 8px;
`;

const TagText = styled.Text`
  color: #60A5FA;
  font-size: 12px;
`;

const ActionBar = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 12px;
  padding-top: 12px;
  border-top-width: 1px;
  border-top-color: rgba(63, 63, 70, 0.5);
`;

const ActionButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-left: 16px;
`;

const ActionText = styled.Text`
  color: #A1A1AA;
  font-size: 14px;
  margin-left: 4px;
`;

interface Idea {
  id: string;
  title: string;
  description: string;
  tags: string[];
}

export default function IdeasScreen() {
  const [prompt, setPrompt] = useState('');
  const [ideas] = useState<Idea[]>([
    {
      id: '1',
      title: 'Top 10 AI Tools for Content Creators',
      description: 'A comprehensive guide showcasing the best AI tools that can help content creators streamline their workflow and enhance their creativity.',
      tags: ['AI', 'Productivity', 'Tools'],
    },
    {
      id: '2',
      title: 'Behind the Scenes: Content Creation Process',
      description: 'Take your audience through your content creation journey, sharing insights, tips, and the tools you use to produce high-quality content.',
      tags: ['Tutorial', 'Workflow', 'BTS'],
    },
  ]);

  const generateIdeas = () => {
    // TODO: Implement OpenAI API integration
    console.log('Generating ideas for:', prompt);
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      <Container>
        <Title>AI Idea Generator</Title>

        <Input
          value={prompt}
          onChangeText={setPrompt}
          placeholder="Describe your content niche and preferences..."
          placeholderTextColor="#71717A"
          multiline
        />

        <GenerateButton onPress={generateIdeas}>
          <Ionicons name="bulb-outline" size={24} color="#FFFFFF" />
          <ButtonText>Generate Ideas</ButtonText>
        </GenerateButton>

        {ideas.map(idea => (
          <IdeaCard key={idea.id}>
            <TagContainer>
              {idea.tags.map(tag => (
                <Tag key={tag}>
                  <TagText>{tag}</TagText>
                </Tag>
              ))}
            </TagContainer>
            <IdeaTitle>{idea.title}</IdeaTitle>
            <IdeaDescription>{idea.description}</IdeaDescription>
            <ActionBar>
              <ActionButton>
                <Ionicons name="create-outline" size={20} color="#A1A1AA" />
                <ActionText>Edit</ActionText>
              </ActionButton>
              <ActionButton>
                <Ionicons name="bookmark-outline" size={20} color="#A1A1AA" />
                <ActionText>Save</ActionText>
              </ActionButton>
              <ActionButton>
                <Ionicons name="share-outline" size={20} color="#A1A1AA" />
                <ActionText>Share</ActionText>
              </ActionButton>
            </ActionBar>
          </IdeaCard>
        ))}
      </Container>
    </ScrollView>
  );
} 