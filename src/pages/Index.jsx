import React, { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, Textarea, Image, SimpleGrid, useToast } from "@chakra-ui/react";
import { FaImage } from "react-icons/fa";

const Index = () => {
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const fetchImages = async () => {
    if (description.length === 0) {
      toast({
        title: "Error",
        description: "Description cannot be empty.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    setIsLoading(true);
    setImages([]);

    try {
      const response = await fetch("https://api.getimg.ai/v1/essential/text-to-image", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer YOUR_ACCESS_TOKEN",
        },
        body: JSON.stringify({
          prompt: description,
          style: "photorealism",
          height: 1024,
          width: 1024,
          format: "jpeg",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch images");
      }

      const data = await response.json();
      setImages(data.urls);
      toast({
        title: "Success",
        description: "Images fetched successfully.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: error.message || "An error occurred while fetching images.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box p={4}>
      <FormControl isRequired>
        <FormLabel htmlFor="description">Image Description</FormLabel>
        <Textarea id="description" value={description} onChange={handleDescriptionChange} placeholder="Describe the image you want to generate" size="sm" />
      </FormControl>
      <Button leftIcon={<FaImage />} mt={4} colorScheme="blue" isLoading={isLoading} onClick={fetchImages}>
        Generate Images
      </Button>
      <SimpleGrid columns={2} spacing={10} mt={10}>
        {images.map((url, index) => (
          <Image key={index} src={url} alt={`Generated Image ${index + 1}`} boxSize="500px" objectFit="cover" />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Index;
