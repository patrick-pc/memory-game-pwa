const Card = ({ image, selected, onCLick }) => {
  return (
    <div className="card">
      <div className={selected ? 'selected' : undefined}>
        <img alt="" src={image} className="card-face" />

        <img alt="" src={'/assets/fireship.png'} className="card-back" />
      </div>
    </div>
  )
}

export default Card
