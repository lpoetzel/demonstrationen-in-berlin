import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Impressum = () => {
  return (
    <div>
      <h1>Impressum</h1> <h3 className="impressum-header">Legal</h3>{" "}
      <span className="block-text">
        Dieses Werk entstand durch Nutzung der Daten der Berlin Open Data
        initative unter der{" "}
        <img
          id="lizenz"
          src="https://daten.berlin.de/sites/default/files/cc-by-nc-80x15.png"
          alt="lizenz-bild"
        />{" "}
        <a href="https://creativecommons.org/licenses/by-nc/3.0/de/">Lizenz</a>.
        Dabei wurde der Datensatz{" "}
        <a href="https://daten.berlin.de/datensaetze/versammlungen-im-land-berlin">
          Versammlungen im Land Berlin
        </a>{" "}
        genutzt.{" "}
      </span>{" "}
      <h3 className="impressum-header">Die Macher</h3>
      <span className="block-text">
        Im Rahmen des Trainings zum Full-Stack Developer in der{" "}
        <a href="https://www.wildcodeschool.com/">Wild Code School</a> entstand
        dieses Project als erstes unter Nutzung von React. <br />
        Die Schöpfer sind: <br />
        <div className="names">
          <div>Lars Poetzel{" "}
          <a className="envelope" href="mailto: lars.poetzel@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} />{" "}
          </a></div>
          <br />
          <div> Leahu Andrei Lucian{" "}
          <a className="envelope" href="mailto: leahu.andreilucian07@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} />{" "}
          </a></div>
          <br />
          <div> Mathieu Durimel{" "}
          <a className="envelope" href="mailto: mathieu.durimel@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} />{" "}
          </a></div>
          <br />
        </div>
      </span>
    </div>
  );
};

export default Impressum;
