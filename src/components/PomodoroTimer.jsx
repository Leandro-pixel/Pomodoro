import React from 'react'

import { useState, useEffect } from 'react'
import {
    Box, 
    Button, 
    Text, 
    Input, 
    FormControl, 
    FormLabel, 
    Center, 
    HStack
} from "@chakra-ui/react"

const PomodoroTimer = () => {

    const [minutes, setMinutes] = useState(25)
    const [seconds, setSeconds] = useState(0)
    const [isActive, setIsActive] = useState(false)
    const [userTimer, setUserTimer] = useState(25)

    useEffect(() => {

        let interval;

        if(isActive && (minutes > 0 || seconds > 0)) { //a cada 1 segundo vai verificar isso e diminuir 1 segundo e quando os segundos zerarem vai diminuir 1 minuto
            interval = setInterval(() => {
                if(seconds === 0) {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                } else {
                    setSeconds(seconds - 1);
                }
            }, 1000) //tempo para retornar a função
        } else if (minutes === 0 && seconds === 0) {
            alert("Time is over");
            resetTimer();
        } else {
            clearInterval(interval) //assim terá só um interval funcionando a cada momento
        }

        return () => clearInterval(interval) //uma limpeza de memória limpando o interval quando essa função parar de ser usada
    }, [isActive, minutes, seconds])

    const toggleTimer = () => {
        setIsActive(!isActive) //ele para ou inicia
    }

    const resetTimer = () => {
        setIsActive(false)
        setMinutes(userTimer)
        setSeconds(0)
    }

    const handleTimeChange = (e) => {
        setUserTimer(e.target.value);
        setMinutes(e.target.value)
    }

//padStart serve para preencher de 0 se caso não tiver 2ª decimal, por exemplo falta 8 minutos, vai aparecer 08 assim ele não fica quebrando o estilo
  return (
    <Center >
        <Box width="100%" maxWidth="400px" p="4">
        <Text fontSize="4xl" mb="4" textAlign="center">
            {String(minutes).padStart(2, "0")} : {""}
            {String(seconds).padStart(2, "0")}
            </Text>
            <FormControl mb="4">
                <FormLabel>Set a time(minutes)</FormLabel>
                <Input 
                type='number' 
                value={userTimer} 
                onChange={handleTimeChange} 
                isDisabled={isActive} //isDisable é do próprio chakra
                />
                <HStack spacing="4">
                    <Button onClick={toggleTimer} colorScheme={isActive ? "red" : "green" }>{isActive ? "Stop" : "Start"}</Button>
                    <Button colorScheme='gray' onClick={resetTimer}>Restart</Button>
                </HStack>
            </FormControl>
        </Box>
    </Center> 
  )
}

export default PomodoroTimer