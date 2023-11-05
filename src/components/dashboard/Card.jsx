import React from 'react'

const Card = ({data}) => {
  return (
    <div className="col-xl-3 col-md-6">
        <div className={`card ${data.bgColor} text-white mb-4`}>
            <div className="card-body">{data.title} Card</div>
            <div className="card-footer d-flex align-items-center justify-content-between">
            <a className="small text-white stretched-link" href="#">View Details</a>
            <div className="small text-white"><i className="fas fa-angle-right" /></div>
            </div>
        </div>
    </div>
  )
}

export default Card