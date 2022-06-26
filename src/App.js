import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    SafeAreaView,
    StatusBar,
    Image,
    Pressable,
    Linking

} from 'react-native';
const colorGithub = '#010409';
const colorFontGithub = '#C9D1D9';
const colorButtonInstagram = '#7f0804';
const colorDarkFontGithub = '#4F565E';
const colorButtonLinkedin = '#0A66C2';
const urlGithub = 'https://github.com/Brenocapano';
const urlLinkedin = 'https://www.linkedin.com/in/breno-capano/';
const urlInstagram = 'https://www.instagram.com/breno.capano/';
const profilePicture = 'https://avatars.githubusercontent.com/u/29673433?v=4';
const iconInstagram = 'https://cdn-icons-png.flaticon.com/512/2111/2111463.png';
const iconGithub = 'https://cdn-icons-png.flaticon.com/512/38/38401.png';
const iconLinkedin = 'https://cdn-icons.flaticon.com/png/512/3536/premium/3536505.png?token=exp=1656284492~hmac=36785df587ac3a43508ecf6659940f52';
const App = () => {

    return (

        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={colorGithub} barStyle='light-content' />
            <View style={style.content}>
                <Image accessibilityLabel='Imagem de perfil'
                    style={style.avatar}
                    source={{ uri: profilePicture }} />
                <Text accessibilityLabel='Nome Breno Capano'
                    style={[style.defaulText, style.name]}>Breno Capano
                </Text>
                <Text accessibilityLabel='nickname breno.capano'
                    style={[style.defaulText, style.nickName]}>breno.capano
                </Text>
                <Text accessibilityLabel='descrição Estudante de Análise e Desenvolvimento de Sistemaas | Analista de Marketing |
             Dev Frontend'
                    style={[style.defaulText, style.description]}>Estudante de Análise e Desenvolvimento de Sistemaas | Analista de Marketing |
                    Dev Frontend
                </Text>
                <Pressable onPress={() => {
                    Linking.openURL(urlGithub);
                }}>

                    <View style={style.buttonGithub}>
                        <Image accessibilityLabel='icone github'
                            style={style.iconeGithub}
                            source={{ uri: iconGithub }} />
                        <Text style={[style.defaulText, style.textButton]}>
                            Github
                        </Text>
                    </View>
                </Pressable>
                <Pressable onPress={() => {
                    Linking.openURL(urlLinkedin);
                }}>
                    <View style={[style.buttonLinkedin, style.colorButtonLinkedin]}>
                        <Image accessibilityLabel='icone linkedin'
                            style={style.iconeLinkedin}
                            source={{ uri: iconLinkedin }} />
                        <Text style={[style.defaulText, style.textButton]}>
                            Linkedin
                        </Text>
                    </View>
                </Pressable>
                <Pressable onPress={() => {
                    Linking.openURL(urlInstagram);
                }}>
                    <View style={[style.buttonInstagram, style.colorButtonInstagram]}>
                        <Image accessibilityLabel='icone linkedin'
                            style={style.iconeInstagram}
                            source={{ uri: iconInstagram }} />
                        <Text style={[style.defaulText, style.textButton]}>
                            Instagram
                        </Text>
                    </View>
                </Pressable>
            </View>
        </SafeAreaView>
    );
};


export default App;

const style = StyleSheet.create({
    container: {
        backgroundColor: colorGithub,
        flex: 1,
        justifyContent: 'center',
    },
    content: {
        alignItems: 'center',
        padding: 20,
    },
    avatar: {
        height: 200,
        width: 200,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 2,

    },
    defaulText: {
        color: colorFontGithub,
    },
    name: {
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 24,

    },
    nickName: {
        color: colorDarkFontGithub,
        fontSize: 18,
    },
    description: {
        fontWeight: 'bold',
        fontSize: 14,
    },
    buttonGithub: {
        marginTop: 20,
        backgroundColor: colorDarkFontGithub,
        borderRadius: 10,
        padding: 20,
        height: 60,
        width: 150,
        flexDirection: 'row',
        alignItems: 'center',

    },
    buttonLinkedin: {
        marginTop: 20,
        backgroundColor: colorButtonLinkedin,
        borderRadius: 10,
        padding: 20,
        height: 60,
        width: 150,
        flexDirection: 'row',
        alignItems: 'center',


    },
    textButton: {
        textAlignVertical: 'auto',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,

    },
    iconeGithub: {
        height: 40,
        width: 40,
        borderRadius: 4,
        marginRight: 10,

    },
    iconeLinkedin: {
        height: 40,
        width: 40,
        borderRadius: 4,
        marginRight: 10,

    },
    iconeInstagram: {
        height: 40,
        width: 40,
        borderRadius: 4,
        marginRight: 10,

    },
    buttonInstagram: {
        marginTop: 20,
        backgroundColor: colorButtonInstagram,
        borderRadius: 10,
        padding: 20,
        height: 60,
        width: 150,
        flexDirection: 'row',
        alignItems: 'center',


    }




})

