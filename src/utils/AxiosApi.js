import axios from "axios";

const AxiosApi = async(type, seg) => {
  const apiData = await axios.get(
    'https://preonboarding.platdev.net/api/cars',
    {
      headers: {
        'Content-Type': 'application/json'
      },
      params :{
        fuelType : type,
        segment : seg
      }
    }
  )

  return apiData
};

export default AxiosApi;


