import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { colors, commonStyles, spacing } from '../../styles/common';

interface ContentItem {
  id: string;
  title: string;
  platform: string;
  time: string;
}

export default function CalendarScreen() {
  const router = useRouter();
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
      <View style={styles.weekRow}>
        {days.map((day, index) => (
          <TouchableOpacity 
            key={day}
            style={[
              styles.dayCell,
              selectedDate.getDay() === index && styles.selectedDay
            ]}
            onPress={() => {
              const newDate = new Date();
              newDate.setDate(today.getDate() - today.getDay() + index);
              setSelectedDate(newDate);
            }}
          >
            <Text style={[
              styles.dayText,
              today.getDay() === index && styles.todayText
            ]}>
              {day}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
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
        <Text style={styles.navTitle}>Calendar</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Text style={styles.subtitle}>Plan and schedule your content</Text>

          <View style={styles.calendarSection}>
            <Text style={styles.sectionTitle}>This Week</Text>
            <View style={styles.calendarGrid}>
              {renderWeek()}
            </View>
          </View>

          <View style={styles.contentSection}>
            <Text style={styles.sectionTitle}>Scheduled Content</Text>
            {contentItems.map(item => (
              <View key={item.id} style={styles.contentCard}>
                <View style={styles.contentHeader}>
                  <View style={styles.platformTag}>
                    <Text style={styles.platformText}>{item.platform}</Text>
                  </View>
                  <Text style={styles.contentTime}>{item.time}</Text>
                </View>
                <Text style={styles.contentTitle}>{item.title}</Text>
              </View>
            ))}
          </View>

          <TouchableOpacity style={[commonStyles.button, commonStyles.buttonPrimary, styles.addButton]}>
            <Ionicons name="add" size={20} color="#FFFFFF" />
            <Text style={commonStyles.buttonText}>Schedule Content</Text>
          </TouchableOpacity>
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
  calendarSection: {
    marginBottom: spacing.xl,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.gray[800],
    marginBottom: spacing.md,
  },
  calendarGrid: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: spacing.lg,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  weekRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dayCell: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedDay: {
    backgroundColor: colors.primary,
  },
  dayText: {
    color: colors.gray[600],
    fontSize: 14,
    fontWeight: '500',
  },
  todayText: {
    color: colors.success,
    fontWeight: '600',
  },
  contentSection: {
    marginBottom: spacing.xl,
  },
  contentCard: {
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
  contentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  platformTag: {
    backgroundColor: colors.primary,
    borderRadius: 6,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
  },
  platformText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '500',
  },
  contentTime: {
    fontSize: 14,
    color: colors.gray[500],
    fontWeight: '500',
  },
  contentTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.gray[800],
    lineHeight: 22,
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); 