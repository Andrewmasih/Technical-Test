import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://api/vehicles.json'
  params: {limit: '10', page: '0'},
  
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});