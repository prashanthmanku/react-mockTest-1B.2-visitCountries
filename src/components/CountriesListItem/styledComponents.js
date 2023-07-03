import styled from 'styled-components'

export const CountrieItem = styled.li`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #334155;
  padding: 12px 0px;
`

export const WidthCard = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Name = styled.p`
  color: #f1f5f9;
  font-size: 14px;
  font-weight: 400;
`

export const VisitButton = styled.button`
  background-color: #3b82f6;
  background-color: ${props => (props.isVisited ? 'transparent' : '#3b82f6')};
  color: #ffffff;
  color: ${props => (props.isVisited ? '#94a3b8' : '#ffffff')};
  border: none;
  outline: none;
  cursor: pointer;
  padding: 5px 15px;
  font-size: 13px;
  border-radius: 4px;
  font-weight: (props.isVisited ? 400 : 500)};
`
