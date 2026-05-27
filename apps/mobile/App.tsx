import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useCounter, SHARED_APP_CONFIG, getGreeting } from '@shared/core';

export default function App() {
  const { count, increment, decrement, reset } = useCounter(0);
  const greeting = getGreeting('React Native Developer');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.header}>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>Mobile App</Text>
        </View>
        <Text style={styles.title}>React Native Mobile</Text>
        <Text style={styles.subtitle}>
          Running code directly from the same shared workspaces library as the Web app.
        </Text>
      </View>

      <View style={styles.dashboard}>
        {/* Card 1: Counter State */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Shared Counter Hook</Text>
          <Text style={styles.cardDescription}>
            This uses the identical useCounter hook and local state as the web application.
          </Text>

          <View style={styles.counterContainer}>
            <Text style={styles.counterValue}>{count}</Text>
            <View style={styles.buttonGroup}>
              <TouchableOpacity style={[styles.button, styles.buttonSecondary]} onPress={decrement}>
                <Text style={styles.buttonSecondaryText}>- Decrement</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, styles.buttonPrimary]} onPress={increment}>
                <Text style={styles.buttonPrimaryText}>+ Increment</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={[styles.button, styles.buttonOutline]} onPress={reset}>
              <Text style={styles.buttonOutlineText}>Reset State</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Card 2: Shared Config */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Shared Config & Utils</Text>
          <View style={styles.configItem}>
            <Text style={styles.configLabel}>App Name:</Text>
            <Text style={styles.configValue}>{SHARED_APP_CONFIG.appName}</Text>
          </View>
          <View style={styles.configItem}>
            <Text style={styles.configLabel}>API Version:</Text>
            <Text style={styles.configValue}>{SHARED_APP_CONFIG.apiVersion}</Text>
          </View>

          <View style={styles.greetingBox}>
            <Text style={styles.greetingTitle}>Function Output:</Text>
            <Text style={styles.greetingText}>{greeting}</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b0f19',
  },
  header: {
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 40,
    paddingBottom: 20,
  },
  badge: {
    backgroundColor: '#6366f1',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 50,
    marginBottom: 12,
  },
  badgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#fff',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#9ca3af',
    textAlign: 'center',
    lineHeight: 20,
  },
  dashboard: {
    flex: 1,
    paddingHorizontal: 20,
    gap: 20,
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.03)',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',
    padding: 20,
    gap: 12,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
  },
  cardDescription: {
    fontSize: 13,
    color: '#9ca3af',
    lineHeight: 18,
  },
  counterContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.02)',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.05)',
    padding: 16,
    alignItems: 'center',
    gap: 16,
  },
  counterValue: {
    fontSize: 48,
    fontWeight: '800',
    color: '#fff',
  },
  buttonGroup: {
    flexDirection: 'row',
    gap: 12,
  },
  button: {
    flex: 1,
    height: 44,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonPrimary: {
    backgroundColor: '#6366f1',
  },
  buttonPrimaryText: {
    color: '#fff',
    fontWeight: '600',
  },
  buttonSecondary: {
    backgroundColor: '#374151',
  },
  buttonSecondaryText: {
    color: '#fff',
    fontWeight: '600',
  },
  buttonOutline: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.15)',
  },
  buttonOutlineText: {
    color: '#9ca3af',
    fontWeight: '600',
  },
  configItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.06)',
  },
  configLabel: {
    color: '#9ca3af',
    fontWeight: '500',
  },
  configValue: {
    color: '#fff',
    fontWeight: '600',
  },
  greetingBox: {
    backgroundColor: 'rgba(6, 182, 212, 0.05)',
    borderWidth: 1,
    borderColor: 'rgba(6, 182, 212, 0.15)',
    borderRadius: 12,
    padding: 12,
    marginTop: 8,
  },
  greetingTitle: {
    color: '#06b6d4',
    fontSize: 12,
    fontWeight: '700',
  },
  greetingText: {
    color: '#e5e7eb',
    fontSize: 13,
    marginTop: 4,
    fontStyle: 'italic',
  },
});
