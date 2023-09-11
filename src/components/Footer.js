import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Icon } from "@iconify/react";

function Footer() {
  return (
    <footer className="bg-olive text-beige text-center py-6">
      <div className="pb-3 flex flex-wrap justify-center items-center">
        <a href="https://github.com/NickSweet1" target="_blank" rel="noopener norefferer">
            <FontAwesomeIcon className="pr-4 text-4xl mx-auto" icon={faGithub} />
        </a>
        <a href="https://www.linkedin.com/in/nicholas-sweet1/" target="_blank" rel="noopener norefferer">
        <FontAwesomeIcon className="pr-4 text-4xl mx-auto" icon={faLinkedin} />
        </a>
        <a href="https://leetcode.com/nicksweetj/" target="_blank" rel="noopener norefferer">
        <Icon icon="simple-icons:leetcode" className="pr-4 text-5xl mx-auto"/>
        </a>
      </div>
      <div>
        <p className="text-xs">&copy;2023 Nick Sweet Dev</p>
      </div>
    </footer>
  );
}

export default Footer;
