export default async function handler(req, res) {
  try {
    const response = await fetch("http://118.27.228.27:8888/data");
    const text = await response.text();

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/json; charset=utf-8");

    res.status(200).send(text);
  } catch (e) {
    res.status(500).send("API Error");
  }
}
