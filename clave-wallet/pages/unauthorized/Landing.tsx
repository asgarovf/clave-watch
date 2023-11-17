import { Animated, Image, StyleSheet, View } from "react-native";
import { $MixedElement } from "../../types";
import { CDSButton, CDSColors, CDSInput, CDSTypography } from "../../packages";
import { useMemo, useRef, useState } from "react";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../utils/dimensions";
import { dashboardGradient } from "../../assets";
import { useCustomAnimation } from "../../hooks/useCustomAnimation";

export const Landing = (): $MixedElement => {
  const translateX = useRef(new Animated.Value(0)).current;
  useCustomAnimation(translateX);
  const [username, setUsername] = useState("");

  const isButtonDisabled = useMemo(() => {
    return username.trim().length < 3;
  }, [username]);

  return (
    <>
      <View style={styles.container}>
        <Animated.View
          style={[
            styles.gradient,
            {
              transform: [{ translateX }],
            },
          ]}
        >
          <Image resizeMode="cover" source={dashboardGradient} />
        </Animated.View>
        <View style={styles.wrapper}>
          <CDSInput
            value={username}
            onChangeText={setUsername}
            label="Username"
          />
          <CDSButton disabled={isButtonDisabled} margin={["mt-4"]}>
            Create Account
          </CDSButton>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: SCREEN_HEIGHT,
    backgroundColor: CDSColors.dark,
    zIndex: 100,
  },
  gradient: {
    zIndex: 1,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    position: "absolute",
    left: 0,
    top: 0,
  },
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
    marginTop: "auto",
    marginBottom: 72,
    zIndex: 1,
  },
});
