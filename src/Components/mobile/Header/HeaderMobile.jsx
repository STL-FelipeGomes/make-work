import {
  Box,
  Image,
  Button,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  DrawerFooter,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Text,
} from '@chakra-ui/react'

import snap from '../../../images/logo.svg'
import iconTodoList from '../../../images/icon-todo.svg'
import iconCalendar from '../../../images/icon-calendar.svg'
import iconReminders from '../../../images/icon-reminders.svg'
import iconPlanning from '../../../images/icon-planning.svg'
import iconMenu from '../../../images/icon-menu.svg'
import iconCloseMenu from '../../../images/icon-close-menu.svg'

export const HeaderMobile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box
      color='hsl(0, 0%, 41%)'
      display='flex'
      alignItems='center'
      fontWeight='700'
      justifyContent='space-between'
      gap='3rem'
    >
      <Image mr='5rem' src={snap} alt='Logo the Snap' />
      <Button
        bg='transparent'
        _hover={{ background: 'transparent' }}
        onClick={onOpen}
      >
        <Image src={iconMenu} alt='Icon the burguer' />
      </Button>
      <Drawer isOpen={isOpen} placement='right' onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton marginTop='2rem' right='2.9rem'>
            <Image src={iconCloseMenu} />
          </DrawerCloseButton>
          <DrawerBody
            fontWeight='700'
            color='hsl(0, 0%, 41%)'
            marginTop='6rem'
          >
            <Box marginBottom='1rem'>
              <Accordion allowToggle border='transparent'>
                <AccordionItem marginBottom='1rem'>
                  <h2>
                    <AccordionButton
                      width='35%'
                      padding='0'
                      _hover={{ background: 'none', color: 'hsl(0, 0%, 8%)' }}
                    >
                      <Box
                        flex='1'
                        textAlign='left'
                        fontSize='1.2rem'
                        fontWeight='700'
                        bg='transparent'
                      >
                        <Text>Feature</Text>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} fontWeight='400'>
                    <Box
                      as='a'
                      href=''
                      display='flex'
                      alignItems='center'
                      marginBottom='0.8rem'
                    >
                      <Image
                        mr='5px'
                        src={iconTodoList}
                        alt='Icon the todo list'
                      />
                      <Text>Todo List</Text>
                    </Box>

                    <Box
                      as='a'
                      href=''
                      display='flex'
                      alignItems='center'
                      marginBottom='0.8rem'
                    >
                      <Image
                        mr='5px'
                        src={iconCalendar}
                        alt='Icon the calendar'
                      />
                      <Text>Calendar</Text>
                    </Box>

                    <Box
                      as='a'
                      href=''
                      display='flex'
                      alignItems='center'
                      marginBottom='0.8rem'
                    >
                      <Image
                        mr='5px'
                        src={iconReminders}
                        alt='Icon the reminders'
                      />
                      <Text>Reminders</Text>
                    </Box>

                    <Box as='a' href='' display='flex' alignItems='center'>
                      <Image
                        mr='5px'
                        src={iconPlanning}
                        alt='Icon the planning'
                      />
                      <Text>Planning</Text>
                    </Box>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton
                      width='35%'
                      padding='0'
                      _hover={{ background: 'none', color: 'hsl(0, 0%, 8%)' }}
                    >
                      <Box
                        flex='1'
                        textAlign='left'
                        fontSize='1.2rem'
                        fontWeight='700'
                        bg='transparent'
                      >
                        <Text>Company</Text>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} fontWeight='400'>
                    <Box
                      as='a'
                      href=''
                      display='flex'
                      alignItems='center'
                      marginBottom='0.8rem'
                    >
                      <Text>History</Text>
                    </Box>

                    <Box
                      as='a'
                      href=''
                      display='flex'
                      alignItems='center'
                      marginBottom='0.8rem'
                    >
                      <Text>Our Team</Text>
                    </Box>

                    <Box
                      as='a'
                      href=''
                      display='flex'
                      alignItems='center'
                      marginBottom='0.8rem'
                    >
                      <Text>Blog</Text>
                    </Box>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Box>
            <Box marginBottom='1rem'>
              <Button
                _hover={{
                  background: 'transparent',
                  color: 'hsl(0, 0%, 8%)',
                }}
                _active={{
                  background: 'transparent',
                  color: 'hsl(0, 0%, 8%)',
                }}
                fontSize='1.2rem'
                fontWeight='700'
                bg='transparent'
                p='0'
                as='a'
                href='/'
              >
                Careers
              </Button>
            </Box>
            <Box marginBottom='1rem'>
              <Button
                fontSize='1.2rem'
                fontWeight='700'
                bg='transparent'
                p='0'
                _hover={{
                  background: 'transparent',
                  color: 'hsl(0, 0%, 8%)',
                }}
                _active={{
                  background: 'transparent',
                  color: 'hsl(0, 0%, 8%)',
                }}
                as='a'
                href='/'
              >
                About
              </Button>
            </Box>
          </DrawerBody>
          <DrawerFooter justifyContent='center'>
            <Box
              display='flex'
              flexDirection='column'
              alignItems='center'
              gap='2rem'
              marginBottom='2rem'
            >
              <Button
                as='a'
                href='/'
                bg='transparent'
                _hover={{
                  background: 'transparent',
                  color: 'hsl(0, 0%, 8%)',
                }}
                _active={{
                  background: 'transparent',
                  color: 'hsl(0, 0%, 8%)',
                }}
              >
                Login
              </Button>
              <Button
                as='a'
                href='/'
                bg='transparent'
                _hover={{
                  background: 'transparent',
                }}
                _active={{ background: 'hsl(0, 0%, 8%)', color: 'white' }}
                border='2px'
                borderColor='hsl(0, 0%, 41%)'
                px='5.2rem'
                py='1.4rem'
                borderRadius='13px'
              >
                Register
              </Button>
            </Box>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}
