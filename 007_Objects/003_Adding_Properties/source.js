const teamsByCity = {
  Detroit: "Tigers",
};

console.log("before adding properties: ", teamsByCity);

teamsByCity.Milwaukee = "Brewers";
teamsByCity["New York"] = ["Yankees", "Mets"];

console.log("after adding properties: ", teamsByCity);
