import {ItemCard, Img, RemoveCard, Name, RemoveButton} from './styledComponents'

const VisitedCountrieItem = props => {
  const {details, onToggleToVisited} = props
  const {id, name, imageUrl} = details

  const onClickremove = () => {
    onToggleToVisited(id)
  }

  return (
    <ItemCard>
      <Img src={imageUrl} alt="thumbnail" />
      <RemoveCard>
        <Name>{name}</Name>
        <RemoveButton type="button" onClick={onClickremove}>
          Remove
        </RemoveButton>
      </RemoveCard>
    </ItemCard>
  )
}

export default VisitedCountrieItem
