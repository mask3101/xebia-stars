import Card from "./Card"

const Info = ({topics, visited, updateTopicSearch, resetSearch}) => {
  return(
    <section className="grid-topics">
      {topics.map( data => {
       return(
         <Card name={data.name} visited={visited} key={data.id} stars={data.stargazerCount} clickEve={updateTopicSearch}/>
       ) 
      })}
    </section>
  )
}

export default Info