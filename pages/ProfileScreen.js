import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import ProfileHeader from '../components/ProfileHeader';
import ProfileOption from '../components/ProfileOption';

const ProfileScreen = ({ isDarkMode, setIsDarkMode }) => {
  const sectionTitleColor = isDarkMode ? '#fff' : '#000';
  const optionBackgroundColor = isDarkMode ? '#555' : '#ddd';
  const optionTextColor = isDarkMode ? '#fff' : '#000';
  const iconBorderColor = '#fff';

  const navIcon = isDarkMode ? require('../assets/arrowW.png') : require('../assets/arrowB.png');
  const notificationNavIcon = isDarkMode ? require('../assets/sixW.png') : require('../assets/sixB.png');
  const switchNavIcon = isDarkMode ? require('../assets/on.png') : require('../assets/off.png');
  const signoutNavIcon = isDarkMode ? require('../assets/arrowW.png') : require('../assets/arrowB.png');

  const rowIcons = [
    { icon: require('../assets/home.png'), title: 'Home' },
    { icon: require('../assets/search.png'), title: 'Search' },
    { icon: require('../assets/plus.png'), title: 'Add   ' },
    { icon: require('../assets/message.png'), title: 'Inbox' },
    { icon: require('../assets/userB.png'), title: 'Profile' },
  ];

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? '#000' : '#fff' }]}>
      <ProfileHeader isDarkMode={isDarkMode} />

      <Text style={[styles.sectionTitle, { color: sectionTitleColor }]}>Profile</Text>
      <ProfileOption
        title="Manage Account"
        icon={isDarkMode ? require('../assets/userW.png') : require('../assets/userB.png')}
        navIcon={navIcon}
        backgroundColor={optionBackgroundColor}
        textColor={optionTextColor}
        iconBorderColor={iconBorderColor} 
      />

      <Text style={[styles.sectionTitle, { color: sectionTitleColor }]}>Settings</Text>
      <ProfileOption
        title="Notifications"
        icon={isDarkMode ? require('../assets/bellW.png') : require('../assets/bellB.png')}
        navIcon={notificationNavIcon}
        backgroundColor={optionBackgroundColor}
        textColor={optionTextColor}
        iconBorderColor={iconBorderColor} 
      />
      <ProfileOption
        title="Dark Mode"
        subtitle={isDarkMode ? "On" : "Off"} 
        icon={isDarkMode ? require('../assets/moonW.png') : require('../assets/moonB.png')}
        navIcon={switchNavIcon}
        backgroundColor={optionBackgroundColor}
        textColor={optionTextColor}
        onPress={() => setIsDarkMode(!isDarkMode)}
        iconBorderColor={iconBorderColor}
      />

      <ProfileOption
        title="Sign Out"
        icon={isDarkMode ? require('../assets/signoutW.png') : require('../assets/signoutB.png')}
        navIcon={signoutNavIcon}
        backgroundColor={optionBackgroundColor}
        textColor={optionTextColor}
        iconBorderColor={iconBorderColor}
      />

      <View style={styles.iconRow}>
        {rowIcons.map((item, index) => (
          <View key={index} style={styles.iconRowContainer}>
            <View style={[styles.iconWrapper, { backgroundColor: isDarkMode ? '#fff' : '#fff' }]}>
              <Image source={item.icon} style={styles.rowIcon} />
            </View>
          </View>
        ))}
      </View>

      <View style={styles.titleRow}>
        {rowIcons.map((item, index) => (
          <Text key={index} style={[styles.iconTitle, { color: isDarkMode ? '#fff' : '#000' }]}>
            {item.title}
          </Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionTitle: {
    marginLeft: 25,
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 2,
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 0,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 5,
    marginLeft: 1,
    paddingHorizontal: 0,
  },
  iconRowContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    width: 35,
    height: 35,
    marginTop: 25,
    marginHorizontal: 10,
  },
  iconWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    width: 35,
    height: 35,
  },
  rowIcon: {
    width: 30,
    height: 30,
  },
  iconTitle: {
    fontSize: 12,
    textAlign: 'center',
  },
});

export default ProfileScreen;
