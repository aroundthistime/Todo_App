import Toast from 'react-native-root-toast';

export const showToast = (text: string): void => {
  Toast.show(text, {
    duration: 1500,
    position: Toast.positions.BOTTOM - 20,
    shadow: true,
    animation: true,
  });
};
