import axios from "axios";
//import https from 'https';

export default{
	dps: {
		scanDps: (param) => axios.post(`${process.env.REACT_APP_API}/getDps`, {
			nodps: param
		}).then(res => res.data),
		insertBarcode: (payload) => axios.post(`${process.env.REACT_APP_API}/getDps/insertBarcode`, {
			...payload
		}).then(res => res.data),
		getStatus: (nodps) => axios.post(`${process.env.REACT_APP_API}/getDps/getStatus`, {
			nodps: nodps
		}).then(res => res.data),
		batalSerah: (payload) => axios.post(`${process.env.REACT_APP_API}/getDps/batalSerah`, {
			...payload
		}).then(res => res.data),
		selesai: (nodps, idpegawai) => axios.post(`${process.env.REACT_APP_API}/getDps/selesai`, {
			nodps: nodps,
			idpegawai
		}).then(res => res.data),
		login: (payload) => axios.post(`${process.env.REACT_APP_API}/login`, {
			...payload
		}).then(res => res.data.result)
	}
}