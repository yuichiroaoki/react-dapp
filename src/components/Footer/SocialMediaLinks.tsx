import { ButtonGroupProps } from '@chakra-ui/button'
import { ButtonGroup, IconButton } from '@chakra-ui/react'
import { FaGithub, FaYoutube, FaTwitter, FaMedium } from 'react-icons/fa'
import { IoLogoTiktok, IoLogoDiscord } from "react-icons/io5";

export const SocialMediaLinks = (props: ButtonGroupProps) => (
  <ButtonGroup variant="ghost" color="gray.600" {...props}>
    <IconButton as="a" href="https://www.tiktok.com/"
      target="blank" aria-label="TikTok" icon={<IoLogoTiktok fontSize="20px" />} />
    <IconButton as="a" href="https://www.youtube.com/" 
      target="blank" aria-label="YouTube" icon={<FaYoutube fontSize="20px" />} />
    <IconButton as="a" href="https://github.com/"
      target="blank" aria-label="GitHub" icon={<FaGithub fontSize="20px" />} />
    <IconButton as="a" href="https://twitter.com/"
      target="blank" aria-label="Twitter" icon={<FaTwitter fontSize="20px" />} />
    <IconButton as="a" href="https://medium.com/"
      target="blank" aria-label="Medium" icon={<FaMedium fontSize="20px" />} />
    <IconButton as="a" href="https://discord.com/"
      target="blank" aria-label="Discord" icon={<IoLogoDiscord fontSize="20px" />} />
  </ButtonGroup>
)