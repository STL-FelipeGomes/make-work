import {
  Box,
  Text,
  Image,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
} from '@chakra-ui/react'

import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'

import snap from '../../../images/logo.svg'
import iconTodoList from '../../../images/icon-todo.svg'
import iconCalendar from '../../../images/icon-calendar.svg'
import iconReminders from '../../../images/icon-reminders.svg'
import iconPlanning from '../../../images/icon-planning.svg'

export const Header = () => {
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

  return (
    <Box
      color='hsl(0, 0%, 41%)'
      display='flex'
      alignItems='center'
      fontWeight='700'
      justifyContent='space-between'
    >
      <Box display='flex' alignItems='center' gap='3rem'>
        <Image mr='5rem' src={snap} alt='Logo the Snap' />
        <Box>
          <Menu onClose={onCloseFeatures} isOpen={isOpenFeatures}>
            <MenuButton
              onClick={onOpenFeatures}
              _hover={{ background: 'transparent', color: 'hsl(0, 0%, 8%)' }}
              fontWeight='700'
              bg='transparent'
              p='0'
              _active={{ background: 'transparent' }}
              as={Button}
              rightIcon={
                !isOpenFeatures ? <ChevronDownIcon /> : <ChevronUpIcon />
              }
            >
              Features
            </MenuButton>
            <MenuList minWidth='10rem'>
              <MenuItem justifyContent='center'>
                <Image mr='5px' src={iconTodoList} alt='Icon the todo list' />
                Todo List
              </MenuItem>
              <MenuItem justifyContent='center'>
                <Image mr='5px' src={iconCalendar} alt='Icon the calendar' />
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
                <Image mr='5px' src={iconPlanning} alt='Icon the planning' />
                Planning
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
        <Box>
          <Menu onClose={onBoloCompany} isOpen={isOpenCompany}>
            <MenuButton
              onClick={onOpenCompany}
              _hover={{ background: 'transparent', color: 'hsl(0, 0%, 8%)' }}
              fontWeight='700'
              bg='transparent'
              p='0'
              _active={{ background: 'transparent' }}
              as={Button}
              rightIcon={
                !isOpenCompany ? <ChevronDownIcon /> : <ChevronUpIcon />
              }
            >
              Company
            </MenuButton>
            <MenuList minWidth='10rem'>
              <MenuItem justifyContent='center'>History</MenuItem>
              <MenuItem justifyContent='center'>Our Team</MenuItem>
              <MenuItem justifyContent='center'>Blog</MenuItem>
            </MenuList>
          </Menu>
        </Box>
        <Box>
          <Button
            _hover={{ background: 'transparent', color: 'hsl(0, 0%, 8%)' }}
            fontWeight='700'
            bg='transparent'
            p='0'
            _active={{ background: 'transparent' }}
            as='a'
            href='/'
          >
            Careers
          </Button>
        </Box>
        <Box>
          <Button
            _hover={{ background: 'transparent', color: 'hsl(0, 0%, 8%)' }}
            fontWeight='700'
            bg='transparent'
            p='0'
            _active={{ background: 'transparent' }}
            as='a'
            href='/'
          >
            About
          </Button>
        </Box>
      </Box>
      <Box display='flex' alignItems='center' gap='3rem'>
        <Button
          as='a'
          href='/'
          bg='transparent'
          _active={{ background: 'transparent' }}
          _hover={{ bg: 'transparent', color: 'hsl(0, 0%, 8%)' }}
        >
          Login
        </Button>
        <Button
          as='a'
          href='/'
          bg='transparent'
          _active={{ background: 'hsl(0, 0%, 8%)', color: 'white' }}
          _hover={{
            bg: 'transparent',
            color: 'hsl(0, 0%, 8%)',
            borderColor: 'hsl(0, 0%, 8%)',
          }}
          border='2px'
          borderColor='hsl(0, 0%, 41%)'
          px='1.2rem'
          py='0.4rem'
          borderRadius='13px'
        >
          Register
        </Button>
      </Box>
    </Box>
  )
}
