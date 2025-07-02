import { BrowseButton } from "./browseButton";

import "./browse.styles.css";

export function Browse() {
  return (
    <div className="browse">
      <h1>Who's Watching?</h1>
      <div className="buttonList">
        <BrowseButton
          label="Developer"
          image="/images/developer.jpg" />
        <BrowseButton
          label="Recruiter"
          image="/images/recruiter.jpg" />
        <BrowseButton
          label="Stalker"
          image="/images/stalker.jpg" />
        <BrowseButton
          label="Adventurer"
          image="/images/adventurer.jpg" />
      </div>
    </div>
  );
}