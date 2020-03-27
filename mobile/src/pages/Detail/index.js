import React from 'react'
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'
import * as MailComposer from 'expo-mail-composer'

import styles from './style'
import logoImg from '../../../assets/logo.png'


export default function Detail() {
    const navigation = useNavigation()
    const route = useRoute()

    const incident = route.params.incident
    const mensagem = `Olá ${incident.name} estou entrando em contato pois gostaria de ajudar no "${incident.title}" com valor de ${Intl.NumberFormat('pt-BR',  { style: 'currency', currency: 'BRL' }).format(incident.value)}.`

    function navigateBack() {
        navigation.goBack()
    }

    function sendEmail(){
        MailComposer.composeAsync({
            subject: 'Heroi do caso: Cadelinha atropelada',
            recipients: ['leo.alipio@live.com'],
            body: mensagem
        })
    }

    function sendWhatsApp(){
        Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${mensagem}`)
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                
                <TouchableOpacity onPress={navigateBack}>
                    <Feather size={28} name="arrow-left" color="#e82041" />
                </TouchableOpacity>
            </View>

            <View style={styles.incident}>
                <Text style={styles.incidentPropety, {marginTop:0}}>ONG:</Text>
                <Text style={styles.incidentValue}>{incident.name}</Text>
                <Text style={styles.incidentValue}>{incident.city}</Text>

                <Text style={styles.incidentPropety}>Caso:</Text>
                <Text style={styles.incidentValue}>{incident.description}</Text>

                <Text style={styles.incidentPropety}>Valor:</Text>
                <Text style={styles.incidentValue}>
                    { Intl.NumberFormat('pt-BR', 
                        { style: 'currency',
                            currency: 'BRL' })
                            .format(incident.value) }
                </Text>               
            </View>
            
            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Salve o dia!</Text>
                <Text style={styles.heroTitle}>Seja o heroi desse caso.</Text>

                <Text style={styles.heroDescription}>Entre em contato:</Text>

                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={sendWhatsApp}>
                        <Text style={styles.actionText}>WahstApp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.action} onPress={sendEmail}>
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}