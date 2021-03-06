const Colors = {
  WhiteOpacity: (opacity = '0.5') => `rgba(255, 255, 255, ${opacity})`,
  BlackOpacity: (opacity = '0.5') => `rgba(0, 0, 0, ${opacity})`,
  PlaceHolder: (opacity = '0.7') => `rgba(35, 38, 50, ${opacity})`,
  Transparent: 'transparent',
  Success: '#1cd50f',
  Danger: '#f13844',
  Shadow: '#232632',
  TextColorOpacity: (opacity = 0.15) => `rgba(64, 81, 78, ${opacity})`,
  DisabledColor: '#2326320C',
  Primary: '#0B172D',
  Secondary: '#143C85',
  Red: '#D62D16',
  Orange: '#FD7133',
  WhiteText: '#FFFFFF',
  White: '#FFFFFF',
  Blue: '#092B68',
  LightBlue: '#3355FD',
  DarkBlue: '#213251',
  DarkRed: '#BB200B',
  Gray: '#969696',
  LightGray: '#E4E4E4',
  Black: '#000000',
  ModalBg: '#0C1F42'
};

export default Colors;
