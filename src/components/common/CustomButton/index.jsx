import styled from 'styled-components'

const CustomButton = styled.button`
  background-image: ${p => p.theme.gradient};
  cursor: pointer;
  color: #fff;
  border-radius: 40px;
  margin: 0 auto;
  width: 150px;
  height: 50px;
  box-shadow: 0 4px 0px -4px #6a93ff;
  border: none;
  -webkit-appearance: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  ${({ subscribe }) =>
    subscribe &&
    `
        flex: 1;
        border-radius: 6px;
        margin-left: 1rem;
        height: 48px;
        @media (max-width: 800px) {
            flex: unset;
            margin: 0 auto;
        }
    `}
  &:disabled {
    background: gray;
  }
`

export { CustomButton }
