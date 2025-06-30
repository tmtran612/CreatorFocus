import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import { colors, commonStyles, spacing } from '../../styles/common';

interface Idea {
  id: string;
  title: string;
  description: string;
  tags: string[];
}

export default function IdeasScreen() {
  const router = useRouter();
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
    <SafeAreaView style={[commonStyles.container, { backgroundColor: colors.gray[50] }]}>
      {/* Navigation Header */}
      <View style={styles.navHeader}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Text style={styles.backButtonText}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.navTitle}>AI Ideas</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Text style={styles.subtitle}>Get inspired with AI-powered content ideas</Text>

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Describe your content niche and preferences</Text>
            <TextInput
              style={[commonStyles.input, styles.textArea]}
              value={prompt}
              onChangeText={setPrompt}
              placeholder="e.g., Tech tutorials for beginners, lifestyle content for young professionals..."
              placeholderTextColor={colors.gray[400]}
              multiline
              numberOfLines={4}
              textAlignVertical="top"
            />
          </View>

          <TouchableOpacity
            style={[commonStyles.button, commonStyles.buttonPrimary, styles.generateButton]}
            onPress={generateIdeas}
          >
            <Ionicons name="bulb-outline" size={20} color="#FFFFFF" />
            <Text style={commonStyles.buttonText}>Generate Ideas</Text>
          </TouchableOpacity>

          <View style={styles.ideasSection}>
            <Text style={styles.sectionTitle}>Recent Ideas</Text>
            {ideas.map(idea => (
              <View key={idea.id} style={styles.ideaCard}>
                <View style={styles.tagContainer}>
                  {idea.tags.map(tag => (
                    <View key={tag} style={styles.tag}>
                      <Text style={styles.tagText}>{tag}</Text>
                    </View>
                  ))}
                </View>
                <Text style={styles.ideaTitle}>{idea.title}</Text>
                <Text style={styles.ideaDescription}>{idea.description}</Text>
                <View style={styles.actionBar}>
                  <TouchableOpacity style={styles.actionButton}>
                    <Ionicons name="create-outline" size={16} color={colors.gray[500]} />
                    <Text style={styles.actionText}>Edit</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.actionButton}>
                    <Ionicons name="bookmark-outline" size={16} color={colors.gray[500]} />
                    <Text style={styles.actionText}>Save</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.actionButton}>
                    <Ionicons name="share-outline" size={16} color={colors.gray[500]} />
                    <Text style={styles.actionText}>Share</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  navHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: colors.gray[200],
  },
  backButton: {
    padding: spacing.sm,
  },
  backButtonText: {
    fontSize: 16,
    color: colors.gray[700],
    fontWeight: '500',
  },
  navTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.gray[800],
  },
  placeholder: {
    width: 24,
    height: 24,
  },
  scrollView: {
    flex: 1,
  },
  container: {
    padding: spacing.lg,
  },
  subtitle: {
    fontSize: 16,
    color: colors.gray[600],
    marginBottom: spacing.xl,
    lineHeight: 22,
  },
  inputContainer: {
    marginBottom: spacing.lg,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.gray[700],
    marginBottom: spacing.sm,
  },
  textArea: {
    height: 100,
    paddingTop: spacing.sm,
  },
  generateButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.xl,
  },
  ideasSection: {
    marginTop: spacing.lg,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.gray[800],
    marginBottom: spacing.md,
  },
  ideaCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: spacing.lg,
    marginBottom: spacing.md,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  tagContainer: {
    flexDirection: 'row',
    marginBottom: spacing.sm,
  },
  tag: {
    backgroundColor: colors.primary + '20',
    borderRadius: 6,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    marginRight: spacing.sm,
  },
  tagText: {
    color: colors.primary,
    fontSize: 12,
    fontWeight: '500',
  },
  ideaTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.gray[800],
    marginBottom: spacing.sm,
    lineHeight: 24,
  },
  ideaDescription: {
    fontSize: 14,
    color: colors.gray[600],
    lineHeight: 20,
    marginBottom: spacing.md,
  },
  actionBar: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingTop: spacing.sm,
    borderTopWidth: 1,
    borderTopColor: colors.gray[200],
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: spacing.md,
  },
  actionText: {
    color: colors.gray[500],
    fontSize: 14,
    marginLeft: spacing.xs,
  },
}); 