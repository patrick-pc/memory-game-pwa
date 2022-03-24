// Combine and shuffle two arrays
const shuffle = () => {
  const assets = [
    { image: '/assets/bayc.png' },
    { image: '/assets/cryptopunks.png' },
    { image: '/assets/azuki.png' },
    { image: '/assets/clonex.png' },
    { image: '/assets/doodles.png' },
    { image: '/assets/wow.png' },
    { image: '/assets/smolbrain.png' },
    { image: '/assets/3lander.png' },
  ]

  return [...assets, ...assets]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({ ...card, id: Math.random() }))
}

export default shuffle
