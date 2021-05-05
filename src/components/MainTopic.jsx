import Card from './Card'

const MainTopic = ({name, starsTopics}) => {
  return(
    <section className="flexy">
      <Card name={name} stars={starsTopics} double="true" />
    </section>
  )
}

export default MainTopic