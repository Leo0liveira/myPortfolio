import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/about.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Personal Profile</h3>
              <p>
              I can easily connect with people and understand their needs. With experience in various technologies, including mobile, web and other areas, I am able to extract ideas and turn them into practical and innovative applications.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Chatbot Developer</h3>
              <p>
              I specialize in developing chatbots using Rasa, DialogFlow, or DialogFlow CX, with experience crafting virtual assistants ranging from simple FAQ-based interactions to more intricate flows incorporating API integrations.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
