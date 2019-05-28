import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free cocktails",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod molestiae excepturi praesentium nostrum possimus deserunt eligendi quidem fuga odio rerum quisquam quos ullam quae unde error reprehenderit, nesciunt est. Ea."
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod molestiae excepturi praesentium nostrum possimus deserunt eligendi quidem fuga odio rerum quisquam quos ullam quae unde error reprehenderit, nesciunt est. Ea."
      },
      {
        icon: <FaShuttleVan />,
        title: "free shuttle",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod molestiae excepturi praesentium nostrum possimus deserunt eligendi quidem fuga odio rerum quisquam quos ullam quae unde error reprehenderit, nesciunt est. Ea."
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod molestiae excepturi praesentium nostrum possimus deserunt eligendi quidem fuga odio rerum quisquam quos ullam quae unde error reprehenderit, nesciunt est. Ea."
      }
    ]
  };

  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
