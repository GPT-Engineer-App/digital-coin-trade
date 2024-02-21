import React, { useState } from "react";
import { Box, Flex, Heading, Text, Select, Button, Input, Stack, useToast } from "@chakra-ui/react";
import { FaBitcoin, FaEthereum, FaExchangeAlt } from "react-icons/fa";

const Index = () => {
  const [selectedPair, setSelectedPair] = useState("BTC-USD");
  const [amount, setAmount] = useState("");
  const toast = useToast();

  const handleTrade = () => {
    // Placeholder for trade logic
    toast({
      title: "Trade executed",
      description: `You have traded ${amount} of ${selectedPair.split("-")[0]}`,
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    setAmount("");
  };

  return (
    <Box p={10}>
      <Heading mb={6}>Cryptocurrency Trading Platform</Heading>
      <Stack spacing={6}>
        <Box>
          <Heading size="md" mb={2}>
            Trading Pairs
          </Heading>
          <Select icon={<FaExchangeAlt />} placeholder="Select trading pair" value={selectedPair} onChange={(e) => setSelectedPair(e.target.value)}>
            <option value="BTC-USD">BTC/USD</option>
            <option value="ETH-USD">ETH/USD</option>
            <option value="BTC-ETH">BTC/ETH</option>
          </Select>
        </Box>
        <Box>
          <Heading size="md" mb={2}>
            Price Chart
          </Heading>
          <Flex align="center" justify="center" p={10} bg="gray.100" borderRadius="md">
            {/* Placeholder for price chart */}
            <Text>Price chart coming soon...</Text>
          </Flex>
        </Box>
        <Box>
          <Heading size="md" mb={2}>
            Trade
          </Heading>
          <Flex>
            <Input type="number" placeholder={`Amount in ${selectedPair.split("-")[0]}`} value={amount} onChange={(e) => setAmount(e.target.value)} />
            <Button leftIcon={selectedPair.startsWith("BTC") ? <FaBitcoin /> : <FaEthereum />} ml={4} colorScheme="blue" onClick={handleTrade} isDisabled={!amount}>
              Trade
            </Button>
          </Flex>
        </Box>
      </Stack>
    </Box>
  );
};

export default Index;
