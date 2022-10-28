import axios from "axios"

export const getPosts = () => {
    const response = axios
      .get("https://www.berlin.de/polizei/service/versammlungsbehoerde/versammlungen-aufzuege/index.php/index/all.json?q=")
      .then((response) => response.data.index)
      return response
      };