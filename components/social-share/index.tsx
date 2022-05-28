import { Box, Heading, HStack, Link, VStack } from "@chakra-ui/react";
import React, { FC } from "react";
import { IoLogoFacebook, IoLogoLinkedin, IoLogoTwitter } from "react-icons/io";

interface IProps {
  title: string;
  url?: string;
}

const SocialShare: FC<IProps> = ({ title, url = window.location.href }) => {
  const socialLinks = [
    {
      href: `https://twitter.com/8851559`,
      label: "Twitter",
      icon: IoLogoTwitter,
      bg: "#1DA1F2",
    },
    {
      href: `https://www.facebook.com/chao.li.7587/`,
      label: "Facebook",
      icon: IoLogoFacebook,
      bg: "#4267B2",
    },
    {
      href: `https://www.linkedin.com/in/chao-li-61602a173/`,
      label: "LinkedIn",
      icon: IoLogoLinkedin,
      bg: "#2867B2",
    },
  ];

  return (
    <VStack alignItems="left">
      <Heading size="sm">Share</Heading>
      <HStack spacing={2}>
        {socialLinks.map((link, index) => {
          return (
            <Link
              key={index}
              py={2}
              px={4}
              href={link.href}
              rounded="sm"
              bg={link.bg}
              isExternal
              _hover={{
                textDecoration: "none",
              }}
              borderWidth={1}
              borderColor="blue.400"
            >
              <HStack spacing={2} alignItems="center">
                <Box as={link.icon} />
              </HStack>
            </Link>
          );
        })}
      </HStack>
    </VStack>
  );
};

export default SocialShare;
