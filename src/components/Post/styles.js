import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  container: {
    width: '100%',
    height: Dimensions.get('window').height - 48,
  },
  uiContainer: {
    height: '100%',
    justifyContent: 'flex-end',
  },
  rightContainer: {
    alignSelf: 'flex-end',
    height: 300,
    justifyContent: 'space-between',
    marginRight: 5,
  },
  profilePicture: {
    height: 50,
    width: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: 'white',
  },
  iconContainer: {
    alignItems: 'center',
  },
  statsLabel: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
    marginTop: 5,
  },
  bottomContainer: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  handle: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 5,
  },
  description: {
    color: 'white',
    fontSize: 15,
    fontWeight: '300',
    marginBottom: 10,
  },
  songRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  songName: {
    color: 'white',
    fontSize: 16,
    marginLeft: 5,
  },
  songImage: {
    height: 35,
    width: 35,
    borderRadius: 25,
    borderWidth: 8,
    borderColor: '#4c4c4c',
  },
});

export default styles;
