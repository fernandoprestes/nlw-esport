import { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  Modal,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";

import { GameParams } from "../../@types/navigation";
import { DuoCardProps } from "../../@types/DuoCard";

import { Background } from "../../components/Background";
import { Heading } from "../../components/Heading";
import { DuoCard } from "../../components/DuoCard";
import { DuoMatch } from "../../components/DuoMatch";

import { THEME } from "../../theme";
import { styles } from "./styles";

import logoImg from "../../assets/logo-nlw-esports.png";

export function Game() {
  const route = useRoute();
  const navigation = useNavigation();

  const [duos, setDuos] = useState<DuoCardProps[]>([]);
  const [discordUser, setDiscordUser] = useState<string>("");
  const [openModal, setOpenModal] = useState(false);

  const game = route.params as GameParams;

  function handleGoBack() {
    navigation.goBack();
  }

  function handleModalState() {
    setOpenModal(!openModal);
  }

  async function getDiscordUser(adsId: string) {
    fetch(`http://192.168.0.104:3000/ads/${adsId}/discord`)
      .then((response) => response.json())
      .then((data) => setDiscordUser(data.discord));
    setOpenModal(true);
  }

  useEffect(() => {
    fetch(`http://192.168.0.104:3000/games/${game.id}/ads`)
      .then((response) => response.json())
      .then((data) => setDuos(data));
  }, []);

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack}>
            <Entypo
              name="chevron-thin-left"
              color={THEME.COLORS.CAPTION_300}
              size={20}
            />
          </TouchableOpacity>
          <Image source={logoImg} style={styles.logo} />
          <View style={styles.right} />
        </View>
        <Image
          source={{ uri: game.bannerUrl }}
          style={styles.cover}
          resizeMode="cover"
        />
        <Heading title={game.title} subtitle="Conecte-se e comece a jogar!" />
        <FlatList
          contentContainerStyle={
            duos.length > 0 ? styles.contentList : styles.emptyListContent
          }
          style={styles.containerList}
          data={duos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <DuoCard data={item} onConnect={() => getDiscordUser(item.id)} />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={() => (
            <Text style={styles.emptyListText}>
              Não há anúncios publicados para esse jogo ainda.
            </Text>
          )}
        />
        <DuoMatch
          discord={discordUser}
          visible={openModal}
          onClose={handleModalState}
        />
      </SafeAreaView>
    </Background>
  );
}
