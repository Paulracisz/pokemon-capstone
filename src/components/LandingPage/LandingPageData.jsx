// import React, { useEffect, useState } from 'react';
// import { useFetchUrl } from '../hooks';

// function LandingPageData(){

//     const [loggedIn, setLoggedIn] = useState(localStorage.getItem('token') ? true : false);
//     const fetchUrl = useFetchUrl();

//     useEffect(() => {
//         if(loggedIn) {
//             const url = 'http://127.0.0.1:8000/api/current_user'
//             fetchUrl(url, (data) => {
//                 headers: {
//                     Authorization: `JWT${localStorage.getItem('token')}`
//                 }
//             })
//             .then(res => res.json ())
//             .then(json => {
//                 setLoggedIn({username: json.username})
//             })
//         }
//     })



// }

// export default LandingPageData;