import { Box, Text, Button, Image } from '@chakra-ui/react'

import imageHeroDesktop from '../../../images/image-hero-desktop.png'
import databiz from '../../../images/client-databiz.svg'
import audiophile from '../../../images/client-audiophile.svg'
import meet from '../../../images/client-meet.svg'
import maker from '../../../images/client-maker.svg'

export const Main = () => {
  return (
    <Box p='2.5rem' display='flex' justifyContent='space-around'>
      <Box
        width='50%'
        display='flex'
        flexDirection='column'
        alignItems='flex-start'
        justifyContent='center'
      >
        <Text lineHeight='70px' fontWeight='700' fontSize='4rem' as='h1'>
          Make
          <br />
          <Text as='span'>remote work</Text>
        </Text>
        <Text
          color='hsl(0, 0%, 41%)'
          fontWeight='500'
          my='2.5rem'
          maxWidth='450px'
          as='p'
        >
          Get your team in sync, no matter your location. Streamline
          processes, create team rituals, and watch productivity soar.
        </Text>
        <Button
          _hover={{
            background: 'hsl(0, 0%, 98%)',
            color: 'hsl(0, 0%, 8%)',
            border: '2px',
          }}
          border='2px'
          _active={{ background: 'hsl(0, 0%, 8%)', color: 'hsl(0, 0%, 98%)' }}
          bg='hsl(0, 0%, 8%)'
          color='white'
          borderRadius='13px'
          px='1.2rem'
          py='1.4rem'
          as='a'
          href='/'
        >
          Learn more
        </Button>
        <Box
          marginTop='5rem'
          width='100%'
          display='flex'
          justifyContent='space-between'
          alignItems='center'
          role='img'
        >
          <Image src={databiz} alt='Logo the Databiz'></Image>
          <Image src={audiophile} alt='Logo the Audiophile'></Image>
          <Image src={meet} alt='Logo the Meet'></Image>
          <Image src={maker} alt='Logo the Maker'></Image>
        </Box>
      </Box>
      <Image maxWidth='450px' src={imageHeroDesktop} alt='Man whit laptop' />
    </Box>
  )
}
