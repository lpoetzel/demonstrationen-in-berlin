import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Impressum = () => {
  return (
    <div>
      <h1>Impressum</h1>
      <div className="impressum-block">
        {" "}
        <h3 className="impressum-header">Legal</h3>{" "}
        <span className="block-text">
          Dieses Werk entstand durch Nutzung der Daten der Berlin Open Data
          initative unter der{" "}
          <img
            id="lizenz"
            src="https://daten.berlin.de/sites/default/files/cc-by-nc-80x15.png"
            alt="lizenz-bild"
          />{" "}
          <a
            target="_blank"
            href="https://creativecommons.org/licenses/by-nc/3.0/de/"
            rel="noreferrer"
          >
            Lizenz
          </a>
          . Dabei wurde der Datensatz,{" "}
          <a
            target="_blank"
            href="https://daten.berlin.de/datensaetze/versammlungen-im-land-berlin"
            rel="noreferrer"
          >
            Versammlungen im Land Berlin
          </a>
          {""}, der Stadt Berlin genutzt und unverändert wieder gegeben.{" "}
        </span>{" "}
      </div>
      <div className="impressum-block">
        <h3 className="impressum-header">Die Macher</h3>
        <span className="block-text">
          Im Rahmen des Trainings zum Full-Stack Developer entstand dieses
          Project als erstes unter Nutzung von React. Die Schöpfer sind: <br />
          <div className="names">
            <div>
              Lars Poetzel{" "}
              <a className="envelope" href="mailto: lars.poetzel@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} />{" "}
              </a>
            </div>
            <br />
            <div>
              {" "}
              Leahu Andrei Lucian{" "}
              <a
                className="envelope"
                href="mailto: leahu.andreilucian07@gmail.com"
              >
                <FontAwesomeIcon icon={faEnvelope} />{" "}
              </a>
            </div>
            <br />
            <div>
              {" "}
              Mathieu Durimel{" "}
              <a className="envelope" href="mailto: mathieu.durimel@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} />{" "}
              </a>
            </div>
            <br />
          </div>
        </span>
      </div>
    </div>
  );
};

export default Impressum;
