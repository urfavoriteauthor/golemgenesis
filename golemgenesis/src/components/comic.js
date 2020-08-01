import React from 'react'


const Comics = props => {
    return (
        <div id='comics'className='card text-center shadow'>
            <div className='overflow'>
                <img src={props.imgsrc} alt="" className='card-img-top' />
            </div>
            <div className='card-body bg-dark text-light'>
                <h4 className='card-title'>{props.title}</h4>
                <h5 className="card-text text-light">{props.description}</h5>
            <a href={props.link} target="_blank" className='btn btn-outline-light'>Purchase Here</a>
            </div>
        </div>
    )
}

export default Comics;