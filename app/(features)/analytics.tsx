import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { colors, commonStyles, spacing } from '../../styles/common';

export default function AnalyticsScreen() {
  const router = useRouter();

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
        <Text style={styles.navTitle}>Analytics</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Text style={styles.subtitle}>Track your content performance</Text>

          <View style={styles.statsSection}>
            <Text style={styles.sectionTitle}>Overview</Text>
            <View style={styles.statGrid}>
              <View style={styles.statCard}>
                <Text style={styles.statValue}>1.2K</Text>
                <Text style={styles.statLabel}>Total Subscribers</Text>
              </View>
              <View style={styles.statCard}>
                <Text style={styles.statValue}>45</Text>
                <Text style={styles.statLabel}>Posts This Month</Text>
              </View>
              <View style={styles.statCard}>
                <Text style={styles.statValue}>89%</Text>
                <Text style={styles.statLabel}>Engagement Rate</Text>
              </View>
              <View style={styles.statCard}>
                <Text style={styles.statValue}>23K</Text>
                <Text style={styles.statLabel}>Total Views</Text>
              </View>
            </View>
          </View>

          <View style={styles.chartSection}>
            <Text style={styles.sectionTitle}>Growth Trends</Text>
            <View style={styles.chartCard}>
              <View style={styles.chartPlaceholder}>
                <Ionicons name="stats-chart" size={32} color={colors.gray[400]} />
                <Text style={styles.placeholderText}>Chart visualization coming soon</Text>
              </View>
            </View>
          </View>

          <View style={styles.platformSection}>
            <Text style={styles.sectionTitle}>Platform Performance</Text>
            <View style={styles.platformCard}>
              <View style={styles.metricRow}>
                <Text style={styles.metricLabel}>YouTube</Text>
                <Text style={styles.metricValue}>+12.5%</Text>
              </View>
              <View style={styles.metricRow}>
                <Text style={styles.metricLabel}>Instagram</Text>
                <Text style={styles.metricValue}>+8.3%</Text>
              </View>
              <View style={styles.metricRow}>
                <Text style={styles.metricLabel}>Twitter</Text>
                <Text style={styles.metricValue}>+15.7%</Text>
              </View>
              <View style={[styles.metricRow, styles.lastMetricRow]}>
                <Text style={styles.metricLabel}>LinkedIn</Text>
                <Text style={styles.metricValue}>+5.2%</Text>
              </View>
            </View>
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
  statsSection: {
    marginBottom: spacing.xl,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.gray[800],
    marginBottom: spacing.md,
  },
  statGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -spacing.sm,
  },
  statCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: spacing.lg,
    margin: spacing.sm,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    width: '45%',
  },
  statValue: {
    color: colors.primary,
    fontSize: 28,
    fontWeight: '700',
    marginBottom: spacing.sm,
  },
  statLabel: {
    color: colors.gray[600],
    fontSize: 14,
    fontWeight: '500',
  },
  chartSection: {
    marginBottom: spacing.xl,
  },
  chartCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: spacing.lg,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  chartPlaceholder: {
    height: 200,
    backgroundColor: colors.gray[100],
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    color: colors.gray[500],
    fontSize: 14,
    marginTop: spacing.sm,
  },
  platformSection: {
    marginBottom: spacing.xl,
  },
  platformCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: spacing.lg,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  metricRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray[200],
  },
  lastMetricRow: {
    borderBottomWidth: 0,
  },
  metricLabel: {
    color: colors.gray[800],
    fontSize: 16,
    fontWeight: '500',
  },
  metricValue: {
    color: colors.success,
    fontSize: 16,
    fontWeight: '600',
  },
}); 