import React, { useState } from 'react'
import { Person } from './Person';

export const Persons = ({persons, setPersons}) => {

  const [editinId, seteditinId] = useState()
  const [editedPerson, setEditedPerson] = useState({
    name: '',
    role: '',
    img: ''
  })

  const handleChange = (e) => {
    const { name, value} = e.target;
    setEditedPerson(prevState => ({
      ... prevState,
      [name]: value
    }))
  }

  const handleEdit = (id) => {
     setEditingID(id);
     setIsEditing(true);
  }

  return (
    <div>
      <h2>IT Team</h2>
      <div className='container d-flex justify-content-center '>
        <div className='d-flex flex-row'>
          {persons.map((person) => {
            return (
              <div>
                <Person
                  key={person.id}
                  name={person.name}
                  role={person.role}
                  img={person.img}
                />
              </div>
            )
          })}
        </div>
        
      </div>
    </div>
  )
}
