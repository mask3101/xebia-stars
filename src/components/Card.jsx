const Card = ({ name, visited, stars, double,  clickEve}) => {
  const wasVisited = visited?.indexOf(name) !== -1
  const formatedStar = () => {return stars.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + '⭐️';}
  if(double === 'true'){
    return(
      <div className='card double'>
          <section>
            <p>MAIN TOPIC</p>
            <h3>{name.toUpperCase()}</h3>
          </section>
          <section>
            <p>TOTAL STARS</p>
            <h3>{formatedStar()}</h3>
          </section>
      </div>
    )
  } else {
    return(
      <div className={`card ${wasVisited ? 'visited' : ''}`} onClick={() => clickEve(name)}>
        <section>
          <p className="topic">TOPIC</p>
          <h3 className="topic-msg">{name.toUpperCase()}</h3>
          <h2 className="starred">{formatedStar()}</h2>
        </section>
      </div>
    )
  }
}

export default Card