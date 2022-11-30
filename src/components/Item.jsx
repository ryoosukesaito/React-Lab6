import React from 'react'

const Item = ({ item }) => {
  return (
    <>
      <span>{item.title}</span>
      <span>{item.body}</span>
    </>
  )
}

export default Item