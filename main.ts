import { Plugin } from "@obsidian/core";

export default class ObsidianPinPlugin extends Plugin {
  constructor() {
    super();
  }

  activate() {
    // Create a new tab that contains all the Nodes.
    const tab = this.workspace.newTab();
    tab.title = "Pinterest";

    // Add all the Nodes to the tab.
    for (const node of this.workspace.nodes) {
      tab.addNode(node);
    }

    // Make the tab look like Pinterest.
    tab.style = {
      background: "#fff",
      color: "#333",
      border: "1px solid #ccc"
    };
  }
}
