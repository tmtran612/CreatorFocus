import axios from 'axios';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import { colors, commonStyles, spacing } from '../styles/common';

export default function AddTaskScreen() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [priority, setPriority] = useState('Medium');
  const [category, setCategory] = useState('Content');

  const handleAddTask = async () => {
    if (!title.trim()) {
      Alert.alert('Error', 'Please enter a task title');
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await axios.post('http://192.168.1.128:3001/api/tasks', {
        title: title.trim(),
        description: description.trim(),
        priority,
        category,
      });

      if (response.data.success) {
        router.replace('/home');
      } else {
        Alert.alert('Error', 'Failed to add task');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Network error or backend issue');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SafeAreaView style={commonStyles.container}>
      <KeyboardAvoidingView 
        style={styles.keyboardView}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView contentContainerStyle={styles.scrollContent}>
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity 
              style={styles.backButton}
              onPress={() => router.back()}
            >
              <Text style={styles.backButtonText}>← Back</Text>
            </TouchableOpacity>
            <Text style={commonStyles.title}>Create New Task</Text>
            <View style={styles.placeholder} />
          </View>

          {/* Form */}
          <View style={styles.form}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Task Title *</Text>
              <TextInput
                style={commonStyles.input}
                value={title}
                onChangeText={setTitle}
                placeholder="Enter task title"
                placeholderTextColor={colors.gray[400]}
                autoFocus
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Description</Text>
              <TextInput
                style={[commonStyles.input, styles.textArea]}
                value={description}
                onChangeText={setDescription}
                placeholder="Enter task description (optional)"
                placeholderTextColor={colors.gray[400]}
                multiline
                numberOfLines={4}
                textAlignVertical="top"
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Priority</Text>
              <View style={styles.priorityButtons}>
                <TouchableOpacity
                  style={[styles.priorityButton, styles.priorityHigh, priority === 'High' && styles.prioritySelected]}
                  onPress={() => setPriority('High')}
                >
                  <Text style={styles.priorityButtonText}>High</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.priorityButton, styles.priorityMedium, priority === 'Medium' && styles.prioritySelected]}
                  onPress={() => setPriority('Medium')}
                >
                  <Text style={styles.priorityButtonText}>Medium</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.priorityButton, styles.priorityLow, priority === 'Low' && styles.prioritySelected]}
                  onPress={() => setPriority('Low')}
                >
                  <Text style={styles.priorityButtonText}>Low</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Category</Text>
              <View style={styles.categoryButtons}>
                <TouchableOpacity
                  style={[styles.categoryButton, category === 'Content' && styles.categorySelected]}
                  onPress={() => setCategory('Content')}
                >
                  <Text style={styles.categoryButtonText}>Content</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.categoryButton, category === 'Video' && styles.categorySelected]}
                  onPress={() => setCategory('Video')}
                >
                  <Text style={styles.categoryButtonText}>Video</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.categoryButton, category === 'Social' && styles.categorySelected]}
                  onPress={() => setCategory('Social')}
                >
                  <Text style={styles.categoryButtonText}>Social</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Action Buttons */}
          <View style={styles.actions}>
            <TouchableOpacity
              style={[commonStyles.button, commonStyles.buttonSecondary]}
              onPress={() => router.back()}
            >
              <Text style={commonStyles.buttonTextSecondary}>Cancel</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              style={[
                commonStyles.button,
                commonStyles.buttonPrimary,
                (!title.trim() || isSubmitting) && styles.submitButtonDisabled
              ]}
              onPress={handleAddTask}
              disabled={!title.trim() || isSubmitting}
            >
              <Text style={commonStyles.buttonText}>
                {isSubmitting ? 'Adding...' : 'Add Task'}
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  keyboardView: {
    flex: 1,
  },
  scrollContent: {
    padding: spacing.lg,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.xl,
  },
  backButton: {
    padding: spacing.sm,
  },
  backButtonText: {
    fontSize: 16,
    color: colors.primary,
    fontWeight: '500',
  },
  placeholder: {
    width: 60,
  },
  form: {
    marginBottom: spacing.xl,
  },
  inputGroup: {
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
  priorityButtons: {
    flexDirection: 'row',
    gap: spacing.sm,
  },
  priorityButton: {
    flex: 1,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.gray[200],
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  priorityHigh: {
    backgroundColor: '#FEF2F2',
    borderColor: '#FCA5A5',
  },
  priorityMedium: {
    backgroundColor: '#FFFBEB',
    borderColor: '#FCD34D',
  },
  priorityLow: {
    backgroundColor: '#F0FDF4',
    borderColor: '#86EFAC',
  },
  prioritySelected: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  priorityButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.gray[700],
  },
  categoryButtons: {
    flexDirection: 'row',
    gap: spacing.sm,
  },
  categoryButton: {
    flex: 1,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.gray[200],
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  categorySelected: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  categoryButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.gray[700],
  },
  actions: {
    flexDirection: 'row',
    gap: spacing.sm,
  },
  submitButtonDisabled: {
    backgroundColor: colors.gray[400],
  },
});
