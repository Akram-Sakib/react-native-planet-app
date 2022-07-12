import React from "react";
import {
  Linking,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import PlanetHeaders from "../components/planet-header";
import Text from "../components/text/text";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";

const PlanetSection = ({ title, value }) => {
  return (
    <View style={styles.planetSection}>
      <Text preset="small" style={{ textTransform: "uppercase" }}>
        {title}
      </Text>
      <Text preset="h2">{value}</Text>
    </View>
  );
};

export default function Details({ route }) {
  const { planet } = route.params;
  const {
    name,
    description,
    rotationTime,
    revolutionTime,
    radius,
    avgTemp,
    wikiLink,
  } = planet;
  console.log("Planet -->", planet);

  const renderDetails = () => {
    return <Text preset="h2">{name}</Text>;
  };

  const onPressLink = () => {
    Linking.openURL(wikiLink);
  };

  return (
    <SafeAreaView style={styles.container}>
      <PlanetHeaders backBtn={true} title="DETAILS" />
      <ScrollView>
        <View style={styles.detailsView}>
          <Text preset="h1" style={styles.name}>
            {name}
          </Text>
          <Text style={styles.description}>{description}</Text>
          <Pressable onPress={onPressLink} style={styles.source}>
            <Text>Source: </Text>
            <Text preset="h4" style={styles.wikipedia}>
              Wikipedia
            </Text>
          </Pressable>
        </View>
        <View style={{ height: 40 }} />
        <PlanetSection title="ROTATION TIME" value={rotationTime} />
        <PlanetSection title="REVOLUTION TIME" value={revolutionTime} />
        <PlanetSection title="RADIUS" value={radius} />
        <PlanetSection title="AVERAGE TEMP." value={avgTemp} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  detailsView: {
    marginTop: spacing[10],
    marginHorizontal: spacing[6],
    alignItems: "center",
  },
  name: {
    textTransform: "uppercase",
    textAlign: "center",
  },
  description: {
    textAlign: "center",
    marginTop: spacing[5],
    lineHeight: 21,
  },
  source: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: spacing[5],
  },
  wikipedia: {
    textDecorationLine: "underline",
    fontWeight: "bold",
  },
  planetSection: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: spacing[5],
    paddingVertical: spacing[4],
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: colors.gray,
    marginHorizontal: spacing[6],
    marginBottom: spacing[4],
  },
});
