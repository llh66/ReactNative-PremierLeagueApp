import { StyleSheet } from 'react-native';

// Premier League colors
export const colors = {
  primary: '#37003C',      
  secondary: '#00FF85',   
  accent: '#F20C40',      
  background: '#F0F0F0',   
  text: '#333333',         
  textSecondary: '#666666',
  border: '#DDDDDD',       
  white: '#FFFFFF',
};

export default StyleSheet.create({
  // Common containers
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  // Card styles
  card: {
    backgroundColor: colors.white,
    borderRadius: 8,
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 16,
  },
  // Text styles
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.primary,
  },
  subheading: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
  },
  bodyText: {
    fontSize: 14,
    color: colors.text,
  },
  captionText: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  // Button styles
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
