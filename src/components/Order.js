
function Order({ id, amount, items, timestamp, images }) {
  return (
    <div>
        <p>{id}</p>
        <p>{amount}</p>
        <p>{timestamp}</p>
    </div>
  )
}

export default Order