
import PomodoroTimer from './components/PomodoroTimer'

import {ChakraProvider, CSSReset, Box, Text} from "@chakra-ui/react" //1º é tipo contextAIPI, 2º pra resetar o css, 3º box seria um container e 4º text é para elementos de texto

function App() {

  return (
     <ChakraProvider>
      <CSSReset/>
      <Box textAlign="center" fontSize="xl" mt="4">
        <Text>Pomodoro</Text>
      <PomodoroTimer/>
      </Box>
    </ChakraProvider>
  )
}

export default App
