import { useState } from 'react'
import Card from './Card'
import { useGetTopics } from '../Helpers/GetTopics'
import Loading from './Loading';
import MainTopic from './MainTopic';
import ShowInfo from './ShowInfo';
const Container = () => {

  const [name, setName] = useState('react');
  const [loading, , topics, starsTopics] = useGetTopics(name)
  const [visited, setVisited] = useState(['react'])

  const resetSearch = () => {
    setVisited(['react'])
    setName('react')
  }
  const updateTopicSearch = (topicName, e) => {
    e?.preventDefault()
    if(visited.indexOf(topicName) === -1) {
      setVisited([...visited, topicName])
    }
    setName(topicName)
  }

  return (
    <body className="container">
      <MainTopic name={name} starsTopics={starsTopics}/>
      <ShowInfo loading={loading} visited={visited} topics={topics} updateTopicSearch={updateTopicSearch}/>
      {!loading && <button className="btn1" onClick={resetSearch}>Reset</button>}
    </body>
  )
}

export default Container