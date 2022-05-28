import { Center, Heading } from "@chakra-ui/react";

const NotFoundPage = () => {
  return (
    <Center minH="calc(100vh - 200px)">
      <Heading>Page not found!</Heading>
    </Center>
  );
};

export const config = {
  unstable_runtimeJS: false,
};

export default NotFoundPage;
