import React from 'react'
import Item from './Item';

const Article = ({ article }) => 
  article.map(item => <Item key={item.id} item = {item} />) 

export default Article