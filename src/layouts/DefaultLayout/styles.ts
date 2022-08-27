import styled from 'styled-components'

export const Container = styled.div`
  max-width: 74rem;
  height: calc(100vh - 4rem);
  margin: 2rem auto;
  padding: 2.5rem;

  background-color: ${(props) => props.theme['gray-800']};
  border-radius: 8px;

  display: flex;
  flex-direction: column;
`
