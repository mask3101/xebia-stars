import { useState } from 'react'
import Card from './Card'
import { useGetTopics } from '../Helpers/GetTopics'
import Loading from './Loading';
const Container = () => {

  const [name, setName] = useState('react');
  const [loading, , topics, starsTopics] = useGetTopics(name)
  const [visited, setVisited] = useState(['react'])

  console.log('topics', topics)
  const resetSearch = () => {
    setVisited(['react'])
    setName('react')
  }
  const updateTopicSearch = (topicName, e) => {
    e?.preventDefault()
    if(visited.indexOf(topicName) === -1) {
      setVisited([...visited, topicName])
      console.log('visited',visited)
    }
    setName(topicName)
  }

  return (
    <body className="container">
      <section className="flexy">
        <Card name={name} stars={starsTopics} double="true" />
      </section>
      { loading ? (
        <section className="loading">
          <Loading />
        </section>
      ) : (
      <>
      <section className="grid-topics">
        {topics.map( data => {
         return(
           <Card name={data.name} visited={visited} key={data.id} stars={data.stargazerCount} clickEve={updateTopicSearch}/>
         ) 
        })}
      </section>
      <button className="btn1" onClick={resetSearch}>Reset</button>
      </>
      ) }
    </body>
  )
}

export default Container