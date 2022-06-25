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
const colorDarkFontGithub = '#4F565E';
const colorButtonLinkedin = '#0A66C2';
const urlGithub = 'https://github.com/Brenocapano';
const urlLinkedin = 'https://www.linkedin.com/in/breno-capano/';
const profilePicture = 'https://avatars.githubusercontent.com/u/29673433?v=4';
const iconGithub = 'https://cdn-icons.flaticon.com/png/128/3291/premium/3291695.png?token=exp=1656111542~hmac=acf1554d5db8da6bf047603e7bc5957b';
const iconLinkedin = 'https://cdn-icons.flaticon.com/png/128/3536/premium/3536505.png?token=exp=1656117493~hmac=eb062f4be381a63d40f5d41a030ea7f3';
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
        height: 30,
        width: 30,
        borderRadius: 3,
        marginRight: 10,

    },
    iconeLinkedin: {
        height: 30,
        width: 30,
        borderRadius: 3,
        marginRight: 10,

    }


})
