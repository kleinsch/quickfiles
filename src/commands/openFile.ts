import { commands, window } from "vscode";
import { openFileInEditor } from "../utils/openFileInEditor";
import { substituteVariables } from "../utils/variables";

export function openFile() {
  return commands.registerCommand(
    "quickfiles.openFile",
    async (filePath: string) => {
      if (!filePath) {
        const dialogPath = await window.showInputBox({
          prompt: `File path to open?`,
          value: "",
        });

        if (dialogPath) {
          filePath = dialogPath;
        } else {
          window.showErrorMessage("No file to open");
          return;
        }
      }

      openFileInEditor(substituteVariables(filePath));
    }
  );
}
