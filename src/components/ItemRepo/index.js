import React from 'react'

import { ItemContainer } from './styles';

function ItemRepo({repo, handleRemoveRepo}) {

  const removerRepo = (id) => {
    handleRemoveRepo(id)
  }

  return (
    <ItemContainer >
        <h3>{repo.name}</h3>
        <p>{repo.full_name}</p>
        <a 
        href="#"  
        onClick={(e) => {
          e.preventDefault();
          removerRepo(repo.id);
        }}  
        rel="noreferrer" 
        className="remover"
      >
        Remover
      </a>
        <hr />
    </ItemContainer>
  )
}

export default ItemRepo;