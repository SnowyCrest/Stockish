import {
  Box,
  Flex,
  Spacer,
  Heading,
  Text,
  useBreakpointValue,
  Link,
} from "@chakra-ui/react";
import PortfolioPreview from "../components/PortfolioPreview";
import React from "react";
import PositionsList from "../components/PositionsList";
import Newsfeed from "../components/Newsfeed";
import Watchlist from "../components/Watchlist";
import tokens from "../services/tokens.service";
import { Link as RouterLink } from "react-router-dom";

export default function Dashboard() {
  const isOnMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box className="Dashboard">
      <Flex direction={{ base: "column", md: "row" }} gap={5}>
        <Box flex="0.75">

            <>
              <PortfolioPreview />
              <Spacer height={6} />

            </>
      
            <>
              <Heading as="h1" size="xl">
                <Box as="span" fontWeight="bold">
                  Stock
                </Box>
                <Box as="span" fontStyle="italic">
                  -ish
                </Box>
              </Heading>
              <Text fontSize="lg" mb={6}>
                <Link as={RouterLink} to="/signup">
                  Create an account
                </Link>{" "}
                or{" "}
                <Link as={RouterLink} to="/login">
                  login
                </Link>{" "}
                to get started!
              </Text>

              <Box p={6} borderWidth={1} borderRadius="md" bg="gray.50">
    
              </Box>
            </>
          
          {!isOnMobile && (
            <>
              <Spacer height={10} />
              <Heading size="md">Stock Market News</Heading>
              <Spacer height={2} />
              <Newsfeed symbol={""} />
            </>
          )}
        </Box>
        <Box
          flex="0.25"
          borderWidth={{ base: 0, md: 1 }}
          borderRadius="md"
          p={{ base: 0, md: 3 }}
          height={"fit-content"}>
          {tokens.isAuthenticated() ? (
            <>
              <PositionsList />
              <Spacer h="3" />
              <Watchlist />
            </>
          ) : (
            <Box>
              <Heading as="h6" size="xs" textAlign={"center"}>
                Sign in to view positions and watchlist
              </Heading>
            </Box>
          )}
        </Box>
      </Flex>
      {isOnMobile && (
        <>
          <Spacer height={10} />
          <Heading size="md">Stock Market News</Heading>
          <Spacer height={2} />
          <Newsfeed symbol={""} />
        </>
      )}
    </Box>
  );
}
