import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer'

const customers = [
  {
    'id':'1',
    'name':'최은수',
    'image':'https://placeimg.com/64/64/any',
    'birthday':'234234',
    'gender':'남자',
    'job':'경제적 자유 이룸'
  },
  
  {
    'id':'2',
    'name':'최은수222222222',
    'image':'https://placeimg.com/64/64/any',
    'birthday':'234234',
    'gender':'남자',
    'job':'경제적 자유 이룸'
  },

  {
    'id':'3',
    'name':'최은수33333333333333333333333',
    'image':'https://placeimg.com/64/64/any',
    'birthday':'234234',
    'gender':'남자',
    'job':'경제적 자유 이룸'
  }
]

class App extends Component {
  render(){
    return (
      <div>
        {
          customers.map(c=> {
            return(
              <Customer
              id = {c.id}
              image = {c.image}
              name = {c.name}
              birthday = {c.birthday}
              gender = {c.gender}
              job = {c.job}
            />
            )
          })
        }
      </div>
    )
  }
}

export default App;
