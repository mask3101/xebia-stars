import Info from "./Info"
import Loading from "./Loading"

const ShowInfo = ({loading, visited, topics, updateTopicSearch}) => {
  return(
    <>
    { loading ? (
      <Loading loading={loading}/>
    ) : (
      <Info topics={topics} visited={visited} updateTopicSearch={updateTopicSearch}/>
    ) }
    </>
  )
}

export default ShowInfo