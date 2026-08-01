import ReactGA from "react-ga4";

export const initGA = () => {
  ReactGA.initialize("G-NME8RF7BMX");
};

export const pageView = (path: string) => {
  ReactGA.send({
    hitType: "pageview",
    page: path,
  });
};