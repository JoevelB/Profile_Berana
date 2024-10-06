import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';

const ProfileHeader = ({ isDarkMode }) => {
  const textColor = isDarkMode ? '#fff' : '#000';
  const borderColor = isDarkMode ? '#fff' : '#000'; 
  const verifiedIcon = isDarkMode ? require('../assets/verifiedW.png') : require('../assets/verifiedB.png'); 

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/background.png')}
        style={styles.backgroundImage}
      >
        <View style={styles.avatarContainer}>
          <Image 
            source={require('../assets/joevel.jpeg')} 
            style={[styles.avatar, { borderColor }]} 
          />
        </View>
        <View style={styles.textContainer}>
          <View style={styles.nameContainer}>
            <Text style={[styles.name, { color: textColor }]}>Joevel Berana</Text>
            <View style={[styles.verifiedIconContainer, { backgroundColor: isDarkMode ? '#fff' : '#fff' }]}>
              <Image 
                source={verifiedIcon} 
                style={styles.verifiedIcon} 
              />
            </View>
          </View>
          <Text style={[styles.joined, { color: textColor }]}>🟢 Just Joined</Text>
        </View>
      </ImageBackground>

      <View style={styles.statsContainer}>
        <Text style={[styles.statsText, { color: textColor }]}>11 projects</Text>
        <Text style={[styles.statsText, { color: textColor }]}>10k followers</Text>
        <Text style={[styles.statsText, { color: textColor }]}>1 following</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  backgroundImage: {
    width: '100%',
    height: 140, 
    justifyContent: 'center',
  },
  avatarContainer: {
    position: 'absolute',
    bottom: -80, 
    left: 15, 
  },
  avatar: {
    width: 120, 
    height: 120,
    borderRadius: 60, 
    borderWidth: 3, 
  },
  textContainer: {
    position: 'absolute',
    bottom: -60,
    left: 150, 
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 5, 
  },
  verifiedIconContainer: {
    width: 24, 
    height: 24, 
    borderRadius: 12, 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginLeft: 1, 
  },
  verifiedIcon: {
    width: 20, 
    height: 20,
  },
  joined: {
    fontSize: 14,
  },
  statsContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    marginTop: 70, 
    paddingHorizontal: 10, 
    marginLeft: 120,
  },
  statsText: {
    fontSize: 12, 
  },
});

export default ProfileHeader;
