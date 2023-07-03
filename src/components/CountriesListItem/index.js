import {CountrieItem, WidthCard, Name, VisitButton} from './styledComponents'

const CountriesListItem = props => {
  const {details, onToggleToVisited} = props
  const {id, name, isVisited} = details
  const onClickVisit = () => {
    onToggleToVisited(id)
  }
  return (
    <CountrieItem>
      <WidthCard>
        <Name>{name}</Name>

        <VisitButton
          type="button"
          isVisited={isVisited}
          onClick={onClickVisit}
          disabled={isVisited}
        >
          {isVisited ? 'Visited' : 'Visit'}
        </VisitButton>
      </WidthCard>
    </CountrieItem>
  )
}

export default CountriesListItem
