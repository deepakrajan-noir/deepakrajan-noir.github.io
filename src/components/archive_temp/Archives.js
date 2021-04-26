import {MidWrapper, CatHeading} from "../../elements/Layout";
import "./Archives.css";
import ArchiveData from "./Archives.json";

function Archieves(){
    return (
        <>
        <MidWrapper>
            <CatHeading>
                Welcome to My <b>Archives</b>
            </CatHeading>
            

            <ArCard/>            
            {/* <Cards archieves={ArchieveData}/> */}

        </MidWrapper>

        </>
    )
}

const ArCard = () => {
    return (
        <>
        {ArchiveData.map((archieve, index)=>{
            return (
               <div className={index % 2 === 0 ? "row" : "row-reverse"} key={index}>
            <div
              className="heading">
                  <div className="archive-heading" dangerouslySetInnerHTML={{__html: archieve.title}}/>
                  <div className="archive-date">{archieve.date}</div>
            </div>
            <div className="left">
              {/* <div className="archieve-date">{archieve.date}</div> */}
              {/* dangerouslySetInnerHTML={{ __html: archieve.title }} */}
              <img src="images/tera.jpg" alt=""></img>
            </div>
            <div className="right">
              <p>{archieve.content}</p>
            </div>
          </div> 
            )
        })}
        </>
    )
}


const Cards = props => {
    const {archieves} = props;

    const renderOptions = () =>
        archieves.map((archieve, index)=>
            !(index % 2) ?
                (
                 <div className="archieve-card">
                     <div className="archieve-heading">
                    {archieve.title}
                    </div>
                 </div>
                 )
                : (
                <>
                     <div className="archieve-heading">
                    {archieve.title}
                    </div>
                  </> 
                    ));
        return <div>{renderOptions()}</div> 
};

const temp = () => {
    return (
        <>
            <div className="archieve-card">
                <div className="archieve-heading">
                       Creating a Tool for <b>Maya Project Automation </b>
                    <div className="archieve-date">
                        20 September 2020
                    </div>
                </div>
                <div></div>
                <img src="https://cdna.artstation.com/p/assets/images/images/036/927/388/large/danar-worya-boss-zoomin-4k.jpg?1619008414" alt=""></img>

                <div className="archieve-content">
                    <p>
                Wolfwalkers was the first Cartoon Saloon movie with a proper story team.
                 Prior to it, there had been story artists on their films, but never as a
                  deliberate effort to mimic the system commonly used in Hollywood.
                   That means having a group of people translating sequences from script to animatic 
                   largely on their own and pitching them to the directors. Read More
                    </p>
                </div>
            </div> 
            <div className="archieve-card">
                <div></div>
                <div className="archieve-heading">
                        Making of <b>Cassowary </b>using Ziva Dynamics.
                    <div className="archieve-date">
                        20 September 2020
                    </div>
                </div>
                <div className="archieve-content">
                    <p>
                Wolfwalkers was the first Cartoon Saloon movie with a proper story team.
                 Prior to it, there had been story artists on their films, but never as a
                  deliberate effort to mimic the system commonly used in Hollywood.
                   That means having a group of people translating sequences from script to animatic 
                   largely on their own and pitching them to the directors. Read More
                    </p>
                </div>
                <img src="https://cdna.artstation.com/p/assets/images/images/036/937/614/4k/alex-alvarez-vicar-3k.jpg?1619027638" alt=""></img>

            </div> 
        </>
    )
}

export default Archieves;