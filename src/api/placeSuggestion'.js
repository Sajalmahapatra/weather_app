export const fetchCities = async (search) => {
  //   const url = `https://countriesnow.space/api/v0.1/countries/population/cities`;
  //   const res = await (await fetch(url)).json();

  //   return res.hits
  //     .filter((item) => item.is_city)
  //     .map((i) => {
  //       return i.locale_names[0] + ", " + i.country;
  //     });

  const baseUrl = "https://api.api-ninjas.com/v1/city?name=" + search;
  const res = await (
    await fetch(baseUrl, {
      method: "GET",
      headers: {
        "X-Api-Key": "ZQd4kUYQtrdEllacCTvNzA==iJfdMUQuADyR1di2",
        "Content-Type": "application/json",
      },
    })
  ).json();
  return res;
};
