import {MidWrapper, CatHeading} from "../../elements/Layout";
import ArchiveData from "./Archives.json";
import "./Archives.css";

function Archives(){
    return(
        <>
        <MidWrapper>
            <CatHeading>
                Welcome to My <b>Archives</b>
            </CatHeading>
            
            <ArCard/>

        </MidWrapper>
        </>
    )
}

const ArCard = () => {
    return (
        <>
        {ArchiveData.map((archive, index)=>{
            return (
               <div className={index % 2 === 0 ? "row" : "row-reverse"} key={index}>
            <div
              className="heading">
                  <div className="archive-heading" dangerouslySetInnerHTML={{__html: archive.title}}/>
                  <div className="archive-date">{archive.date}</div>
            </div>
            <div className="left">
              <img src={archive.img_url} alt=""></img>
            </div>
            <div className="right">
                <div className="archive-content">
                    <p>{archive.content}<span className="p"> Read More.</span></p>
                </div>
            </div>
          </div> 
            )
        })}
        </>
    )
}

export default Archives;