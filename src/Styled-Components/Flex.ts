import styled from "styled-components";

interface MyProps {
  dir?: string;
  gap?: string;
}

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${({ dir }: MyProps) => dir};
  gap: ${({ gap }: MyProps) => gap};
`;
