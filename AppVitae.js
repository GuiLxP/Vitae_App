import {
  SafeAreaView,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  ScrollView,
  View,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.app}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar backgroundColor="#006E00" />
        <Text style={styles.title}>Vitae</Text>
        <Image
          style={styles.profile}
          source={{
            uri: "https://pbs.twimg.com/profile_images/1364069285908348928/_u53gBG0_400x400.png",
          }}
        />
        <Text style={styles.myName}>Henrique Douglas Cavalcante Costa</Text>

        <Text style={styles.subTitle}> - Minha história</Text>
        <Text style={styles.myLife} selectable={true} selectionColor="#006E00">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>
        <Text style={styles.myLife}>
          {" "}
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>
        <Text style={styles.myLife}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>
        <Text
          style={styles.myLife}
          selectable={true}
          numberOfLines={3}
          ellipsizeMode={"tail"}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop p
        </Text>

        <Text style={styles.subTitle}>- Minhas habilidades</Text>
        <ScrollView horizontal={true}>
          <Image
            style={styles.mySkill}
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png",
            }}
          />
          <Image
            style={styles.mySkill}
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png",
            }}
          />
          <Image
            style={styles.mySkill}
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png",
            }}
          />
          <Image
            style={styles.mySkill}
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png",
            }}
          />
          <Image
            style={styles.mySkill}
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png",
            }}
          />
          <Image
            style={styles.mySkill}
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png",
            }}
          />
          <Image
            style={styles.mySkill}
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png",
            }}
          />
          <Image
            style={styles.mySkill}
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png",
            }}
          />
          <Image
            style={styles.mySkill}
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png",
            }}
          />
          <Image
            style={styles.mySkill}
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png",
            }}
          />
          <Image
            style={styles.mySkill}
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png",
            }}
          />
          <Image
            style={styles.mySkill}
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png",
            }}
          />
        </ScrollView>

        <Text style={styles.subTitle}>- Empresas que desejo trabalhar </Text>

        <View style={styles.companyCard}>
          <Image
            style={styles.companyPhoto}
            source={{
              uri: "https://pbs.twimg.com/profile_images/1364069285908348928/_u53gBG0_400x400.png",
            }}
          />
          <View>
            <Text style={styles.subTitle}> EDP </Text>
            <Text style={styles.subTitle} dataDetectorType="phoneNumber">
              85 99999-9999
            </Text>
          </View>
        </View>

        <View style={styles.companyCard}>
          <Image
            style={styles.companyPhoto}
            source={{
              uri: "https://pbs.twimg.com/profile_images/1364069285908348928/_u53gBG0_400x400.png",
            }}
          />
          <View>
            <Text style={styles.subTitle}> EDP </Text>
            <Text style={styles.subTitle} dataDetectorType="phoneNumber">
              85 99999-9999
            </Text>
          </View>
        </View>

        <View style={styles.companyCard}>
          <Image
            style={styles.companyPhoto}
            source={{
              uri: "https://pbs.twimg.com/profile_images/1364069285908348928/_u53gBG0_400x400.png",
            }}
          />
          <View>
            <Text style={styles.subTitle}> EDP </Text>
            <Text style={styles.subTitle} dataDetectorType="phoneNumber">
              85 99999-9999
            </Text>
          </View>
        </View>

        <View style={styles.companyCard}>
          <Image
            style={styles.companyPhoto}
            source={{
              uri: "https://pbs.twimg.com/profile_images/1364069285908348928/_u53gBG0_400x400.png",
            }}
          />
          <View>
            <Text style={styles.subTitle}> EDP </Text>
            <Text style={styles.subTitle} dataDetectorType="phoneNumber">
              85 99999-9999
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  app: {
    backgroundColor: "#999",
    flex: 1,
  },
  title: {
    color: "red",
    fontSize: 24,
    alignSelf: "center",
    marginVertical: 20,
  },
  profile: {
    width: 90,
    height: 90,
    borderRadius: 50,
    alignSelf: "center",
    marginVertical: 20,
  },
  myName: {
    fontSize: 18,
    color: "#006E00",
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 30,
  },
  subTitle: {
    color: "#000",
    fontSize: 18,
    marginLeft: 15,
  },
  myLife: {
    color: "#000",
    fontSize: 14,
    marginHorizontal: 15,
    textAlign: "justify",
    marginVertical: 10,
  },
  mySkill: {
    width: 70,
    height: 70,
    borderRadius: 50,
    margin: 15,
  },
  companyPhoto: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  companyCard: {
    backgroundColor: "#006E00",
    flexDirection: "row",
    borderColor: "#FFF",
    borderWidth: 1,
    width: "90%",
    alignSelf: "center",
    padding: 10,
    marginVertical: 10,
    borderRadius: 10,
  },
});
