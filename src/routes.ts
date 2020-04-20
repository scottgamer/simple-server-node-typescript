import weatherRoutes from "./http/routes/weatherRoutes";
import covidRoutes from "./http/routes/covidRoutes";

export default [...weatherRoutes, ...covidRoutes];
