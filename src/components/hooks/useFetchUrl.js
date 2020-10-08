const useFetchUrl = () => {
    return async (url, callback) => {
      const res = await fetch(url);
      const data = await res.json();
      callback(data);
    };
  };
  
  export default useFetchUrl;