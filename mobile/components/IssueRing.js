import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

/**
 * Props for the IssueRing component
 * @param title - The text to display inside the circle
 * @param active - Whether the issue ring is active (shows orange border)
 * @param onPress - Handler for when the issue ring is pressed
 */
export default function IssueRing({ title, active = false, onPress }) {
  return (
    <TouchableOpacity 
      style={[styles.container, active && styles.active]} 
      onPress={onPress}
    >
      <Text style={[styles.text, active && styles.activeText]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    borderWidth: 2,
    borderColor: '#E0E0E0',
  },
  active: {
    backgroundColor: '#FF6B6B',
    borderColor: '#FF6B6B',
  },
  text: {
    fontSize: 16,
    color: '#333',
  },
  activeText: {
    color: '#fff',
  },
});
