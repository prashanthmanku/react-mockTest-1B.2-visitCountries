import styled from 'styled-components'

export const AppContainer = styled.div`
  background-color: #161624;
  display: flex;
  justify-content: center;
  min-height: 100vh;
`

export const AppWidthContainer = styled.div`
  width: 90%;
  max-width: 1100px;
`

export const Heading = styled.h1`
  color: #ffffff;
  font-size: 18px;
  font-weight: 500;
`

export const CountriesList = styled.ul`
  background-color: #1f1f2f;
  border: 1px solid #334155;
  border-radius: 10px;
  padding: 0px;
  list-style-type: none;
  height: 40vh;
  overflow-y: auto;
`

export const VisitedCountriesList = styled.ul`
  list-style-type: none;
  padding: 0px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  height: 44vh;
  overflow-y: auto;
`
export const NoVisitedText = styled.p`
  color: #ffffff;
  font-size: 22px;
  font-weight: 500;
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
