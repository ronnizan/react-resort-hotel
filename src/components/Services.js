import React, { Component } from 'react';
import Title from './Title';
import { FaCocktail, FaHiking, FaShip, FaBeer } from "react-icons/fa";

export default class Services extends Component {

    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: "free cocktails",
                info: 'occaecat voluptate velit amet ipsuasx occaecat voluptate velit amet ipsuasx'
            },
            {
                icon: <FaHiking />,
                title: "Beautiful Hiking",
                info: 'occaecat voluptate velit amet ipsuasx occaecat voluptate velit amet ipsuasx'
            },
            {
                icon: <FaShip />,
                title: "free Shuttle",
                info: 'occaecat voluptate velit amet ipsuasx occaecat voluptate velit amet ipsuasx'
            },
            {
                icon: <FaBeer />,
                title: "Finest Beer",
                info: 'occaecat voluptate velit amet ipsuasx occaecat voluptate velit amet ipsuasx'
            }

        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                {this.state.services.map((item,index) =>{
                    return <article key={index} className="service">
                        <span>{item.icon}</span>
                        <h6>{item.title}</h6>
                        <p>
                            {item.info}
                        </p>
                    </article>
                })}
                </div>

            </section>

        )
    }
}
