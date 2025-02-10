import { template1Styles } from "../Template1";
import { template2Styles } from "../Template2";
import { template3Styles } from "../Template3"; 

const templates = {
  template1: template1Styles,
  template2: template2Styles,
  template3: template3Styles, 
};

const selectedTemplate = process.env.REACT_APP_TEMPLATE || "template1";

export const styles = templates[selectedTemplate];
