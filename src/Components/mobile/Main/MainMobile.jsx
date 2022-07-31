import { Box, Text, Button, Image } from '@chakra-ui/react'

import imageHeroMobile from '../../../images/image-hero-mobile.png'
import databiz from '../../../images/client-databiz.svg'
import audiophile from '../../../images/client-audiophile.svg'
import meet from '../../../images/client-meet.svg'
import maker from '../../../images/client-maker.svg'

export const MainMobile = () => {
  return (
    <Box
      display='flex'
      flexDirection='column-reverse'
      justifyContent='space-around'
    >
      <Box
        display='flex'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        marginTop='1rem'
      >
        <Text lineHeight='70px' fontWeight='700' fontSize='2rem' as='h1'>
          Make remote work
        </Text>
        <Text
          textAlign='center'
          color='hsl(0, 0%, 41%)'
          fontWeight='500'
          marginTop='1rem'
          marginBottom='2.5rem'
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
          width='100%'
          marginTop='3rem'
          display='flex'
          justifyContent='space-between'
          alignItems='center'
          role='img'
        >
          <Image width='70px' src={databiz} alt='Logo the Databiz' />
          <Image width='70px' src={audiophile} alt='Logo the Audiophile' />
          <Image width='70px' src={meet} alt='Logo the Meet' />
          <Image width='70px' src={maker} alt='Logo the Maker' />
        </Box>
      </Box>
      <Image width='100%' src={imageHeroMobile} alt='Man whit laptop' />
    </Box>
  )
}
