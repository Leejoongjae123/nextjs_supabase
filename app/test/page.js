import axios from "axios";
async function getData() {
  const params = {
    uid: "510418490939874600",
  };
  const url='http://localhost:3001/api/data'
  const res = await axios.get(url, { params });

  return res.data.result.data[0];
}

export default async function TestPage() {
  const data = await getData();
  console.log(data);

  return (
    <div>
      <h1 className="text-white">Next.js API Data</h1>
      <p className="text-white text-center">{data.totalCommission}</p>
    </div>
  );
}
