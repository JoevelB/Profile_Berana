import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import ProfileScreen from './pages/ProfileScreen';  

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: isDarkMode ? '#000' : '#fff' }]}>
      <ProfileScreen isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
