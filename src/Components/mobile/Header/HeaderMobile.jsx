import {
  Box,
  Image,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  DrawerFooter,
} from '@chakra-ui/react'

import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'

import snap from '../../../images/logo.svg'
import iconTodoList from '../../../images/icon-todo.svg'
import iconCalendar from '../../../images/icon-calendar.svg'
import iconReminders from '../../../images/icon-reminders.svg'
import iconPlanning from '../../../images/icon-planning.svg'
import iconMenu from '../../../images/icon-menu.svg'
import iconCloseMenu from '../../../images/icon-close-menu.svg'

export const HeaderMobile = () => {
  const {
    isOpen: isOpenFeatures,
    onOpen: onOpenFeatures,
    onClose: onCloseFeatures,
  } = useDisclosure()
  const {
    isOpen: isOpenCompany,
    onOpen: onOpenCompany,
    onClose: onBoloCompany,
  } = useDisclosure()
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
        <Image src={iconMenu} alt='Icon the burguer'></Image>
      </Button>
      <Drawer isOpen={isOpen} placement='right' onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton marginTop='2rem' right='2.9rem'>
            <Image src={iconCloseMenu}></Image>
          </DrawerCloseButton>
          <DrawerBody
            fontWeight='700'
            color='hsl(0, 0%, 41%)'
            marginTop='6rem'
            maxHeight='200px'
          >
            <Box marginBottom='1rem'>
              <Menu onClose={onCloseFeatures} isOpen={isOpenFeatures}>
                <MenuButton
                  onClick={onOpenFeatures}
                  _hover={{
                    background: 'transparent',
                    color: 'hsl(0, 0%, 8%)',
                  }}
                  _active={{
                    background: 'transparent',
                    color: 'hsl(0, 0%, 8%)',
                  }}
                  fontWeight='700'
                  fontSize='1.2rem'
                  bg='transparent'
                  p='0'
                  as={Button}
                  rightIcon={
                    !isOpenFeatures ? <ChevronDownIcon /> : <ChevronUpIcon />
                  }
                >
                  Features
                </MenuButton>
                <MenuList zIndex='2' minWidth='10rem'>
                  <MenuItem justifyContent='center'>
                    <Image
                      mr='5px'
                      src={iconTodoList}
                      alt='Icon the todo list'
                    />
                    Todo List
                  </MenuItem>
                  <MenuItem justifyContent='center'>
                    <Image
                      mr='5px'
                      src={iconCalendar}
                      alt='Icon the calendar'
                    />
                    Calendar
                  </MenuItem>
                  <MenuItem justifyContent='center'>
                    <Image
                      mr='5px'
                      src={iconReminders}
                      alt='Icon the reminders'
                    />
                    Reminders
                  </MenuItem>
                  <MenuItem justifyContent='center'>
                    <Image
                      mr='5px'
                      src={iconPlanning}
                      alt='Icon the planning'
                    />
                    Planning
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>
            <Box marginBottom='1rem'>
              <Menu onClose={onBoloCompany} isOpen={isOpenCompany}>
                <MenuButton
                  onClick={onOpenCompany}
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
                  as={Button}
                  rightIcon={
                    !isOpenCompany ? <ChevronDownIcon /> : <ChevronUpIcon />
                  }
                >
                  Company
                </MenuButton>
                <MenuList>
                  <MenuItem justifyContent='center'>History</MenuItem>
                  <MenuItem justifyContent='center'>Our Team</MenuItem>
                  <MenuItem justifyContent='center'>Blog</MenuItem>
                </MenuList>
              </Menu>
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
