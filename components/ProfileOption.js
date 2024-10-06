import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const ProfileOption = ({ title, subtitle, icon, onPress, textColor, navIcon, iconBorderColor }) => {
  return (
    <TouchableOpacity style={styles.optionContainer} onPress={onPress}>
      {icon && (
        <View style={[styles.iconContainer, { backgroundColor: iconBorderColor }]}>
          <Image
            source={icon}
            style={styles.icon}
          />
        </View>
      )}
      <View style={styles.textContainer}>
        <Text style={[styles.title, { color: textColor }]}>{title}</Text>
        {subtitle && (
          <Text style={[styles.subtitle, { color: textColor }]}>{subtitle}</Text>
        )}
      </View>
      {navIcon && (
        <View style={[styles.navContainer, { backgroundColor: iconBorderColor }]}>
          <Image
            source={navIcon}
            style={styles.navIcon}
          />
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    padding: 5,
  },
  iconContainer: {
    width: 30,
    height: 30,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 40,
    backgroundColor: '#fff',
  },
  icon: {
    width: 24,
    height: 24,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontSize: 15,
  },
  subtitle: {
    fontSize: 14, 
    marginTop: 2, 
  },
  navContainer: {
    width: 24,
    height: 24,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 40,
    backgroundColor: '#fff',
  },
  navIcon: {
    width: 20,
    height: 20,
  },
});

export default ProfileOption;
