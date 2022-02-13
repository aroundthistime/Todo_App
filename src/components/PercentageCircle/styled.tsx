import {ReactNativeStyle} from '@emotion/native';
import React, {useMemo} from 'react';
import {StyleSheet, Text, View} from 'react-native';

/** React Native Percentage Circle 참고
 ** @github  https://github.com/JackPu/react-native-percentage-circle
 ** React Native Version >=0.25
 ** to fixed react native version
 **/

const styles = StyleSheet.create({
  circle: {
    overflow: 'hidden',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e3e3e3',
  },
  leftWrap: {
    overflow: 'hidden',
    position: 'absolute',
    top: 0,
  },
  rightWrap: {
    position: 'absolute',
  },

  loader: {
    position: 'absolute',
    left: 0,
    top: 0,
    borderRadius: 1000,
  },

  innerCircle: {
    overflow: 'hidden',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 11,
    color: '#888',
  },
});

type Props = {
  color: string | string[];
  bgcolor?: string;
  innerColor?: string;
  radius: number;
  percent: number;
  borderWidth?: number;
  textStyle?: ReactNativeStyle;
  children?: React.ReactNode;
};

const PercentageCircleLibrary = ({
  color: colorProps,
  bgcolor = '#e3e3e3',
  innerColor = 'white',
  radius,
  percent,
  borderWidth = 5,
  textStyle = {},
  children,
}: Props) => {
  let leftTransformerDegree: string = '0deg';
  let rightTransformerDegree: string = '0deg';
  if (percent >= 50) {
    rightTransformerDegree = '180deg';
    leftTransformerDegree = (percent - 50) * 3.6 + 'deg';
  } else {
    rightTransformerDegree = percent * 3.6 + 'deg';
  }
  const color: string = useMemo(() => {
    if (typeof colorProps === 'string') {
      return colorProps;
    } else {
      if (colorProps.length === 1) {
        return colorProps[0];
      } else {
        if (percent === 100) {
          return colorProps[colorProps.length - 1];
        } else {
          return colorProps[
            parseInt(percent / (100 / (colorProps.length - 1)))
          ];
        }
      }
    }
  }, [colorProps, percent]);
  return (
    <View
      style={[
        styles.circle,
        {
          width: radius * 2,
          height: radius * 2,
          borderRadius: radius,
          backgroundColor: bgcolor,
        },
      ]}>
      <View
        style={[
          styles.leftWrap,
          {
            width: radius,
            height: radius * 2,
            left: 0,
          },
        ]}>
        <View
          style={[
            styles.loader,
            {
              left: radius,
              width: radius,
              height: radius * 2,
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
              backgroundColor: color,
              transform: [
                {translateX: -radius / 2},
                {rotate: leftTransformerDegree},
                {translateX: radius / 2},
              ],
            },
          ]}
        />
      </View>
      <View
        style={[
          styles.leftWrap,
          {
            left: radius,
            width: radius,
            height: radius * 2,
          },
        ]}>
        <View
          style={[
            styles.loader,
            {
              left: -radius,
              width: radius,
              height: radius * 2,
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
              backgroundColor: color,
              transform: [
                {translateX: radius / 2},
                {rotate: rightTransformerDegree},
                {translateX: -radius / 2},
              ],
            },
          ]}
        />
      </View>
      <View
        style={[
          styles.innerCircle,
          {
            width: (radius - borderWidth) * 2,
            height: (radius - borderWidth) * 2,
            borderRadius: radius - borderWidth,
            backgroundColor: innerColor,
          },
        ]}>
        {children ? (
          children
        ) : (
          <Text
            style={{
              ...styles.text,
              ...textStyle,
            }}>
            {isNaN(percent) ? '-' : `${percent}%`}
          </Text>
        )}
      </View>
    </View>
  );
};

export default React.memo(PercentageCircleLibrary);
